
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
// import WordGrid from './WordGrid'; 
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface FoundWordData {
//   word: string;
//   positions: any[];
//   color: string;
// }



// const highlightColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A3', '#33A3FF', '#A3FF33', '#FF3333', '#33FF33', '#3333FF', '#FFFF33'];


// const { width } = Dimensions.get('window');
// const numColumns = 10;


// interface LevelData {
//   words: string[];
// }
// type RouteParams = {
//   levelData: LevelData;
// };

// const GameScreen = () => {
//   const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
//   const levelData = route.params?.levelData || { words: [] }; 
//   const [foundWords, setFoundWords] = useState<string[]>([]);
//   const [foundWordsData, setFoundWordsData] = useState<FoundWordData[]>([]);
//   const [selectedWords, setSelectedWords] = useState<string[]>([]);
//   const [score, setScore] = useState<string>('00');
//   const [highlightColorIndex, setHighlightColorIndex] = useState<number>(
//     Math.floor(Math.random() * highlightColors.length)
//   );
  

//   const navigation = useNavigation<any>();
  
//   const initializeGridWithWords = () => {
//     let tempGrid = Array.from({ length: numColumns }, () =>
//       Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
//     );

//     levelData.words.forEach((word, index) => {
//       const maxLength = Math.min(word.length, numColumns);
//       for (let i = 0; i < maxLength; i++) {
//         tempGrid[index][i] = word[i].toUpperCase();
//       }
//     });
//     return tempGrid;
//   };
//   const saveGameData = async ({ foundWords, score }: { foundWords: string[]; score: string }) => {
//     const gameData = {
//       foundWordsData,
//       foundWords,
//       score,
//     };
  
//     try {
//       await AsyncStorage.setItem('gameData', JSON.stringify(gameData));
//       console.log('Game data saved successfully');
//     } catch (error) {
//       console.error('Failed to save game data:', error);
//     }
//   };
  
  
  
//   const loadGameData = async () => {
//     try {
//       const savedGameData = await AsyncStorage.getItem('gameData');
//       if (savedGameData !== null) {
//         const parsedData: any = JSON.parse(savedGameData); 
//         setFoundWordsData(parsedData.foundWordsData || []);
//         setScore(parsedData.score || '00');
  
//         const foundWords = parsedData.foundWordsData ? parsedData.foundWordsData.map((item: any) => item.word) : []; 
//         setFoundWords(foundWords);
//       } else {
//         console.log('No saved game data found');
//       }
//     } catch (error) {
//       console.error('Error loading game data:', error);
//     }
//   };
  
  
  

//   useEffect(() => {
//     loadGameData();
//   }, []);

//   useEffect(() => {
//     if (foundWords.length > 0 || score !== '00') {
//       saveGameData({ foundWords, score });
//     }
//   }, [foundWords, score]);
  
  

  
//   const [grid, setGrid] = useState(initializeGridWithWords);

//   const handlePress = async (word: string) => {
    
//     if (levelData.words.includes(word) && !foundWords.includes(word)) {
//       let positions: any[] = [];

//       grid.forEach((row, rowIndex) => {
//         row.forEach((cell, cellIndex) => {
          
//           if (cell === word[0]) {
           
//             for (let i = 0; i < word.length; i++) {
//               positions.push(`${rowIndex}-${cellIndex + i}`); 
//             }
//           }
//         });
//       });
  
//       if (positions.length > 0) {
      
//         const newFoundWordsData = [...foundWordsData, {
//           word,
//           positions,
//           color: highlightColors[highlightColorIndex] 
//         }];
//         setFoundWordsData(newFoundWordsData);
//         setFoundWords([...foundWords, word]); 
       
//         try {
//           const gameData = {
//             foundWordsData: newFoundWordsData,
//             score, 
//           };
//           await AsyncStorage.setItem('gameData', JSON.stringify(gameData));
//           console.log('Game data saved successfully');
//         } catch (error) {
//           console.error('Failed to save game data:', error);
//         }
//       }
//     }
//   };
  
  

//   return (
//     <ImageBackground source={require('../info/gamebg.png')} style={styles.container}>
//       <View style={styles.topButtons}>
//       <TouchableOpacity onPress={() => navigation.navigate('Score', { score: score })}>
//           <Image source={require('../info/score.png')} style={styles.buttonIcon} />
//         </TouchableOpacity>

//       </View>
//       <WordGrid
//        grid={grid}
//        handlePress={handlePress}
//        foundWordsData={foundWordsData}
//       />
//       <View style={styles.wordListContainer}>
//         {levelData.words.map((word: string, index: number) => (
//           <View key={index} style={styles.wordBox}>
//             <Text
//               style={[
//                 styles.wordText,
//                 {
//                   color: foundWords.includes(word) ? 'black' : 'grey',
//                 },
//               ]}
//             >
//               {word.toLowerCase()}
//             </Text>
//           </View>
//         ))}
//       </View>

//     </ImageBackground>

//   );
// };

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'flex-start', 
//   },
//   wordList: {
//     padding: 20,
//     justifyContent: 'flex-end',
//   },
//   word: {
//     fontSize: 20,
//     marginVertical: 5,
//   },
//   wordFound: {
//     color: 'green',
//   },
//   wordHidden: {
//     color: 'transparent',
//   },
//   wordListContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     backgroundColor: '#FFF',
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     elevation: 5, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25, 
//     shadowRadius: 3.84,
//   },
//   wordBox: {
//     backgroundColor: 'transparent',
//     borderRadius: 10,
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     margin: 5,
//   },
//   wordText: {
//     fontSize: 18,
//     color: '#333',
//     fontWeight: 'bold',
//   },
  
//   visibleWord: {
//     fontSize: 20,
//     margin: 5,
//   },
  
//   blurredWord: {
//     fontSize: 20,
//     marginHorizontal: 5,
//     color: 'transparent',
//     textShadowColor: 'rgba(0, 0, 0, 0.9)', 
//     textShadowOffset: { width: 0, height: 0 },
//     textShadowRadius: 10,
//   },
//   topButtons: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginBottom: 20,  
//     marginTop: 10,
//   },
//   buttonIcon: {
//     width: 70, 
//     height: 70, 
//     resizeMode: 'contain', 
//   },
//   firstButton: {
//     marginRight: 10, 
//   },
//   counterContainer: {
//     alignSelf: 'center',
//     marginVertical: -10,
//   },
//   counterText: {
//     fontSize: 55,
//     fontWeight: 'bold',
//     color: 'blue', 
//     textShadowColor: 'white',
//     textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 0, 
//   },
// });

// export default GameScreen;




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
      Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );

    levelData.words.forEach((word, index) => {
      const maxLength = Math.min(word.length, numColumns);
      for (let i = 0; i < maxLength; i++) {
        tempGrid[index][i] = word[i].toUpperCase();
      }
    });
    return tempGrid;
  };


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

    if (levelData.words.includes(selectedWord.toUpperCase())) {
      const newFoundWordData = {
        word: selectedWord,
        positions: selectedTiles,
        color: highlightColors[highlightColorIndex], // Use the current highlight color index
      };
      setFoundWordsData(prev => [...prev, newFoundWordData]);
      setFoundWords(prev => [...prev, selectedWord]);

      // Call saveGameData to save the state including the new found word
      saveGameData();
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
        handleSelection={handleTileSelection} // Make sure this is correctly named
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
