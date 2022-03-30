import * as React from 'react';
import { StyleSheet, View, Text, Button, Linking } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme } from 'react-native-paper';
import * as StorageHandler from "../../StorageHandler";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';



export default function TestResults() {
  const navigation = useNavigation();

  const [emailBody, setEmailBody] = useState("Can't find email text");

  const [mechanicalDisplay, setMechanicalDisplay] = useState("Passed");
  const [operationalDisplay, setOperationalDisplay] = useState("Passed");
  const [parkinglotDisplay, setParkinglotDisplay] = useState(0);
  const [residentialDisplay, setResidentialDisplay] = useState(0);
  const [freewayDisplay, setFreewayDisplay] = useState(0);
  const [intersectionDisplay, setIntersectionDisplay] = useState(0);
  const [turningDisplay, setTurningDisplay] = useState(0);
  const [lanechangeDisplay, setLangechangeDisplay] = useState(0);
  const [autodqDisplay, setAutoDQDisplay] = useState("None");
  const [finalResultDisplay, setFinalResultDisplay] = useState("Passed");  

  const [resultBackgroundColor, setResultBackgroundColor] = useState('green');

  useEffect(() => {
    const calculateResultsOnPageLoad = async () => {
      const data = await calculateScore();
      console.log("Total Number of Errors: ", data);
    }

    calculateResultsOnPageLoad();
  }, []);

  async function calculateScore() {
    var passedTest = true;
    var totalNumErrors = 0;

    // Get number of errors for each section
    var preDriveMechanicalScore = await calculateMechanicalScore();
    var preDriveOperationalScore = await calculateOperationalScore();
    var parkingLotScore = await calculateParkingLotScore();
    var residentialScore = await calculateResidentialScore();
    var freewayScore = await calculateFreewayScore();
    var intersectionScore = await calculateIntersectionScore();
    var turningScore = await calculateTurningScore();
    var laneChangeScore = await calculateLaneChangeScore();
    
    // Show the scores in the front end

    // Mechanical Section Check
    if (preDriveMechanicalScore > 0) {
      passedTest = false;
      setMechanicalDisplay(preDriveMechanicalScore);
    }
    else {
      setMechanicalDisplay("Passed");
    }

    // Operational Section Check
    if (preDriveOperationalScore >= 4) {
      passedTest = false;
      setOperationalDisplay(preDriveOperationalScore);
    }
    else {
      setOperationalDisplay("Passed");
    }


    // // Parking Lot [Trying this]
    // if (parkingLotScore == 0) {
    //   setParkinglotDisplay("None");
    // }
    // else
    // {
    //   setParkinglotDisplay(parkingLotScore);
    // }

    // // Residential [Trying this]
    // if (residentialScore == 0) {
    //   setResidentialDisplay("None");
    // }
    // else
    // {
    //   setResidentialDisplay(residentialScore);
    // }


    setParkinglotDisplay(parkingLotScore);
    setResidentialDisplay(residentialScore);
    setFreewayDisplay(freewayScore);
    setIntersectionDisplay(intersectionScore);
    setTurningDisplay(turningScore);
    setLangechangeDisplay(laneChangeScore);

    // Auto DQ Check
    const auto_dq = await StorageHandler.getData("AUTO_DQ");
    if (auto_dq != null) {
      setAutoDQDisplay(auto_dq);
      passedTest = false;
    }



    // Driving Section Check
    var totalDrivingScore = parkingLotScore + residentialScore + freewayScore + intersectionScore + turningScore + laneChangeScore;

    if (totalDrivingScore > 15) {
      passedTest = false;
    }
    
    totalNumErrors += (preDriveMechanicalScore + preDriveOperationalScore + parkingLotScore + residentialScore + freewayScore + intersectionScore + turningScore + laneChangeScore);

    var emailTextString = "";

    if (passedTest) {
      setFinalResultDisplay("Passed");
      setResultBackgroundColor("green");
      emailTextString += "You have passed the test!\n\n";
    }
    else {
      setFinalResultDisplay("Failed");
      setResultBackgroundColor("red");
      emailTextString += "You have failed the test :(\n\n";
    }
    
    // Email Stuff
    emailTextString += "Error Breakdown:\n";
    emailTextString += "Pre-Drive Mechanical: " + preDriveMechanicalScore;
    emailTextString += "\nPre-Drive Operational: " + preDriveOperationalScore;
    emailTextString += "\nParking Lot: " + parkingLotScore;
    emailTextString += "\nResidential: " + residentialScore;
    emailTextString += "\nFreeway: " + freewayScore;
    emailTextString += "\nIntersection: " + intersectionScore;
    emailTextString += "\nTurning: " + turningScore;
    emailTextString += "\nLane Change: " + laneChangeScore;
    emailTextString += "\n\nTotal Number of Errors: " + totalNumErrors + "\n\n";
    
    const comments = await StorageHandler.getData("COMMENTS");

    if (comments != null && comments != "") {
      emailTextString += "Instructor Comments:\n" + comments;
    }

    setEmailBody(emailTextString);

    return totalNumErrors;
  }

  // Mechanical = 12
  async function calculateMechanicalScore() {

    var score = 0
    const value1 = await StorageHandler.getData("PREDRIVE_DRIVER_WINDOW");
    const value2 = await StorageHandler.getData("PREDRIVE_WINDSHIELD");
    const value3 = await StorageHandler.getData("PREDRIVE_REAR_VIEW_MIRRORS");
    const value4 = await StorageHandler.getData("PREDRIVE_RIGHT_TURN_SIGNAL");
    const value5 = await StorageHandler.getData("PREDRIVE_LEFT_TURN_SIGNAL");
    const value6 = await StorageHandler.getData("PREDRIVE_BRAKE_LIGHTS");
    const value7 = await StorageHandler.getData("PREDRIVE_TIRES");
    const value8 = await StorageHandler.getData("PREDRIVE_FOOT_BRAKES");
    const value9 = await StorageHandler.getData("PREDRIVE_HEADLIGHTS");
    const value10 = await StorageHandler.getData("PREDRIVE_PASSENGER_DOOR");
    const value11 = await StorageHandler.getData("PREDRIVE_GLOVE_BOX");
    const value12 = await StorageHandler.getData("PREDRIVE_SEATBELTS");
    
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12];
    
    for (var i in stringArray) {
      if (stringArray[i] == "true"){
        score += 1
      }
    }

    score = 12 - score;

    console.log("PreDrive Mechanical Errors: ", (score))

    return score;
  }

  // Operational = 8
  async function calculateOperationalScore() {

    var score = 0
    const value1 = await StorageHandler.getData("PREDRIVE_HORN");
    const value2 = await StorageHandler.getData("PREDRIVE_PARKING_BRAKE");
    const value3 = await StorageHandler.getData("PREDRIVE_RIGHT_ARM_SIGNAL");
    const value4 = await StorageHandler.getData("PREDRIVE_LEFT_ARM_SIGNAL");
    const value5 = await StorageHandler.getData("PREDRIVE_STOP_ARM_SIGNAL");
    const value6 = await StorageHandler.getData("PREDRIVE_WINDSHIELD_WIPERS");
    const value7 = await StorageHandler.getData("PREDRIVE_DEFROSTER");
    const value8 = await StorageHandler.getData("PREDRIVE_EMERGENCY_FLASHER");
    
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8];

    for (var i in stringArray) {
      if (stringArray[i] == "true"){
        score += 1
      }
    }

    score = 8 - score;

    console.log("PreDrive Operational Errors: ", (score))

    return score;
  }

  // Parking Lot = 4
  async function calculateParkingLotScore() {

    var score = 0;
    const value1 = await StorageHandler.getData("PARKINGLOT_MIRRORS");
    const value2 = await StorageHandler.getData("PARKINGLOT_POSITIONING");
    const value3 = await StorageHandler.getData("PARKINGLOT_SIGNAL");
    const value4 = await StorageHandler.getData("PARKINGLOT_SPEED");
    
    const valuesArray = await [value1, value2, value3, value4];
    const namesArray = ["PARKINGLOT_MIRRORS", "PARKINGLOT_POSITIONING", "PARKINGLOT_SIGNAL", "PARKINGLOT_SPEED"];

    for (var i in valuesArray) {
      if (valuesArray[i] != null) {
        score += parseInt(valuesArray[i]);
      }
    }

    console.log("Parking Lot Errors: ", (score))

    return score;
  }

  // Residential = 17
  async function calculateResidentialScore() {

    var score = 0;
    const value1 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_SAFE_DISTANCE");
    const value2 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_POSITIONING");
    const value3 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_OBSERVATION");
    const value4 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_SPEED");

    const value5 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_SAFE_DISTANCE");
    const value6 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_POSITIONING");
    const value7 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_OBSERVATION");
    const value8 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_SPEED");
    const value9 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_SIGNAL");
    const value10 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_MIRRORS");

    const value11 = await StorageHandler.getData("RESIDENTIAL_CURB_SPEED");
    const value12 = await StorageHandler.getData("RESIDENTIAL_CURB_AVOIDS_CURB");
    const value13 = await StorageHandler.getData("RESIDENTIAL_CURB_SIGNAL");

    const value14 = await StorageHandler.getData("RESIDENTIAL_REVERSING_RIGHT_SHOULDER");
    const value15 = await StorageHandler.getData("RESIDENTIAL_REVERSING_AVOIDS_CURB");
    const value16 = await StorageHandler.getData("RESIDENTIAL_REVERSING_MIRRORS");
    const value17 = await StorageHandler.getData("RESIDENTIAL_REVERSING_SPEED");
    const stringArray = await [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17];

    for (var i in stringArray) {
      if (stringArray[i] != null) {
        score += parseInt(stringArray[i]);
      }
    }

    console.log("Residential Errors: ", (score))

    return score;
  }

  // Freeway = 34
  async function calculateFreewayScore() {

    var score = 0;
    const value1 = await StorageHandler.getData("FREEWAY_ENTERING_SCANNING");
    const value2 = await StorageHandler.getData("FREEWAY_ENTERING_TRAFFIC_CHECK");
    const value3 = await StorageHandler.getData("FREEWAY_ENTERING_ENTER_SPEED");
    const value4 = await StorageHandler.getData("FREEWAY_ENTERING_POSITIONING");
    const value5 = await StorageHandler.getData("FREEWAY_ENTERING_SIGNAL");
    const value6 = await StorageHandler.getData("FREEWAY_DRIVING_TRAFFIC_CHECK");
    const value7 = await StorageHandler.getData("FREEWAY_DRIVING_SPEED");
    const value8 = await StorageHandler.getData("FREEWAY_DRIVING_POSITIONING");
    const value9 = await StorageHandler.getData("FREEWAY_DRIVING_SIGNAL");

    const value10 = await StorageHandler.getData("FREEWAY_EXITING_TRAFFIC_CHECK");
    const value11 = await StorageHandler.getData("FREEWAY_EXITING_EXIT_SPEED");
    const value12 = await StorageHandler.getData("FREEWAY_EXITING_POSITIONING");
    const value13 = await StorageHandler.getData("FREEWAY_EXITING_SIGNAL");
    const value14 = await StorageHandler.getData("FREEWAY_EXITING_YIELD");
    const value15 = await StorageHandler.getData("FREEWAY_EXITING_CORRECT_LANE");
    const value16 = await StorageHandler.getData("FREEWAY_EXITING_SPEED");

    const value17 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_DRIVER_SIDE_MIRROR");
    const value18 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_REAR_VIEW_MIRROR");
    const value19 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_PASSENGER_SIDE_MIRROR");
    const value20 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_LEFT_SHOULDER");
    const value21 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_RIGHT_SHOULDER");
    const value22 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_SIGNAL");
    const value23 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_SPEED");
    const value24 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_SPACING");
    const value25 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_LEFT_STEERING_CONTROL");
    const value26 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_DRIVER_SIDE_MIRROR");
    const value27 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_REAR_VIEW_MIRROR");
    const value28 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_PASSENGER_SIDE_MIRROR");
    const value29 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_LEFT_SHOULDER");
    const value30 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_RIGHT_SHOULDER");
    const value31 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_SIGNAL");
    const value32 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_SPEED");
    const value33 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_SPACING");
    const value34 = await StorageHandler.getData("FREEWAY_LANE_CHANGE_RIGHT_STEERING_CONTROL");
    const stringArray = await [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21, value22, value23, value24, value25, value26, value27, value28, value29, value30, value31, value32, value33, value34];

    for (var i in stringArray) {
      if (stringArray[i] != null) {
        score += parseInt(stringArray[i]);
      }
    }

    console.log("Freeway Errors: ", (score))

    return score;
  }

  // Intersection = 11
  async function calculateIntersectionScore() {

    var score = 0
    const value1 = await StorageHandler.getData("INTERSECTION_THROUGH_TRAFFIC_CHECK");
    const value2 = await StorageHandler.getData("INTERSECTION_THROUGH_SPEED");
    const value3 = await StorageHandler.getData("INTERSECTION_THROUGH_UNNECESSARY_STOP");
    const value4 = await StorageHandler.getData("INTERSECTION_THROUGH_YIELD");
    const value5 = await StorageHandler.getData("INTERSECTION_STOP_GAP_LIMIT_LINE");
    const value6 = await StorageHandler.getData("INTERSECTION_STOP_BRAKING");
    const value7 = await StorageHandler.getData("INTERSECTION_STOP_TRAFFIC_CHECK");
    const value8 = await StorageHandler.getData("INTERSECTION_STOP_FULL_STOP");
    const value9 = await StorageHandler.getData("INTERSECTION_START_TRAFFIC_CHECK");
    const value10 = await StorageHandler.getData("INTERSECTION_START_SPEED");
    const value11 = await StorageHandler.getData("INTERSECTION_START_YIELD");
    
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11];

    for (var i in stringArray) {
      if (stringArray[i] != null) {
        score += parseInt(stringArray[i]);
      }
    }

    console.log("Intersection Errors: ", (score))

    return score;
  }

  // Turning = 36
  async function calculateTurningScore() {

    var score = 0
    const value1 = await StorageHandler.getData("TURNS_LEFT_APPROACH_TRAFFIC_CHECK");
    const value2 = await StorageHandler.getData("TURNS_LEFT_APPROACH_SIGNAL");
    const value3 = await StorageHandler.getData("TURNS_LEFT_APPROACH_BRAKING");
    const value4 = await StorageHandler.getData("TURNS_LEFT_APPROACH_YIELD");
    const value5 = await StorageHandler.getData("TURNS_LEFT_APPROACH_LANE_USE");
    const value6 = await StorageHandler.getData("TURNS_LEFT_APPROACH_UNNECESSARY_STOP");
    const value7 = await StorageHandler.getData("TURNS_LEFT_STOP_GAP_LIMIT_LINE");
    const value8 = await StorageHandler.getData("TURNS_LEFT_STOP_TRAFFIC_CHECK");
    const value9 = await StorageHandler.getData("TURNS_LEFT_STOP_WHEELS_STRAIGHT");
    const value10 = await StorageHandler.getData("TURNS_LEFT_STOP_FULL_STOP");
    const value11 = await StorageHandler.getData("TURNS_LEFT_DURING_TRAFFIC_CHECK");
    const value12 = await StorageHandler.getData("TURNS_LEFT_DURING_STEERING_CONTROL");
    const value13 = await StorageHandler.getData("TURNS_LEFT_DURING_TOO_WIDE");
    const value14 = await StorageHandler.getData("TURNS_LEFT_DURING_TOO_SHORT");
    const value15 = await StorageHandler.getData("TURNS_LEFT_DURING_YIELD");
    const value16 = await StorageHandler.getData("TURNS_LEFT_DURING_CORRECT_LANE");
    const value17 = await StorageHandler.getData("TURNS_LEFT_DURING_SPEED");
    const value18 = await StorageHandler.getData("TURNS_LEFT_DURING_SIGNAL");

    const value19 = await StorageHandler.getData("TURNS_RIGHT_APPROACH_TRAFFIC_CHECK");
    const value20 = await StorageHandler.getData("TURNS_RIGHT_APPROACH_SIGNAL");
    const value21 = await StorageHandler.getData("TURNS_RIGHT_APPROACH_BRAKING");
    const value22 = await StorageHandler.getData("TURNS_RIGHT_APPROACH_YIELD");
    const value23 = await StorageHandler.getData("TURNS_RIGHT_APPROACH_LANE_USE");
    const value24 = await StorageHandler.getData("TURNS_RIGHT_APPROACH_UNNECESSARY_STOP");
    const value25 = await StorageHandler.getData("TURNS_RIGHT_STOP_GAP_LIMIT_LINE");
    const value26 = await StorageHandler.getData("TURNS_RIGHT_STOP_TRAFFIC_CHECK");
    const value27 = await StorageHandler.getData("TURNS_RIGHT_STOP_WHEELS_STRAIGHT");
    const value28 = await StorageHandler.getData("TURNS_RIGHT_STOP_FULL_STOP");
    const value29 = await StorageHandler.getData("TURNS_RIGHT_DURING_TRAFFIC_CHECK");
    const value30 = await StorageHandler.getData("TURNS_RIGHT_DURING_STEERING_CONTROL");
    const value31 = await StorageHandler.getData("TURNS_RIGHT_DURING_TOO_WIDE");
    const value32 = await StorageHandler.getData("TURNS_RIGHT_DURING_TOO_SHORT");
    const value33 = await StorageHandler.getData("TURNS_RIGHT_DURING_YIELD");
    const value34 = await StorageHandler.getData("TURNS_RIGHT_DURING_CORRECT_LANE");
    const value35 = await StorageHandler.getData("TURNS_RIGHT_DURING_SPEED");
    const value36 = await StorageHandler.getData("TURNS_RIGHT_DURING_SIGNAL");
    
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18,value19,value20,value21,value22,value23,value24,value25,value26,value27,value28,value29,value30,value31,value32,value33,value34,value35,value36];

    for (var i in stringArray) {
      if (stringArray[i] != null) {
        score += parseInt(stringArray[i]);
      }
    }

    console.log("Turning Errors: ", (score))

    return score;
  }

  // Lane Change = 18
  async function calculateLaneChangeScore() {

    var score = 0
    const value1 = await StorageHandler.getData("LANECHANGE_RIGHT_DRIVER_SIDE_MIRROR");
    const value2 = await StorageHandler.getData("LANECHANGE_RIGHT_REAR_VIEW_MIRROR");
    const value3 = await StorageHandler.getData("LANECHANGE_RIGHT_PASSENGER_SIDE_MIRROR");
    const value4 = await StorageHandler.getData("LANECHANGE_RIGHT_LEFT_SHOULDER");
    const value5 = await StorageHandler.getData("LANECHANGE_RIGHT_RIGHT_SHOULDER");
    const value6 = await StorageHandler.getData("LANECHANGE_RIGHT_SIGNAL");
    const value7 = await StorageHandler.getData("LANECHANGE_RIGHT_SPEED");
    const value8 = await StorageHandler.getData("LANECHANGE_RIGHT_SPACING");
    const value9 = await StorageHandler.getData("LANECHANGE_RIGHT_STEERING_CONTROL");

    const value10 = await StorageHandler.getData("LANECHANGE_LEFT_DRIVER_SIDE_MIRROR");
    const value11 = await StorageHandler.getData("LANECHANGE_LEFT_REAR_VIEW_MIRROR");
    const value12 = await StorageHandler.getData("LANECHANGE_LEFT_PASSENGER_SIDE_MIRROR");
    const value13 = await StorageHandler.getData("LANECHANGE_LEFT_LEFT_SHOULDER");
    const value14 = await StorageHandler.getData("LANECHANGE_LEFT_RIGHT_SHOULDER");
    const value15 = await StorageHandler.getData("LANECHANGE_LEFT_SIGNAL");
    const value16 = await StorageHandler.getData("LANECHANGE_LEFT_SPEED");
    const value17 = await StorageHandler.getData("LANECHANGE_LEFT_SPACING");
    const value18 = await StorageHandler.getData("LANECHANGE_LEFT_STEERING_CONTROL");
    
    const stringArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18];

    for (var i in stringArray) {
      if (stringArray[i] != null) {
        score += parseInt(stringArray[i]);
      }
    }

    console.log("Lane Change Errors: ", (score))

    return score;
  }


  return (
    <View>

      <View style={{alignItems: 'center', justifyContent: 'center', padding: 25}}>
      <Text style={styles.title}>Results</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Pre-Drive Mechanical</Text>
        <Text style={styles.sectionResult}>{mechanicalDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Pre-Drive Operational</Text>
        <Text style={styles.sectionResult}>{operationalDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Parking Lot</Text>
        <Text style={styles.sectionResult}>{parkinglotDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Residential</Text>
        <Text style={styles.sectionResult}>{residentialDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Freeway</Text>
        <Text style={styles.sectionResult}>{freewayDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Intersection</Text>
        <Text style={styles.sectionResult}>{intersectionDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Turning</Text>
        <Text style={styles.sectionResult}>{turningDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Lane Change</Text>
        <Text style={styles.sectionResult}>{lanechangeDisplay}</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Auto DQ</Text>
        <Text style={styles.sectionResult}>{autodqDisplay}</Text>
      </View>

      <View style={[styles.finalResultRow, {backgroundColor: resultBackgroundColor}]}>
        <Text style={styles.finalResultsText}>Test {finalResultDisplay}</Text>
      </View>

      <View style={styles.sendButtonContainer}>
        <Button 
          onPress={() => Linking.openURL(`mailto:student@example.com?subject=Drive Quest Test Results&body=${emailBody}`) }

          title="Email Results"
          color="#841584"
        />
      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  title: {
    fontSize: 25, 
    fontWeight: 'bold'
  },
  sectionRow: {
      height: 45,
      borderRadius: 10,
      backgroundColor: 'white',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
      
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
      paddingBottom: 5,
      alignItems: 'baseline',
      flexDirection:'row', 
      flexWrap:'wrap'
  },
  sectionName: {
    flex: 1,
    textAlign: "left",
    fontSize: 22,
    marginTop: -6
  },
  sectionResult: {
    textAlign: "right",
    fontSize: 22,
    marginTop: -6,
    color: 'green',
    fontWeight: "500"
  },
  sendButtonContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalResultRow: {
    height: 45,
    borderRadius: 10,
    // backgroundColor: 'green',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: 'center'
  },
  finalResultsText: {
    color: 'white',
    fontSize: 22,
    marginTop: -10,
    fontWeight: 'bold'
  }
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#12414F',
     
  },
};