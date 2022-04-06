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
        animation: 'slide_from_right'
      }}
      >
      {AppScreens.map(({name, component, options}) => (
        <Screen
        key={name}
        {...{
          name,
          component,
          options
        }} />
      ))}
      </Navigator>
  )

export default Routes;