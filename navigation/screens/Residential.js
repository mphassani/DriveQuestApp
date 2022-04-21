import * as React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Provider as PaperProvider, Button, List, IconButton, Avatar, Appbar, DefaultTheme } from "react-native-paper";
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

// Stephanie's Page
export default function ResidentialScreen({ navigation }) {
    return (
        <PaperProvider theme={theme}>

            <ScrollView>
                <SectionTitle name="Residential" />
                <List.Section>
                <List.Item
                        title="Observation"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/observation.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_RESIDENTIAL_OBSERVATION" />}
                    />
                <List.Item
                        title="Positioning"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/positioning.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_RESIDENTIAL_POSITIONING" />}
                    />
                    
                <List.Item
                        title="Safe Distance"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/spacing.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_RESIDENTIAL_SAFE_DISTANCE" />}
                    />
                <List.Item
                        title="Speed"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_RESIDENTIAL_SPEED" />}
                    />
                </List.Section>


                <SectionTitle name="Business" />
                <List.Section>
                
                <List.Item
                        title="Observation"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/observation.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_BUSINESS_OBSERVATION" />}
                    />
                <List.Item
                        title="Positioning"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/positioning.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_BUSINESS_POSITIONING" />}
                    />
                <List.Item
                        title="Safe Distance"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/spacing.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_BUSINESS_SAFE_DISTANCE" />}
                    />
                <List.Item
                        title="Signal"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/Signal.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_BUSINESS_SIGNAL" />}
                    />
                <List.Item
                        title="Speed"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_BUSINESS_SPEED" />}
                    />
                <List.Item
                        title="Traffic Check"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/rearViewMirror.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_BUSINESS_MIRRORS" />}
                    />
                    
                    
                </List.Section>


                <SectionTitle name="Pulling Up To The Curb" />
                <List.Section>
                
                <List.Item
                        title="Signal"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/Signal.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_CURB_SIGNAL" />}
                />
                <List.Item
                        title="Speed"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_CURB_SPEED" />}
                />
                <List.Item
                        title="Steering Control"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/avoidsCurb.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_CURB_AVOIDS_CURB" />}
                />
                <List.Item
                    title="Visual Search"
                    left={(props) =>
                        <Avatar.Image {...props} source={require('../../assets/VisualSearch.png')} />}
                    right={(props) => <Counter storageKey="RESIDENTIAL_VISUAL_SEARCH" />}
                />
                    
                    
                </List.Section>


                <SectionTitle name="Reversing" />
                <List.Section>
                
                    <List.Item
                        title="Right Shoulder"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/rightShoulder.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_REVERSING_RIGHT_SHOULDER" />}
                    />
                    <List.Item
                        title="Speed"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/speed.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_REVERSING_SPEED" />}
                    />
                    <List.Item
                        title="Steering Control"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/avoidsCurb.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_REVERSING_AVOIDS_CURB" />}
                    />
                    <List.Item
                        title="Traffic Check"
                        left={(props) =>
                            <Avatar.Image {...props} source={require('../../assets/rearViewMirror.png')} />}
                        right={(props) => <Counter storageKey="RESIDENTIAL_REVERSING_MIRRORS" />}
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