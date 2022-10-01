import React from 'react'
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native'

import ListEvent from '../components/ListEvent'
import HeaderMain from '../components/HeaderMain'
import Notification from '../components/Notification'
import SafeViewAndroid from '../components/SafeViewAndroid'

import Colors from '../constants/Colors'

import { useSelector } from 'react-redux'

const PastEventScreen = ({ route, navigation }) => {
  const eventShow = useSelector(state => state.events.events)

  const showElements = (data) => {
    return(
      <ListEvent
        onPress = {() => navigation.navigate('Details', {id: data.item.id})}
        title = {data.item.date.getDate() + "." + parseInt(data.item.date.getMonth()) + "." + data.item.date.getFullYear() + " | " + data.item.organizer}
      />
    )
  }

  var diff = new Date().getTime() - new Date("December 21, 2021").getTime() 
  var calculateDiff = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  return(
    <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
      <View style = {styles.screen}>
        <HeaderMain navigation = {navigation}/>
        <Notification
          title = {"Posljednje darivanje krvi: prije " + calculateDiff + " dana"}
        />
        <View style = {styles.list}>
          <FlatList
            showsVerticalScrollIndicator = {true}
            data = {eventShow}
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
    width: "100%"
  }
})

export default PastEventScreen