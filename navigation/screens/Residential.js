import * as React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, Appbar, DefaultTheme} from "react-native-paper";
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
export default function ResidentialScreen({ navigation }) {
    return (
        <PaperProvider theme={theme}>

            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Residential
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Safe Distance" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/spacing.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_RESIDENTIAL_SAFE_DISTANCE"/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_RESIDENTIAL_POSITIONING"/>}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/observation.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_RESIDENTIAL_OBSERVATION"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_RESIDENTIAL_SPEED"/>}
                    />
                </List.Section>
                                    

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Business
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Safe Distance" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/spacing.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_BUSINESS_SAFE_DISTANCE"/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_BUSINESS_POSITIONING"/>}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/observation.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_BUSINESS_OBSERVATION"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_BUSINESS_SPEED"/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_BUSINESS_SIGNAL"/>}
                    /> 
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_BUSINESS_MIRRORS"/>}
                    />
                </List.Section>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Pulling up to the curb
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_CURB_SPEED"/>}
                    />
                <List.Item 
                    title="Avoids Curb" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/avoidsCurb.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_CURB_AVOIDS_CURB"/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_CURB_SIGNAL"/>}
                    /> 
                </List.Section>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Reversing
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Right Shoulder" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/rightShoulder.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_REVERSING_RIGHT_SHOULDER"/>}
                    />
                <List.Item 
                    title="Avoids Curb" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/avoidsCurb.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_REVERSING_AVOIDS_CURB"/>}
                    />
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_REVERSING_MIRRORS"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Avatar.Image {...props}  source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="RESIDENTIAL_REVERSING_SPEED"/>}
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
