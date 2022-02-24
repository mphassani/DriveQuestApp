import * as React from 'react';
import {
    View,
    Text,
    ScrollView 
} from 'react-native';
import { Provider as PaperProvider, Button, Appbar, DefaultTheme } from "react-native-paper";

// Stephanie's Page
export default function IntersectionScreen({ navigation }) {
    return (
        <PaperProvider>
            <ScrollView>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text
                        //onPress={() => navigation.navigate('Home')}
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Through
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Traffic Check
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Speed
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Unnecessary Stop
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Yield
                    </Text>
                </View>


            </ScrollView>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Intersection Screen
                </Text>
            </View> */}
        </PaperProvider>
        
        
    );
}
