import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppScreens from "./AppScreens"

const {
  Navigator,
  Screen
} = createNativeStackNavigator();

const Routes = () => (
      <Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFF'
        }
      }}
      >
      {AppScreens.map(({name, component}) => (
        <Screen
        key={name}
        {...{
          name,
          component
        }} />
      ))}
      </Navigator>
  )

export default Routes;