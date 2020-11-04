import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  const { navigatorOptions, screenOptions, screens } = props; 
  return (
    <Stack.Navigator
      navigationOptions={navigatorOptions}
      screenOptions={screenOptions}
    >
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          {...screen}
        />
      ))}
    </Stack.Navigator>
  );
}


export default StackNavigation;
