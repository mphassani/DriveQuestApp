import * as React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Provider as PaperProvider, Button, List, IconButton, Avatar, Appbar, DefaultTheme } from "react-native-paper";

import CounterRow from '../../components/CounterRow';
import SectionTitle from '../../components/SectionTitle';


const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4DB6AC',
        accent: '#FFFFFF',
    },
};

// Stephanie's Page
export default function ResidentialScreen({ navigation }) {
    return (
        <PaperProvider theme={theme}>
            {/* <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="contained" color="#12414F">Residential/Business</Button>
                </View>
                
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="outlined" color="#12414F" onPress={() => navigation.navigate("turnscreenleft")}>Turns</Button>
                </View>

            </View> */}

            <ScrollView>
                <SectionTitle name="Residential/Business" />

                    
                    <CounterRow
                        title="Positioning"
                        icon={require("../../assets/positioning.png")}
                        storageKey="RESIDENTIAL_BUSINESS_POSITIONING"
                    />
                    <CounterRow
                        title="Safe Distance"
                        icon={require("../../assets/spacing.png")}
                        storageKey="RESIDENTIAL_BUSINESS_SAFE_DISTANCE"
                    />
                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="RESIDENTIAL_BUSINESS_SIGNAL"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="RESIDENTIAL_BUSINESS_SPEED"
                    />
                    <CounterRow 
                            title="Full Stop"
                            icon={require("../../assets/FullStop.png")}
                            storageKey="RESIDENTIAL_BUSINESS_FULL_STOP"
                        />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="RESIDENTIAL_BUSINESS_VISUAL_SEARCH"
                    />
                    <CounterRow
                        title="Right of Way"
                        icon={require("../../assets/rightofway.png")}
                        storageKey="RESIDENTIAL_BUSINESS_RIGHT_OF_WAY"
                    />


                <SectionTitle name="Pulling Up To The Curb" />
                <List.Section>
                    
                    <CounterRow 
                        title="Emergency Brake"
                        icon={require("../../assets/ParkingBreak.png")}
                        storageKey="RESIDENTIAL_CURB_EMERGENCY_BRAKE"
                    />

                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="RESIDENTIAL_CURB_SIGNAL"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="RESIDENTIAL_CURB_SPEED"
                    />
                    <CounterRow
                        title="Steering Control"
                        icon={require("../../assets/avoidsCurb.png")}
                        storageKey="RESIDENTIAL_CURB_STEERING_CONTROL"
                    />

                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="RESIDENTIAL_CURB_VISUAL_SEARCH"
                    />
                    <CounterRow
                        title="Parallel to Curb"
                        icon={require("../../assets/paralleltoCurb.png")}
                        storageKey="RESIDENTIAL_CURB_PARALLEL_TO_CURB"
                    />
                    
                </List.Section>

                <SectionTitle name="Pulling Away From The Curb" />
                <List.Section>

                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="RESIDENTIAL_CURB_SIGNAL_AWAY"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="RESIDENTIAL_CURB_SPEED_AWAY"
                    />
                    <CounterRow
                        title="Steering Control"
                        icon={require("../../assets/avoidsCurb.png")}
                        storageKey="RESIDENTIAL_CURB_STEERING_CONTROL_AWAY"
                    />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="RESIDENTIAL_CURB_VISUAL_SEARCH_AWAY"
                    />
                    
                </List.Section>


                <SectionTitle name="Reversing" />
                <List.Section>

                    <CounterRow
                        title="Parallel"
                        icon={require("../../assets/paralleltoCurb.png")}
                        storageKey="RESIDENTIAL_REVERSING_PARALLEL"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="RESIDENTIAL_REVERSING_SPEED"
                    />
                    <CounterRow
                        title="Steering Control"
                        icon={require("../../assets/avoidsCurb.png")}
                        storageKey="RESIDENTIAL_REVERSING_STEERING_CONTROL"
                    />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="RESIDENTIAL_REVERSING_VISUAL_SEARCH"
                    />
                        
                </List.Section>

                <View style={{ marginBottom: 25 }}></View>
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
