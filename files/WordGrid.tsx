
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


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


// interface FoundWordDetails {
//     color: string;
//     positions: string[];
//   }
  

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width - 60) / numColumns;

// const WordGrid = ({ grid, foundWordPositions, handlePress }: any) => {

//     const getCellBackgroundColor = (rowIndex: any, letterIndex: any) => {
//       const positionKey = `${rowIndex}-${letterIndex}`;
//       let backgroundColor = '#fff'; 
  
//       foundWordPositions.forEach((value: any, key: any) => {
//         if (value.positions.includes(positionKey)) {
//           backgroundColor = value.color; 
//         }
//       });
  
//       return backgroundColor;
//     };

//     const renderLetter = (letter: any, rowIndex: any, letterIndex: any) => {
//         const positionKey = `${rowIndex}-${letterIndex}`;
//         const foundWordDetailsArray: FoundWordDetails[] = Array.from(foundWordPositions.values()) as FoundWordDetails[];
//         const isFound = foundWordDetailsArray.some(value => value.positions.includes(positionKey));
      
//         return (
//           <Text style={[styles.letter, isFound && styles.foundLetter]}>
//             {letter}
//           </Text>
//         );
//       };
      
      
  
//     return (
//       <View style={styles.grid}>
//         {grid.map((row: any, rowIndex: any) => (
//           <View key={rowIndex} style={styles.row}>
//             {row.map((letter: any, letterIndex: any) => (
//               <TouchableOpacity
//                 key={`cell-${rowIndex}-${letterIndex}`}
//                 onPress={() => handlePress(letter, rowIndex, letterIndex)}
//                 style={[styles.cell, { backgroundColor: getCellBackgroundColor(rowIndex, letterIndex) }]}
//               >
//                 {renderLetter(letter, rowIndex, letterIndex)}
//               </TouchableOpacity>
//             ))}
//           </View>
//         ))}
//       </View>
//     );
//   };
  
// const styles = StyleSheet.create({
//    grid: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         alignSelf: 'center',
//         backgroundColor: '#ffffff',
//         borderRadius: 20, 
//         padding: 5,
//         marginVertical: 20, 
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//       },
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


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Dimensions } from "react-native";

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width - 60) / numColumns;

// const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {

//     const renderLetter = (letter: any, position: any) => {
//           const isFound = foundWordPositions.has(position);
      
//           const letterStyles = [styles.letter];
//           if (isFound) {
//             letterStyles.push(styles.foundLetter);
//           }
      
//           return (
//             <Text key={position} style={letterStyles}>
//               {letter}
//             </Text>
//           );
//         };
//       return (
//         <View style={styles.grid}>
//           {grid.map((row: any, rowIndex: any) => (
//             <View key={rowIndex} style={styles.row}>
//               {row.map((letter: any, letterIndex: any) => {
//                 const position = `${rowIndex}-${letterIndex}`;
//                 return (
//                     <TouchableOpacity
//                     key={`cell-${rowIndex}-${letterIndex}`}
//                     style={styles.cell}
//                     onPress={() => handlePress(letter)}
//                   >
//                     {renderLetter(letter, `${rowIndex}-${letterIndex}`)}
//                   </TouchableOpacity>
//                 );
//               })}
//             </View>
//           ))}
//         </View>
//       );
// };

// const styles = StyleSheet.create({
//    grid: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         alignSelf: 'center',
//         backgroundColor: '#ffffff',
//         borderRadius: 20, 
//         padding: 5,
//         marginVertical: 20, 
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//       },
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


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import useWordSelection from './useWordSelection';

// const { width } = Dimensions.get('window');
// const numColumns = 10;
// const tileSize = (width - 60) / numColumns;

// const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {
//   const { panHandlers, selectedTiles } = useWordSelection({
//     gridSize: numColumns, // Assuming your grid is numColumns x numColumns
//     grid,
//     handlePress
//   });

//   // const renderLetter = (letter: any, rowIndex: any, colIndex: any) => {
//   //   const position = `${rowIndex}-${colIndex}`;
//   //   const isFound = foundWordPositions.has(position);
//   //   const isSelected = selectedTiles.includes(position);

//   //   const letterStyles: any[] = [styles.letter];
//   //   if (isFound) {
//   //     letterStyles.push(styles.foundLetter);
//   //   }
//   //   if (isSelected) {
//   //     letterStyles.push(styles.selectedLetter); // Apply selected style
//   //   }

//   //   return (
//   //     <Text key={position} style={letterStyles}>
//   //       {letter}
//   //     </Text>
//   //   );
//   // };

//   const renderLetter = (letter: any, rowIndex: any, colIndex: any) => {
//     const position = `${rowIndex}-${colIndex}`;
//     const isSelected = selectedTiles.includes(position);
  
//     console.log(`Letter at ${position} is selected: ${isSelected}`); // Add this log
  
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
//             <TouchableOpacity
//               key={`cell-${rowIndex}-${colIndex}`}
//               style={styles.cell}
//               onPress={() => handlePress(letter)} // You may want to update this logic
//             >
//               {renderLetter(letter, rowIndex, colIndex)}
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//    grid: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         alignSelf: 'center',
//         backgroundColor: '#ffffff',
//         borderRadius: 20, 
//         padding: 5,
//         marginVertical: 20, 
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//       },
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
//     color: 'red', // Change text color to red
//     borderColor: 'red', // Add a red border
//     borderWidth: 1, // Specify border width
//   },
  
// });

// export default WordGrid;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import useWordSelection from './useWordSelection';

const { width } = Dimensions.get('window');
const numColumns = 10;
const tileSize = (width - 60) / numColumns;

const WordGrid = ({ grid, handlePress, foundWordPositions }: any) => {
  const { panHandlers, selectedTiles } = useWordSelection({
    gridSize: numColumns,
    grid,
    handlePress
  });

  const renderLetter = (letter: any, rowIndex: any, colIndex: any) => {
    const position = `${rowIndex}-${colIndex}`;
    const isSelected = selectedTiles.includes(position);
  
    console.log(`Letter at ${position} is selected: ${isSelected}`);
  
    const letterStyles: any[] = [styles.letter];
    if (isSelected) {
      letterStyles.push(styles.selectedLetter);
    }
  
    return (
      <Text key={position} style={letterStyles}>
        {letter}
      </Text>
    );
  };
  

  return (
    <View {...panHandlers} style={styles.grid}> 
      {grid.map((row: any, rowIndex: any) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((letter: any, colIndex: any) => (
            <TouchableOpacity
              key={`cell-${rowIndex}-${colIndex}`}
              style={styles.cell}
              onPress={() => handlePress(letter)} // You may want to update this logic
            >
              {renderLetter(letter, rowIndex, colIndex)}
            </TouchableOpacity>
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
  selectedLetter: {
    color: 'red', // Change text color to red
    borderColor: 'red', // Add a red border
    borderWidth: 1, // Specify border width
  },
  
});

export default WordGrid;