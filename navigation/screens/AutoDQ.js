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
    </PaperProvider>
    );

}
