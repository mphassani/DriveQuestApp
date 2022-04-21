//import statements 
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
import Constants from 'expo-constants';
// import { clearAllStoredData } from '../../StorageHandler';
import * as StorageHandler from "../../StorageHandler";
import { clearAllStoredData } from '../../StorageHandler';
import { Audio } from 'expo-av'

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker';
import { Alert } from 'react-native-web';
function saveSettingsData(studName, isFreeway, errorSound, currRoute) {
  // , isFreeway, sound, currRoute

  if(studName == null || isFreeway == null || errorSound  == null || currRoute == null)
  {
    alert("Please Enter Data in All Fields");
  }
  else
  {
    StorageHandler.storeStringData("STUDENT_NAME", studName);
    StorageHandler.storeStringData("USING_FREEWAY", isFreeway ? "false" : "true");
    StorageHandler.storeStringData("ERROR_SOUND", errorSound);
    StorageHandler.storeStringData("SELECTED_ROUTE", currRoute);
    alert("Data Saved");
  }
}



export default function Settings() {

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
  
    // if (errorSoundValue != null) {
    //   setStudentNameText(errorSoundValue);
    // }
  
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

  // // Error Sound
  // const [errorSound, setErrorSound] = React.useState("");
  // function saveErrorSounds(sound) {
  //   StorageHandler.storeStringData("STUDENT_NAME", text);
  // }

  // Selected Route
  function saveSelectedRoute(route) {
    console.log("HELLOO");
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
            Settings
          </Text>

        {/* Creates student name input field */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Student Name"
            mode="outlined"
            value={studentNameText}
            onChangeText={(text) => {setStudentNameText(text); saveStudentName(text);}}
          />
        </View>


         {/*Toggle*/}
          <View style={{ marginBottom: 20 }}>
           <Text style={styles.title}>
              Freeway
           </Text>
           <Text>{isFreewayEnabled ? 'ON' : 'OFF'}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#90C96A" }}
              thumbColor={isFreewayEnabled ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
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
                containerStyle={{height: 70, marginBottom: 5}}
                searchable={false}
                onSelectItem={item => {console.log(item.label, item.value, item.sound), playSound(item.value)}}
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
                onSelectItem={item => {console.log(item.label, item.value); saveSelectedRoute(item.value);}}
            />
          </View>

          {/* <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%", paddingTop: "5%" }}>  
              <Button mode="contained" color= "#12414F" onPress={() => {saveSettingsData(studentText, isFreewayEnabled, soundValue, routeValue);}}>Save Settings</Button>
          </View> */}
          {/* Creates the clear button to clear all save data from the test. */}
          {/* <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%", paddingTop: "20%" }}>  
              <Button mode="contained" color= "red" onPress={() => {StorageHandler.clearAllTestData(); alert("All test data cleared")}}>Clear Test Data</Button>
          </View> */}

        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 135,
    backgroundColor: '#f2f2f2',
    padding: 30,
  },

  //used for page title 
  paragraph: {
    marginTop: -160,
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  }

});

