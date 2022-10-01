import React, {useState} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'

import HeaderLogin from '../components/HeaderLogin'
import Button1 from '../components/Button1'
import SafeViewAndroid from '../components/SafeViewAndroid'

import Colors from '../constants/Colors'

const LoginScreen = ( {navigation} ) => {
    return(
      <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
        <View style = {styles.screen}>
          <HeaderLogin/>
          <View style = {styles.button}>          
            <Button1 
              title = "Prijavi se"              
              onPress = {
                () => {navigation.navigate("Menu")}
              }              
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
      alignItems: 'center'
    }
})

export default LoginScreen