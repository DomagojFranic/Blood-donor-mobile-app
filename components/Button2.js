import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const Button2 = (props) => {
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
    backgroundColor: Colors.Red,
    borderColor: Colors.Red,
    borderWidth: 2,
    width: 250,
    height: 55,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3,
    marginVertical: 40
  },
  title:{
    color: Colors.White,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Button2;