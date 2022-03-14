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
            <Appbar.Header theme={theme}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('Home')}/>
                </Appbar.Header>

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
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/spacing.png')}/>}
                    right={(props) =><Counter storagekey="residential_residential_safe_distance"/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter storagekey="residential_residential_positioning"/>}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/observation.png')}/>}
                    right={(props) =><Counter storagekey="residential_residential_observation"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storagekey="residential_residential_speed"/>}
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
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A'}}source={require('../../assets/spacing.png')}/>}
                    right={(props) =><Counter storagekey="residential_business_safe_distance"/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter storagekey="residential_business_positioning"/>}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/observation.png')}/>}
                    right={(props) =><Counter storagekey="residential_business_observation"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storagekey="residential_business_speed"/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storagekey="residential_business_signal"/>}
                    /> 
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter storagekey="residential_business_mirrors"/>}
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
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storagekey="residential_curb_speed"/>}
                    />
                <List.Item 
                    title="Avoids Curb" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/avoidsCurb.png')}/>}
                    right={(props) =><Counter storagekey="residential_curb_avoids_curb"/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storagekey="residential_curb_signal"/>}
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
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/rightShoulder.png')}/>}
                    right={(props) =><Counter storagekey="residential_reversing_right_shoulder"/>}
                    />
                <List.Item 
                    title="Avoids Curb" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/avoidsCurb.png')}/>}
                    right={(props) =><Counter storagekey="residential_reversing_avoids_curb"/>}
                    />
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter storagekey="residential_reversing_mirrors"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storagekey="residential_reversing_speed"/>}
                    />
                </List.Section>
            </ScrollView>
        </PaperProvider>
    );
}
