import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';

// Stephanie's Page
export default function ResidentialScreen({ navigation }) {
    return (
        <PaperProvider>
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
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/observation.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter/>}
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
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/spacing.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/observation.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter/>}
                    /> 
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter/>}
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
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Avoids Curb" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/avoidsCurb.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter/>}
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
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Avoids Curb" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/avoidsCurb.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter/>}
                    />
                </List.Section>
            </ScrollView>
        </PaperProvider>
    );
}