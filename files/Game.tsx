// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
// import WordGrid from './WordGrid'; 
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width * 0.95 - 20) / numColumns;

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
//   const [foundWordPositions, setFoundWordPositions] = useState(new Set());
//   const visibleWordIndex = 0;
//   const navigation = useNavigation<any>();
  
//   const [grid, setGrid] = useState(() =>
//     Array.from({ length: numColumns }, () =>
//       Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
//     )
//   );

//   const handlePress = (word: string) => { 
//     if (levelData?.words?.includes(word) && !foundWords.includes(word)) {
//    const positions = [];
//       for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
//         const row = grid[rowIndex];
//         for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
//           const letter = row[letterIndex];
//           if (letter === word[0]) {
          
//             let found = true;
//             for (let i = 1; i < word.length; i++) {
//               if (grid[rowIndex + i]?.[letterIndex] !== word[i]) {
//                 found = false;
//                 break;
//               }
//             }
//             if (found) {
             
//               for (let i = 0; i < word.length; i++) {
//                 positions.push(`${rowIndex + i}-${letterIndex}`);
//               }
//             }
//           }
//         }
//       }
//       setFoundWordPositions(new Set([...foundWordPositions, ...positions]));
//       setFoundWords((prevWords) => [...prevWords, word]); 
//     }
//   };
  
  
//   const handleWordFound = (word: any, positions: any) => {
   
//     setFoundWords([...foundWords, word]);
//     setFoundWordPositions(new Set([...foundWordPositions, ...positions]));
//   };

//   return (
 
//     <ImageBackground source={require('../info/gamebg.png')} style={styles.container}>
//       <View style={styles.topButtons}>
//         <TouchableOpacity onPress={() => navigation.navigate('LevelsPage')}>
//           <Image source={require('../info/level.png')} style={styles.buttonIcon} />
//         </TouchableOpacity>
//       </View>
//       <WordGrid
//        grid={grid}
//        handlePress={handlePress}
//        foundWordPositions={foundWordPositions}
//       />

//         <View style={styles.wordList}>
//         {levelData?.words?.map((word: any, index: any) => (
//           <Text key={index} style={[styles.word, foundWords.includes(word) ? styles.wordFound : styles.wordHidden]}>
//             {word}
//           </Text>
//         ))}
//       </View>
    // <View style={styles.wordListContainer}>
    //     {levelData.words.map((word: string, index: number) => (
    //   <Text key={index} style={index === visibleWordIndex ? styles.visibleWord : styles.blurredWord}>
    //     {word}
    //     </Text>
    //   ))}
    // </View>
//     </ImageBackground>

//   );
// };

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     paddingTop: 20, 
//     paddingHorizontal: 20,
//     justifyContent: 'space-between',
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
//     paddingVertical: 20, 
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
//   },
  
//   buttonIcon: {
//     width: 40, 
//     height: 40, 
//     resizeMode: 'contain', 
//   },
//   firstButton: {
//     marginRight: 10, 
//   },
// });

// export default GameScreen;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
// import WordGrid from './WordGrid'; 
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width * 0.95 - 20) / numColumns;

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
//   const [foundWordPositions, setFoundWordPositions] = useState(new Set());
 
//   const navigation = useNavigation<any>();
  
//   const [grid, setGrid] = useState(() =>
//     Array.from({ length: numColumns }, () =>
//       Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
//     )
//   );

//   const handlePress = (word: string) => { 
//     if (levelData?.words?.includes(word) && !foundWords.includes(word)) {
//    const positions = [];
//       for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
//         const row = grid[rowIndex];
//         for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
//           const letter = row[letterIndex];
//           if (letter === word[0]) {
          
//             let found = true;
//             for (let i = 1; i < word.length; i++) {
//               if (grid[rowIndex + i]?.[letterIndex] !== word[i]) {
//                 found = false;
//                 break;
//               }
//             }
//             if (found) {
             
//               for (let i = 0; i < word.length; i++) {
//                 positions.push(`${rowIndex + i}-${letterIndex}`);
//               }
//             }
//           }
//         }
//       }
//       setFoundWordPositions(new Set([...foundWordPositions, ...positions]));
//       setFoundWords((prevWords) => [...prevWords, word]); 
//     }
//   };
  
  
//   const handleWordFound = (word: any, positions: any) => {
   
//     setFoundWords([...foundWords, word]);
//     setFoundWordPositions(new Set([...foundWordPositions, ...positions]));
//   };

//   return (
 
//     <ImageBackground source={require('../info/gamebg.png')} style={styles.container}>
//       <View style={styles.topButtons}>
//         <TouchableOpacity onPress={() => navigation.navigate('LevelsPage')}>
//           <Image source={require('../info/level.png')} style={styles.buttonIcon} />
//         </TouchableOpacity>
//       </View>
//       <WordGrid
//        grid={grid}
//        handlePress={handlePress}
//        foundWordPositions={foundWordPositions}
//       />
//    <View style={styles.wordListContainer}>
//      {levelData.words.map((word: string, index: number) => (
//       <View key={index} style={styles.wordBox}>
//       <Text style={styles.wordText}>
//         {word.toLowerCase()}
//       </Text>
//     </View>
//   ))}
// </View>
//     </ImageBackground>

//   );
// };

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'space-between',
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
//   },
  
//   buttonIcon: {
//     width: 40, 
//     height: 40, 
//     resizeMode: 'contain', 
//   },
//   firstButton: {
//     marginRight: 10, 
//   },
// });

// export default GameScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import WordGrid from './WordGrid'; 
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const { width } = Dimensions.get('window');
const numColumns = 10;
const tileSize = (width * 0.95 - 20) / numColumns;

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
  const [foundWordPositions, setFoundWordPositions] = useState(new Set());
 
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

  const [grid, setGrid] = useState(initializeGridWithWords);

  const handlePress = (word: string) => { 
    if (levelData?.words?.includes(word) && !foundWords.includes(word)) {
   const positions = [];
      for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        const row = grid[rowIndex];
        for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
          const letter = row[letterIndex];
          if (letter === word[0]) {
          
            let found = true;
            for (let i = 1; i < word.length; i++) {
              if (grid[rowIndex + i]?.[letterIndex] !== word[i]) {
                found = false;
                break;
              }
            }
            if (found) {
              for (let i = 0; i < word.length; i++) {
                positions.push(`${rowIndex + i}-${letterIndex}`);
              }
            }
          }
        }
      }
      setFoundWordPositions(new Set([...foundWordPositions, ...positions]));
      setFoundWords((prevWords) => [...prevWords, word]); 
    }
  };

  return (
    <ImageBackground source={require('../info/gamebg.png')} style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('LevelsPage')}>
          <Image source={require('../info/score.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.counterContainer}>
     <Text style={styles.counterText}>00</Text>
    </View>
     
      <WordGrid
       grid={grid}
       handlePress={handlePress}
       foundWordPositions={foundWordPositions}
      />
   <View style={styles.wordListContainer}>
     {levelData.words.map((word: string, index: number) => (
      <View key={index} style={styles.wordBox}>
      <Text style={styles.wordText}>
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


