import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell = ({ letter, isSelected }: any) => {
  const cellStyle = {
    backgroundColor: isSelected ? 'red' : 'transparent',
  };

  const textStyle = {
    color: isSelected ? 'white' : 'black',
    fontSize: 16, // Adjust the font size to fit inside the cell
    paddingHorizontal: 4, // Reduce horizontal padding to decrease spacing
  };

  return (
    <View style={[styles.cell, cellStyle]}>
      <Text style={[styles.letter, textStyle]}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Add a small border to separate cells
    borderColor: 'transparent', // Set the border color to transparent
  },
  letter: {
    fontSize: 16,
  },
});

export default Cell;
