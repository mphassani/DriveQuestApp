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
      navigationVal.navigate("StartTest");
    }
    else {
      setInvalidLoginDisplay("INVALID LOGIN KEY");
    }
  }

  return (
    //   <View style={styles.container}>
    //   <Text>To share a photo from your phone with a friend, just press the button below!</Text>
    // </View>
    <PaperProvider theme={theme}>

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

      <View style={{ paddingRight: "10%", paddingLeft: "10%" }}>
        <TextInput
          label="Login Key"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
        />
      </View>

      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: "5%",
        }}
      >
        <Text style={styles.invalidLoginText}>{invalidLoginDisplay}</Text>
      </View>

      <View style={{ padding: "5%" }}>
        <Button
          mode="contained"
          color= "#12414F"
          onPress={() => checkPassword(navigation, text)}
        >
          Login
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
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  invalidLoginText: {
    fontSize: 26,
    color: "#87181A",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
  }
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
