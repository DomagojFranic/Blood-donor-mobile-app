import { StyleSheet, Platform, StatusBar } from 'react-native'

import Colors from '../constants/Colors'

export default StyleSheet.create({
  AndroidSafeArea:{
    flex: 1,
    backgroundColor: Colors.Red,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})