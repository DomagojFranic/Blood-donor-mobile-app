import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';

import { MaterialIcons } from '@expo/vector-icons';

const HeaderFavorites = ({ navigation }) => {
  const goBack = () => {
    navigation.navigate('Novi događaji')
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
    justifyContent: 'center',
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
  }
});

export default HeaderFavorites;