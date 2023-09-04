import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from '/src/TelaLogin'

import { SafeAreaView, StyleSheet } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={Style.container}>
     <TelaLogin/>

    
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});