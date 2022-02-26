import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, Appbar, DefaultTheme } from "react-native-paper";

// Stephanie's Page
export default function IntersectionScreen({ navigation }) {
    return (
        <PaperProvider>
            <ScrollView>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text
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

                

                
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Stop
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Gap/Limit Line
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Braking
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Traffic Check
                    </Text>
                </View>

                <View style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingLeft: "20%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text style={{ fontSize: 18}}>
                        Full Stop
                    </Text>
                </View>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%", paddingBottom: "5%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Start
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
                        Yield
                    </Text>
                </View>


            </ScrollView>
        </PaperProvider>
        
        
    );
}
