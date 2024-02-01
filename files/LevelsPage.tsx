// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const LevelsPage = () => {
//   const [points, setPoints] = useState(0);
//   const [unlockedLevels, setUnlockedLevels] = useState(2);

//   const levelPoints = [50, 100, 150, 200, 250]; 

//   const handleLevelPress = (level: any) => {
//     if (level <= unlockedLevels) {
//       setPoints(points + levelPoints[level - 1]);
//       if (points >= 150 && unlockedLevels < 5) {
//         setUnlockedLevels(unlockedLevels + 1); 
//       }
//     } else {
//     //   alert('This level is locked. Earn more points to unlock it.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.pointsCounter}>Points: {points}</Text>
//       {Array.from({ length: 5 }, (_, i) => i + 1).map((level) => (
//         <TouchableOpacity
//           key={level}
//           style={[styles.levelButton, level > unlockedLevels && styles.lockedLevel]}
//           onPress={() => handleLevelPress(level)}
//           disabled={level > unlockedLevels}
//         >
//           <Text style={styles.levelText}>Level {level}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   pointsCounter: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   levelButton: {
//     width: '80%',
//     padding: 15,
//     marginVertical: 10,
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     borderRadius: 5,
//   },
//   lockedLevel: {
//     backgroundColor: '#9E9E9E',
//   },
//   levelText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//   },
// });

// export default LevelsPage;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const LevelsPage = () => {
//   const navigation = useNavigation<any>();
//   const [points, setPoints] = useState(0);
//   const [unlockedLevels, setUnlockedLevels] = useState(2);

//   const handleLevelPress = (level: any) => {
   
//     navigation.navigate('GameScreen', { level: level });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.pointsContainer}>
//         <Text style={styles.pointsText}>Points: {points}</Text>
//       </View>
//       {Array.from({ length: 5 }, (_, i) => i + 1).map((level) => (
//         <TouchableOpacity
//           key={level}
//           style={[styles.levelButton, level > unlockedLevels && styles.lockedLevel]}
//           onPress={() => handleLevelPress(level)}
//           disabled={level > unlockedLevels}
//         >
//           {level > unlockedLevels && (
//             <Image source={require('../info/lock.png')} style={styles.lockIcon} />
//           )}
//           <Text style={styles.levelText}>Level {level}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
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
//     backgroundColor: 'orange',
//   },
//   lockIcon: {
//     marginRight: 10,
//     width: 25,
//     height: 25
//   },
//   levelText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//   },
// });

// export default LevelsPage;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const levelsData = [
  { level: 1, words: ['CAT', 'DOG', 'BIRD'], complexity: 'Easy' },
  { level: 2, words: ['LION', 'TIGER', 'BEAR'], complexity: 'Medium' },
  { level: 3, words: ['ELEPHANT', 'GIRAFFE', 'HIPPOPOTAMUS'], complexity: 'Hard' },
  { level: 4, words: ['CROCODILE', 'Rhinoceros', 'Hippopotamus'], complexity: 'Harder' },
  { level: 5, words: ['CHIMPANZEE', 'ORANGUTAN', 'GORILLA'], complexity: 'Hardest' },
];

const LevelsPage = () => {
  const navigation = useNavigation<any>();
  const [points, setPoints] = useState(0);
  const [unlockedLevels, setUnlockedLevels] = useState(2);

  const handleLevelPress = (levelIndex: number) => {
    const level = levelsData[levelIndex];
    navigation.navigate('GameScreen', { levelData: level });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Points: {points}</Text>
      </View>
      {levelsData.map((level, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.levelButton, index + 1 > unlockedLevels ? styles.lockedLevel : null]}
          onPress={() => handleLevelPress(index)}
          disabled={index + 1 > unlockedLevels}
        >
          {index + 1 > unlockedLevels && (
            <Image source={require('../info/lock.png')} style={styles.lockIcon} />
          )}
          <Text style={styles.levelText}>Level {level.level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pointsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 8,
  },
  pointsText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  levelButton: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lockedLevel: {
    backgroundColor: '#9E9E9E', // Changed to gray to indicate a locked level
  },
  lockIcon: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  levelText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default LevelsPage;
