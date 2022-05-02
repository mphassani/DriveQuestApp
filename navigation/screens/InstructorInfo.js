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
  Pressable
} from "react-native";

import { useEffect, useState } from "react";
import {
  Provider as PaperProvider,
  TextInput,
  Appbar,
  DefaultTheme,
} from "react-native-paper";

import * as StorageHandler from "../../StorageHandler";


export default function InstructorInfo({ navigation }) {
  
  async function setToInitalSavedValues() {

    const instructorNameValue = await StorageHandler.getData("INSTRUCTOR_NAME");
    const instructorEmailValue = await StorageHandler.getData("INSTRUCTOR_EMAIL");

    if (instructorNameValue != null) {
      setInstructorNameText(instructorNameValue);
    }

    if (instructorEmailValue != null) {
      setInstructorEmailText(instructorEmailValue);
    }
  }

  useEffect(() => {

    setToInitalSavedValues();

  }, []);

  const [instructorNameText, setInstructorNameText] = React.useState("");
  const [instructorEmailText, setInstructorEmailText] = React.useState("");

  function saveInfo() {
    StorageHandler.storeStringData("INSTRUCTOR_NAME", instructorNameText);
    StorageHandler.storeStringData("INSTRUCTOR_EMAIL", instructorEmailText);
    navigation.navigate("StartTest");
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        
        <Text style={styles.pageTitle}>
          Instructor Info
        </Text>


        {/* Instructor name input */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Instructor Name"
            mode="outlined"
            returnKeyType="done"
            value={instructorNameText}
            onChangeText={(text) => { setInstructorNameText(text) }}
          />
        </View>

        {/* Instructor email input */}
        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Instructor Email"
            mode="outlined"
            returnKeyType="done"
            value={instructorEmailText}
            keyboardType="email-address"
            onChangeText={(text) => { setInstructorEmailText(text) }}
          />
        </View>


        <Pressable
          onPress={() => saveInfo()}
          style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' }, styles.Button]}
        >
          <Text style={styles.ButtonText}>Save Info</Text>

        </Pressable>

      </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  pageTitle: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
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
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#87181A",
    accent: "#90C96A",
     
  },
};
