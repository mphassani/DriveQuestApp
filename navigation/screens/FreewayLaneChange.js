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


//Moises page 
export default function FreewayLaneChangeScreen({ navigation }) {
    return (
        <PaperProvider>
            <ScrollView>
            <View style={{ flexDirection:"row", justifyContent: "space-around" }}>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                        <Button mode="contained" color = "#87181A" disabled="true" >Left</Button>
                    </View>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                        <Button mode="contained" color = '#87181A' onPress={() => navigation.navigate("freelanechangeRight")}>Right</Button>
                    </View>
                </View> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Lane Change
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Driver Side Mirror" 
                    left={(props) =><Avatar.Image {...props}  source={require('../../assets/driverSideMirror.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_DRIVER_SIDE_MIRROR"/>}
                    />
                                    
                <List.Item
                    title="Rear View Mirror"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/rearViewMirror.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_REAR_VIEW_MIRROR"/>}
                    />
                <List.Item
                    title="Passenger Side Mirror"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/passengerSideMirror.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_PASSENGER_SIDE_MIRROR"/>}
                    />
                <List.Item 
                    title="Left Shoulder" 
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/leftShoulder.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_LEFT_SHOULDER"/>}
                    />
                <List.Item
                    title="Right Shoulder"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/rightShoulder.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_RIGHT_SHOULDER"/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/Signal.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_SIGNAL"/>}
                    />
                <List.Item
                    title="Speed"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_SPEED"/>}
                    />
                <List.Item
                    title="Spacing"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/spacing.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_SPACING"/>}
                    />
                <List.Item
                    title="Steering Control"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/SteeringControl.png')} />}
                    right={(props) => <Counter storageKey="FREEWAY_LANE_CHANGE_LEFT_STEERING_CONTROL"/>}
                    />
                </List.Section>
            </ScrollView>

        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#12414F',
      accent: '#90C96A',
       
    },
  };