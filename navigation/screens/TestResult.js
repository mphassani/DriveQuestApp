import * as React from 'react';
import { View, Text } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme } from 'react-native-paper';
import * as StorageHandler from "../../StorageHandler";
import { useEffect, useState } from "react";



export default function TestResults({ navigation }) {
  useEffect(() => {
    console.log("testing");
    score = calculateScore();
    console.log(score)
  }, []);

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
        </View>
      </List.AccordionGroup>
    </PaperProvider>
  );
  function calculateScore() {
    testPass = false
    if (passAutoDQ()) {
      if (passPredriveSection()) {
        if (passDrivingSection()) {
          testPass = true
        }
      }
    }
    return testPass
  }
  
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
  function passPredriveSection() {
    console.log("in predrive check")
    armSignalScore = 0
    if ((StorageHandler.getData("PREDRIVE_RIGHT_ARM_SIGNAL") + StorageHandler.getData("PREDRIVE_LEFT_ARM_SIGNAL") + StorageHandler.getData("PREDRIVE_STOP_ARM_SIGNAL")) == 3) {
      armSignalScore = 1
    }
    mechanicalScore = 0
    console.log(StorageHandler.getData("PREDRIVE_DRIVER_WINDOW"))
    mechanicalScore = StorageHandler.getData("PREDRIVE_DRIVER_WINDOW") + StorageHandler.getData("PREDRIVE_WINDSHIELD") + StorageHandler.getData("PREDRIVE_REAR_VIEW_MIRRORS") + StorageHandler.getData("PREDRIVE_LEFT_TURN_SIGNAL") + StorageHandler.getData("PREDRIVE_RIGHT_TURN_SIGNAL") + StorageHandler.getData("PREDRIVE_BRAKE_LIGHTS") + StorageHandler.getData("PREDRIVE_TIRES") + StorageHandler.getData("PREDRIVE_FOOT_BRAKES") + StorageHandler.getData("PREDRIVE_HORN") + StorageHandler.getData("PREDRIVE_PASSENGER_DOOR") + StorageHandler.getData("PREDRIVE_GLOVE_BOX") + StorageHandler.getData("PREDRIVE_SEATBELTS")
    operationalScore = 0
    operationalScore = StorageHandler.getData("PREDRIVE_PARKING_BRAKE") + armSignalScore + StorageHandler.getData("PREDRIVE_WINDSHIELD_WIPERS") + StorageHandler.getData("PREDRIVE_DEFROSTER") + StorageHandler.getData("PREDRIVE_EMERGENCY_FLASHER") + StorageHandler.getData("PREDRIVE_PREDRIVE_HEADLIGHTS")
    if (!(mechanicalScore == 12)) {
      console.log(mechanicalScore)
      console.log("fail mechanical score")
      return false
    }
    if (operationalScore <= 4) {
      console.log("fail operational score")
      return false
    }
    else {
      return true
    }
  }
  
  function passDrivingSection() {
    residentialCount = 0
    intersectionCount = 0
    turnsCount = 0
    lanechangeCount = 0
    freewayCount = 0
    totalCount = parkinglotCount + residentialCount + businessCount + reversingCount + freewayCount + intersectionCount + turnsCount + lanechangeCount
    if (totalCount > 15) {
      return false
    }
    else {
      return true
    }
  }
  
  function passAutoDQ() {
    autoDQ = false
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