import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

import Colors from '../constants/Colors'

import HeaderDetails from '../components/HeaderDetails'
import SafeViewAndroid from '../components/SafeViewAndroid'

import { useSelector } from 'react-redux'

const DetailsScreen = ({ route, navigation }) => {
  const idEvent = Number(route.params.id)
  const eventShow = useSelector(state => state.events.events)
  const event = eventShow.find((e) => e.id === idEvent)
  
  return(
    <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
      <View style = {styles.screen}>
        <HeaderDetails navigation = {navigation}/>
        <View style = {styles.table}>
          <View style = {styles.row}>
            <View style = {styles.column}>
              <Text style = {styles.title}>
                ID događaja:
              </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.bold}>
                {event.id}
              </Text>
            </View>
          </View>
          <View style = {styles.row}>
            <View style = {styles.column}>
              <Text style = {styles.title}>
                Datum održavanja:
              </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.bold}>
                {event.date.getDate() + "." + parseInt(event.date.getMonth()) + "." + event.date.getFullYear()}
              </Text>
            </View>
          </View>
          <View style = {styles.row}>
            <View style = {styles.column}>
              <Text style = {styles.title}>
                Organizator:
              </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.bold}>
                {event.organizer}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White
  },
  table:{
     width: '80%',
    flex: 1,
  },
  row:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15
  },
  column:{
    alignItems: 'center',
    marginVertical: 5,
  },
  bold:{
    fontWeight: "bold",
    fontSize: 18
  },
  title:{
    fontSize: 16
  }
})

export default DetailsScreen