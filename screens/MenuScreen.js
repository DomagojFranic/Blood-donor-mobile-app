import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'

import HeaderMenu from '../components/HeaderMenu'
import Button1 from '../components/Button1'
import SafeViewAndroid from '../components/SafeViewAndroid'

import Colors from '../constants/Colors'

const MenuScreen = ( {navigation} ) => {
    return(
      <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
        <View style = {styles.screen}>
          <HeaderMenu navigation = {navigation}/>
          <View style = {styles.button}>
            <Button1
              title = "Naslovnica"
              onPress = {
                () => {navigation.navigate("Main")}
              }
            />
            <Button1 
              title = "Profil"
              onPress = {
                () => {navigation.navigate("Profile")}
              }
            />
            <Button1
              title = "O darivanju krvi"
              //onPress = {
              //  () => {navigation.navigate("Menu")}
              //}
            />
          </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: Colors.White,
  },
  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default MenuScreen