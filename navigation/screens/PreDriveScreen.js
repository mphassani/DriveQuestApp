import * as React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Text, TextInput } from 'react-native';
import { Provider as PaperProvider, List, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CheckboxRow from "../../components/CheckboxRow";
import SectionTitle from '../../components/SectionTitle';




//pre-drive screen display 

//Stacy and Kevin's work

export default function PreDriveScreen({ navigation }) {    

    return (
        <PaperProvider>
            <ScrollView>
                <SectionTitle name="Pre-Drive Checklist" />

                <List.Section>

                    <CheckboxRow
                        title="Brake Lights"
                        icon={require("../../assets/brakeLights.png")}
                        storageKey="PREDRIVE_BRAKE_LIGHTS"
                    />

                    <CheckboxRow
                        title="Defroster"
                        icon={require("../../assets/defroster.png")}
                        storageKey="PREDRIVE_DEFROSTER"
                    />

                    <CheckboxRow
                        title="Driver Window"
                        icon={require("../../assets/driverSideWindow.png")}
                        storageKey="PREDRIVE_DRIVER_WINDOW"
                    />

                    <CheckboxRow
                        title="Emergency Brakes"
                        icon={require("../../assets/parkingBrake.png")}
                        storageKey="PREDRIVE_PARKING_BRAKE"
                    />

                    <CheckboxRow
                        title="Emergency Flasher"
                        icon={require("../../assets/emergencyLights.png")}
                        storageKey="PREDRIVE_EMERGENCY_FLASHER"
                    />

                    <CheckboxRow
                        title="Foot Brake"
                        icon={require("../../assets/Breaking2.png")}
                        storageKey="PREDRIVE_FOOT_BRAKES"
                    />

                    <CheckboxRow
                        title="Glove Box"
                        icon={require("../../assets/gloveBox.png")}
                        storageKey="PREDRIVE_GLOVE_BOX"
                    />

                    <CheckboxRow
                        title="Headlights"
                        icon={require("../../assets/headlights.png")}
                        storageKey="PREDRIVE_HEADLIGHTS"
                    />

                    <CheckboxRow
                        title="Horn"
                        icon={require("../../assets/horn.png")}
                        storageKey="PREDRIVE_HORN"
                    />

                    <CheckboxRow
                        title="Left Arm Signal"
                        icon={require("../../assets/leftArmSignal.png")}
                        storageKey="PREDRIVE_LEFT_ARM_SIGNAL"
                    />

                    <CheckboxRow
                        title="Right Arm Signal"
                        icon={require("../../assets/armSignals.png")}
                        storageKey="PREDRIVE_RIGHT_ARM_SIGNAL"
                    />

                    <CheckboxRow
                        title="Stop Arm Signal"
                        icon={require("../../assets/stopArmSignal.png")}
                        storageKey="PREDRIVE_STOP_ARM_SIGNAL"
                    />

                    <CheckboxRow
                        title="Passenger Door"
                        icon={require("../../assets/passengerDoor.png")}
                        storageKey="PREDRIVE_PASSENGER_DOOR"
                    />

                    <CheckboxRow
                        title="Rearview Mirrors"
                        icon={require("../../assets/rearViewMirror.png")}
                        storageKey="PREDRIVE_REAR_VIEW_MIRRORS"
                    />

                    <CheckboxRow
                        title="Left Turn Signal"
                        icon={require("../../assets/LeftSignal.png")}
                        storageKey="PREDRIVE_LEFT_TURN_SIGNAL"
                    />

                    <CheckboxRow
                        title="Right Turn Signal"
                        icon={require("../../assets/RightSignal.png")}
                        storageKey="PREDRIVE_RIGHT_TURN_SIGNAL"
                    />

                    <CheckboxRow
                        title="Seatbelts"
                        icon={require("../../assets/seatbelts.png")}
                        storageKey="PREDRIVE_SEATBELTS"
                    />

                    <CheckboxRow
                        title="Tires"
                        icon={require("../../assets/tires.png")}
                        storageKey="PREDRIVE_TIRES"
                    />

                    <CheckboxRow
                        title="Windshield"
                        icon={require("../../assets/windshield.png")}
                        storageKey="PREDRIVE_WINDSHIELD"
                    />

                    <CheckboxRow
                        title="Windshield Wipers"
                        icon={require("../../assets/windshieldWipers.png")}
                        storageKey="PREDRIVE_WINDSHIELD_WIPERS"
                    />

                </List.Section>
                <View style={{marginBottom: 25}}></View>
            </ScrollView>
        </PaperProvider>

    );

}

