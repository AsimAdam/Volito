/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GameScreen from './files/Game';
import LevelsPage from './files/LevelsPage';




const Stack = createStackNavigator();


function App(): React.JSX.Element {
  

 

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LevelsPage" component={LevelsPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  ); 
}



export default App;
