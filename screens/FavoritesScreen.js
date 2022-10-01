import React, {useState} from 'react'
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native'

import Colors from '../constants/Colors'

import HeaderFavorites from '../components/HeaderFavorites'
import ListEvent from '../components/ListEvent'
import Notification from '../components/Notification'
import SafeViewAndroid from '../components/SafeViewAndroid'

import { useSelector } from 'react-redux'

const FavoritesScreen = ( { route, navigation} ) => {
  const newEventFavorite = useSelector(state => state.newEvents.favouriteNewEvents)
  
  const showElements = (data) => {
    return(
      <ListEvent
        title = {data.item.date.getDate() + "." + parseInt(data.item.date.getMonth()) + "." + data.item.date.getFullYear() + " | " + data.item.organizer}
        onPress = {() => navigation.navigate('NewDetails', {id: data.item.id})}
      />
    )
  }
  
  var diff = new Date().getTime() - new Date("December 21, 2021").getTime() 
  var calculateDiff = Math.floor(diff / (1000 * 60 * 60 * 24))

  return(
    <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
      <View style = {styles.screen}>
        <HeaderFavorites navigation = {navigation}/>
        <Notification 
          title = {"Posljednje darivanje krvi: prije " + calculateDiff + " dana"}
        />
        <View style = {styles.list}>
          <FlatList
            showsVerticalScrollIndicator = {true}
            data = {newEventFavorite}
            renderItem = {showElements}
            numColumns = {1}
        />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    width: "100%",
    backgroundColor: Colors.White
  },
  list:{
    flex: 1,
    width: "100%",
  }
})

export default FavoritesScreen