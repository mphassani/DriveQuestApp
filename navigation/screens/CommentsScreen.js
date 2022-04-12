import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider, Divider, Title,TextInput, DefaultTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as StorageHandler from "../../StorageHandler";
import { ScrollView } from 'react-native-gesture-handler';

export default function CommentsScreen({ navigation }) {

    const navigator = useNavigation();
    const [visible, setVisible] = React.useState(true);
    const hideDialog = () => setVisible(false);

    const [text, setText] = React.useState("");

    function saveText(text) {
        StorageHandler.storeStringData("COMMENTS", text);
    }

    useEffect(() => {
        getSavedText();
    }, []);

    function getSavedText() {
        var value = StorageHandler.getData("COMMENTS").then(res => {
            // console.log("Initial Value", res);
            if (res != null) {
                setText(res);
            }
            else {
                setText("");
            }
            return res;
        });
    }

    return (
        
        <PaperProvider theme={theme}>
    
            <ScrollView>
                <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                    <Title style={{paddingTop: '5%'}}>Add a Comment</Title>
                </View>
                    <TextInput
                        mode="outlined"
                        multiline={true}
                        numLines={10}
                        outlineColor= "#90C96A"
                        placeholder="Add a comment here"
                        value={text}
                        onChangeText={(text) => setText(text)} />
                <Dialog.Actions>
                    <Button  onPress={() => { saveText(text);}}>Save</Button>
                    <Button  onPress={() => {}}>Cancel</Button>
                </Dialog.Actions>
            </ScrollView>
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


const styles = StyleSheet.create({
    textInputs: {
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
    }
})
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000000',
      accent: '#000000',
       
    },
  };