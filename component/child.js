import React from 'react';
import { View } from 'react-native';
import MainComponent from './main';
//porperties
const App = () => {
  return (
    <View>
      <MainComponent name="Phonenida" />
      <MainComponent name="Sinsamoud"/>
    </View>
  );
};

export default App;