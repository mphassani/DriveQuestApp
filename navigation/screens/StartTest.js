import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  Image
} from "react-native";

import * as StorageHandler from "../../StorageHandler";

export default function StartTest({ navigation }) {


    const startNewTestConfirmation = () =>
    Alert.alert(
    "Start New Driving Evaluation",
    "This will erase your current Evaluation progress. Are you sure you want to continue?",
    [
        {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        { text: "Yes", onPress: () => { goToTestConfig() } }
    ]
    );

    async function goToTestConfig() {
        await StorageHandler.clearAllTestData();
        navigation.navigate("TestConfig");
    }


  return (

    <ScrollView>
        <View style={{alignItems: 'center', justifyContent:'center', paddingVertical:'12%'}}>
            <Image
            source={require('../../assets/logo.png')}
            />
        </View>
        {/* <View style={{alignItems: 'center', justifyContent: 'center', padding: 20, marginBottom: 30 }}>
            <Text style={styles.title}>Start Test</Text>
        </View> */}

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={startNewTestConfirmation}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Start New Driving Evaluation</Text>

            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("MainTestPages") }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
            >
            <Text style={styles.ButtonText}>Resume Driving Evaluation</Text>

            </Pressable>
        </View>

        <View style={styles.ButtonContainer}>
            <Pressable
            onPress={() => navigation.navigate("InstructorInfo") }
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
        marginBottom: 35,
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
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});