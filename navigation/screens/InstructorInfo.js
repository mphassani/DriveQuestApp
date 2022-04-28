import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";

import { useEffect, useState } from "react";
import {
  Provider as PaperProvider,
  Button,
  TextInput,
  Appbar,
  DefaultTheme,
} from "react-native-paper";
import HomeScreen from "../../AllScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as StorageHandler from "../../StorageHandler";
import { mdiVideoMinusOutline } from "@mdi/js";


export default function InstructorInfo({ navigation }) {

  const [instructorNameText, setInstructorNameText] = React.useState("");
  const [instructorEmailText, setInstructorEmailText] = React.useState("");

  function next() {      
    StorageHandler.storeStringData("INSTRUCTOR_NAME", instructorNameText);
    StorageHandler.storeStringData("INSTRUCTOR_EMAIL", instructorEmailText);
    navigation.navigate("StartTest");
      
    }
  

  return (
    <PaperProvider theme={theme}>
        
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: "10%",
          paddingBottom: "5%",
        }}
      >
        <Text style={styles.header}>Instructor Info</Text>
      </View>

      <View style={{ paddingRight: "10%", paddingLeft: "10%" }}>
        <TextInput
          label="Name"
          value={instructorNameText}
          onChangeText={(text) => setInstructorNameText(text)}
          mode="outlined"
        />
      </View>

      <View style={{ paddingRight: "10%", paddingLeft: "10%" }}>
        <TextInput
          label="Email"
          value={instructorEmailText}
          onChangeText={(text) => setInstructorEmailText(text)}
          mode="outlined"
        />
      </View>

      <View style={{ padding: "5%" }}>
        <Button
          mode="contained"
          color= "#12414F"
          //onPress={() => navigation.navigate("settings")}
          onPress={() => next()}
        >
          Next
        </Button>
      </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 26,
    color: "#87181A",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#87181A",
    accent: "#90C96A",
     
  },
};
