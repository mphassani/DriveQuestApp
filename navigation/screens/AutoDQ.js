import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CheckboxRow from "../../components/CheckboxRow";


export default function AutoDQ({ navigation }) {

    const navigator = useNavigation();

    return (
        <PaperProvider>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: "5%", paddingBottom: "2%" }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Automatic Disqualification
                    </Text>
                </View>
                <List.Section>

                    <CheckboxRow
                        title="Examiner Intervention"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_EXAMINER_INTERVENTION"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Dangerous Maneuver"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_DANGEROUS_MANEUVER"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Strikes Object"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_STRIKES_OBJECT"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Driving Speed"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_DRIVING_SPEED"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Disobeys Traffic Signage"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_DISOBEYS_TRAFFIC_SIGNAGE"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Aux Equipment Use"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_AUX_EQUIPMENT_USE"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Disobeys Examiner"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_DISOBEYS_EXAMINER"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Lane Violation"
                        icon={require("../../assets/FullStop.png")}
                        storageKey="AUTODQ_LANE_VIOLATION"
                        checkboxType="bad"
                    />

                </List.Section>
                <View style={{marginBottom: 25}}></View>
            </ScrollView>
        </PaperProvider>
    );
}