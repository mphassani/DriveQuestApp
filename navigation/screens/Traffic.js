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
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="contained" color="#12414F" disabled="true">Intersection</Button>
                </View>
                <View style={{ paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%", marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
                    <Button mode="contained" color="#12414F" onPress={() => navigation.navigate("lanechangeleft")} >Lane Change</Button>
                </View>

            </View>
            <ScrollView>
                <SectionTitle name="Through" />
                <List.Section>

                    <List.Item
                        title="Visual Search"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/VisualSearch.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_THROUGH_VISUAL_SEARCH" />}
                    />

                    <List.Item
                        title="Speed"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_THROUGH_SPEED" />}
                    />

                    <List.Item
                        title="Unnecessary Stop"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/UnnecessaryStop.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_THROUGH_UNNECESSARY_STOP" />}
                    />
                    <List.Item
                        title="Yield"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/Yield.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_THROUGH_YIELD" />}
                    />
                </List.Section>


                <SectionTitle name="Stop" />
                <List.Section>
                    <List.Item 
                        title="Approach" 
                        left={(props) => 
                            <Avatar.Image {...props}  source={require('../../assets/GapLimitLine.png')}/>}
                        right={(props)  =><Counter storageKey="INTERSECTION_STOP_APPROACH"/>}
                            />
                    <List.Item
                        title="Gap/Limit Line"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/GapLimitLine.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_STOP_GAP_LIMIT_LINE" />}
                    />
                    <List.Item
                        title="Braking"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/Breaking.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_STOP_BRAKING" />}
                    />
                    <List.Item
                    title="Speed"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require("../../assets/speed.png")}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_STOP_SPEED"/>}
                    />
                    <List.Item
                        title="Visual Search"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/VisualSearch.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_STOP_VISUAL_SEARCH" />}
                    />
                    <List.Item
                        title="Full Stop"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/FullStop.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_STOP_FULL_STOP" />}
                    />
                </List.Section>


                <SectionTitle name="Start" />
                <List.Section>
                    <List.Item
                        title="Visual Search"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/VisualSearch.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_START_VISUAL_SEARCH" />}
                    />
                    <List.Item
                        title="Speed"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_START_SPEED" />}
                    />
                    <List.Item
                        title="Yield"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/Yield.png')} />}
                        right={(props) => <Counter storageKey="INTERSECTION_START_YIELD" />}
                    />
                </List.Section>
                <View style={{ marginBottom: 25 }}></View>
            </ScrollView>
        </PaperProvider>
    );

}
