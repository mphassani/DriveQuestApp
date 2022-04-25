import * as React from 'react';
import { StyleSheet, View, Text, Linking, ScrollView, TextInput, Pressable, KeyboardAvoidingView, RefreshControl, Share, Alert } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme} from 'react-native-paper';
import * as StorageHandler from "../../StorageHandler";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';


var passedTest = true;
var totalNumberOfErrors = 0;

var preDriveMechanicalValues = [];
var preDriveOperationalValues = [];
var parkinglotValues = [];
var residentialValues = [];
var freewayValues = [];
var intersectionValues = [];
var turningValues = [];
var lanechangeValues = [];
var autoDQValues = [];

var preDriveMechanicalErrors = 0;
var preDriveOperationalErrors = 0;
var parkinglotErrors = 0;
var residentialErrors = 0;
var freewayErrors = 9999;
var intersectionErrors = 0;
var turningErrors = 0;
var lanechangeErrors = 0;
var autoDQErrors = 0;

var usingFreeway = true;

var selectedRoute = "selected_route";
var instructorName = "instructor_name";
var instructorEmail = ""
var studentName = "student_name";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function TestResults() {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    calculateTestResults();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [predriveDisplay, setPredriveDisplay] = useState("Loading...");
  const [mechanicalDisplay, setMechanicalDisplay] = useState("Loading...");
  const [operationalDisplay, setOperationalDisplay] = useState("Loading...");
  const [parkinglotDisplay, setParkinglotDisplay] = useState("Loading...");
  const [residentialDisplay, setResidentialDisplay] = useState("Loading...");
  const [freewayDisplay, setFreewayDisplay] = useState("Loading...");
  const [intersectionDisplay, setIntersectionDisplay] = useState("Loading...");
  const [turningDisplay, setTurningDisplay] = useState("Loading...");
  const [lanechangeDisplay, setLangechangeDisplay] = useState("Loading...");
  const [autoDQDisplay, setAutoDQDisplay] = useState("Loading...");
  const [finalResultDisplay, setFinalResultDisplay] = useState("Loading...");

  const [resultBackgroundColor, setResultBackgroundColor] = useState('#90C96A');

  const headerHeight = useHeaderHeight();
  const [commentsForStudentText, setCommentsForStudentText] = React.useState("");
  const [commentsForInstructorText, setCommentsForInstructorText] = React.useState("");

  function saveComment(storageKey, text) {
    StorageHandler.storeStringData(storageKey, text);
  }



  // Section Names Arrays
  const predriveNamesArray = ["Brake Lights", "Defroster","Driver Window", "Emergency/Parking Brake", "Emergency Flasher", "Foot Brake", "Glove Box", "Headlights", "Horn", "Left Arm Signal", "Right Arm Signal", "Stop Arm Signal", "Passenger Door", "Rearview Mirrors", "Left Turn Signal", "Right Turn Signal", "Seatbelts", "Tires", "Windshield", "Windshield Wipers"];
  const mechanicalNamesArray = ["Driver Window", "Windshield", "Rearview Mirrors", "Right Turn Signal", "Left Turn Signal", "Brake Lights", "Tires", "Foot Brake", "Headlights", "Passenger Door", "Glove Box", "Seatbelts"];
  const operationalNamesArray = ["Horn", "Emergency/Parking Prake", "Right Arm Signal", "Left Arm Signal", "Stop Arm Signal", "Windshield Wipers", "Defroster", "Emergency Flasher"];
  const parkinglotNamesArray = ["Signal", "Speed", "Traffic Check", "Positioning"];
  const residentialNamesArray = ["Residential Observation", "Residential Positioning", "Residential Safe Distance" ,"Residential Speed", "Business Observation", "Business Positioning", "Business Safe Distance", "Business Signal", "Business Speed", "Business Traffic Check", "Curb Signal", "Curb Speed", "Curb Steering Control", "Curb Visual Search", "Reversing Right Shoulder", "Reversing Speed", "Reversing Steering Control", "Reversing Traffic Check"];
  const freewayNamesArray = ["Entering Scanning", "Entering Traffic Check", "Entering Enter Speed", "Entering Positioning", "Entering Signal", "Driving Traffic Check", "Driving Speed", "Driving Positioning", "Driving Signal", "Exiting Traffic Check", "Exiting Exit Speed", "Exiting Positioning", "Exiting Signal", "Exiting Yield", "Exiting Correct Lane", "Exiting Speed", "Lane Change Left Driver Side Mirror", "Lane Change Left Rear View Mirror", "Lane Change Left Passenger Side Mirror", "Lane Change Left Left Shoulder", "Lane Change Left Right Shoulder", "Lane Change Left Signal", "Lane Change Left Speed", "Lane Change Left Spacing", "Lane Change Left Steering Control", "Lane Change Right Driver Side Mirror", "Lane Change Right Rear View Mirror", "Lane Change Right Passenger Side Mirror", "Lane Change Right Left Shoulder", "Lane Change Right Right Shoulder", "Lane Change Right Signal", "Lane Change Right Speed", "Lane Change Right Spacing", "Lane Change Right Steering Control"];
  const intersectionNamesArray = ["Through Traffic Check", "Through Speed", "Through Unnecessary Stop", "Through Yield", "Stop Gap Limit Line", "Stop Braking", "Stop Traffic Check", "Stop Full Stop", "Start Traffic Check", "Start Speed", "Start Yield"];
  const lanechangeNamesArray = ["Right Driver Side Mirror", "Right Rear View Mirror", "Right Passenger Side Mirror", "Right Left Shoulder", "Right Right Shoulder", "Right Signal", "Right Speed", "Right Spacing", "Right Steering Control", "Left Driver Side Mirror", "Left Rear View Mirror", "Left Passenger Side Mirror", "Left Left Shoulder", "Left Right Shoulder", "Left Signal", "Left Speed", "Left Spacing", "Left Steering Control"];
  const turningNamesArray = ["Left Approach Traffic Check", "Left Approach Signal", "Left Approach Braking", "Left Approach Yield", "Left Approach Lane Use", "Left Approach Unnecessary Stop" , "Left Stop Gap Limit Line", "Left Stop Traffic Check", "Left Stop Wheels Straight", "Left Stop Full Stop", "Left During Traffic Check", "Left During Steering Control", "Left During Too Wide", "Left During Too Short", "Left During Yield", "Left During Correct Lane", "Left During Speed", "Left During Signal", "Right Approach Traffic Check", "Right Approach Signal", "Right Approach Braking", "Right Approach Yield", "Right Approach Lane Use", "Right Approach Unnecessary Stop", "Right Stop Gap Limit Line", "Right Stop Traffic Check", "Right Stop Wheels Straight", "Right Stop Full Stop", "Right During Traffic Check", "Right During Steering Control", "Right During Too Wide", "Right During Too Short", "Right During Yield", "Right During Correct Lane", "Right During Speed", "Right During Signal"];
  const autoDQNamesArray = ["Examiner Intervention", "Dangerous Maneuver", "Strikes Object", "Driving Speed", "Disobeys Traffic Signage", "Aux Equipment Use", "Disobeys Examiner", "Lane Violation"];



  // Detailed Results Display Values
  const [predriveDetailsValues, setPredriveDetailsValues] = React.useState([]);
  const [preDriveMechanicalDetailsValues, setPreDriveMechanicalDetailsValues] = React.useState([]);
  const [preDriveOperationalDetailsValues, setPreDriveOperationalDetailsValues] = React.useState([]);
  const [parkinglotDetailsValues, setParkinglotDetailsValues] = React.useState([]);
  const [residentialDetailsValues, setResidentialDetailsValues] = React.useState([]);
  const [freewayDetailsValues, setFreewayDetailsValues] = React.useState([]);
  const [intersectionDetailsValues, setIntersectionDetailsValues] = React.useState([]);
  const [turningDetailsValues, setTurningDetailsValues] = React.useState([]);
  const [lanechangeDetailsValues, setLaneChangeDetailsValues] = React.useState([]);
  const [autoDQDetailsValues, setAutoDQDetailsValues] = React.useState([]);




  const DetailedCounterResultsDisplay = (props) => {
    var namesArray = props.names;
    var valuesArray = props.values;

    return (

      namesArray.map( (name, index) => 
        { return parseInt(valuesArray[index]) > 0 ?
        <View style={styles.detailedResultsRow} key={name}>
          <Text style={styles.sectionName}>{name}</Text>
          <Text style={styles.sectionResult}>{valuesArray[index]}</Text>
        </View> : null})

    )
  };

  const DetailedPreDriveResultsDisplay = (props) => {
    var namesArray = props.names;
    var valuesArray = props.values;

    return (

      namesArray.map( (name, index) => 
        { return valuesArray[index] == "false" ?
        <View style={styles.detailedResultsRow} key={name}>
          <Text style={styles.sectionName}>{name}</Text>
          <Text style={[styles.sectionResult, {marginTop:-11, marginRight:-11}]}><Ionicons name="close" size={35} color="black" /></Text>
        </View> : null})

    )
  };

  const DetailedAutoDQResultsDisplay = (props) => {
    var namesArray = props.names;
    var valuesArray = props.values;

    return (

      namesArray.map( (name, index) => 
        { return valuesArray[index] == "true" ?
        <View style={styles.detailedResultsRow} key={name}>
          <Text style={styles.sectionName}>{name}</Text>
          <Text style={[styles.sectionResult, {marginTop:-11, marginRight:-11}]}><Ionicons name="close" size={35} color="black" /></Text>
        </View> : null})

    )
  };


  

  useEffect(() => {
    alert("Results page doesn’t always update automatically. Pull down to manually refresh.");

    const calculateResultsOnPageLoad = async () => {
      const data = await calculateTestResults();
      // console.log("Total Number of Errors: ", data);
      // totalNumberOfErrors = data;
    }

    calculateResultsOnPageLoad();
  }, []);






  async function calculateTestResults() {

    passedTest = true; // Sets passedTest to true everytime the results are calculated

    var freewayFromStorage = await StorageHandler.getData("USING_FREEWAY");

    if (freewayFromStorage == "true") {
      usingFreeway = true;
    }
    else {
      usingFreeway = false;
    }

    predriveValues = await getPredriveValues(); 
    preDriveMechanicalValues = await getMechanicalValues();
    preDriveOperationalValues = await getOperationalValues();
    parkinglotValues = await getParkinglotValues();
    residentialValues = await getResidentialValues();
    freewayValues = await getFreewayValues();
    intersectionValues = await getIntersectionValues();
    turningValues = await getTurningValues();
    lanechangeValues = await getLaneChangeValues();
    autoDQValues = await getAutoDQValues();

    // Sets the detailed values for the detailed display 
    setPredriveDetailsValues(predriveValues);
    setPreDriveMechanicalDetailsValues(preDriveMechanicalValues);
    setPreDriveOperationalDetailsValues(preDriveOperationalValues);
    setParkinglotDetailsValues(parkinglotValues);
    setResidentialDetailsValues(residentialValues);
    setFreewayDetailsValues(freewayValues);
    setIntersectionDetailsValues(intersectionValues);
    setTurningDetailsValues(turningValues);
    setLaneChangeDetailsValues(lanechangeValues);
    setAutoDQDetailsValues(autoDQValues);


    // Get number of errors for each section
    predriveErrors = await calculateBooleanErrors(predriveValues); 
    preDriveMechanicalErrors = await calculateBooleanErrors(preDriveMechanicalValues);
    preDriveOperationalErrors = await calculateBooleanErrors(preDriveOperationalValues);
    parkinglotErrors = await calculateCounterErrors(parkinglotValues);
    residentialErrors = await calculateCounterErrors(residentialValues);
    freewayErrors = await calculateCounterErrors(freewayValues);
    intersectionErrors = await calculateCounterErrors(intersectionValues);
    turningErrors = await calculateCounterErrors(turningValues);
    lanechangeErrors = await calculateCounterErrors(lanechangeValues);
    autoDQErrors = await calculateBooleanErrors(autoDQValues, true);
    
    // Show the scores in the frontend
    setPredriveDisplay(predriveErrors); 
    setMechanicalDisplay(preDriveMechanicalErrors);
    setOperationalDisplay(preDriveOperationalErrors);

    setParkinglotDisplay(parkinglotErrors);
    setResidentialDisplay(residentialErrors);
    setFreewayDisplay(freewayErrors);
    setIntersectionDisplay(intersectionErrors);
    setTurningDisplay(turningErrors);
    setLangechangeDisplay(lanechangeErrors);

    setAutoDQDisplay(autoDQErrors);

    // // Parking Lot
    // if (parkinglotErrors == 0) { setParkinglotDisplay("None"); }
    // else { setParkinglotDisplay(parkinglotErrors); }

    // // Residential
    // if (residentialErrors == 0) { setResidentialDisplay("None"); }
    // else { setResidentialDisplay(residentialErrors); }


    // --------------------------------------
    // Score Calculation
    // --------------------------------------

    // Mechanical Section Check
    if (preDriveMechanicalErrors > 0) {
      passedTest = false;
    }

    // Operational Section Check
    if (preDriveOperationalErrors >= 4) {
      passedTest = false;
    }

    // Driving Section Check
    var totalDrivingErrors = parkinglotErrors + residentialErrors + intersectionErrors + turningErrors + lanechangeErrors;

    if (usingFreeway == true) {
      totalDrivingErrors += freewayErrors;
    }

    if (totalDrivingErrors > 15) {
      passedTest = false;
    }

    // Auto DQ Check
    if (autoDQErrors > 0) {
      passedTest = false;
    }
    
    totalNumberOfErrors = preDriveMechanicalErrors + preDriveOperationalErrors + totalDrivingErrors + autoDQErrors;



    if (passedTest) {
      setFinalResultDisplay("Test Passed!");
      setResultBackgroundColor("#90C96A");
      console.log("Test Passed!")
    }
    else {
      setFinalResultDisplay("You did not pass, yet... ");
      setResultBackgroundColor("#000000");
      console.log("Test Failed!")
    }


    var commentForStudentFromStorage = await StorageHandler.getData("COMMENTS_STUDENT");
    if (commentForStudentFromStorage != null) {
      setCommentsForStudentText(commentForStudentFromStorage);
    }

    commentsForInstructorFromStorage = await StorageHandler.getData("COMMENTS_INSTRUCTOR");
    if (commentsForInstructorFromStorage != null) {
      setCommentsForInstructorText(commentsForInstructorFromStorage);
    }


    selectedRouteFromStorage = await StorageHandler.getData("SELECTED_ROUTE");
    if (selectedRouteFromStorage != null) {
      selectedRoute = selectedRouteFromStorage;
    }
    else {
      selectedRoute = "No Route Selected"
    }

    instructorNameFromStorage = await StorageHandler.getData("INSTRUCTOR_NAME");
    if (instructorNameFromStorage != null) {
      instructorName = instructorNameFromStorage;
    }

    instructorEmailFromStorage = await StorageHandler.getData("INSTRUCTOR_EMAIL");
    if (instructorEmailFromStorage != null) {
      instructorEmail = instructorEmailFromStorage;
    }

    studentNameFromStorage = await StorageHandler.getData("STUDENT_NAME");
    if (studentNameFromStorage != null) {
      studentName = studentNameFromStorage;
    }

    // console.log("comments for student: ", commentsForStudent);
    // console.log("comments for instructor: ", commentsForInstructor);

    setRefreshing(false);
  }


  function resultsToString(sendToInstructor=false) {
    function counterTestSection(name, numErrors, namesArray, valuesArray) {
      let sectionText = "";

      sectionText += "\n\n◈ " + name + " [" + numErrors + " Errors]";
      
      // if (numErrors != 0) { sectionText += "\n----------------------------"; }

      for (var i in valuesArray) {
        if (valuesArray[i] != "0") {
          var errorNumEmoji;
          switch(valuesArray[i]) {
            case "0":
              errorNumEmoji = "0️⃣";
              break;
            case "1":
              errorNumEmoji = "1️⃣";
              break;
            case "2":
              errorNumEmoji = "2️⃣";
              break;
            case "3":
              errorNumEmoji = "3️⃣";
              break;
            case "4":
              errorNumEmoji = "4️⃣";
              break;
            case "5":
              errorNumEmoji = "5️⃣";
              break;
            case "6":
              errorNumEmoji = "6️⃣";
              break;
            case "7":
              errorNumEmoji = "7️⃣";
              break;
            case "8":
              errorNumEmoji = "8️⃣";
              break;
            case "9":
              errorNumEmoji = "9️⃣";
              break;
            default:
              errorNumEmoji = "[" + valuesArray[i] + "]"
          }
          sectionText += "\n ▹ " + errorNumEmoji + " " + namesArray[i];
        }
      }

      return sectionText;
    }

    var resultsText = "";

    resultsText += "------------------------------"
    resultsText += "\nDate: " + (new Date().toDateString()) + "";
    resultsText += "\nRoute: " + selectedRoute;
    resultsText += "\nInstructor: " + instructorName;
    resultsText += "\nStudent: " + studentName;
    resultsText += "\n------------------------------"


    resultsText += "\n\n◈ " + "Pre-Drive" + " [" + predriveErrors + " Errors]";
    for (var i in predriveNamesArray) {
      if (predriveValues[i] != "true") {
        resultsText += "\n ▹ ❌ " + predriveNamesArray[i];
      }
    }

    resultsText += counterTestSection("Parking Lot",parkinglotErrors, parkinglotNamesArray, parkinglotValues);
    resultsText += counterTestSection("Residential/Business",residentialErrors, residentialNamesArray, residentialValues);
    if (usingFreeway) {
      resultsText += counterTestSection("Freeway",freewayErrors, freewayNamesArray, freewayValues);
    }
    resultsText += counterTestSection("Intersection",intersectionErrors, intersectionNamesArray, intersectionValues);
    resultsText += counterTestSection("Turning",turningErrors, turningNamesArray, turningValues);
    resultsText += counterTestSection("Lane Change",lanechangeErrors, lanechangeNamesArray, lanechangeValues);

    resultsText += "\n\n◈ " + "Automatic Disqualification" + " [" + autoDQErrors + " Errors]";
    for (var i in autoDQNamesArray) {
      if (autoDQValues[i] != "false") {
        resultsText += "\n ▹ ❌ " + autoDQNamesArray[i];
      }
    }

    
    resultsText += "\n\n------------------------------"
    resultsText += "\nTotal Errors: " + totalNumberOfErrors;
    resultsText += "\n------------------------------\n"

    if (passedTest) {
      resultsText += "You have passed the test! 🎉\n\n";
    }
    else {
      resultsText += "You did not pass the test, yet...\n\n";
    }
    

    if (commentsForStudentText != null && commentsForStudentText != "") {
      resultsText += "[Comments from your instructor]\n" + commentsForStudentText + "\n";
    }

    if (sendToInstructor == true) {
      if (commentsForInstructorText != null && commentsForInstructorText != "") {
        resultsText += "\n[Comments for instructor only]\n" + commentsForInstructorText + "\n";
      }
    }

    resultsText += "\nFeel free to fill out our feedback survey: https://shorturl.at/mnowL";

    return resultsText;
  }

  function sendEmail(sendToInstructor=false) {

    var body = resultsToString(sendToInstructor);

    var subject = studentName + "'s Drive Quest Test Results"

    // console.log(body);

    if (sendToInstructor == true) {
      Linking.openURL("mailto:" + instructorEmail + "?subject="+subject+"&body="+body);
    }
    else {
      Linking.openURL("mailto:?subject="+subject+"&body="+body);
    }

    // Linking.openURL("mailto:?subject="+subject+"&body="+body);
    }


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          studentName + "'s Drive Quest Test Results\n\n" + resultsToString(),
        title:
          studentName + "'s Drive Quest Test Results",
      },
      {
        subject: 
          studentName + "'s Drive Quest Test Results",
        tintColor: "red"
      }
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  // --------------------------------------
  // Calculate Boolean Errors
  // --------------------------------------
  async function calculateBooleanErrors(valuesArray, reverse=false) {
    var numErrors = 0;

    for (var i in valuesArray) {
      if (valuesArray[i] == "true"){
        numErrors += 1
      }
    }

    if (reverse == false) {
      numErrors = valuesArray.length - numErrors;
    }

    console.log("Number of Boolean Errors: ", (numErrors))

    return numErrors;
  }

  // --------------------------------------
  // Calculate Counter Errors
  // --------------------------------------
  async function calculateCounterErrors(valuesArray) {
    var numErrors = 0;

    for (var i in valuesArray) {
      if (valuesArray[i] != null) {
        numErrors += parseInt(valuesArray[i]);
      }
    }

    console.log("Number of Counter Errors: ", (numErrors))

    return numErrors;
  }


  // --------------------------------------
  // Predrive (20 items)
  // --------------------------------------
  async function getPredriveValues() {
    const value1 = await StorageHandler.getData("PREDRIVE_BRAKE_LIGHTS");
    const value2 = await StorageHandler.getData("PREDRIVE_DEFROSTER");
    const value3 = await StorageHandler.getData("PREDRIVE_DRIVER_WINDOW");
    const value4 = await StorageHandler.getData("PREDRIVE_PARKING_BRAKE");
    const value5 = await StorageHandler.getData("PREDRIVE_EMERGENCY_FLASHER");
    const value6 = await StorageHandler.getData("PREDRIVE_FOOT_BRAKES");
    const value7 = await StorageHandler.getData("PREDRIVE_GLOVE_BOX");
    const value8 = await StorageHandler.getData("PREDRIVE_HEADLIGHTS");
    const value9 = await StorageHandler.getData("PREDRIVE_HORN");
    const value10 = await StorageHandler.getData("PREDRIVE_LEFT_ARM_SIGNAL");
    const value11 = await StorageHandler.getData("PREDRIVE_RIGHT_ARM_SIGNAL");
    const value12 = await StorageHandler.getData("PREDRIVE_STOP_ARM_SIGNAL");
    const value13 = await StorageHandler.getData("PREDRIVE_PASSENGER_DOOR");
    const value14 = await StorageHandler.getData("PREDRIVE_REAR_VIEW_MIRRORS");
    const value15 = await StorageHandler.getData("PREDRIVE_LEFT_TURN_SIGNAL");
    const value16 = await StorageHandler.getData("PREDRIVE_RIGHT_TURN_SIGNAL");
    const value17 = await StorageHandler.getData("PREDRIVE_SEATBELTS");
    const value18 = await StorageHandler.getData("PREDRIVE_TIRES");
    const value19 = await StorageHandler.getData("PREDRIVE_WINDSHIELD");
    const value20 = await StorageHandler.getData("PREDRIVE_WINDSHIELD_WIPERS");
    
    const valuesArray = await [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "false";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Mechanical (12 items)
  // --------------------------------------
  async function getMechanicalValues() {

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
    
    const valuesArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "false";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Operational (8 items)
  // --------------------------------------
  async function getOperationalValues() {

    const value1 = await StorageHandler.getData("PREDRIVE_HORN");
    const value2 = await StorageHandler.getData("PREDRIVE_PARKING_BRAKE");
    const value3 = await StorageHandler.getData("PREDRIVE_RIGHT_ARM_SIGNAL");
    const value4 = await StorageHandler.getData("PREDRIVE_LEFT_ARM_SIGNAL");
    const value5 = await StorageHandler.getData("PREDRIVE_STOP_ARM_SIGNAL");
    const value6 = await StorageHandler.getData("PREDRIVE_WINDSHIELD_WIPERS");
    const value7 = await StorageHandler.getData("PREDRIVE_DEFROSTER");
    const value8 = await StorageHandler.getData("PREDRIVE_EMERGENCY_FLASHER");
    
    const valuesArray = await [value1,value2,value3,value4,value5,value6,value7,value8];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "false";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Parking Lot (4 items)
  // --------------------------------------
  async function getParkinglotValues() {
    
    const value1 = await StorageHandler.getData("PARKINGLOT_SIGNAL");
    const value2 = await StorageHandler.getData("PARKINGLOT_SPEED");
    const value3 = await StorageHandler.getData("PARKINGLOT_TRAFFIC_CHECK");
    const value4 = await StorageHandler.getData("PARKINGLOT_POSITIONING");

    const valuesArray = await [value1, value2, value3, value4];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "0";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Residential (18 items)
  // --------------------------------------
  async function getResidentialValues() {

    const value1 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_OBSERVATION");
    const value2 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_POSITIONING");
    const value3 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_SAFE_DISTANCE");
    const value4 = await StorageHandler.getData("RESIDENTIAL_RESIDENTIAL_SPEED");

    const value5 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_OBSERVATION");
    const value6 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_POSITIONING");
    const value7 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_SAFE_DISTANCE");
    const value8 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_SIGNAL");
    const value9 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_SPEED");
    const value10 = await StorageHandler.getData("RESIDENTIAL_BUSINESS_TRAFFIC_CHECK");

    const value11 = await StorageHandler.getData("RESIDENTIAL_CURB_SIGNAL");
    const value12 = await StorageHandler.getData("RESIDENTIAL_CURB_SPEED");
    const value13 = await StorageHandler.getData("RESIDENTIAL_CURB_STEERING_CONTROL");
    const value14 = await StorageHandler.getData("RESIDENTIAL_CURB_VISUAL_SEARCH");

    const value15 = await StorageHandler.getData("RESIDENTIAL_REVERSING_RIGHT_SHOULDER");
    const value16 = await StorageHandler.getData("RESIDENTIAL_REVERSING_SPEED");
    const value17 = await StorageHandler.getData("RESIDENTIAL_REVERSING_STEERING_CONTROL");
    const value18 = await StorageHandler.getData("RESIDENTIAL_REVERSING_TRAFFIC_CHECK");

    const valuesArray = await [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "0";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Freeway (34 items)
  // --------------------------------------
  async function getFreewayValues() {

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
    
    const valuesArray = await [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21, value22, value23, value24, value25, value26, value27, value28, value29, value30, value31, value32, value33, value34];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "0";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Intersection (11 items)
  // --------------------------------------
  async function getIntersectionValues() {

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
    
    const valuesArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "0";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Turning (36 items)
  // --------------------------------------
  async function getTurningValues() {

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
    
    const valuesArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18,value19,value20,value21,value22,value23,value24,value25,value26,value27,value28,value29,value30,value31,value32,value33,value34,value35,value36];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "0";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // Lane Change (18 items)
  // --------------------------------------
  async function getLaneChangeValues() {

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
    
    const valuesArray = await [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,value16,value17,value18];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "0";
      }
    }

    return valuesArray;
  }

  // --------------------------------------
  // AutoDQ (8 items)
  // --------------------------------------
  async function getAutoDQValues() {

    const value1 = await StorageHandler.getData("AUTODQ_EXAMINER_INTERVENTION");
    const value2 = await StorageHandler.getData("AUTODQ_DANGEROUS_MANEUVER");
    const value3 = await StorageHandler.getData("AUTODQ_STRIKES_OBJECT");
    const value4 = await StorageHandler.getData("AUTODQ_DRIVING_SPEED");
    const value5 = await StorageHandler.getData("AUTODQ_DISOBEYS_TRAFFIC_SIGNAGE");
    const value6 = await StorageHandler.getData("AUTODQ_AUX_EQUIPMENT_USE");
    const value7 = await StorageHandler.getData("AUTODQ_DISOBEYS_EXAMINER");
    const value8 = await StorageHandler.getData("AUTODQ_LANE_VIOLATION");
    
    const valuesArray = await [value1,value2,value3,value4,value5,value6,value7,value8];

    for (var i in valuesArray) {
      if (valuesArray[i] == null) {
        valuesArray[i] = "false";
      }
    }

    return valuesArray;
  }

  return (
    <KeyboardAvoidingView 
    keyboardVerticalOffset={headerHeight}
    behavior="position" 
    >
    <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
    <View>
      

      <View style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
      <Text style={styles.title}>Results</Text>
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.sectionName}>Section</Text>
        <Text style={styles.sectionResult}>Errors</Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Pre-Drive</Text>
        <Text style={styles.sectionResult}>{predriveDisplay}</Text>
      </View>
      <DetailedPreDriveResultsDisplay names={predriveNamesArray} values={predriveDetailsValues}/>


      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Parking Lot</Text>
        <Text style={styles.sectionResult}>{parkinglotDisplay}</Text>
      </View>
      <DetailedCounterResultsDisplay names={parkinglotNamesArray} values={parkinglotDetailsValues}/>


      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Residential/Business</Text>
        <Text style={styles.sectionResult}>{residentialDisplay}</Text>
      </View>
      <DetailedCounterResultsDisplay names={residentialNamesArray} values={residentialDetailsValues}/>

      <View display = {usingFreeway ? "flex" : "none"} >
        <View style={styles.sectionRow}>
          <Text style={styles.sectionName}>Freeway</Text>
          <Text style={styles.sectionResult}>{freewayDisplay}</Text>
        </View>
        <DetailedCounterResultsDisplay names={freewayNamesArray} values={freewayDetailsValues}/>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Intersection</Text>
        <Text style={styles.sectionResult}>{intersectionDisplay}</Text>
      </View>
      <DetailedCounterResultsDisplay names={intersectionNamesArray} values={intersectionDetailsValues}/>


      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Turning</Text>
        <Text style={styles.sectionResult}>{turningDisplay}</Text>
      </View>
      <DetailedCounterResultsDisplay names={turningNamesArray} values={turningDetailsValues}/>


      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Lane Change</Text>
        <Text style={styles.sectionResult}>{lanechangeDisplay}</Text>
      </View>
      <DetailedCounterResultsDisplay names={lanechangeNamesArray} values={lanechangeDetailsValues}/>


      <View style={styles.sectionRow}>
        <Text style={styles.sectionName}>Automatic Disqualification</Text>
        <Text style={styles.sectionResult}>{autoDQDisplay}</Text>
      </View>
      <DetailedAutoDQResultsDisplay names={autoDQNamesArray} values={autoDQDetailsValues}/>


      <View style={[styles.finalResultRow, {backgroundColor: resultBackgroundColor}]}>
        <Text style={styles.finalResultsText}>{totalNumberOfErrors} Errors</Text>
        <Text style={[styles.finalResultsText, {marginTop:0}]}>{finalResultDisplay}</Text>
      </View>


      <View style={{margin: 15, marginBottom:15}}>
        <Text style={{fontSize:18, fontWeight:"500", marginBottom:5}}>Comments for Student:</Text>
        <TextInput
          editable
          multiline
          style={styles.textInput}
          value={commentsForStudentText}
          onChangeText={(text) => {setCommentsForStudentText(text); saveComment("COMMENTS_STUDENT", text);}}
          // onSubmitEditing={() => console.log("submitting:", commentsForStudentText) }
        />
      </View>

      <View style={{margin: 15, marginBottom:30}}>
        <Text style={{fontSize:18, fontWeight:"500", marginBottom:5}}>Comments for Instructor Only:</Text>
        <TextInput
          editable
          multiline
          style={styles.textInput}
          value={commentsForInstructorText}
          onChangeText={(text) => {setCommentsForInstructorText(text); saveComment("COMMENTS_INSTRUCTOR", text);}}
          // onSubmitEditing={() => console.log("submitting:", commentsForInstructorText) }
        />
      </View>
      

      <View style={styles.sendButtonContainer}>
        <Pressable
            onPress={() => sendEmail() }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.sendButton]}
        >
          <Text style={styles.sendButtonText}>Email Results To Student</Text>

        </Pressable>
      </View>

      <View style={styles.sendButtonContainer}>
        <Pressable
          onPress={() => sendEmail(true) }
          style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.sendButton]}
        >
          <Text style={styles.sendButtonText}>Email Results To Instructor</Text>

        </Pressable>
      </View>

      <View style={styles.sendButtonContainer}>
        <Pressable
            onPress={() => onShare() }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.sendButton]}
        >
          <Text style={styles.sendButtonText}><Ionicons name="share-outline" size={21} color="white" /> Share Results</Text>

        </Pressable>
      </View>

      <View style={styles.sendButtonContainer}>
        <Pressable
            onPress={() => navigation.navigate("StartTest") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#b32023' : '#87181A' } , styles.sendButton]}
        >
          <Text style={styles.sendButtonText}>End Test</Text>

        </Pressable>
      </View>

      <View style={{marginBottom: 25}}></View>
      
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25, 
    fontWeight: 'bold'
  },
  titleRow: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    alignItems: 'baseline',
    flexDirection:'row', 
    flexWrap:'wrap'
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
      flexWrap:'wrap',

      shadowColor: 'black',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.05,
      shadowRadius: 25,
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
    fontWeight: "500"
  },
  sendButtonContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  sendButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  finalResultRow: {
    minHeight: 67.5,
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
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },
  finalResultsText: {
    color: 'white',
    fontSize: 22,
    marginTop: -10,
    fontWeight: 'bold'
  },
  detailedResultsRow: {
    borderRadius: 10,
    height: 35,
    backgroundColor: '#e0e0e0',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 5,

    marginLeft: 45,
    marginRight: 15,
    marginBottom: 10,

    alignItems: 'baseline',
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  detailedResultsContainer: {

  },
  textInput: {
    borderRadius: 10,
    backgroundColor: 'white',
    // borderBottomColor: '#000000',
    // borderBottomWidth: 1,
    minHeight: 90,
    // borderWidth: 1,
    padding: 12,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },
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