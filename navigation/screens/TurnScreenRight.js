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
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB, DefaultTheme  } from "react-native-paper";
import Counter from '../../components/Counter';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import CounterRow from '../../components/CounterRow';
import SectionTitle from '../../components/SectionTitle';

// CECE's PAGE
const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4DB6AC',
      accent: '#FFFFFF',
    },
  };

export default function TurnScreenRight({ navigation }) {

    return (
        <PaperProvider theme={theme}>
       
            {/* <View style={{ flexDirection:"row", justifyContent: "space-around" }}>
            <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                        <Button mode="outlined" color = "#12414F" onPress={() => navigation.navigate("turnscreenleft")} >Left</Button>
                    </View>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                        <Button mode="contained" color = "#12414F">Right</Button>
                    </View>
            </View> */}
        <ScrollView>
        <SectionTitle name="Approach" />
                    <CounterRow 
                            title="Braking"
                            icon={require("../../assets/Breaking.png")}
                            storageKey="TURNS_RIGHT_APPROACH_BRAKING"
                        />
                    <CounterRow 
                            title="Lane Use"
                            icon={require("../../assets/positioning.png")}
                            storageKey="TURNS_RIGHT_APPROACH_LANE_USE"
                        />
                    <CounterRow 
                            title="Speed"
                            icon={require("../../assets/speed.png")}
                            storageKey="TURNS_RIGHT_APPROACH_SPEED"
                        />
                    <CounterRow 
                            title="Signal"
                            icon={require("../../assets/Signal.png")}
                            storageKey="TURNS_RIGHT_APPROACH_SIGNAL"
                        />
                    <CounterRow 
                            title="Visual Search"
                            icon={require("../../assets/VisualSearch.png")}
                            storageKey="TURNS_RIGHT_APPROACH_VISUAL_SEARCH"
                        />
                    <CounterRow 
                            title="Unnecessary Stop"
                            icon={require("../../assets/UnnecessaryStop.png")}
                            storageKey="TURNS_RIGHT_APPROACH_UNNECESSARY_STOP"
                        />
                    <CounterRow 
                            title="Yield"
                            icon={require("../../assets/Yield.png")}
                            storageKey="TURNS_RIGHT_APPROACH_YIELD"
                        />

                <List.Section>
                

                <SectionTitle name="Stop" />


                <CounterRow 
                            title="Approach"
                            icon={require("../../assets/GapLimitLine.png")}
                            storageKey="TURNS_RIGHT_STOP_APPROACH"
                        />
                <CounterRow 
                            title="Limit Line"
                            icon={require("../../assets/LimitLine.png")}
                            storageKey="TURNS_RIGHT_STOP_GAP_LIMIT_LINE"
                        />
                <CounterRow 
                            title="Full Stop"
                            icon={require("../../assets/FullStop.png")}
                            storageKey="TURNS_RIGHT_STOP_FULL_STOP"
                        />
                <CounterRow 
                            title="Speed"
                            icon={require("../../assets/speed.png")}
                            storageKey="TURNS_RIGHT_STOP_SPEED"
                        />
                <CounterRow 
                            title="Visual Search"
                            icon={require("../../assets/VisualSearch.png")}
                            storageKey="TURNS_RIGHT_STOP_VISUAL_SEARCH"
                        />
                <CounterRow 
                            title="Wheels Straight"
                            icon={require("../../assets/WheelsStraight.png")}
                            storageKey="TURNS_RIGHT_STOP_WHEELS_STRAIGHT"
                        />
                

                <SectionTitle name="During" />

                <CounterRow 
                            title="Correct Lane"
                            icon={require("../../assets/correctlane.png")}
                            storageKey="TURNS_RIGHT_DURING_CORRECT_LANE"
                        />
                <CounterRow 
                            title="Signal"
                            icon={require("../../assets/Signal.png")}
                            storageKey="TURNS_RIGHT_DURING_SIGNAL"
                        />
                <CounterRow 
                            title="Speed"
                            icon={require("../../assets/speed.png")}
                            storageKey="TURNS_RIGHT_DURING_SPEED"
                        />
                <CounterRow 
                            title="Steering Control"
                            icon={require("../../assets/SteeringControl.png")}
                            storageKey="TURNS_RIGHT_DURING_STEERING_CONTROL"
                        />
                <CounterRow 
                            title="Visual Search"
                            icon={require("../../assets/VisualSearch.png")}
                            storageKey="TURNS_RIGHT_DURING_VISUAL_SEARCH"
                        />
                <CounterRow 
                            title="Too Short"
                            icon={require("../../assets/too_short.png")}
                            storageKey="TURNS_RIGHT_DURING_TOO_SHORT"
                        />
                <CounterRow 
                            title="Too Wide"
                            icon={require("../../assets/too_wide.png")}
                            storageKey="TURNS_RIGHT_DURING_TOO_WIDE"
                        />
                <CounterRow 
                            title="Yield"
                            icon={require("../../assets/Yield.png")}
                            storageKey="TURNS_RIGHT_DURING_YIELD"
                        />
                <CounterRow 
                            title="Smoothness"
                            icon={require("../../assets/smoothness.png")}
                            storageKey="TURNS_RIGHT_DURING_SMOOTHNESS"
                        />


            </List.Section>
            <View style={{marginBottom: 25}}></View>
        </ScrollView>

    </PaperProvider>
    
       // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         //   <Text
           //     onPress={() => navigation.navigate('Home')}
             //   style={{ fontSize: 26, fontWeight: 'bold' }}>Turn Screen</Text>
       // </View>
        //<View>
        //    <Text>Buttons</Text>
        //</View>
        
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

