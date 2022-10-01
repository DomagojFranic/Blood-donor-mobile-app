import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'

const Header = () => {
  return(
    <View style = {styles.header}>
      <View>
        <Text style = {styles.headerText}>
          Blood donor app
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Red,
    borderBottomWidth: 3,
    borderBottomColor: Colors.Red
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 0.5,
    color: Colors.White
  },
})

export default Header