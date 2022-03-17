import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, Appbar, DefaultTheme} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';

// Stephanie's Page
export default function ParkingLot({ navigation }) {
    return (
        <PaperProvider>

            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Parking Lot
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Mirrors" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/rearViewMirror.png')}/>}
                    right={(props) =><Counter storageKey="PARKINGLOT_MIRRORS"/>}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/positioning.png')}/>}
                    right={(props) =><Counter storageKey="PARKINGLOT_POSITIONING"/>}
                    />
                <List.Item 
                    title="Signal" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                    right={(props) =><Counter storageKey="PARKINGLOT_SIGNAL"/>}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => 
                        <Image 
                            style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                    right={(props) =><Counter storageKey="PARKINGLOT_SPEED"/>}
                    />
                </List.Section>
         
            </ScrollView>
        </PaperProvider>
    );
}
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#12414F',
      accent: '#90C96A',
    },
  };
