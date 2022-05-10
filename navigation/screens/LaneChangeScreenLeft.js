import * as React from "react";
import {useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView
} from "react-native";
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB,DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import CounterRow from '../../components/CounterRow';
import { useNavigation } from "@react-navigation/native";

const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4DB6AC',
      accent: '#FFFFFF',
    },
  };

  export default function Traffic({ navigation }) {
    return (
        <PaperProvider theme={theme}>
           
        {/* <View style={{ flexDirection:"row", justifyContent: "space-around" }}>

                <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                    <Button mode="outlined" color = "#12414F" onPress={() => navigation.navigate("traffic")}>Intersection</Button>
                </View>
                <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                    <Button mode="contained" color = "#12414F" >Lane Change</Button>
                </View>
            </View> */}
            {/* <Portal>
                <CurrentErrorCount/>
            </Portal> */}
            <ScrollView>
                    <CounterRow 
                        title="Driver Side Mirror"
                        icon={require("../../assets/driverSideMirror.png")}
                        storageKey="LANECHANGE_LEFT_DRIVER_SIDE_MIRROR"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Rear View Mirror"
                        icon={require('../../assets/rearViewMirror.png')}
                        storageKey="LANECHANGE_LEFT_REAR_VIEW_MIRROR"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Passenger Side Mirror"
                        icon={require("../../assets/passengerSideMirror.png")}
                        storageKey="LANECHANGE_LEFT_PASSENGER_SIDE_MIRROR"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Left Shoulder"
                        icon={require("../../assets/leftShoulder.png")}
                        storageKey="LANECHANGE_LEFT_LEFT_SHOULDER"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Right Shoulder"
                        icon={require('../../assets/rightShoulder.png')}
                        storageKey="LANECHANGE_LEFT_RIGHT_SHOULDER"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Signal"
                        icon={require('../../assets/Signal.png')}
                        storageKey="LANECHANGE_LEFT_SIGNAL"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Speed"
                        icon={require('../../assets/speed.png')}
                        storageKey="LANECHANGE_LEFT_SPEED"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Spacing"
                        icon={require("../../assets/spacing.png")}
                        storageKey="LANECHANGE_LEFT_SPACING"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Steering Control"
                        icon={require("../../assets/SteeringControl.png")}
                        storageKey="LANECHANGE_LEFT_STEERING_CONTROL"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Smoothness"
                        icon={require("../../assets/smoothness.png")}
                        storageKey="LANECHANGE_LEFT_SMOOTHNESS"
                        maxValue={8}
                    />
                <View style={{marginBottom: 25}}></View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
  });