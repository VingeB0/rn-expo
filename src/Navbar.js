import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = props => {
  const {title} = props;
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    borderWidth: 0.5,
    backgroundColor: 'tomato',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});