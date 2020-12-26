/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { MonthProvider } from './context/MonthContext';
import Routes from './routes'

const App = () => {
  return (
    <MonthProvider>
      <StatusBar barStyle="light-content" backgroundColor='#1E1E24' />

      <Routes/>
    </MonthProvider>
  )
}

export default App;
