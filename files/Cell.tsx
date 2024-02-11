import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell = ({ letter, isSelected }: any) => {
  const cellStyle = {
    backgroundColor: isSelected ? 'red' : 'transparent',
  };

  const textStyle = {
    color: isSelected ? 'white' : 'black',
    fontSize: 16,
    paddingHorizontal: 4, 
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
    borderWidth: 1, 
    borderColor: 'transparent',
  },
  letter: {
    fontSize: 16,
  },
});

export default Cell;

