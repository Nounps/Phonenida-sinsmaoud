import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChildComponent from './component/child';
import Counter from './component/counter';

export default function App() {
  return (
    <View style={styles.container}>
    
    <StatusBar style="auto" />

     <ChildComponent/> 
     <Counter/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

);