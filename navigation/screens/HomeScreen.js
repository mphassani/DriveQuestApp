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
// import {Restart} from 'fiction-expo-restart';


export default function HomeScreen({ navigation }) {
  // Parsa's Page
  return (
      <PaperProvider>
        <ScrollView>
          <Button
            mode="contained"
            onPress={() => alert("TEST")}
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 10, paddingTop: 10, marginBottom: 10, marginTop: 10,
            }}
          >
            Pre-Drive
          </Button>
          <Button mode="contained" style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, marginTop: 10, color: "#00677F" }}>
            Parking Lot
          </Button>
          <Button mode="contained" style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, marginTop: 10, color: "#00677F"  }}>
            Residential
          </Button>
          <Button mode="contained" style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, marginTop: 10, color: "#00677F"  }}>
            Freeway
          </Button>
          <Button mode="contained" style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, marginTop: 10, color: "#00677F"  }}>
            Test result
          </Button>
          <Icon name="md-warning" style={styles.icon}></Icon>
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
    //position: "relative",
    color: "rgba(205,50,50,1)",
    fontSize: 98,
    // width: 86,
    // height: 107,
    //marginLeft: 22,
    paddingLeft: 138,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

const win = Dimensions.get("window");
const ratio = win.width / 500;
