
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
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 10; 
const tileSize = (width * 0.95 - 20) / numColumns; 

const WordGrid = ({ grid, handlePress }: any) => {
  return (
    <View style={styles.grid}>
      {grid.map((row: any, rowIndex: any) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((letter: any, letterIndex: any) => (
            <TouchableOpacity
              key={`${rowIndex}-${letterIndex}`}
              style={styles.cell}
              onPress={() => handlePress(letter)}
            >
              <Text style={styles.letter}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center', 
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: tileSize,
    height: tileSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  letter: {
    fontSize: tileSize * 0.4,
    color: 'grey',
  },
});

export default WordGrid;
