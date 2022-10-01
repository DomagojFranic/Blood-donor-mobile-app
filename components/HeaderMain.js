import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';

import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const HeaderMain = ({ navigation }) => {
  const goBack = () => {
    navigation.navigate('Menu')
  };

  return (
    <View style = {styles.header}>
      <MaterialIcons 
        name = "arrow-back" 
        size = {26} 
        style = {styles.iconLeft}
        onPress = {goBack}
      />
      <View>
        <Text style = {styles.headerText}>
          Blood donor app
        </Text>
      </View>
      <Fontisto 
        name = "favorite" 
        size = {22} 
        style = {styles.iconRight}
        onPress = {() => navigation.navigate('Favorites')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.Red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 0.5,
    color: Colors.White
  },
  iconLeft: {
    position: 'absolute',
    left: 16,
    color: Colors.White,
  },
  iconRight: {
    position: 'absolute',
    right: 16,
    color: Colors.White,
  }
});

export default HeaderMain;
