import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider, Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function CommentsScreen({ navigation }) {

    const navigator = useNavigation();
    const [visible, setVisible] = React.useState(true);
    const hideDialog = () => setVisible(false);

    return (
    <PaperProvider>
        <Portal>
                    <Dialog visible={visible} dismissable={false} onDismiss={console.log('done')}>
                        <Dialog.Title>Comment</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Type your comment below:</Paragraph>
                            <Divider />
                            <TextInput
                            mode="outlined"
                            multiline = {true}
                            numLines = {5}
                            placeholder="Add a comment here"
                            keyboardType="default" />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress= {() => {hideDialog; navigation.goBack()}}>Submit</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <Text
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
        </View> */}
    </PaperProvider>
    );

}
