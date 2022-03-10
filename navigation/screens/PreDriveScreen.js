import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, TextInput } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

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
                            <View style={{ flex: 1, padding: 0 }}>
                                <Text style={{ fontSize: 8 }}>Fairytale Gardens</Text>
                                <RadioButton value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked}'}
                                    onPress={() => setChecked('first')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 0 }}>
                                <Text style={{ fontSize: 8 }}>Crystal Cove</Text>
                                <RadioButton value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked}'}
                                    onPress={() => setChecked('second')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 0 }}>
                                <Text style={{ fontSize: 8 }}>Rainbow Road</Text>
                                <RadioButton value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked}'}
                                    onPress={() => setChecked('third')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 0 }}>
                                <Text style={{ fontSize: 8 }}>Colossal Mountain</Text>
                                <RadioButton value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked}'}
                                    onPress={() => setChecked('fourth')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 0 }}>
                                <Text style={{ fontSize: 8 }}>DriveQuest Circuit</Text>
                                <RadioButton value="fifth"
                                    status={checked === 'fifth' ? 'checked' : 'unchecked}'}
                                    onPress={() => setChecked('fifth')}
                                />
                            </View>
                            <Button onPress={hideDialog3}>Ok</Button>
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
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text style={{ fontSize: 9 }}>Bell</Text>
                                <RadioButton value="first"
                                    status={soundChecked === 'first' ? 'checked' : 'unchecked}'}
                                    onPress={() => setSoundChecked('first')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text style={{ fontSize: 9 }}>Horn</Text>
                                <RadioButton value="second"
                                    status={soundChecked === 'second' ? 'checked' : 'unchecked}'}
                                    onPress={() => setSoundChecked('second')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text style={{ fontSize: 9 }}>Oink</Text>
                                <RadioButton value="third"
                                    status={soundChecked === 'third' ? 'checked' : 'unchecked}'}
                                    onPress={() => setSoundChecked('third')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text style={{ fontSize: 9 }}>Police Siren</Text>
                                <RadioButton value="fourth"
                                    status={soundChecked === 'fourth' ? 'checked' : 'unchecked}'}
                                    onPress={() => setSoundChecked('fourth')}
                                />
                            </View>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text style={{ fontSize: 9 }}>Piano</Text>
                                <RadioButton value="fifth"
                                    status={soundChecked === 'fifth' ? 'checked' : 'unchecked}'}
                                    onPress={() => setSoundChecked('fifth')}
                                />
                            </View>
                            <Button onPress={hideDialog2}>Ok</Button>
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
                        <List.Item
                            title="1. Driver window"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        
                        <List.Item
                            title="2. Windshield"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="3. Rear view mirrors"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="4. Turn signals"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="arrow-left-right-bold" />}
                            right={ () => <CheckboxItem /> }
                        />
                        <List.Item
                            title="5. Brake lights"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="6. Tires"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="7. Foot brake"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="8. Horn"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="9. Emergency/parking brake"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="10. Arm signals"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="11. Windshield wipers"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="12. Defroster"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="13. Emergency flasher"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="14. Headlights"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="15. Passenger door"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="16. Glove box"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
                        />
                        <List.Item
                            title="17. Seat belts"
                            left={(props) => <Avatar.Icon {...props} color="white" icon="" />}
                            right={ () => <CheckboxItem />}
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

/* Code to create each individual checkbox */
const CheckboxItem = () => {

    /* Originally, each checkbox is set to notChecked */
    const [notChecked, setNotChecked] = React.useState(false);
  
    return (
        /* Uses checkboxBase style for not checked checkbox, and checkboxChecked for checked checkbox */
        /* Essentially creates the "box" part of the checkbox */
      <View style={[styles.checkboxBase, notChecked && styles.checkboxChecked]}>
          {/* Code that creates the checkbox, counts the number of checkboxes checked to be used in calculating the number of errors */}
          <Checkbox
        color="#FFFFFF" status={notChecked ? 'checked' : 'unchecked'}
        onPress={() => {
          setNotChecked(!notChecked);
          if (notChecked){
              decrementVal();
          }
          else{
              incrementVal();
          }
        }}
      />
      </View>
      
    );
  };

//counter - counts the number of pre-drive checklist items marked correct for later use in viewing results 
var counter = 0;

//increments the value of counter by 1, logging it to the console for now 
export function incrementVal () {
    ++counter;
    console.log(counter);
  }

//decrements the value of counter by 1, logging it to the console for now 
export function decrementVal () {
    --counter;
    console.log(counter);
}

//style-sheet 
const styles = StyleSheet.create({
    /* Creates outline for the checkbox with no fill; used when item is incorrect */
    checkboxBase: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 7,
        borderRadius: 10,
        borderColor: '#00677F',
        backgroundColor: 'transparent',
        margin: 1.5,

    },

    /* Creates filled in checkbox, used when item is marked correct */
    checkboxChecked: { //checkbox color 
        backgroundColor: '#00677F',
    },
  });
