import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView
  } from "react-native";
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB, Appbar, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';
import { useNavigation } from '@react-navigation/native';

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


// Moises's page
export default function FreewayDriving() {
    const navigation = useNavigation();
    return (
        <PaperProvider theme={theme}>
            <ScrollView>
                {/* <View style={{justifyContent: "center", alignContent:'center', flexDirection: "row", paddingTop:"8%"}}>
                <Button mode='contained' color = "#12414F" onPress={() => navigation.navigate("freelanechange")}>Freeway Lane Change</Button>
                </View> */}

                <SectionTitle name="Freeway Entering" />
                    <CounterRow
                        title="Scanning"
                        icon={require("../../assets/scanning.png")}
                        storageKey="FREEWAY_ENTERING_SCANNING"
                    />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="FREEWAY_ENTERING_VISUAL_SEARCH"
                    />
                    <CounterRow
                        title="Enter Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="FREEWAY_ENTERING_ENTER_SPEED"
                    />
                    <CounterRow
                        title="Positioning"
                        icon={require("../../assets/positioning.png")}
                        storageKey="FREEWAY_ENTERING_POSITIONING"
                    />
                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="FREEWAY_ENTERING_SIGNAL"
                    />
                    <CounterRow
                        title="Right of Way"
                        icon={require("../../assets/rightofway.png")}
                        storageKey="FREEWAY_ENTERING_RIGHT_OF_WAY"
                    />
  
                  <SectionTitle name="Freeway Driving" />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="FREEWAY_DRIVING_VISUAL_SEARCH"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="FREEWAY_DRIVING_SPEED"
                    />
                    <CounterRow
                        title="Positioning"
                        icon={require("../../assets/positioning.png")}
                        storageKey="FREEWAY_DRIVING_POSITIONING"
                    />
                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="FREEWAY_DRIVING_SIGNAL"
                    />
                    <CounterRow
                        title="Right of Way"
                        icon={require("../../assets/rightofway.png")}
                        storageKey="FREEWAY_DRIVING_RIGHT_OF_WAY"
                    />
  
                  <SectionTitle name="Freeway Exiting" />
                    <CounterRow
                        title="Visual Search"
                        icon={require("../../assets/VisualSearch.png")}
                        storageKey="FREEWAY_EXITING_VISUAL_SEARCH"
                    />
                    <CounterRow
                        title="Exit Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="FREEWAY_EXITING_EXIT_SPEED"
                    />
                    <CounterRow
                        title="Positioning"
                        icon={require("../../assets/positioning.png")}
                        storageKey="FREEWAY_EXITING_POSITIONING"
                    />
                    <CounterRow
                        title="Signal"
                        icon={require("../../assets/Signal.png")}
                        storageKey="FREEWAY_EXITING_SIGNAL"
                    />
                    <CounterRow
                        title="Yield"
                        icon={require("../../assets/Yield.png")}
                        storageKey="FREEWAY_EXITING_YIELD"
                    />
                    <CounterRow
                        title="Correct Lane"
                        icon={require("../../assets/spacing.png")}
                        storageKey="FREEWAY_EXITING_CORRECT_LANE"
                    />
                    <CounterRow
                        title="Speed"
                        icon={require("../../assets/speed.png")}
                        storageKey="FREEWAY_EXITING_SPEED"
                    />
                    <CounterRow
                        title="Right of Way"
                        icon={require("../../assets/rightofway.png")}
                        storageKey="FREEWAY_EXITING_RIGHT_OF_WAY"
                    />
                  <View style={{marginBottom: 25}}></View>
            </ScrollView>

        </PaperProvider>
    
       // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         //   <Text
           //     onPress={() => navigation.navigate('Home')}
             //   style={{ fontSize: 26, fontWeight: 'bold' }}>Turn Screen</Text>
       // </View>
        //<View>
        //    <Text>Buttons</Text>
        //</View>
        
    );
}
