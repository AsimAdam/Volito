import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import WordGrid from './WordGrid'; 
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FoundWordData {
  word: string;
  positions: any[];
  color: string;
}



const highlightColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A3', '#33A3FF', '#A3FF33', '#FF3333', '#33FF33', '#3333FF', '#FFFF33'];


const { width } = Dimensions.get('window');
const numColumns = 10;


interface LevelData {
  words: string[];
}
type RouteParams = {
  levelData: LevelData;
};

const GameScreen = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const levelData = route.params?.levelData || { words: [] }; 
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [foundWordsData, setFoundWordsData] = useState<FoundWordData[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [score, setScore] = useState<string>('00');
  const [highlightColorIndex, setHighlightColorIndex] = useState<number>(
    Math.floor(Math.random() * highlightColors.length)
  );
  

  const navigation = useNavigation<any>();
  
  const initializeGridWithWords = () => {
    let tempGrid = Array.from({ length: numColumns }, () =>
      Array.from({ length: numColumns }, () => '')
    );
  
    const placeWord = (word: any, orientation: any, row: any, col: any) => {
      for (let i = 0; i < word.length; i++) {
        if (orientation === 'horizontal') {
          tempGrid[row][col + i] = word[i];
        } else {
          tempGrid[row + i][col] = word[i];
        }
      }
    };
  
    const checkSpace = (word: any, orientation: any, row: any, col: any) => {
      if (orientation === 'horizontal') {
        if (col + word.length > numColumns) return false;
        for (let i = 0; i < word.length; i++) {
          if (tempGrid[row][col + i] !== '') return false;
        }
      } else {
        if (row + word.length > numColumns) return false;
        for (let i = 0; i < word.length; i++) {
          if (tempGrid[row + i][col] !== '') return false;
        }
      }
      return true;
    };
  
    levelData.words.forEach((word) => {
      let placed = false;
      let attempts = 0;
  
      while (!placed && attempts < 50) {
        const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * numColumns);
        const col = Math.floor(Math.random() * numColumns);
  
        if (checkSpace(word.toUpperCase(), orientation, row, col)) {
          placeWord(word.toUpperCase(), orientation, row, col);
          placed = true;
        }
  
        attempts++;
      }
    });
  
    for (let row = 0; row < numColumns; row++) {
      for (let col = 0; col < numColumns; col++) {
        if (tempGrid[row][col] === '') {
          tempGrid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }
  
    return tempGrid;
  };
  


  useEffect(() => {
  
    setFoundWords([]);
    setFoundWordsData([]);

    
  }, [levelData]);


  const saveGameData = async ({ foundWords, score }: { foundWords: string[]; score: string }) => {
    const gameData = {
      foundWordsData,
      foundWords,
      score,
    };
  
    try {
      await AsyncStorage.setItem('gameData', JSON.stringify(gameData));
      console.log('Game data saved successfully');
    } catch (error) {
      console.error('Failed to save game data:', error);
    }
  };
  
  
  const handleTileSelection = (selectedTiles: string[]) => {
    const selectedWord = selectedTiles.map(tile => {
      const [row, col] = tile.split('-').map(Number);
      return grid[row][col];
    }).join('');
  
    if (levelData.words.includes(selectedWord.toUpperCase()) && !foundWords.includes(selectedWord)) {
  
      const newColorIndex = Math.floor(Math.random() * highlightColors.length);
      const currentColor = highlightColors[newColorIndex];
  
      console.log(`Highlighting '${selectedWord}' with color: ${currentColor}`);
  
      const newFoundWordData = {
        word: selectedWord,
        positions: selectedTiles,
        color: currentColor,
      };
  
      setFoundWordsData(prev => [...prev, newFoundWordData]);
      setFoundWords(prev => [...prev, selectedWord]);
  
      setScore(prevScore => {
        const newScore = parseInt(prevScore) + 10;
        return newScore.toString().padStart(2, '0');
      });
  
      setHighlightColorIndex(newColorIndex);
  
      saveGameData({ foundWords: [...foundWords, selectedWord], score: score });
    }
  };
  

  
  const loadGameData = async () => {
    try {
      const savedGameData = await AsyncStorage.getItem('gameData');
      if (savedGameData !== null) {
        const parsedData: any = JSON.parse(savedGameData); 
        setFoundWordsData(parsedData.foundWordsData || []);
        setScore(parsedData.score || '00');
  
        const foundWords = parsedData.foundWordsData ? parsedData.foundWordsData.map((item: any) => item.word) : []; 
        setFoundWords(foundWords);
      } else {
        console.log('No saved game data found');
      }
    } catch (error) {
      console.error('Error loading game data:', error);
    }
  };
  
  
  

  useEffect(() => {
    loadGameData();
  }, []);

  useEffect(() => {
    if (foundWords.length > 0 || score !== '00') {
      saveGameData({ foundWords, score });
    }
  }, [foundWords, score]);
  
  

  
  const [grid, setGrid] = useState(initializeGridWithWords);

  const handlePress = async (word: string) => {
    
    if (levelData.words.includes(word) && !foundWords.includes(word)) {
      let positions: any[] = [];

      grid.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          
          if (cell === word[0]) {
           
            for (let i = 0; i < word.length; i++) {
              positions.push(`${rowIndex}-${cellIndex + i}`); 
            }
          }
        });
      });
  
      if (positions.length > 0) {
      
        const newFoundWordsData = [...foundWordsData, {
          word,
          positions,
          color: highlightColors[highlightColorIndex] 
        }];
        setFoundWordsData(newFoundWordsData);
        setFoundWords([...foundWords, word]); 
       
        try {
          const gameData = {
            foundWordsData: newFoundWordsData,
            score, 
          };
          await AsyncStorage.setItem('gameData', JSON.stringify(gameData));
          console.log('Game data saved successfully');
        } catch (error) {
          console.error('Failed to save game data:', error);
        }
      }
    }
  };
  
  

  return (
    <ImageBackground source={require('../info/gamebg.png')} style={styles.container}>
      <View style={styles.topButtons}>
      <TouchableOpacity onPress={() => navigation.navigate('Score', { score: score })}> 
          <Image source={require('../info/score.png')} style={styles.buttonIcon} />
        </TouchableOpacity>

      </View>
      <WordGrid
        grid={grid}
        handleSelection={handleTileSelection} 
        foundWordsData={foundWordsData}
      />

      <View style={styles.wordListContainer}>
        {levelData.words.map((word: string, index: number) => (
          <View key={index} style={styles.wordBox}>
            <Text
              style={[
                styles.wordText,
                {
                  color: foundWords.includes(word) ? 'black' : 'grey',
                },
              ]}
            >
              {word.toLowerCase()}
            </Text>
          </View>
        ))}
      </View>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start', 
  },
  wordList: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  word: {
    fontSize: 20,
    marginVertical: 5,
  },
  wordFound: {
    color: 'green',
  },
  wordHidden: {
    color: 'transparent',
  },
  wordListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
  },
  wordBox: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  wordText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  
  visibleWord: {
    fontSize: 20,
    margin: 5,
  },
  
  blurredWord: {
    fontSize: 20,
    marginHorizontal: 5,
    color: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.9)', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,  
    marginTop: 10,
  },
  buttonIcon: {
    width: 70, 
    height: 70, 
    resizeMode: 'contain', 
  },
  firstButton: {
    marginRight: 10, 
  },
  counterContainer: {
    alignSelf: 'center',
    marginVertical: -10,
  },
  counterText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'blue', 
    textShadowColor: 'white',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0, 
  },
});

export default GameScreen;




