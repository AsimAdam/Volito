
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { Dimensions } from "react-native";

// const { width } = Dimensions.get('window');
// const numColumns = 10; 
// const tileSize = (width * 0.95 - 20) / numColumns;

// const WordGrid = ({ grid, handlePress }: any) => {
//   return (
//     <View style={styles.grid}>
//       {grid.map((row: any, rowIndex: any) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((letter: any, letterIndex: any) => (
//             <TouchableOpacity
//               key={`${rowIndex}-${letterIndex}`}
//               style={styles.cell}
//               onPress={() => handlePress(letter)}
//             >
//               <Text style={styles.letter}>{letter}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
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
//     color: 'grey',
//   },
// });

// export default WordGrid;



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');
// const numColumns = 10; 
// const tileSize = (width * 0.95 - 20) / numColumns; 

// const WordGrid = ({ grid, handlePress }: any) => {
//   return (
//     <View style={styles.grid}>
//       {grid.map((row: any, rowIndex: any) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((letter: any, letterIndex: any) => (
//             <TouchableOpacity
//               key={`${rowIndex}-${letterIndex}`}
//               style={styles.cell}
//               onPress={() => handlePress(letter)}
//             >
//               <Text style={styles.letter}>{letter}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
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
//     color: 'grey',
//   },
// });

// export default WordGrid;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const { width } = Dimensions.get('window');
const numColumns = 10;
const tileSize = (width - 60) / numColumns;

const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {

        const renderLetter = (letter: any, position: any) => {
          const isFound = foundWordPositions.has(position);
      
          const letterStyles = [styles.letter];
          if (isFound) {
            letterStyles.push(styles.foundLetter);
          }
      
          return (
            <Text key={position} style={letterStyles}>
              {letter}
            </Text>
          );
        };
      
      return (
        <View style={styles.grid}>
          {grid.map((row: any, rowIndex: any) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((letter: any, letterIndex: any) => {
                const position = `${rowIndex}-${letterIndex}`;
                return (
                    <TouchableOpacity
                    key={`cell-${rowIndex}-${letterIndex}`}
                    style={styles.cell}
                    onPress={() => handlePress(letter)}
                  >
                    {renderLetter(letter, `${rowIndex}-${letterIndex}`)}
                  </TouchableOpacity>
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
