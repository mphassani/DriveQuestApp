import * as React from 'react';
import { View, Text } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme, Button } from 'react-native-paper';
import * as StorageHandler from "../../StorageHandler";
import { useEffect, useState } from "react";



export default function TestResults({ navigation }) {

  var totalScore;

  useEffect(() => {
    const calcTotalScore = async () => {
      const data = await calculateScore();
      console.log("Use Effect Total Score: ", data);
    }

    calcTotalScore();
  }, []);

  async function calculateScore() {
    var testPass = false;
    var score = 0;
    var preDriveMechanicalScore = await calculateMechanicalScore();
    var preDriveOperationalScore = await calculateOperationalScore();
    
    score += preDriveMechanicalScore + preDriveOperationalScore;

    return score;
  }

  async function calculateMechanicalScore() {

    var score = 0
    const value1 = await StorageHandler.getData("PREDRIVE_DRIVER_WINDOW");
    const value2 = await StorageHandler.getData("PREDRIVE_WINDSHIELD");
    const value3 = await StorageHandler.getData("PREDRIVE_REAR_VIEW_MIRRORS");
    const value4 = await StorageHandler.getData("PREDRIVE_LEFT_TURN_SIGNAL");
    const value5 = await StorageHandler.getData("PREDRIVE_RIGHT_TURN_SIGNAL");
    const value6 = await StorageHandler.getData("PREDRIVE_BRAKE_LIGHTS");
    const value7 = await StorageHandler.getData("PREDRIVE_TIRES");
    const value8 = await StorageHandler.getData("PREDRIVE_FOOT_BRAKES");
    const value9 = await StorageHandler.getData("PREDRIVE_HORN");
    const value10 = await StorageHandler.getData("PREDRIVE_PASSENGER_DOOR");
    const value11 = await StorageHandler.getData("PREDRIVE_GLOVE_BOX");
    const value12 = await StorageHandler.getData("PREDRIVE_SEATBELTS");
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12];
    
    for (var i in stringArray) {
      if (stringArray[i] == "true"){
        score += 1
      }
    }

    console.log("PreDrive Mechanical Score: ", (score))

    return score;
  }

  async function calculateOperationalScore() {

    var score = 0
    const value1 = await StorageHandler.getData("PREDRIVE_PARKING_BRAKE");
    const value2 = await StorageHandler.getData("PREDRIVE_RIGHT_ARM_SIGNAL");
    const value3 = await StorageHandler.getData("PREDRIVE_LEFT_ARM_SIGNAL");
    const value4 = await StorageHandler.getData("PREDRIVE_STOP_ARM_SIGNAL");
    const value5 = await StorageHandler.getData("PREDRIVE_WINDSHIELD_WIPERS");
    const value6 = await StorageHandler.getData("PREDRIVE_DEFROSTER");
    const value7 = await StorageHandler.getData("PREDRIVE_EMERGENCY_FLASHER");
    const value8 = await StorageHandler.getData("PREDRIVE_HEADLIGHTS");
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8];

    for (var i in stringArray) {
      if (stringArray[i] == "true"){
        score += 1
      }
    }

    console.log("PreDrive Operational Score: ", (score))

    return score;
  }



  return (
    <PaperProvider>
      <List.AccordionGroup>

        <List.Accordion title="Pre-Drive Check Results" id="1">
          <List.Item title="Item 1" />
        </List.Accordion>


        <List.Accordion title="Parking Lot Results" id="2">
          <List.Item title="Item 2" />
        </List.Accordion>


        <List.Accordion title="Residential Results" id="3">
          <List.Item title="Item 2" />
        </List.Accordion>



        <List.Accordion title="Reversing Results" id="4">
          <List.Item title="Item 2" />
        </List.Accordion>



        <List.Accordion title="Freeway Results" id="5">
          <List.Item title="Item 2" />
        </List.Accordion>


        <List.Accordion title="Parking Results" id="6">
          <List.Item title="Item 2" />
        </List.Accordion>


        <List.Accordion title="Turning Results" id="7">
          <List.Item title="Item 2" />
        </List.Accordion>


        <View>

          <List.Accordion title="Lane Change Results" id="8">
            <List.Item title="Item 3" />
          </List.Accordion>
          <Text>


            Overall Score: PASS/NOT PASS
          </Text>

          <Button
          mode="contained"
          onPress={() => getTotalScore()}
          >
            Test
          </Button>
        </View>
      </List.AccordionGroup>
    </PaperProvider>
  );
  
  
  // mechanical:
  // PREDRIVE_DRIVER_WINDOW
  // PREDRIVE_WINDSHIELD
  // PREDRIVE_REAR_VIEW_MIRRORS
  // PREDRIVE_LEFT_TURN_SIGNAL
  // PREDRIVE_RIGHT_TURN_SIGNAL
  // PREDRIVE_BRAKE_LIGHTS
  // PREDRIVE_TIRES
  // PREDRIVE_FOOT_BRAKES
  // PREDRIVE_HORN
  // PREDRIVE_PASSENGER_DOOR
  // PREDRIVE_GLOVE_BOX
  // PREDRIVE_SEATBELTS
  // operational:
  // PREDRIVE_PARKING_BRAKE
  // PREDRIVE_RIGHT_ARM_SIGNAL
  // PREDRIVE_LEFT_ARM_SIGNAL
  // PREDRIVE_STOP_ARM_SIGNAL
  // PREDRIVE_WINDSHIELD_WIPERS
  // PREDRIVE_DEFROSTER
  // PREDRIVE_EMERGENCY_FLASHER
  // PREDRIVE_HEADLIGHTS
  
  
  function passDrivingSection() {
    var residentialCount = 0
    var intersectionCount = 0
    var turnsCount = 0
    var lanechangeCount = 0
    var freewayCount = 0
    totalCount = parkinglotCount + residentialCount + businessCount + reversingCount + freewayCount + intersectionCount + turnsCount + lanechangeCount
    if (totalCount > 15) {
      return false
    }
    else {
      return true
    }
  }
  
  function passAutoDQ() {
    var autoDQ = false
    if (autoDQ){
      return false
    }
    else {
      return true
    }
  }
  
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#12414F',
      accent: '#90C96A',
    },
  };
}