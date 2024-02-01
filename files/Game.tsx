// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

// const { width } = Dimensions.get('window');
// const numColumns = 10; 
// const tileSize = (width * 0.95 - 20) / numColumns;

// const GameScreen = () => {
//   const [words, setWords] = useState<string[]>(['HELLO', 'WORLD', 'REACT', 'NATIVE', 'GAME']);
//   const [foundWords, setFoundWords] = useState<string[]>([]);
//   const visibleWordIndex = 0;
  
//   const [grid, setGrid] = useState<any[][]>(Array.from({ length: numColumns }, () =>
//   Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
// ));

 
// const handlePress = (word: any) => { 
//   if (words.includes(word) && !foundWords.includes(word)) {
//     setFoundWords([...foundWords, word]); 
//     // Alert.alert('Word Found', word);
//   }
// };

//   return (
//     <View style={styles.container}>
//    <View style={styles.topButtons}>
//         <TouchableOpacity onPress={() => {/* Handle mode change */}} style={styles.firstButton}>
//           <Image source={require('../info/category.png')} style={styles.buttonIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {/* Handle category change */}}>
//           <Image source={require('../info/level.png')} style={styles.buttonIcon} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.grid}>
//         {grid.map((row, rowIndex) => (
//           <View key={rowIndex} style={styles.row}>
//             {row.map((letter, letterIndex) => (
//               <TouchableOpacity
//                 key={`${rowIndex}-${letterIndex}`}
//                 style={styles.cell}
//                 onPress={() => handlePress(letter)} 
//               >
//                 <Text style={styles.letter}>{letter}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         ))}
//       </View>
//       <View style={styles.wordList}>
//         {words.map((word, index) => (
//           <Text key={index} style={[styles.word, foundWords.includes(word) ? styles.wordFound : styles.wordHidden]}>{word}</Text>
//         ))}
//       </View>
//       <View style={styles.wordListContainer}>
//      {words.map((word, index) => (
//     <Text key={index} style={index === visibleWordIndex ? styles.visibleWord : styles.blurredWord}>
//       {word}
//     </Text>
//   ))}
// </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60,
//     padding: 20,
//   },
//   grid: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '95%',
//     alignSelf: 'center', 
//     paddingHorizontal: 10,
//   },  
//   row: {
//     flexDirection: 'row',
//   },
//   cell: {
//     width: tileSize,
//     height: tileSize,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   letter: {
//     fontSize: tileSize * 0.4,
//     color: 'grey'
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
//     position: 'absolute',
//     top: 10,
//     right: 30,
//     flexDirection: 'row',
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
// import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
// import WordGrid from './WordGrid'; 
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width * 0.95 - 20) / numColumns;

// const GameScreen = () => {
//   const [words, setWords] = useState<string[]>(['HELLO', 'WORLD', 'REACT', 'NATIVE', 'GAME']);
//   const [foundWords, setFoundWords] = useState<string[]>([]);
//   const visibleWordIndex = 0;
//   const navigation = useNavigation<any>();
  
//   const [grid, setGrid] = useState<any[][]>(Array.from({ length: numColumns }, () =>
//     Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
//   ));

//   const handlePress = (word: any) => { 
//     if (words.includes(word) && !foundWords.includes(word)) {
//       setFoundWords([...foundWords, word]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//         <View style={styles.topButtons}>
//         <TouchableOpacity onPress={() => navigation.navigate('LevelsPage')}>
//           <Image source={require('../info/level.png')} style={styles.buttonIcon} />
//         </TouchableOpacity>
//         </View>
//           <WordGrid grid={grid} handlePress={handlePress} />
//         <View style={styles.wordList}>
//           {words.map((word, index) => (
//           <Text key={index} style={[styles.word, foundWords.includes(word) ? styles.wordFound : styles.wordHidden]}>{word}</Text>
//       ))}
//         </View>
//           <View style={styles.wordListContainer}>
//         {words.map((word, index) => (
//       <Text key={index} style={index === visibleWordIndex ? styles.visibleWord : styles.blurredWord}>
//         {word}
//         </Text>
//       ))}
//     </View>
//       <View style={styles.wordListContainer}>
 
//       </View>
//     </View>
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

import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import WordGrid from './WordGrid'; 
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const numColumns = 10;
const tileSize = (width * 0.95 - 20) / numColumns;

const GameScreen = () => {
  const route = useRoute<any>();
  const levelData = route.params?.levelData;
  
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const visibleWordIndex = 0;
  const navigation = useNavigation<any>();
  
  const [grid, setGrid] = useState<any[][]>(Array.from({ length: numColumns }, () =>
    Array.from({ length: numColumns }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
  ));

  const handlePress = (word: any) => { 
    if (levelData.words.includes(word) && !foundWords.includes(word)) {
      setFoundWords([...foundWords, word]);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.topButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('LevelsPage')}>
          <Image source={require('../info/level.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
        </View>
          <WordGrid grid={grid} handlePress={handlePress} />
        <View style={styles.wordList}>
          {levelData.words.map((word: string, index: number) => (
          <Text key={index} style={[styles.word, foundWords.includes(word) ? styles.wordFound : styles.wordHidden]}>{word}</Text>
      ))}
        </View>
          <View style={styles.wordListContainer}>
        {levelData.words.map((word: string, index: number) => (
      <Text key={index} style={index === visibleWordIndex ? styles.visibleWord : styles.blurredWord}>
        {word}
        </Text>
      ))}
    </View>
      <View style={styles.wordListContainer}>
 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, 
    paddingHorizontal: 20,
    justifyContent: 'space-between',
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
    paddingVertical: 20, 
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
  },
  
  buttonIcon: {
    width: 40, 
    height: 40, 
    resizeMode: 'contain', 
  },
  firstButton: {
    marginRight: 10, 
  },
});

export default GameScreen;
