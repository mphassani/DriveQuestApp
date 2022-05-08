import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';
import { Provider as PaperProvider, Button, List, IconButton, Avatar, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';

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

export default function Traffic({ navigation }) {
    return (
        <PaperProvider theme={theme}>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "30%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="contained" color="#12414F">Intersection</Button>
                </View>
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "30%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="outlined" color="#12414F" onPress={() => navigation.navigate("lanechangeleft")} >Lane Change</Button>
                </View>
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "30%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="outlined" color="#12414F" onPress={() => navigation.navigate("turnscreenleft")} >Turns</Button>
                </View>

            </View> */}
            {/* <Portal>
                <CurrentErrorCount/>
            </Portal> */}
            <ScrollView>
                <SectionTitle name="Through" />
                <CounterRow 
                        title="Positioning"
                        icon={require("../../assets/positioning.png")}
                        storageKey="INTERSECTION_THROUGH_POSITIONING"
                    />
                    <CounterRow 
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="INTERSECTION_THROUGH_VISUAL_SEARCH"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="INTERSECTION_THROUGH_SPEED"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Unnecessary Stop"
                        icon={require("../../assets/UnnecessaryStop.png")}
                        storageKey="INTERSECTION_THROUGH_UNNECESSARY_STOP"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Yield"
                        icon={require("../../assets/Yield.png")}
                        storageKey="INTERSECTION_THROUGH_YIELD"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Right of Way"
                        icon={require("../../assets/rightofway.png")}
                        storageKey="INTERSECTION_THROUGH_RIGHT_OF_WAY"
                        maxValue={8}
                    />
                    
                    <SectionTitle name="Stop" />

                    <CounterRow
                        title="Approach"
                        icon={require('../../assets/GapLimitLine.png')}
                        storageKey="INTERSECTION_STOP_APPROACH"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Limit Line"
                        icon={require('../../assets/LimitLine.png')}
                        storageKey="INTERSECTION_STOP_GAP_LIMIT_LINE"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Braking"
                        icon={require("../../assets/Breaking.png")}
                        storageKey="INTERSECTION_STOP_BRAKING"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="INTERSECTION_STOP_SPEED"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="INTERSECTION_STOP_VISUAL_SEARCH"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Full Stop"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="INTERSECTION_STOP_FULL_STOP"
                        maxValue={8}
                    />

                    <SectionTitle name="Start" />

                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="INTERSECTION_START_VISUAL_SEARCH"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="INTERSECTION_START_SPEED"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Yield"
                        icon={require("../../assets/Yield.png")}
                        storageKey="INTERSECTION_START_YIELD"
                        maxValue={8}
                    />
                <View style={{marginBottom: 25}}></View>
            </ScrollView>
        </PaperProvider>
    );
}
