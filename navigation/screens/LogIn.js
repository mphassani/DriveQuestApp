import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider, Button, TextInput, Appbar, DefaultTheme } from "react-native-paper";

global.isLoggedin = false;

export default function LogIn() {
  const [text, setText] = React.useState("");
    return(
    //   <View style={styles.container}>
    //   <Text>To share a photo from your phone with a friend, just press the button below!</Text>
    // </View>
        <PaperProvider theme={theme}>
          <Appbar.Header>
            <Appbar.Content title = "DriveQuest"></Appbar.Content>
          </Appbar.Header>

            <View style={{ alignContent: "center", justifyContent: "center", paddingLeft: "27.5%" }}>
                <Text style={styles.header}>Welcome Back</Text>
              </View>

            <View style={{paddingRight:"10%", paddingLeft: "10%" }}>
                <TextInput
                label="Log In Key"
                value={text}
                onChangeText={text => setText(text)}
                mode = 'outlined'
                />
            </View>

            
            <View style={{ padding:"10%"}}>
                <Button mode="contained" onPress={() => console.log("Hello")}>Log In</Button>
            </View>

        </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    header: {
        fontSize: 26,
        color: "#87181A",
        fontWeight: 'bold',
        paddingVertical: "14%",
        justifyContent: "center", 
        alignItems: "center",
        justifyContent: "center", 
        alignItems: "center",
      },
      forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
      },
      row: {
        flexDirection: 'row',
        marginTop: 4,
      },
});

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#87181A',
      accent: '#90C96A',
    },
  };

