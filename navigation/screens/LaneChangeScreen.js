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
import Counter from '../../components/Counter';
import { useNavigation } from "@react-navigation/native";

const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#87181A',
      accent: '#FFFFFF',
    },
  };

//Christians page
export default function LaneChangeScreenRight() {
    const navigation = useNavigation();
    return (
    
        <PaperProvider theme={theme}>
            <ScrollView>
                <View style={{ flexDirection:"row", justifyContent: "space-around" }}>
                <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                            <Button mode="contained" color = '#87181A' onPress={() => navigation.navigate("lanechangeleft")} >Left</Button>
                        </View>
                        <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                            <Button mode="contained" color = "#87181A" disabled="true">Right</Button>
                        </View>
                </View>
                <List.Section>
                <List.Item 
                    title="Driver Side Mirror" 
                    left={(props) =><Avatar.Image {...props}  source={require('../../assets/driverSideMirror.png')} />}
                    //right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Driver_Side_Mirror" />}
                    />
                                    
                <List.Item
                    title="Rear View Mirror"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/rearViewMirror.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Rear_View_Mirror"/>}
                    />
                <List.Item
                    title="Passenger Side Mirror"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/passengerSideMirror.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Passenger_Side_Mirror"/>}
                    />
                <List.Item 
                    title="Left Shoulder" 
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/leftShoulder.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Left_Shoulder"/>}
                    />
                <List.Item
                    title="Right Shoulder"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/rightShoulder.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Right_Shoulder"/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/Signal.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Signal"/>}
                    />
                <List.Item
                    title="Speed"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Speed"/>}
                    />
                <List.Item
                    title="Spacing"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/spacing.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Spacing"/>}
                    />
                <List.Item
                    title="Steering Control"
                    left={(props) =><Avatar.Image {...props} source={require('../../assets/SteeringControl.png')} />}
                    right={(props) => <Counter storageKey="LaneChange_Right_Steering_Control"/>}
                    />
                </List.Section>
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