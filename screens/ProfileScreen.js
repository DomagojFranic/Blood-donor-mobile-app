import React, { useState, Component } from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView, ScrollView, TextInput} from 'react-native'
import { RadioButton } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

import HeaderProfile from '../components/HeaderProfile'
import SafeViewAndroid from '../components/SafeViewAndroid'
import Button2 from '../components/Button2'

import Colors from '../constants/Colors'

import maleImage from '../assets/maleavatar.jpg'
import femaleImage from '../assets/femaleavatar.jpg'

import Donor from '../models/Donor'

const ProfileScreen = ( { route, navigation } ) => {
  const donor = new Donor("Domagoj", "Franić", "Muški", "58019019345", "dfranic98@gmail.com", "apos")
  
  const [checked, setChecked] = useState(donor.sex)
  const [name, setName] = useState(donor.name)
  const [surname, setSurname] = useState(donor.surname)
  const [oib, setOib] = useState(donor.oib)
  const [email, setEmail] = useState(donor.email)
  const [items, setItems] = useState([
    {label: 'A+', value: 'apos'},
    {label: 'A-', value: 'aneg'},
    {label: 'B+', value: 'bpos'},
    {label: 'B-', value: 'bneg'},
    {label: 'AB+', value: 'abpos'},
    {label: 'AB-', value: 'abneg'},
    {label: '0+', value: 'nullpos'},
    {label: '0-', value: 'nullneg'},
  ])
  const [bloodtype, setBloodType] = useState(donor.bloodtype)

  {/*saving the data*/}
  const save = async () => {
    try{
      await AsyncStorage.setItem('user', JSON.stringify(donor))
      await AsyncStorage.mergeItem('user', JSON.stringify({name: name, surname: surname, sex: checked, oib: oib, email: email, bloodtype: value}))
      alert("Success")
    }
    catch{
      alert("No success")
    }
  }

  {/*READING DATA; TESTING PURPOSE; DELETE AFTERWARDS*/}
  const read = async () => {
    try{
      const val = await AsyncStorage.getItem('user')
      alert(val)
    }
    catch{
      alert("No success")
    }
  }

  {/*profile image change depending on chosen sex*/}
  const profileImage = () => {
    if (checked === "Muški"){
      return(
        maleImage
      )
    }
    else{
      return(
        femaleImage
      )
    }
  }

  {/*constants needed for dropdown picker*/}
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(bloodtype)

  return(
    <SafeAreaView style = {SafeViewAndroid.AndroidSafeArea}>
      <HeaderProfile navigation = {navigation}/>
      <ScrollView 
        style = {styles.screen}
        vertical = {true}
      >
        <View style = {styles.photoframe}>
          <Image
            style = {styles.photo}
            source = {profileImage()}
          />
        </View>
        {/*radio buttons*/}
        <View style = {styles.sexselect}>
          <View style = {styles.sexselect1}>
            <RadioButton
              value = "Muški"
              status = {checked === 'Muški' ? 'checked' : 'unchecked'}
              onPress = {() => setChecked('Muški')}
            />
            <Text style = {{ fontSize: 18 }}>Muški</Text>
          </View>
          <View style = {styles.sexselect2}>
            <RadioButton
              value = "Ženski"
              status = {checked === 'Ženski' ? 'checked' : 'unchecked'}
              onPress = {() => setChecked('Ženski')}
            />
            <Text style = {{ fontSize: 18 }}>Ženski</Text>
          </View>
        </View>
        {/*textinputs*/}
        <View style = {styles.textinputgroup}>
          <TextInput
            style = {styles.textinput}
            placeholder = "Ime"
            value = {name}
            editable = {true}
            onChangeText = {(newName) => {setName(newName)}}
          />
          <TextInput
            style = {styles.textinput}
            placeholder = "Prezime"
            value = {surname}
            editable = {true}
            onChangeText = {(newSurname) => {setSurname(newSurname)}}
          />
          <TextInput
            style = {styles.textinput}
            placeholder = "OIB"
            value = {oib} 
            maxLength = {11}
            editable = {true}
            onChangeText = {(newOib) => {setOib(newOib)}}
          />
          <TextInput
            style = {styles.textinput}
            placeholder = "E-mail"
            value = {email}
            editable = {true}
            onChangeText = {(newEmail) => {setEmail(newEmail)}}
          />
        </View>
        <View style = {styles.bloodtype}>
          <DropDownPicker
            open = {open}
            value = {value}
            items = {items}
            setOpen = {setOpen}
            setValue = {setValue}
            setItems = {setItems}
            containerStyle = {{
              height: 40,
              width: 250
            }}
            style = {{
              backgroundColor: Colors.White,
              borderColor: Colors.Red,
              marginTop: 5
            }}
          />
        </View>
        <View style = {styles.bloodtype}>
          <Button2
            title = "Spremi"
            onPress = {() => save()}
          />
          {/*READING DATA; TESTING PURPOSE; DELETE AFTERWARDS*/}
          <Button2
            title = "Očitaj vrijednosti"
            onPress = {() => read()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center'
  },
  photo:{
    flex: 1,
    width: 250,
    height: 250,
  },
  photoframe:{
    overflow: 'hidden',
    width: 250,
    height: 250,
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Red,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sexselect:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 15
  },
  sexselect1:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  sexselect2:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  textinputgroup:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },  
  textinput:{
    height: 40,
    width: 250,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.Red,
    padding: 10,
    fontSize: 18
  },
  bloodtype:{
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProfileScreen 