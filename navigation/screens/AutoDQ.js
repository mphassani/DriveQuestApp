import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as StorageHandler from "../../StorageHandler";
import HomeScreen from './HomeScreen';
import MainHome from '../../AllScreen';
import CheckboxItem from "../../components/CheckboxItem";

export default function AutoDQ({ navigation }) {

    const navigator = useNavigation();

    return (
        <PaperProvider>
            <SafeAreaView>
                {/* Enables the scroll bar feature for the page */}
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "10%", paddingTop: "5%" }}>
                        {/* Sets properties for the title text */}
                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold' }}>Automatic Disqualification
                        </Text>
                    </View>
                    <List.Section>

                        <List.Item
                            title=" Examiner Intervention"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_EXAMINER_INTERVENTION" />}
                        />

                        <List.Item
                            title=" Dangerous Maneuver"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_DANGEROUS_MANEUVER" />}
                        />

                        <List.Item
                            title=" Strikes Object"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_STRIKES_OBJECT" />}
                        />

                        <List.Item
                            title=" Driving Speed"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_DRIVING_SPEED" />}
                        />

                        <List.Item
                            title=" Disobeys Traffic Signage"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_DISOBEYS_TRAFFIC_SIGNAGE" />}
                        />

                        <List.Item
                            title=" Aux Equipment Use"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_AUX_EQUIPMENT_USE" />}
                        />

                        <List.Item
                            title=" Disobeys Examiner"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_DISOBEYS_EXAMINER" />}
                        />

                        <List.Item
                            title=" Lane Violation"
                            left={(props) => <Image style={styles.grayCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="AUTODQ_LANE_VIOLATION" />}
                        />

                    </List.Section>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>

    );




}


//style-sheet 
const styles = StyleSheet.create({

    /* creates gray circle to use for lefthand icons */
    grayCircle: {
        height: 64,
        width: 64, 
        borderRadius: 32, 
        backgroundColor: "#707070",
    },
});