import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider, Divider, Checkbox } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function CommentsScreen({ navigation }) {

    const navigator = useNavigation();
    const [visible, setVisible] = React.useState(true);
    const hideDialog = () => setVisible(false);

    const [checked, setChecked] = React.useState('first');

    return (
        <PaperProvider>
            <Portal>
                <Dialog visible={visible} dismissable={false} onDismiss={console.log('done')}>
                    <Dialog.Title>Automatic Disqualifaction</Dialog.Title>
                    <Dialog.Content>
                        <Checkbox.Item
                            label="Examiner Intervention"
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Checkbox.Item
                            label="Dangerous Maneuver"
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Checkbox.Item
                            label="Strikes Object"
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('third')}
                        />
                        <Checkbox.Item
                            label="Driving Speed"
                            value="fourth"
                            status={checked === 'fourth' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('fourth')}
                        />
                        <Checkbox.Item
                            label="Disobeys Traffic Signage"
                            value="fifth"
                            status={checked === 'fifth' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('fifth')}
                        />
                        <Checkbox.Item
                            label="Aux Equipment Use"
                            value="sixth"
                            status={checked === 'sixth' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('sixth')}
                        />
                        <Checkbox.Item
                            label="Disobeys Examiner"
                            value="seventh"
                            status={checked === 'seventh' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('seventh')}
                        />
                        <Checkbox.Item
                            label="Lane Violation"
                            value="eigth"
                            status={checked === 'eigth' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('eigth')}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => { hideDialog; navigation.goBack() }}>Submit</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        </PaperProvider>
    );

}
