import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './routes';
import SplashScreen from 'react-native-splash-screen';

const App = () => (
    <NavigationContainer
    onReady={() => SplashScreen.hide()}
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle='dark-content'
      />
      <Routes />
    </NavigationContainer>
  )

export default App;
