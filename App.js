import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NewEventScreen from './screens/NewEventScreen'
import PastEventScreen from './screens/PastEventScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import MenuScreen from './screens/MenuScreen'
import NewDetailsScreen from './screens/NewDetailsScreen'
import DetailsScreen from './screens/DetailsScreen'
import FavoritesScreen from './screens/FavoritesScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

import {legacy_createStore as createStore, combineReducers } from 'redux'
import newEventReducer from './store/reducers/newevents'
import eventReducer from './store/reducers/events'

import Colors from './constants/Colors'

const mainReducer = combineReducers({
  newEvents: newEventReducer,
  events: eventReducer
})

const store = createStore(mainReducer)

import { Provider } from "react-redux"

function Main() {
  return(
    <Tab.Navigator
      screenOptions = {{
        headerShown: false
      }}
      tabBarOptions = {{
        activeBackgroundColor: Colors.RedActive,
        inactiveBackgroundColor: Colors.Red,
        activeTintColor: Colors.White,
        inactiveTintColor: Colors.White
      }}
    >
      <Tab.Screen
        name = "Novi događaji"
        component = {NewEventScreen}
        options = {{
          tabBarIcon: () => {
            return <MaterialIcons
              name = "event"
              size = {26}
              style = {{color: Colors.White}}
            />
          }
        }}
      />
      <Tab.Screen
        name = "Prošli događaji"
        component = {PastEventScreen}
        options = {{
          tabBarIcon: () => {
            return <MaterialIcons
              name = "history"
              size = {26}
              style = {{color: Colors.White}}
            />
          }
        }}
      />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name = "Login" 
            component= {LoginScreen} 
          />
          <Stack.Screen 
            name = "Menu" 
            component = {MenuScreen}
          />
          <Stack.Screen 
            name = "Main" 
            component = {Main}
          />
          <Stack.Screen 
            name = "Profile" 
            component = {ProfileScreen}
          />
          <Stack.Screen 
            name = "NewDetails"
            component = {NewDetailsScreen}
          />
          <Stack.Screen 
            name = "Details"
            component = {DetailsScreen}
          />
          <Stack.Screen 
            name = "Favorites"
            component = {FavoritesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;