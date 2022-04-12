import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider, Divider, Checkbox, Title } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as StorageHandler from "../../StorageHandler";
import HomeScreen from './HomeScreen';
import MainHome from '../../AllScreen';
import { ScrollView } from 'react-native-gesture-handler';

export default function AutoDQ({ navigation }) {

    const navigator = useNavigation();
    const [visible, setVisible] = React.useState(true);
    const hideDialog = () => setVisible(false);

    const [checked, setChecked] = React.useState();

    function checkTheBox(dq) {
        StorageHandler.storeStringData("AUTO_DQ", dq);
    }

    return (
        <PaperProvider>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                    <Title style={{ paddingTop: '5%' }}>Automatic Disqualifaction</Title>
                </View>
                <Checkbox.Item
                    label="Examiner Intervention"
                    value="first"
                    color="#90C96A"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('first'); checkTheBox("Examiner Intervention"); }}
                />
                <Checkbox.Item
                    label="Dangerous Maneuver"
                    value="second"
                    color="#90C96A"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('second'); checkTheBox("Dangerous Maneuver"); }}
                />
                <Checkbox.Item
                    label="Strikes Object"
                    value="third"
                    color="#90C96A"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('third'); checkTheBox("Strikes Object"); }}
                />
                <Checkbox.Item
                    label="Driving Speed"
                    value="fourth"
                    color="#90C96A"
                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('fourth'); checkTheBox("Driving Speed"); }}
                />
                <Checkbox.Item
                    label="Disobeys Traffic Signage"
                    value="fifth"
                    color="#90C96A"
                    status={checked === 'fifth' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('fifth'); checkTheBox("Disobeys Traffic Signage"); }}
                />
                <Checkbox.Item
                    label="Aux Equipment Use"
                    value="sixth"
                    color="#90C96A"
                    status={checked === 'sixth' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('sixth'); checkTheBox("Aux Equipment Use"); }}
                />
                <Checkbox.Item
                    label="Disobeys Examiner"
                    value="seventh"
                    color="#90C96A"
                    status={checked === 'seventh' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('seventh'); checkTheBox("Disobeys Examiner"); }}
                />
                <Checkbox.Item
                    label="Lane Violation"
                    value="eigth"
                    color="#90C96A"
                    status={checked === 'eigth' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('eigth'); checkTheBox("Lane Violation"); }}
                />
                {/* <Dialog.Actions>
                    <Button color="#12414F" onPress={() => { StorageHandler.storeStringData("AUTO_DQ", dq); }}>Submit</Button>
                    <Button color="#12414F" onPress={() => { hideDialog; navigator.goBack() }}>Cancel</Button>
                </Dialog.Actions> */}
            </ScrollView>


        </PaperProvider>
    );

}
