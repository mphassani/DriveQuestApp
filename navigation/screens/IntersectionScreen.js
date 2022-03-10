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
                        <Image 
                            style={{height:50,width:50,borderRadius: 50/ 2, backgroundColor: '#87181A'}}source={require('../../assets/TrafficCheck.png')}/>}
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
                    title="Unnecessary Stop"
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/UnnecessaryStop.png')}/>}
                    right={(props)  =><Counter/>}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Yield.png')}/>}
                    right={(props) =><Counter/>}
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
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/GapLimitLine.png')}/>}
                    right={(props)  =><Counter/>}
                    />
                <List.Item
                    title="Braking"
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Breaking.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => 
                    <Image 
                        style={{height:50,width:50,borderRadius: 50/ 2, backgroundColor: '#87181A'}}source={require('../../assets/TrafficCheck.png')}/>}
                    right={(props) =><Counter/>}
                    />
                <List.Item 
                    title="Full Stop" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/FullStop.png')}/>}
                    right={(props)  =><Counter/>}
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
                    <Image 
                        style={{height:50,width:50,borderRadius: 50/ 2, backgroundColor: '#87181A'}}source={require('../../assets/TrafficCheck.png')}/>}
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
                    title="Yield" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Yield.png')}/>}
                    right={(props) =><Counter/>}
                    />
                </List.Section>
            </ScrollView>
        </PaperProvider>
        
        
    );
}
