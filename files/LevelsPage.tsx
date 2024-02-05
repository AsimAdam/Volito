// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const levelsData = [
//   { level: 1, words: ['CAT', 'DOG', 'BIRD'], complexity: 'Easy' },
//   { level: 2, words: ['LION', 'TIGER', 'BEAR'], complexity: 'Medium' },
//   { level: 3, words: ['ELEPHANT', 'GIRAFFE', 'HIPPOPOTAMUS'], complexity: 'Hard' },
//   { level: 4, words: ['CROCODILE', 'Rhinoceros', 'Hippopotamus'], complexity: 'Harder' },
//   { level: 5, words: ['CHIMPANZEE', 'ORANGUTAN', 'GORILLA'], complexity: 'Hardest' },
// ];

// const LevelsPage = () => {
//   const navigation = useNavigation<any>();
//   const [points, setPoints] = useState(0);
//   const [unlockedLevels, setUnlockedLevels] = useState(2);

//   const handleLevelPress = (levelIndex: number) => {
//     const level = levelsData[levelIndex];
//     navigation.navigate('GameScreen', { levelData: level });
//   };

//   return (
//     <ImageBackground
//     source={require('../info/levelbg.png')} 
//     style={styles.imageBackground}
//     resizeMode="cover"
//     >
//     <View style={styles.container}>
//       <View style={styles.pointsContainer}>
//         <Text style={styles.pointsText}>Points: {points}</Text>
//       </View>
//       {levelsData.map((level, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[styles.levelButton, index + 1 > unlockedLevels ? styles.lockedLevel : null]}
//           onPress={() => handleLevelPress(index)}
//           disabled={index + 1 > unlockedLevels}
//         >
//           {index + 1 > unlockedLevels && (
//             <Image source={require('../info/lock.png')} style={styles.lockIcon} />
//           )}
//           <Text style={styles.levelText}>Level {level.level}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   imageBackground: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//       },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   pointsContainer: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: '#4CAF50',
//     borderRadius: 15,
//     padding: 8,
//   },
//   pointsText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   levelButton: {
//     width: '80%',
//     padding: 15,
//     marginVertical: 10,
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   lockedLevel: {
//     backgroundColor: '#9E9E9E',
//   },
//   lockIcon: {
//     marginRight: 10,
//     width: 25,
//     height: 25,
//   },
//   levelText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//   },
// });

// export default LevelsPage;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const levelButtonBg = require('../info/button.png');
// const starIcon = require('../info/star.png');
// const lockIcon = require('../info/lock.png');

// const levelsData = [
//   { level: 1, words: ['CAT', 'DOG', 'BIRD'], complexity: 'Easy' },
//   { level: 2, words: ['LION', 'TIGER', 'BEAR'], complexity: 'Medium' },
//   { level: 3, words: ['ELEPHANT', 'GIRAFFE', 'HIPPOPOTAMUS'], complexity: 'Hard' },
//   { level: 4, words: ['CROCODILE', 'Rhinoceros', 'Hippopotamus'], complexity: 'Harder' },
//   { level: 5, words: ['CHIMPANZEE', 'ORANGUTAN', 'GORILLA'], complexity: 'Hardest' },
// ];

// const LevelsPage = () => {
//   const navigation = useNavigation<any>();
//   const [unlockedLevels, setUnlockedLevels] = useState<any>(2);

//   const handleLevelPress = (levelData: any) => {
//     navigation.navigate('GameScreen', { levelData });
//   };

 
//   const renderStars = (levelIndex: any) => {
//     if (levelIndex < unlockedLevels) {
//       return (
//         <View style={styles.starsContainer}>
//           {[...Array(3)].map((_, index) => (
//             <Image key={index} source={starIcon} style={index === 1 ? styles.bigStar : styles.star} />
//           ))}
//         </View>
//       );
//     }
//     return null;
//   };

//   const renderLevelButton = (level: any, index: any) => {
//     const locked = index >= unlockedLevels;
//     return (
//       <TouchableOpacity
//         key={level.level}
//         style={styles.levelButton}
//         onPress={() => handleLevelPress(level)}
//         disabled={locked}
//       >
//         <ImageBackground source={levelButtonBg} style={styles.levelButtonBackground}>
//           {renderStars(index)}
//           {!locked ? (
//             <Text style={styles.levelText}>{level.level}</Text>
//           ) : (
//             <Image source={lockIcon} style={styles.lockIcon} />
//           )}
//         </ImageBackground>
//       </TouchableOpacity>
//     );
//   };

 
//   const levelRows = levelsData.reduce((rows, level, index) => {
//     const rowIndex = Math.floor(index / 3);
//     if (!rows[rowIndex]) {
//       rows[rowIndex] = [];
//     }
//     rows[rowIndex].push(level);
//     return rows;
//   }, []);

//   return (
//     <ImageBackground source={require('../info/levelbg.png')} style={styles.container}>
//       {levelRows.map((row, rowIndex) => (
//         <View key={`row-${rowIndex}`} style={styles.levelRow}>
//           {row.map(renderLevelButton)}
//         </View>
//       ))}
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     justifyContent: 'center',
//   },
//   levelRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginBottom: 20,
//   },
//   levelButton: {
//     width: 100,
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   levelButtonBackground: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   starsContainer: {
//     position: 'absolute',
//     top: -30,
//     flexDirection: 'row',
//   },
//   star: {
//     width: 20,
//     height: 20,
//     marginHorizontal: 2,
//   },
//   bigStar: {
//     width: 30,
//     height: 30,
//   },
//   levelText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   lockIcon: {
//     width: 30,
//     height: 30,
//   },
// });

// export default LevelsPage;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const levelButtonBg = require('../info/button.png');
// const starIcon = require('../info/star.png');
// const lockIcon = require('../info/lock.png');

// const levelsData = [
//   { level: 1, words: ['CAT', 'DOG', 'BIRD', 'MOUSE', 'CAR', 'PEN', 'ROOM', 'MAN'], complexity: 'Easy' },
//   { level: 2, words: ['LION', 'TIGER', 'BEAR'], complexity: 'Medium' },
//   { level: 3, words: ['ELEPHANT', 'GIRAFFE', 'HIPPOPOTAMUS'], complexity: 'Hard' },
//   { level: 4, words: ['CROCODILE', 'Rhinoceros', 'Hippopotamus'], complexity: 'Harder' },
//   { level: 5, words: ['CHIMPANZEE', 'ORANGUTAN', 'GORILLA'], complexity: 'Hardest' },
// ];

// interface Level {
//     level: number;
//     words: string[];
//     complexity: string;
//   }
  
//   type LevelRows = Level[][];
  
// const LevelsPage = () => {
//   const navigation = useNavigation<any>();
//   const [unlockedLevels, setUnlockedLevels] = useState<any>(3);
  


// const handleLevelPress = (levelData: Level) => {
//     console.log('Navigating to GameScreen with levelData:', levelData);
//     navigation.navigate('GameScreen', { levelData });
//   };
  

//   const renderStars = (levelIndex: any) => {
//     if (levelIndex < 3) { 
//       return (
//         <View style={styles.starsContainer}>
//           {[...Array(3)].map((_, index) => (
//             <Image key={index} source={starIcon} style={index === 1 ? styles.bigStar : styles.star} />
//           ))}
//         </View>
//       );
//     }
//     return null;
//   };
  
//     const renderLevelButton = (level: any, index: any) => {
//         const locked = index >= unlockedLevels;
      
//         return (
//           <TouchableOpacity
//             key={level.level}
//             style={styles.levelButton}
//             onPress={() => handleLevelPress(level)}
//             disabled={locked}
//           >
//             <ImageBackground source={levelButtonBg} style={styles.levelButtonBackground}>
//               {renderStars(index)}
//               {!locked ? (
//                 <Text style={styles.levelText}>{level.level}</Text>
//               ) : (
//                 <Image source={lockIcon} style={styles.lockIcon} />
//               )}
//             </ImageBackground>
//           </TouchableOpacity>
//         );
//       };
      
//    const levelRows: LevelRows = levelsData.reduce((rows: LevelRows, level: Level, index: number) => {
//         const rowIndex = Math.floor(index / 3);
//         if (!rows[rowIndex]) {
//           rows[rowIndex] = [];
//         }
//         rows[rowIndex].push(level);
//         return rows;
//       }, []);
      

//   return (
//     <ImageBackground source={require('../info/levelbg.png')} style={styles.container}>
//       {levelRows.map((row, rowIndex) => (
//         <View key={`row-${rowIndex}`} style={styles.levelRow}>
//           {row.map(renderLevelButton)}
//         </View>
//       ))}
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     justifyContent: 'center',
//   },
//   lockedLevelText: {
//     opacity: 0, 
//   },
  
//   levelRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginBottom: 20,
//   },
//   levelButton: {
//     width: 100,
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   levelButtonBackground: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   starsContainer: {
//     position: 'absolute',
//     top: -30,
//     flexDirection: 'row',
//   },
//   star: {
//     width: 20,
//     height: 20,
//     marginHorizontal: 2,
//   },
//   bigStar: {
//     width: 30,
//     height: 30,
//   },
//   levelText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   lockIcon: {
//     width: 30,
//     height: 30,
//   },
// });

// export default LevelsPage;





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