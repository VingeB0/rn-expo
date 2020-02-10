import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Text, Alert} from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if(value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Name cannot be empty');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        // onChangeText={text => setValue(text)}
        onChangeText={setValue}
        value={value}
        placeholder="Type some text..."
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='number-pad'
      />
      <Button onPress={pressHandler} title="Add"/>
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'tomato',
    width: '70%'
  }
});