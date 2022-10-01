import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constants/Colors';

import { Entypo } from '@expo/vector-icons'

const ListEvent = (props) => {
  return (
    <TouchableOpacity
      onPress = {props.onPress}
    >
      <View style = {{ ...styles.button, ...props.style }}>
        <Entypo 
          name = "drop"
          size = {14}
          style = {styles.icon}
        />
        <View style = {styles.name}>
          <Text style = {styles.title}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.Red,
    backgroundColor: Colors.White,
    borderWidth: 2,
    maxWidth: '100%',
    height: 50,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 15,
    marginLeft: 15,
    marginRight: 15,
    elevation: 3,
    flexDirection: 'row',
    opacity: 0.99,
    flex: 0.99,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14
  },
  name: {
    width: '70%',
    numberOfLines: 1,
    ellipsizeMode: 'tail',
    flex: 1,
    padding: 5,
  },
  icon:{
    color: Colors.Red
  }
});

export default ListEvent;