// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import useWordSelection from './useWordSelection';
// import Cell from './Cell';

// const wordColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A3', '#33A3FF', '#A3FF33', '#FF3333', '#33FF33', '#3333FF', '#FFFF33'];


// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width - 60) / numColumns;

// const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {
  
//   const [selectedWord, setSelectedWord] = useState('');
//   const { panHandlers, selectedTiles } = useWordSelection({
//     gridSize: numColumns,
//     grid,
//     handlePress: (word: string) => {
//       setSelectedWord(word);
//       handlePress(word);
//     },
//   });

//   const renderLetter = (letter: any, rowIndex: any, colIndex: any) => {
//     const position = `${rowIndex}-${colIndex}`;
//     const isSelected = selectedTiles.includes(position);

//     console.log(`Letter at ${position} is selected: ${isSelected}`);

//     const letterStyles: any[] = [styles.letter];
//     if (isSelected) {
//       letterStyles.push(styles.selectedLetter);
//     }

//     return (
//       <Text key={position} style={letterStyles}>
//         {letter}
//       </Text>
//     );
//   };

//   return (
//     <View {...panHandlers} style={styles.grid}>
//       {grid.map((row: any, rowIndex: any) => (
//         <View key={`row-${rowIndex}`} style={styles.row}>
//           {row.map((letter: any, colIndex: any) => (
//             <Cell
//               key={colIndex}
//               letter={letter}
//               isSelected={selectedTiles.includes(`${rowIndex}-${colIndex}`)}
//             />
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   grid: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: '#ffffff',
//     borderRadius: 20,
//     padding: 5,
//     marginVertical: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   cell: {
//     width: tileSize,
//     height: tileSize,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 1,
//   },
//   letter: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   foundLetter: {
//     fontSize: tileSize * 0.4,
//     color: 'green',
//     fontWeight: 'bold',
//   },
//   selectedLetter: {
//     color: 'red',
//     backgroundColor: 'red',
//   },
// });

// export default WordGrid;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import useWordSelection from './useWordSelection';
// import Cell from './Cell';

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width - 60) / numColumns;

// const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {
//   const [selectedWord, setSelectedWord] = useState('');
//   const { panHandlers, selectedTiles } = useWordSelection({
//     gridSize: numColumns,
//     grid,
//     handlePress: (word: string) => {
//       setSelectedWord(word);
//       handlePress(word);
//     },
//   });

 
//   const [selectedWordColors, setSelectedWordColors] = useState<{ [word: string]: string }>({});
//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const renderLetter = (letter: any, rowIndex: any, colIndex: any) => {
//     const position = `${rowIndex}-${colIndex}`;
//     const isSelected = selectedTiles.includes(position);

//     const letterStyles: any[] = [styles.letter];
//     if (isSelected) {
     
//       const word = grid[rowIndex][colIndex].toLowerCase();
//       let color = selectedWordColors[word];
//       if (!color) {
//         color = getRandomColor();
//         setSelectedWordColors((prevColors) => ({
//           ...prevColors,
//           [word]: color,
//         }));
//       }

//       letterStyles.push({ color });
//     }

//     return (
//       <Text key={position} style={letterStyles}>
//         {letter}
//       </Text>
//     );
//   };

//   return (
//     <View {...panHandlers} style={styles.grid}>
//       {grid.map((row: any, rowIndex: any) => (
//         <View key={`row-${rowIndex}`} style={styles.row}>
//           {row.map((letter: any, colIndex: any) => (
//             <Cell
//               key={colIndex}
//               letter={letter}
//               isSelected={selectedTiles.includes(`${rowIndex}-${colIndex}`)}
//             />
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   grid: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: '#ffffff',
//     borderRadius: 20,
//     padding: 5,
//     marginVertical: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   cell: {
//     width: tileSize,
//     height: tileSize,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 1,
//   },
//   letter: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   foundLetter: {
//     fontSize: tileSize * 0.4,
//     color: 'green',
//     fontWeight: 'bold',
//   },
// });

// export default WordGrid;


import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import useWordSelection from './useWordSelection';
import Cell from './Cell';

const { width } = Dimensions.get('window');
const numColumns = 10;
const tileSize = (width - 60) / numColumns;

const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {

  const [selectedWord, setSelectedWord] = useState('');
  const [selectedWordHighlightColors, setSelectedWordHighlightColors] = useState<{ [word: string]: string }>({});
  const { panHandlers, selectedTiles } = useWordSelection({
    gridSize: numColumns,
    grid,
    handlePress: (word: string) => {
      setSelectedWord(word);
      handlePress(word);
    },
  });


  return (
    <View {...panHandlers} style={styles.grid}>
      {grid.map((row: any, rowIndex: any) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((letter: any, colIndex: any) => (
            <Cell
              key={colIndex}
              letter={letter}
              isSelected={selectedTiles.includes(`${rowIndex}-${colIndex}`)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 5,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: tileSize,
    height: tileSize,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  letter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  foundLetter: {
    fontSize: tileSize * 0.4,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default WordGrid;
