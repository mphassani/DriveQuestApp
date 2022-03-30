import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, DefaultTheme} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';

const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#87181A',
      accent: '#FFFFFF',
    },
  };

// Stephanie's Page
export default function IntersectionScreen({ navigation }) {
    return (
        <PaperProvider theme={theme}>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Through
                    </Text>
                </View>
                <List.Section>

                <List.Item 
                    title="Traffic Check" 
                    left={(props) => 
                        <Avatar.Image {...props} source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_THROUGH_TRAFFIC_CHECK"/>}
                    />

                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_THROUGH_SPEED"/>}
                    />

                <List.Item
                    title="Unnecessary Stop"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/UnnecessaryStop.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_THROUGH_UNNECESSARY_STOP"/>}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Yield.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_THROUGH_YIELD"/>}
                    />
                </List.Section>
                                    

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Stop
                    </Text>
                </View>
                <List.Section>
                <List.Item
                    title="Gap/Limit Line"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/GapLimitLine.png')}/>}
                    right={(props)  =><Counter storageKey="INTERSECTION_STOP_GAP_LIMIT_LINE"/>}
                    />
                <List.Item
                    title="Braking"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Breaking.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_STOP_BRAKING"/>}
                    />
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_STOP_TRAFFIC_CHECK"/>}
                    />
                <List.Item 
                    title="Full Stop" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/FullStop.png')}/>}
                    right={(props)  =><Counter storageKey="INTERSECTION_STOP_FULL_STOP"/>}
                    />
                </List.Section>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Start
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_START_TRAFFIC_CHECK"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_START_SPEED"/>}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Yield.png')}/>}
                    right={(props) =><Counter storageKey="INTERSECTION_START_YIELD"/>}
                    />
                </List.Section>
            </ScrollView>
        </PaperProvider>
        
        
    );
}

// const styles = StyleSheet.create({
//     fab: {
//         position: 'absolute',
//         margin: 16,
//         right: 0,
//         bottom: 0,
//     },
//   });

