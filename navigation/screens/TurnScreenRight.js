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

export default function TurnScreenRight() {
    const navigation = useNavigation();
    return (
        <PaperProvider theme={theme}>
       
            <View style={{ flexDirection:"row", justifyContent: "space-around" }}>
            <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                        <Button mode="contained" color = "#12414F" onPress={() => navigation.navigate("turnscreenleft")} >Left</Button>
                    </View>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                        <Button mode="contained" color = "#12414F" disabled="true">Right</Button>
                    </View>
            </View>
        <ScrollView>
            <SectionTitle name="Approach" />
            <List.Section>
            <List.Item
                    title="Braking"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Breaking.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_APPROACH_BRAKING"/>}
                    />
                <List.Item
                    title="Lane Use"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_APPROACH_LANE_USE"/>}
                    />
                    <List.Item
                    title="Signal"
                    left={(props) => 
                        <Avatar.Image {...props} source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_APPROACH_SIGNAL"r/>}
                    /> 
                    <List.Item 
                    title="Traffic Check" 
                    left={(props) => 
                        <Avatar.Image {...props} source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_APPROACH_TRAFFIC_CHECK"/>}
                    />
                <List.Item
                    title="Unnecessary Stop"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/UnnecessaryStop.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_APPROACH_UNNECCESSARY_STOP"/>}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Yield.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_APPROACH_YIELD"/>}

                    />
            

            <SectionTitle name="Stop" />
            <List.Item
                    title="Gap/Limit Line"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/GapLimitLine.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_STOP_GAP_LIMIT_LINE"/>}

                    />
                <List.Item 
                    title="Full Stop" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/FullStop.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_STOP_FULL_STOP"/>}

                    />
                <List.Item
                    title="Traffic Check"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_STOP_TRAFFIC_CHECK"/>}

                    />
                <List.Item
                    title="Wheels Straight"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/WheelsStraight.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_STOP_WHEELS_STRAIGHT"/>}

                    />

            <SectionTitle name="During" />
            <List.Item 
                    title="Correct Lane" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/correctlane.png')}/>}
                    right={(props) =><Counter  storageKey="TURNS_LEFT_DURING_CORRECT_LANE"/>}

                    />
                <List.Item 
                    title="Signal" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_DURING_SIGNAL"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_DURING_SPEED"/>}

                    />
                <List.Item 
                    title="Steering Control" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/SteeringControl.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_DURING_STEERING_CONTROL"/>}

                    />
                
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_DURING_TRAFFIC_CHECK"/>}
                />
                <List.Item 
                    title="Too Short" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/too_short.png')}/>}
                    right={(props)  =><Counter storageKey="TURNS_LEFT_DURING_TOO_SHORT"/>}

                />
                <List.Item 
                    title="Too Wide" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/too_wide.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_DURING_TOO_WIDE"/>}

                />
                <List.Item 
                    title="Yield" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Yield.png')}/>}
                    right={(props) =><Counter storageKey="TURNS_LEFT_DURIN_YIELD"/>}

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

