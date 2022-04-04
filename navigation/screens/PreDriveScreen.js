import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CheckboxItem from "../../components/CheckboxItem";

const { height } = Dimensions.get('window');

//pre-drive screen display 

export default function PreDriveScreen({ navigation }) {

    const [visible, setVisible] = React.useState(true);
    const [visible2, setVisible2] = React.useState(true);
    const [visible3, setVisible3] = React.useState(true);
    const showDialog2 = () => setVisible2 = (true);
    const showDialog3 = () => setVisible3 = (true);
    const hideDialog = () => setVisible(false);
    const hideDialog2 = () => setVisible2(false);
    const hideDialog3 = () => setVisible3(false);
    const [checked, setChecked] = React.useState('first');
    const [soundChecked, setSoundChecked] = React.useState('first');
    const navigator = useNavigation();

    return (
        <PaperProvider>
            <SafeAreaView>
                <Portal>
                    <Dialog visible={visible} dismissable={false} onDismiss={showDialog2}>
                        <Dialog.Title>Freeway Driving</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Do you want to enable freeway driving for this route?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Yes</Button>
                            <Button onPress={hideDialog}>No</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <Portal>
                    <Dialog visible={visible3} dismissable={false} onDismiss={hideDialog3}>
                        <Dialog.Title>Route Selection</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Please select the route for this practice test</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <ScrollView>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Fairytale Gardens</Text>
                                    <RadioButton value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked}'}
                                        onPress={() => setChecked('first')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Crystal Cove</Text>
                                    <RadioButton value="second"
                                        status={checked === 'second' ? 'checked' : 'unchecked}'}
                                        onPress={() => setChecked('second')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Rainbow Road</Text>
                                    <RadioButton value="third"
                                        status={checked === 'third' ? 'checked' : 'unchecked}'}
                                        onPress={() => setChecked('third')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Pacific Coast Highway</Text>
                                    <RadioButton value="fourth"
                                        status={checked === 'fourth' ? 'checked' : 'unchecked}'}
                                        onPress={() => setChecked('fourth')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>DriveQuest Circuit</Text>
                                    <RadioButton value="fifth"
                                        status={checked === 'fifth' ? 'checked' : 'unchecked}'}
                                        onPress={() => setChecked('fifth')}
                                    />
                                </View>
                                <Button onPress={hideDialog3}>Ok</Button>
                            </ScrollView>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <Portal>
                    <Dialog visible={visible2} dismissable={false} onDismiss={showDialog3}>
                        <Dialog.Title>Sound Selection</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Please select the error sound you'd like to use for this practice test.</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <ScrollView>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Bell</Text>
                                    <RadioButton value="first"
                                        status={soundChecked === 'first' ? 'checked' : 'unchecked}'}
                                        onPress={() => setSoundChecked('first')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Horn</Text>
                                    <RadioButton value="second"
                                        status={soundChecked === 'second' ? 'checked' : 'unchecked}'}
                                        onPress={() => setSoundChecked('second')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Oink</Text>
                                    <RadioButton value="third"
                                        status={soundChecked === 'third' ? 'checked' : 'unchecked}'}
                                        onPress={() => setSoundChecked('third')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Police Siren</Text>
                                    <RadioButton value="fourth"
                                        status={soundChecked === 'fourth' ? 'checked' : 'unchecked}'}
                                        onPress={() => setSoundChecked('fourth')}
                                    />
                                </View>
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Piano</Text>
                                    <RadioButton value="fifth"
                                        status={soundChecked === 'fifth' ? 'checked' : 'unchecked}'}
                                        onPress={() => setSoundChecked('fifth')}
                                    />
                                </View>
                                <Button onPress={hideDialog2}>Ok</Button>
                            </ScrollView>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                {/* Stacy and Kevin's work */}
                {/* Enables the scroll bar feature for the page */}
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "10%", paddingTop: "5%" }}>
                        {/* Sets properties for the title text */}
                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold' }}>Pre-Drive Checklist
                        </Text>
                    </View>
                    {/* consists of the 17 pre-drive checklist items */}
                    <List.Section>
                        {/* Each list item has a title (the item name), a left (the icon), and a right (the checkbox) attribute */}
                        <Pressable onPress = {onButtonPress}>
                        <List.Item
                            title=" Driver window"
                            left={(props) =><Image style={styles.greenCircle} source={require('../../assets/driverSideWindow.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_DRIVER_WINDOW"/>}
                            onPress = {onButtonPress}
                        />
                        </Pressable>
                        <List.Item
                            title=" Windshield"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/windshield.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_WINDSHIELD"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Rear view mirrors"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/rearViewMirror.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_REAR_VIEW_MIRRORS"/>}
                            onPress = {onButtonPress}
                        />
                        {/*FIXME: add other turn signal*/}
                        <List.Item
                            title=" Right Turn Signal"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/RightSignal.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_RIGHT_TURN_SIGNAL"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Left Turn Signal"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/LeftSignal.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_LEFT_TURN_SIGNAL"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Brake lights"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/brakeLights.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_BRAKE_LIGHTS"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Tires"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/tires.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_TIRES"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Foot brake"
                            left={(props) => <Image style={styles.greenCircle}source={require('../../assets/Breaking.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_FOOT_BRAKES"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Horn"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/horn.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_HORN"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Emergency/parking brake"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/parkingBrake.png')} /> }
                            right={() => <CheckboxItem storageKey="PREDRIVE_PARKING_BRAKE"/>}
                            onPress = {onButtonPress}
                        />
                        {/*FIXME: add other arm signals*/}
                        <List.Item
                            title=" Right Arm Signal"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/armSignals.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_RIGHT_ARM_SIGNAL"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Left Arm Signal"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/leftArmSignal.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_LEFT_ARM_SIGNAL"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Stop Arm Signal"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/stopArmSignal.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_STOP_ARM_SIGNAL"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Windshield wipers"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/windshieldWipers.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_WINDSHIELD_WIPERS"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Defroster"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/defroster.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_DEFROSTER"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Emergency flasher"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/emergencyLights.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_EMERGENCY_FLASHER"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Headlights"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/headlights.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_HEADLIGHTS"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Passenger door"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/passengerDoor.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_PASSENGER_DOOR"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Glove box"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/gloveBox.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_GLOVE_BOX"/>}
                            onPress = {onButtonPress}
                        />
                        <List.Item
                            title=" Seat belts"
                            left={(props) => <Image style={styles.greenCircle} source={require('../../assets/seatbelts.png')} />}
                            right={() => <CheckboxItem storageKey="PREDRIVE_SEATBELTS"/>}
                            onPress = {onButtonPress}
                        />
                    </List.Section>

                    {/* Submit button for the pre-drive checklist */}
                    <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%" }}>
                        <Button mode="contained" onPress={() => navigation.navigate('Home')}>Submit                   </Button>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </PaperProvider>

    );




}

 export function onButtonPress(){

}



//counter - counts the number of pre-drive checklist items marked correct for later use in viewing results 
var counter = 0;

//increments the value of counter by 1, logging it to the console for now 
export function incrementVal() {
    ++counter;
    console.log(counter);
}

//decrements the value of counter by 1, logging it to the console for now 
export function decrementVal() {
    --counter;
    console.log(counter);
}

//style-sheet 
const styles = StyleSheet.create({

    /* creates green circle to use for lefthand icons */
    greenCircle: {
        height: 64,
        width: 64, 
        borderRadius: 32, 
        backgroundColor: "#90C96A",
    },
});
