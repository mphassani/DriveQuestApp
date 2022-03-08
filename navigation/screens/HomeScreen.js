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
import { Provider as PaperProvider, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from '../../App'
import { useNavigation } from '@react-navigation/native';

// import {Restart} from 'fiction-expo-restart';


export default function HomeScreen() {
  const navigation = useNavigation();
  // Parsa's Page
  return (
    
    <PaperProvider>
      <ScrollView>
        <View style={styles.buttonView}>
          <Button mode="contained" color="#90C96A" onPress={() => alert("TEST")}>Pre-Drive</Button>
        </View>
        <View style={styles.buttonView}><Button color="#90C96A" mode="contained">
          Parking Lot
        </Button></View>
        <View style={styles.buttonView}>
          <Button mode="contained" color="#90C96A" onPress={() => navigation.navigate('Residential')}>
          Residential
        </Button></View>
        <View style={styles.buttonView}><Button mode="contained" color="#90C96A" onPress={() => navigation.navigate('Freeway')}>
          Freeway
        </Button></View>
        <View style={styles.buttonView}><Button color="#90C96A" mode="contained">
          Test result
        </Button></View>
        <View style={styles.buttonView}><Icon name="md-warning" style={styles.icon}></Icon></View>
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
  buttonView:{
    alignContent: "center", 
    justifyContent: "center", 
    flexDirection: "row", 
    paddingTop: "10%", 
    paddingBottom: "5%" ,
  },
});

const win = Dimensions.get("window");
const ratio = win.width / 500;
