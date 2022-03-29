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
import { Provider as PaperProvider, Button, Card, Title, Paragraph, Avatar, FAB, Portal, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// import {Restart} from 'fiction-expo-restart';


export default function HomeScreen() {
  const navigation = useNavigation();
  


  // Parsa's Page
  return (

    <PaperProvider theme={theme}>
      
      <ScrollView>
        <View style={styles.buttonView}><Card>
          <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1568738009519-52d1bad47858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }} />
          <Card.Actions>
            <Button color="#90C96A" mode="contained" onPress={() => navigation.navigate('parkinglot')} >Parking Lot</Button>
          </Card.Actions>
        </Card>
          <View style={{ padding: "5%" }}></View>
          <Card>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1506092309076-af15fb0051e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80' }} />
            <Card.Actions>
              <Button mode="contained" color="#90C96A" onPress={() => navigation.navigate('Residential')}>Residential</Button>
            </Card.Actions>
          </Card></View>
        <View style={styles.buttonView}>
          <Card>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1582033307729-3ab3c1fe5857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }} />
            <Card.Actions>
              <Button mode="contained" color="#90C96A" onPress={() => navigation.navigate('Freeway')}>Freeway    </Button>
            </Card.Actions>
          </Card>
          <View style={{ padding: "5%" }}></View>
          <Card>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80' }} />
            <Card.Actions>
              <Button color="#90C96A" mode="contained" onPress={() => navigation.navigate('testresult')}>Test Results</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>


      {/* <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 200, height: 300 }} onPress={() => Restart()}/> */}
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
  icon: {
    color: "rgba(205,50,50,1)",
    fontSize: 98,
  },

  buttonView: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "10%",
    paddingBottom: "5%",
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



const win = Dimensions.get("window");
const ratio = win.width / 500;
