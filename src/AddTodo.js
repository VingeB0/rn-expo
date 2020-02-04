import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = props => {
  const {title} = props;
  return (
    <View style={styles.block}>
      <TextInput style={styles.input}/>
      <Button title="Add"/>
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'tomato',
    width: '70%'
  }
});