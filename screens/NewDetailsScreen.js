import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

import Colors from '../constants/Colors'

import HeaderNewDetails from '../components/HeaderNewDetails'
import Button1 from '../components/Button1'
import SafeViewAndroid from '../components/SafeViewAndroid'

import { useSelector, useDispatch } from 'react-redux'

import { favoriteChange } from "../store/actions/newevents"

const NewDetailsScreen = ({ route, navigation }) => {
  const idEvent = Number(route.params.id)
  const newEventShow = useSelector(state => state.newEvents.newEvents)
  const event = newEventShow.find((e) => e.id === idEvent)

  const dispatch = useDispatch()

  const actionFavorite = () => {
     dispatch(favoriteChange(idEvent))
     navigation.navigate('Novi događaji')
  }
 
  return(
    <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
      <View style = {styles.screen}>
        <HeaderNewDetails navigation = {navigation}/>
        <View style = {styles.table}>
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
          <View style = {styles.row}>
            <View style = {styles.column}>
              <Text style = {styles.title}>
                Mjesto održavanja:                  
              </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.bold}>
                {event.location}
              </Text>
            </View>
          </View>
          <View style = {styles.row}>
            <View style = {styles.column}>
              <Text style = {styles.title}>
                Adresa održavanja:                  
              </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.bold}>
                {event.address}
              </Text>
            </View>
          </View>
          <View style = {styles.row}>
            <View style = {styles.column}>
              <Text style = {styles.title}>
                Vrijeme održavanja:                  
              </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.bold}>
                {event.time}
              </Text>
            </View>
          </View>
        </View>
        <Button1
          title = "Promjena favorita"
          onPress = {actionFavorite}
        />
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

export default NewDetailsScreen