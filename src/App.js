import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  return <AppNavigator />;
  return (
    <View style={styles.container}>
      <Text>Hello from Christine baby</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// const App = () => {
//   return <AppNavigator />;
// };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
