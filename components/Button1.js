import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const Button1 = (props) => {
  return (
    <TouchableOpacity 
      onPress = {props.onPress}
    >
      <View style = {{...styles.button, ...props.styles}}>
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Red,
    borderWidth: 2,
    width: 250,
    height: 55,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3,
    margin: 40
  },
  title:{
    color: Colors.Red,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Button1;