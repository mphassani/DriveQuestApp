import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

export default function CommentsScreen({ navigation }) {
    const [visible2, setVisible2] = React.useState(true);
    const [visible, setVisible] = React.useState(true);  
    const [visible3, setVisible3] = React.useState(true);   
    const showDialog2 = () => setVisible2=(true); 
    const showDialog3 = () => setVisible3=(true); 
    const hideDialog2 = () => setVisible2(false);
    const hideDialog = () => setVisible(false);
    const hideDialog3 = () => setVisible3(false);
    const [checked, setChecked] = React.useState('first');

    return (
    <PaperProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 

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
                    <View style= {{flex:1, padding:10}}>
                        <Text>Fairytale Gardens</Text>
                        <RadioButton value = "first"
                        status={checked==='first'?'checked':'unchecked}'}
                        onPress={() => setChecked('first')}
                        />
                    </View>
                    <View style= {{flex:1, padding:10}}>
                        <Text>Crystal Cove</Text>
                        <RadioButton value = "second"
                        status={checked==='second'?'checked':'unchecked}'}
                        onPress={() => setChecked('second')}
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
                    <View style= {{flex:1, padding:10}}>
                        <Text>Bell</Text>
                        <RadioButton value = "first"
                        status={checked==='first'?'checked':'unchecked}'}
                        onPress={() => setChecked('first')}
                        />
                    </View>
                    <View style= {{flex:1, padding:10}}>
                        <Text>Horn</Text>
                        <RadioButton value = "second"
                        status={checked==='second'?'checked':'unchecked}'}
                        onPress={() => setChecked('second')}
                        />
                    </View>
                    <Button onPress={hideDialog2}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Comment Screen</Text>
                <TextInput style={{
                        flexDirection: 'row',
                        flex: 0.1,
                        flexWrap: 'wrap-reverse',
                        height: 0.2,
                        width: 400,
                        margin: 10,
                        borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        padding: 10,
                    }}
                    multiline = {true}
                    numLines = {5}
                    placeholder="Add a comment here"
                    keyboardType="default"
                />                   
        </View>
    </PaperProvider>
    );

}
