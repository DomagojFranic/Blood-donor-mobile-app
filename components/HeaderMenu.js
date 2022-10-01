import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';

const HeaderMenu = ({ navigation }) => {
  return (
    <View style = {styles.header}>
      <View>
        <Text style = {styles.headerText}>
          Blood donor app
        </Text>
      </View>
      <Entypo 
        name = "log-out" 
        size = {24} 
        style = {styles.iconRight}
        onPress = {() => navigation.navigate('Login')}
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
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 0.5,
    color: Colors.White
  },
  iconRight: {
    position: 'absolute',
    right: 16,
    color: Colors.White
  }
});

export default HeaderMenu;
