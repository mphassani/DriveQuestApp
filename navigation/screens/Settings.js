//import statements 
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import Constants from 'expo-constants';

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings() {
  //used to create sound dropdown 
  const [soundOpen, setSoundOpen] = useState(false);
  const [soundValue, setSoundValue] = useState(null);
  const [soundItems, setSoundItems] = useState([
    {label: 'No Sound', value: '1'},
    {label: 'Bell', value: '2'},
    {label: 'Horn', value: '3'},
    {label: 'Oink', value: '4'},
    {label: 'Police siren', value: '5'},
    {label: 'Piano', value: '6'},
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

  const [instructorText, setInstructorText] = React.useState("");

  const [studentText, setStudentText] = React.useState("");

  const [dateText, setDateText] = React.useState("");

  return (
    /* FIXME: figure out how to send previously chosen values to this page? 
        is date already saved to DB? is instructor name already stored with login key?
        should driver's name be included on the menu page Christian and Kevin were working on? (before starting a new test)
        should save button just go to home page? check in with DB to store any needed data?
    */
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Settings
        </Text>

         {/* Creates student name input field */}
         {/* FIXME: check in with DB? is this already stored with the login key? */}
        <View style={{ marginBottom: 15 }}>
        <TextInput
          label="Instructor Name"
          value={instructorText}
          onChangeText={(text) => setInstructorText(text)}
          mode="outlined"
        />
      </View>

      {/* Creates student name input field */}
      {/* FIXME: check in with DB? should this be on the menu page Christian and Kevin were creating? */}
      <View style={{ marginBottom: 20 }}>
        <TextInput
          label="Student Name"
          value={studentText}
          onChangeText={(text) => setStudentText(text)}
          mode="outlined"
        />
      </View>

      {/* Creates date input field */}
      {/* FIXME: find date picker package? check in with DB? */}
      <View style={{ marginBottom: 20 }}>
        <TextInput
          label="Date"
          value={dateText}
          onChangeText={(text) => setDateText(text)}
          mode="outlined"
        />
      </View>

      <Text style={styles.title}>
          Sounds
        </Text>

        {/* Creates searchable sound dropdown */}
        <View style={{zIndex: 2}}>
          <DropDownPicker 
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
              onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>
        
        <Text style={styles.title}>
          Current Route
        </Text>

        {/* Creates searchable route dropdown */}
        <View style={{zIndex: 1}}>
          <DropDownPicker
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
              onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>

        {/* Creates the save settings button */}
        <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%" }}>  
            <Button color= "#12414F">Save Settings</Button>
        </View>

        {/* Creates the clear button to clear all save data from the test. */}
        <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%" }}>  
            <Button color= "#12414F" onPress={() => {clearAllStoredData(); alert("Cleared Saved Data");}}>Clear Test Data</Button>
        </View>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 150,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },

  //used for page title 
  paragraph: {
    marginTop: -50,
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
