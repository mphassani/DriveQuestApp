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

            <ScrollView>
                <SectionTitle name="Residential/Business" />
                <List.Section>

                    <CounterRow
                        title="Observation"
                        icon={require("../../assets/observation.png")}
                        storageKey="RESIDENTIAL_BUSINESS_OBSERVATION"
                    />
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
                        title="Traffic Check"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="RESIDENTIAL_BUSINESS_TRAFFIC_CHECK"
                    />
                    
                </List.Section>


                <SectionTitle name="Pulling Up To The Curb" />
                <List.Section>

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
                        title="Right Shoulder"
                        icon={require("../../assets/rightShoulder.png")}
                        storageKey="RESIDENTIAL_REVERSING_RIGHT_SHOULDER"
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
                        title="Traffic Check"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="RESIDENTIAL_REVERSING_TRAFFIC_CHECK"
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