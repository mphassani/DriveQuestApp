import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, Appbar, DefaultTheme} from "react-native-paper";

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
export default function ParkingLot({ navigation }) {
    return (
        <PaperProvider theme={theme}>

            <ScrollView>
                <SectionTitle name="Parking Lot" />

                <List.Section>
                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="PARKINGLOT_SIGNAL"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="PARKINGLOT_SPEED"
                        maxValue={8}
                    />
                    <CounterRow
                        title="Traffic Check"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="PARKINGLOT_MIRRORS"
                    />
                    <CounterRow
                        title="Positioning"
                        icon={require("../../assets/positioning.png")}
                        storageKey="PARKINGLOT_POSITIONING"
                    />
                </List.Section>
                <View style={{marginBottom: 25}}></View>
            </ScrollView>
        </PaperProvider>
    );
}
// const theme = {
//     ...DefaultTheme,
//     roundness: 2,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#12414F',
//       accent: '#90C96A',
//     },
//   };
