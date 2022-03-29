import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme } from 'react-native-paper';
import * as StorageHandler from "../../StorageHandler";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';



export default function TestResults() {
  const navigation = useNavigation();

  var totalScore;

  const [mechanicalDisplay, setMechanicalDisplay] = useState(0);
  const [operationalDisplay, setOperationalDisplay] = useState(0);
  const [parkinglotDisplay, setParkinglotDisplay] = useState(0);
  const [residentialDisplay, setResidentialDisplay] = useState(0);
  const [freewayDisplay, setFreewayDisplay] = useState(0);
  const [intersectionDisplay, setIntersectionDisplay] = useState(0);
  const [turningDisplay, setTurningDisplay] = useState(0);
  const [lanechangeDisplay, setLangechangeDisplay] = useState(0);
  const [autodqDisplay, setAutoDQDisplay] = useState("None");
  const [finalResultDisplay, setFinalResultDisplay] = useState("Passed");  

  useEffect(() => {
    const calcTotalScore = async () => {
      const data = await calculateScore();
      // console.log("Total Score: ", data);
    }

    calcTotalScore();
  }, []);

  async function calculateScore() {
    var passedTest = true;
    var score = 0;

    // Get scores for each section
    var preDriveMechanicalScore = await calculateMechanicalScore();
    var preDriveOperationalScore = await calculateOperationalScore();
    var parkingLotScore = await calculateParkingLotScore();
    var ResidentialScore = await calculateResidentialScore();
    var FreewayScore = await calculateFreewayScore();
    var IntersectionScore = await calculateIntersectionScore();
    var TurningScore = await calculateTurningScore();
    var LaneChangeScore = await calculateLaneChangeScore();
    
    // Show the scores in the front end
    setMechanicalDisplay(preDriveMechanicalScore);
    setOperationalDisplay(preDriveOperationalScore);
    setParkinglotDisplay(parkingLotScore);
    setResidentialDisplay(ResidentialScore);
    setFreewayDisplay(FreewayScore);
    setIntersectionDisplay(IntersectionScore);
    setTurningDisplay(TurningScore);
    setLangechangeDisplay(LaneChangeScore);

    // Auto DQ Check
    const auto_dq = await StorageHandler.getData("AUTO_DQ");
    if (auto_dq != null) {
      setAutoDQDisplay(auto_dq);
      passedTest = false;
    }

    // Mechanical Section Check
    // if (preDriveMechanicalScore < 8) {
    //   passedTest = false;
    // }

    // Operational Section Check
    // if (preDriveOperationalScore < 4) {
    //   passedTest = false;
    // }

    // Driving Section Check
    var totalDrivingScore = parkingLotScore + ResidentialScore + FreewayScore + IntersectionScore + TurningScore + LaneChangeScore;

    if (totalDrivingScore > 15) {
      passedTest = false;
    }
    
    // score += preDriveMechanicalScore + preDriveOperationalScore;


    if (passedTest) {
      setFinalResultDisplay("Passed");
    }
    else {
      setFinalResultDisplay("Failed");
    }


    // return score;
  }

  // Mechanical
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

  // Operational
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

  // Parking Lot
  async function calculateParkingLotScore() {

  }

  // Residential
  async function calculateResidentialScore() {

  }

  // Freeway
  async function calculateFreewayScore() {

  }

  // Intersection
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

    console.log("Intersection Score: ", (score))

    return score;
  }

  // Turning
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

    console.log("Turning Score: ", (score))

    return score;
  }

  // Lane Change
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

    console.log("Lane Change Score: ", (score))

    return score;
  }


  return (
    <View>

      <View style={{alignItems: 'center', justifyContent: 'center', padding: "15px"}}>
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

      <View style={styles.finalResultRow}>
        <Text style={styles.finalResultsText}>Test {finalResultDisplay}</Text>
      </View>

      <View style={styles.sendButtonContainer}>
        <Button 
          // onPress={}
          title="Send Results"
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
      marginLeft: '15px',
      marginRight: '15px',
      marginBottom: '10px',
      justifyContent: 'center',
      padding: '15px',
      display: 'inline-block',
      alignItems: 'baseline'
  },
  sectionName: {
    float: 'left',
    fontSize: 22,
    marginTop: '-6px'
  },
  sectionResult: {
    float: 'right',
    fontSize: 22,
    marginTop: '-6px',
    color: 'green'
  },
  sendButtonContainer: {
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalResultRow: {
    height: 45,
    borderRadius: 10,
    backgroundColor: 'green',
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '15px',
    justifyContent: 'center',
    padding: '15px',
    alignItems: 'center'
  },
  finalResultsText: {
    color: 'white',
    fontSize: 22,
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