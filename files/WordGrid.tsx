
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import useWordSelection from './useWordSelection';
// import Cell from './Cell';



// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width - 60) / numColumns;

// const WordGrid = ({ grid, handlePress, foundWordsData }: { grid: any[]; handlePress: (word: string) => void; foundWordsData: any }) => {

//   const [selectedWord, setSelectedWord] = useState<any>('');
//   const [selectedWordHighlightColors, setSelectedWordHighlightColors] = useState<{ [word: string]: string }>({});
//   const { panHandlers, selectedTiles } = useWordSelection({
//     gridSize: numColumns,
//     grid,
//     handlePress: (word: string) => {
//       setSelectedWord(word);
//       handlePress(word);
//     },
//   });


//   return (
//     <View {...panHandlers} style={styles.grid}>
//      {grid.map((row: any, rowIndex: any) => (
//         <View key={`row-${rowIndex}`} style={styles.row}>
//           {row.map((letter: any, colIndex: any) => {
//             const isSelected = selectedTiles.includes(`${rowIndex}-${colIndex}`);
//             const isHighlighted = foundWordsData.some((wordData: any) =>
//             wordData.positions.includes(`${rowIndex}-${colIndex}`)
//           );
          
            
//             return (
//               <Cell
//                 key={colIndex}
//                 letter={letter}
//                 isSelected={isSelected || isHighlighted}
//                 // Optionally pass color if you want to use different colors for different words
//               />
//             );
//           })}
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

interface WordGridProps {
  grid: any[];
  handleSelection: (selectedTiles: string[]) => void; // Add this line
  foundWordsData: any[]; // Adjust according to your type definitions
}

const { width } = Dimensions.get('window');
const numColumns = 10;
const tileSize = (width - 60) / numColumns;


const WordGrid = ({ grid, handleSelection, foundWordsData }: { grid: any[]; handleSelection: (selectedTiles: string[]) => void; foundWordsData: any }) => {

  const [selectedWord, setSelectedWord] = useState<any>('');
  const [selectedWordHighlightColors, setSelectedWordHighlightColors] = useState<{ [word: string]: string }>({});

  const { panHandlers, selectedTiles } = useWordSelection({
    gridSize: numColumns,
    grid,
    handleSelection,
  });


  return (
    <View {...panHandlers} style={styles.grid}>
      {grid.map((row: any, rowIndex: any) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((letter: any, colIndex: any) => {
            const tileId = `${rowIndex}-${colIndex}`;
            const isSelected = selectedTiles.includes(tileId);
            const isHighlighted = foundWordsData.some((wordData: { positions: string | string[]; }) => wordData.positions.includes(tileId));
            const color = isHighlighted ? foundWordsData.find((wordData: { positions: string | string[]; }) => wordData.positions.includes(tileId)).color : 'transparent';

            return (
              <Cell
                key={tileId}
                letter={letter}
                isSelected={isSelected || isHighlighted}
                color={isSelected ? 'red' : color} // Use a default color for selected tiles, and the specific color for highlighted ones
              />
            );
          })}
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



