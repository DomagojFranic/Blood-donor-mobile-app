import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

import { Entypo } from '@expo/vector-icons'

const Notification = (props) => {
  return (
    <View style = {styles.bar}>
      <Entypo 
        name = "info"
        size = {18}
        style = {styles.iconLeft}
      />
      <Text style = {styles.text}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar:{
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Green,
  },
  text:{
    color: Colors.White,
    fontFamily: "Baloo",
    fontWeight: "bold",
    fontSize: 18
  },
  iconLeft: {
    position: 'absolute',
    left: 16,
    color: Colors.White
  }
});

export default Notification;