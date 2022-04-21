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
  Pressable,
  Alert,
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

export default function StartTest({ navigation }) {


    const startNewTestConfirmation = () =>
    Alert.alert(
    "Start New Test",
    "This will erase your current test. Are you sure you want to continue?",
    [
        {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        { text: "Yes", onPress: () => {StorageHandler.clearAllTestData(), navigation.navigate("TestConfig")} }
    ]
    );


  return (
    //   <View style={styles.container}>
    //   <Text>To share a photo from your phone with a friend, just press the button below!</Text>
    // </View>
    <ScrollView>

        <View style={{alignItems: 'center', justifyContent: 'center', padding: 20, marginBottom: 60 }}>
            <Text style={styles.title}>Start Test</Text>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={startNewTestConfirmation}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Start New Test</Text>

            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("Home") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Resume Test</Text>

            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            // onPress={() => navigation.navigate("Home") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Edit Instructor Info</Text>

            </Pressable>
        </View>

    </ScrollView>
  );

}


const styles = StyleSheet.create({
    title: {
      fontSize: 25, 
      fontWeight: 'bold'
    },
    ButtonContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
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