//import statements 
import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
import Constants from 'expo-constants';
// import { clearAllStoredData } from '../../StorageHandler';
import * as StorageHandler from "../../StorageHandler";
import { clearAllStoredData } from '../../StorageHandler';
import { Audio } from 'expo-av'

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings() {
 //Toggle 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

  const [studentText, setStudentText] = React.useState("");

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

React.useEffect(() => {
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
            value={studentText}
            onChangeText={(text) => setStudentText(text)}
            mode="outlined"
          />
        </View>


         {/*Toggle*/}
          <View style={{ marginBottom: 20 }}>
           <Text style={styles.title}>
              Freeway
           </Text>
           <Text>{isEnabled ? 'ON' : 'OFF'}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#90C96A" }}
              thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
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
                searchable={true}
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
                searchable={true}
                onChange={item => console.log(item.label, item.value)}
            />
          </View>

          <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%", paddingTop: "5%" }}>  
              <Button mode="contained" color= "#12414F" onPress={() => {saveSettingsData(studentText, isEnabled, soundValue, routeValue);}}>Save Settings</Button>
          </View>
          {/* Creates the clear button to clear all save data from the test. */}
          <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%", paddingTop: "20%" }}>  
              <Button mode="contained" color= "red" onPress={() => {clearAllStoredData(); alert("Cleared Saved Data");}}>Clear Test Data</Button>
          </View>
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

});

