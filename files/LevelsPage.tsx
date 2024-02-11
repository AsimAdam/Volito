
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const levelButtonBg = require('../info/button.png');
const starIcon = require('../info/star.png');
const lockIcon = require('../info/lock.png');

const levelsData = [
  { level: 1, words: ['CAT', 'DOG', 'BIRD', 'MOUSE', 'CAR', 'PEN', 'ROOM', 'MAN'], complexity: 'Easy' },
  { level: 2, words: ['LION', 'TIGER', 'BEAR'], complexity: 'Medium' },
  { level: 3, words: ['ELEPHANT', 'GIRAFFE', 'HIPPOPOTAMUS'], complexity: 'Hard' },
  { level: 4, words: ['CROCODILE', 'Rhinoceros', 'Hippopotamus'], complexity: 'Harder' },
  { level: 5, words: ['CHIMPANZEE', 'ORANGUTAN', 'GORILLA'], complexity: 'Hardest' },
];

interface Level {
    level: number;
    words: string[];
    complexity: string;
  }
  
  type LevelRows = Level[][];
  
const LevelsPage = () => {
  const navigation = useNavigation<any>();
  const [unlockedLevels, setUnlockedLevels] = useState<any>(3);
  


const handleLevelPress = (levelData: Level) => {
    console.log('Navigating to GameScreen with levelData:', levelData);
    navigation.navigate('GameScreen', { levelData });
  };
  

  const renderStars = (levelIndex: any) => {
    if (levelIndex < 3) {
      return (
        <View style={styles.starsContainer}>
          {[...Array(3)].map((_, index) => (
            <Image key={index} source={starIcon} style={index === 1 ? styles.bigStar : styles.star} />
          ))}
        </View>
      );
    }
    return null;
  };

const renderLevelButton = (level: any) => {
 
    const locked = level.level >= 4;
  
    return (
      <TouchableOpacity
        key={level.level}
        style={styles.levelButton}
        onPress={() => handleLevelPress(level)}
        disabled={locked}
      >
        <ImageBackground source={levelButtonBg} style={styles.levelButtonBackground}>
     
          {level.level < 4 && renderStars(level.level - 1)}
          {locked ? (
           <Image source={lockIcon} style={styles.lockIcon} />
          ) : (
            <Text style={styles.levelText}>{level.level}</Text>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  
   const levelRows: LevelRows = levelsData.reduce((rows: LevelRows, level: Level, index: number) => {
        const rowIndex = Math.floor(index / 3);
        if (!rows[rowIndex]) {
          rows[rowIndex] = [];
        }
        rows[rowIndex].push(level);
        return rows;
      }, []);
      
  return (
    <ImageBackground source={require('../info/levelbg.png')} style={styles.container}>
        <Image source={require('../info/Levels.png')} style={{ alignSelf: 'center', width: 150, height: 150, resizeMode: 'contain', marginBottom: 70 }}/>
      {levelRows.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.levelRow}>
          {row.map(renderLevelButton)}
        </View>
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: -30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lockedLevelText: {
    opacity: 0, 
  },
  
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  levelButton: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  levelButtonBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starsContainer: {
    position: 'absolute',
    top: -30,
    flexDirection: 'row',
  },
  star: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  bigStar: {
    width: 30,
    height: 30,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  lockIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
});

export default LevelsPage;