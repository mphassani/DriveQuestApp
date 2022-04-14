import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as StorageHandler from "../../StorageHandler";
import CheckboxItem from "../../components/CheckboxItem";
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
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_EXAMINER_INTERVENTION"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Dangerous Maneuver"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_DANGEROUS_MANEUVER"
                        checkboxType="good"
                    />

                    <CheckboxRow
                        title="Strikes Object"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_STRIKES_OBJECT"
                        checkboxType="bad"
                    />

                    <CheckboxRow
                        title="Driving Speed"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_DRIVING_SPEED"
                    />

                    <CheckboxRow
                        title="Disobeys Traffic Signage"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_DISOBEYS_TRAFFIC_SIGNAGE"
                    />

                    <CheckboxRow
                        title="Aux Equipment Use"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_AUX_EQUIPMENT_USE"
                    />

                    <CheckboxRow
                        title="Disobeys Examiner"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_DISOBEYS_EXAMINER"
                    />

                    <CheckboxRow
                        title="Lane Violation"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="AUTODQ_LANE_VIOLATION"
                    />

                </List.Section>
            </ScrollView>
        </PaperProvider>
    );
}