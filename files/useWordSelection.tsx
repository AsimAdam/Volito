
// import { useState } from 'react';
// import { PanResponder, GestureResponderEvent, PanResponderGestureState, Dimensions, StatusBar } from 'react-native';

// interface UseWordSelectionProps {
//   gridSize: number;
//   grid: string[][];
//   handlePress: (word: string) => void;
// }

// const useWordSelection = ({ gridSize, grid, handlePress }: UseWordSelectionProps) => {
//   const [selectedTiles, setSelectedTiles] = useState<string[]>([]);

//   const tileSize = Dimensions.get('window').width / gridSize;

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,

//     onPanResponderGrant: () => {
//       setSelectedTiles([]);
//     },

//     onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//       const touchX = gestureState.moveX;
//       const touchY = gestureState.moveY - (StatusBar.currentHeight || 0);
    
//       const gridOffsetX = (Dimensions.get('window').width - gridSize * tileSize) / 2;
//       const gridOffsetY = (Dimensions.get('window').height - gridSize * tileSize) / 2;
    
//       const column = Math.floor((touchX - gridOffsetX) / (tileSize * 0.8));
//       const row = Math.floor((touchY - gridOffsetY) / (tileSize * 0.8)); 
      
    
//       if (row >= 0 && row < gridSize && column >= 0 && column < gridSize) {
//         const newTile = `${row}-${column}`;
//         if (!selectedTiles.includes(newTile)) {
//           setSelectedTiles((prevTiles) => [...prevTiles, newTile]);
//         }
//       }
//     },
    
//     onPanResponderRelease: () => {
//       console.log('Touch released');
//       const word = selectedTiles
//         .map((tile) => {
//           const [row, col] = tile.split('-').map(Number);
//           if (grid[row] && grid[row][col]) {
//             return grid[row][col];
//           }
//           return '';
//         })
//         .join('');

//       handlePress(word);
//       setSelectedTiles([]);
//     },
//   });

//   return {
//     panHandlers: panResponder.panHandlers,
//     selectedTiles,
//   };
// };

// export default useWordSelection;



// useWordSelection.js

import { useState } from 'react';
import { PanResponder, Dimensions, StatusBar, PanResponderGestureState, GestureResponderEvent } from 'react-native';

const useWordSelection = ({ gridSize, grid, handleSelection }: any) => {
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  const tileSize = Dimensions.get('window').width / gridSize;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setSelectedTiles([]); // Clear the selectedTiles state when a new touch sequence starts
    },
    onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
      const touchX = gestureState.moveX;
      const touchY = gestureState.moveY - (StatusBar.currentHeight || 0);
      const gridOffsetX = (Dimensions.get('window').width - gridSize * tileSize) / 2;
      const gridOffsetY = (Dimensions.get('window').height - gridSize * tileSize) / 2;
      const column = Math.floor((touchX - gridOffsetX) / tileSize);
      const row = Math.floor((touchY - gridOffsetY) / tileSize);

      if (row >= 0 && row < gridSize && column >= 0 && column < gridSize) {
        const newTile = `${row}-${column}`;
        if (!selectedTiles.includes(newTile)) {
          setSelectedTiles(prevTiles => [...prevTiles, newTile]);
        }
      }
    },
    onPanResponderRelease: () => {
      handleSelection(selectedTiles); // Invoke the callback with the selected tiles on touch release
    },
  });

  return { panHandlers: panResponder.panHandlers, selectedTiles };
};

export default useWordSelection;
