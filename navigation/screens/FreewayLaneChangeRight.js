import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView
  } from "react-native";
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB, Appbar, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';

import CounterRow from '../../components/CounterRow';
import SectionTitle from '../../components/SectionTitle';


//Moises page 
export default function FreewayLaneChangeRightScreen({ navigation }) {
    return (
        <PaperProvider theme={theme}>
            <ScrollView>
            {/* <View style={{ flexDirection:"row", justifyContent: "space-around" }}>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                        <Button mode="contained" color = "#12414F" onPress={() => navigation.navigate("freelanechange")}>Left</Button>
                    </View>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                        <Button mode="contained" color = "#12414F" disabled='true' >Right</Button>
                    </View>
                </View> */}
                <SectionTitle name="Freeway Lane Change Right" />

                    <CounterRow
                        title="Driver Side Mirror"
                        icon={require("../../assets/driverSideMirror.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_DRIVER_SIDE_MIRROR"
                    />
                    <CounterRow
                        title="Rear View Mirror"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_REAR_VIEW_MIRROR"
                    />
                    <CounterRow
                        title="Passenger Side Mirror"
                        icon={require("../../assets/passengerSideMirror.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_PASSENGER_SIDE_MIRROR"
                    />
                    <CounterRow
                        title="Left Shoulder"
                        icon={require("../../assets/leftShoulder.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_LEFT_SHOULDER"
                    />
                    <CounterRow
                        title="Right Shoulder"
                        icon={require("../../assets/rightShoulder.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_RIGHT_SHOULDER"
                    />
                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_SIGNAL"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_SPEED"
                    />
                    <CounterRow
                        title="Spacing"
                        icon={require("../../assets/spacing.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_SPACING"
                    />
                    <CounterRow
                        title="Steering Control"
                        icon={require("../../assets/SteeringControl.png")}
                        storageKey="FREEWAY_LANE_CHANGE_RIGHT_STEERING_CONTROL"
                    />
                
                <View style={{marginBottom: 25}}></View>
            </ScrollView>

        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4DB6AC',
      accent: '#90C96A',
       
    },
  };