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

export default function LogIn({ navigation }) {
  const [invalidLoginDisplay, setInvalidLoginDisplay] = useState("");

  const [text, setText] = React.useState("");
  // StorageHandler.clearAllStoredData();
  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  function checkIfLoggedIn() {
    let value = StorageHandler.getData("IS_LOGGED_IN").then(res => {
      // console.log("Initial Value", res);
      if (res == "true") {
        console.log("Is logged in: ", res);
        navigation.navigate("StartTest");
        // navigation.navigate("testresult");
      } else {
        console.log("Not logged in", res);
      }
      return res;
    });;

  }

  function checkPassword(navigationVal, code) {
    if (code == "123") {
      setInvalidLoginDisplay("");
      StorageHandler.storeStringData("IS_LOGGED_IN", "true");
      navigationVal.navigate("InstructorInfo");
    }
    else {
      setInvalidLoginDisplay("INVALID LOGIN KEY");
    }
  }

  return (

    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Image source={require("../../assets/logo.png")} />
        </View>

        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            paddingTop: "10%",
            paddingBottom: "5%",
          }}
        >
          <Text style={styles.header}>Welcome</Text>
        </View>


        {/* Passkey input */}
        <View>
          <TextInput
            label="Login Key"
            mode="outlined"
            returnKeyType="done"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>

        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <Text style={styles.invalidLoginText}>{invalidLoginDisplay}</Text>
        </View>

        <Pressable
            onPress={() => checkPassword(navigation, text)}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' }, styles.Button]}
          >
            <Text style={styles.ButtonText}>Login</Text>

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
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  invalidLoginText: {
    fontSize: 22,
    color: "#87181A",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
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
