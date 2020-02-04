import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar.js';
import { AddTodo } from './src/AddTodo.js';

export default function App() {
  return (
    <View>
      <Navbar title={'Todo app'}/>
      <View style={styles.container}>
        <AddTodo/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
