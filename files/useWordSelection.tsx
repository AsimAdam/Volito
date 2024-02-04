
// import { useState, useRef } from 'react';
// import { PanResponder, Dimensions } from 'react-native';

// const useWordSelection = (gridSize: any, handlePress: any) => {
//   const [selectedTiles, setSelectedTiles] = useState<any>([]);
//   const panResponder = useRef<any>(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,

//       onPanResponderGrant: () => {
     
//         setSelectedTiles([]);
//       },

//       onPanResponderMove: (evt, gestureState) => {
 
//         const column = Math.floor(gestureState.moveX / (Dimensions.get('window').width / gridSize));
//         const row = Math.floor(gestureState.moveY / (Dimensions.get('window').width / gridSize));

        
//         const newTile = `${row}-${column}`;
//         if (!selectedTiles.includes(newTile)) {
//           setSelectedTiles([...selectedTiles, newTile]);
//         }
//       },

//       onPanResponderRelease: () => {
       
//         const word = selectedTiles.map(tile => {
//           const [row, col] = tile.split('-').map(Number);
//           return grid[row][col];
//         }).join('');

       
//         handlePress(word);

       
//         setSelectedTiles([]);
//       },
//     })
//   ).current;

//   return {
//     panHandlers: panResponder.panHandlers,
//     selectedTiles,
//   };
// };

// export default useWordSelection;


// useWordSelection.tsx


// import { useState } from 'react';
// import { PanResponder, GestureResponderEvent, PanResponderGestureState, Dimensions, StatusBar } from 'react-native';

// interface UseWordSelectionProps {
//   gridSize: number;
//   grid: string[][];
//   handlePress: (word: string) => void;
// }



// const useWordSelection = ({ gridSize, grid, handlePress }: UseWordSelectionProps) => {
//   const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,

//     onPanResponderGrant: () => {
//       setSelectedTiles([]);
//     },

    

//     // onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//     //     console.log('Moving', gestureState.moveX, gestureState.moveY);
//     //   const touchX = gestureState.moveX;
//     //   const touchY = gestureState.moveY - (StatusBar.currentHeight || 0);
//     //   const column = Math.floor(touchX / (Dimensions.get('window').width / gridSize));
//     //   const row = Math.floor(touchY / (Dimensions.get('window').width / gridSize));
//     //   const newTile = `${row}-${column}`;
//     //   if (!selectedTiles.includes(newTile)) {
//     //     setSelectedTiles([...selectedTiles, newTile]);
//     //   }
//     // },

//     onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
//         console.log('Moving', gestureState.moveX, gestureState.moveY);
//         const touchX = gestureState.moveX;
//         const touchY = gestureState.moveY - (StatusBar.currentHeight || 0);
    
//         // Assume there's a predefined margin or offset from the top and left of the screen to the grid
//         const gridOffsetX = /* Your calculated offset from the left edge of the screen to the grid */;
//         const gridOffsetY = /* Your calculated offset from the top edge of the screen to the grid */;
    
//         // Adjust touch coordinates based on the offsets
//         const adjustedTouchX = touchX - gridOffsetX;
//         const adjustedTouchY = touchY - gridOffsetY;
    
//         // Calculate column and row based on the adjusted touch coordinates
//         const column = Math.floor(adjustedTouchX / tileSize);
//         const row = Math.floor(adjustedTouchY / tileSize);
    
//         const newTile = `${row}-${column}`;
//         if (!selectedTiles.includes(newTile)) {
//             setSelectedTiles(prevTiles => [...prevTiles, newTile]);
//         }
//     },
    

//     onPanResponderRelease: () => {
//         console.log('Touch released');
//       const word = selectedTiles.map(tile => {
//         const [row, col] = tile.split('-').map(Number);
//         if (grid[row] && grid[row][col]) { 
//           return grid[row][col];
//         }
//         return '';
//       }).join('');

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
//         const touchX = gestureState.moveX;
//         const touchY = gestureState.moveY - (StatusBar.currentHeight || 0);
      

//         const gridOffsetX = (Dimensions.get('window').width - gridSize * tileSize) / 2;
//         const gridOffsetY = (Dimensions.get('window').height - gridSize * tileSize) / 2;
      
        
//         const adjustedTouchX = touchX - gridOffsetX;
//         const adjustedTouchY = touchY - gridOffsetY;
    
//         const column = Math.floor(adjustedTouchX / tileSize);
//         const row = Math.floor(adjustedTouchY / tileSize);
      
//         const newTile = `${row}-${column}`;
//         if (!selectedTiles.includes(newTile)) {
//           setSelectedTiles((prevTiles) => [...prevTiles, newTile]);
//         }
//       },
      

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


import { useState } from 'react';
import { PanResponder, GestureResponderEvent, PanResponderGestureState, Dimensions, StatusBar } from 'react-native';

interface UseWordSelectionProps {
  gridSize: number;
  grid: string[][];
  handlePress: (word: string) => void;
}

const useWordSelection = ({ gridSize, grid, handlePress }: UseWordSelectionProps) => {
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);

  const tileSize = Dimensions.get('window').width / gridSize;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      setSelectedTiles([]);
    },

    onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
      const touchX = gestureState.moveX;
      const touchY = gestureState.moveY - (StatusBar.currentHeight || 0);

      const gridOffsetX = (Dimensions.get('window').width - gridSize * tileSize) / 2;
      const gridOffsetY = (Dimensions.get('window').height - gridSize * tileSize) / 2;

      const adjustedTouchX = touchX - gridOffsetX;
      const adjustedTouchY = touchY - gridOffsetY;

      const column = Math.floor(adjustedTouchX / tileSize);
      const row = Math.floor(adjustedTouchY / tileSize);

      const newTile = `${row}-${column}`;
      if (!selectedTiles.includes(newTile)) {
        setSelectedTiles((prevTiles) => [...prevTiles, newTile]);
      }
    },

    onPanResponderRelease: () => {
      console.log('Touch released');
      const word = selectedTiles
        .map((tile) => {
          const [row, col] = tile.split('-').map(Number);
          if (grid[row] && grid[row][col]) {
            return grid[row][col];
          }
          return '';
        })
        .join('');

      handlePress(word);
      setSelectedTiles([]);
    },
  });

  return {
    panHandlers: panResponder.panHandlers,
    selectedTiles,
  };
};

export default useWordSelection;

