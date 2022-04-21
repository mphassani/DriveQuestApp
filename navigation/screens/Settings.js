//import statements 
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch, Pressable } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
import Constants from 'expo-constants';
// import { clearAllStoredData } from '../../StorageHandler';
import * as StorageHandler from "../../StorageHandler";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av'

import DropDownPicker from 'react-native-dropdown-picker';




export default function Settings(props) {
  const navigation = useNavigation();

  var pageTitle = "Settings";
  
  if (props.pageTitle != null){
    pageTitle = props.pageTitle;
  }

  const [isOnTestConfig, setIsOnTestConfig] = useState(false);



  

  async function setToInitalSavedValues() {
  
    const studentNameValue = await StorageHandler.getData("STUDENT_NAME");
    const usingFreewayValue = await StorageHandler.getData("USING_FREEWAY");
    const errorSoundValue = await StorageHandler.getData("ERROR_SOUND");
    const selectedRouteValue = await StorageHandler.getData("SELECTED_ROUTE");
  
    if (studentNameValue != null) {
      setStudentNameText(studentNameValue);
    }
  
    if (usingFreewayValue != null && usingFreewayValue == "true") {
      setIsFreewayEnabled(true);
    }
  
    if (errorSoundValue != null) {
      setSoundValue(errorSoundValue);
    }
  
    if (selectedRouteValue != null) {
      setRouteValue(selectedRouteValue);
    }
  }

  // Freeway Toggle
  const [isFreewayEnabled, setIsFreewayEnabled] = useState(false);
  const toggleSwitch = () => {setIsFreewayEnabled(previousState => !previousState); saveFreewayToggle(!isFreewayEnabled);};
  function saveFreewayToggle(isFreewayEnabled) {
    if (isFreewayEnabled == true) {
      StorageHandler.storeStringData("USING_FREEWAY", "true");
    }
    else {
      StorageHandler.storeStringData("USING_FREEWAY", "false");
    }
  }

  //Student Name
  const [studentNameText, setStudentNameText] = React.useState("");
  function saveStudentName(text) {
    StorageHandler.storeStringData("STUDENT_NAME", text);
  }

  // Error Sound
  function saveErrorSounds(sound) {
    StorageHandler.storeStringData("ERROR_SOUND", sound);
  }

  // Selected Route
  function saveSelectedRoute(route) {
    StorageHandler.storeStringData("SELECTED_ROUTE", route);
  }


  //used to create sound dropdown 
  const [soundOpen, setSoundOpen] = useState(false);
  const [soundValue, setSoundValue] = useState(null);
  const [soundItems, setSoundItems] = useState([
    {label: 'No Sound', value: '1', sound: null},
    {label: 'Fart', value: '2', sound: '../../assets/buttonPress2.wav'},
    {label: 'Bell', value: '3', sound: '../../assets/buttonPress4.wav'},
    {label: 'Video Game', value: '4', sound: '../../assets/buttonPress5.wav'},
    {label: 'Police siren', value: '5', sound: '../../assets/buttonPress6.wav'},
  ]);

  //used to create route dropdown 
  const [routeOpen, setRouteOpen] = useState(false);
  const [routeValue, setRouteValue] = useState(null);
  const [routeItems, setRouteItems] = useState([
    {label: 'Route A', value: 'A'},
    {label: 'Route B', value: 'B'},
    {label: 'Route C', value: 'C'},
    {label: 'Route D', value: 'D'},
    {label: 'Route E', value: 'E'},
  ]);


  const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#707070',
      accent: '#FFFFFF',
    },
  };

  const [sound, setSound] = React.useState();

async function playSound(soundNum) {
  console.log('Loading Sound');
  
  if (soundNum == 2) {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/buttonPress2.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }
  else if (soundNum == 3) {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/buttonPress4.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }
  else if (soundNum == 4){
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/buttonPress5.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }
  else if (soundNum == 5){
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/buttonPress6.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }
  //setSound(sound);



console.log('Playing Sound');
  //await sound.playAsync();
}



useEffect(() => {

  if (props.pageTitle == "Test Configuraton"){
    setIsOnTestConfig(true);
  }
  else {
    setIsOnTestConfig(false);
  }

  setToInitalSavedValues();

  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync(); }
    : undefined;
}, [sound]);

  return (
    <PaperProvider theme = {theme}>
        <View style={styles.container}>
          
          <Text style={styles.paragraph}>
            {pageTitle}
          </Text>

        {/* Creates student name input field */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Student Name"
            mode="outlined"
            returnKeyType="done"
            value={studentNameText}
            onChangeText={(text) => {setStudentNameText(text); saveStudentName(text);}}
          />
        </View>


        {/*Toggle*/}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleTitle}>
              Freeway
          </Text>

          <Switch
              style={styles.toggleSwitch}
              trackColor={{ false: "#767577", true: "#90C96A" }}
              thumbColor={isFreewayEnabled ? "#ffffff" : "#ffffff"}
              onValueChange={toggleSwitch}
              value={isFreewayEnabled}
            />
        </View>


        <Text style={styles.title}>
            Sounds
        </Text>

          {/* Creates searchable sound dropdown */}
          <View style={{zIndex: 2}}>
            <DropDownPicker 
                allowFontScaling={false}
                showArrowIcon={true}
                open={soundOpen}
                value={soundValue}
                items={soundItems}
                setOpen={setSoundOpen}
                setValue={setSoundValue}
                setItems={setSoundItems}
                placeholder='Select a sound'
                defaultIndex={0}
                containerStyle={{height: 70, marginBottom: 0}}
                searchable={false}
                onSelectItem={item => {console.log(item.label, item.value, item.sound), playSound(item.value), saveErrorSounds(item.value)}}
            />
          </View>
          
          <Text style={styles.title}>
            Current Route
          </Text>

          {/* Creates searchable route dropdown */}
          <View style={{zIndex: 1}}>
            <DropDownPicker
                allowFontScaling={false}
                showArrowIcon={true}
                open={routeOpen}
                value={routeValue}
                items={routeItems}
                setOpen={setRouteOpen}
                setValue={setRouteValue}
                setItems={setRouteItems}
                placeholder='Select a route'
                defaultIndex={0}
                containerStyle={{height: 70}}
                searchable={false}
                onSelectItem={item => {console.log(item.label, item.value), saveSelectedRoute(item.value)}}
            />
          </View>


          
          <Pressable
          onPress={() => navigation.navigate("Home") }
          style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
          display = {isOnTestConfig ? "flex" : "none"}
          >
            <Text style={styles.ButtonText}>Start Test</Text>

          </Pressable>
          

        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight + 135,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },

  //used for page title 
  paragraph: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },


  toggleContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 15,
  },
  toggleTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    // alignItems: 'center', //Centered vertically
    marginTop: 5,
  },
  toggleSwitch: {

  },



  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},




});

