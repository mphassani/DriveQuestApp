import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, TextInput} from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

//pre-drive screen display 

export default function PreDriveScreen({ navigation }){

    const [visible, setVisible] = React.useState(true);
    const [visible2, setVisible2] = React.useState(true);  
    const [visible3, setVisible3] = React.useState(true);   
    const showDialog2 = () => setVisible2=(true); 
    const showDialog3 = () => setVisible3=(true); 
    const hideDialog = () => setVisible(false);
    const hideDialog2 = () => setVisible2(false);
    const hideDialog3 = () => setVisible3(false);
    const [checked, setChecked] = React.useState('first');
    const [soundChecked, setSoundChecked] = React.useState('first');
    const navigator = useNavigation();

    return(
    //FIXME: need to add theme={theme}
    <PaperProvider style={styles.container}>
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
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Fairytale Gardens</Text>
                    <RadioButton value = "first"
                    status={checked==='first'?'checked':'unchecked}'}
                    onPress={() => setChecked('first')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Crystal Cove</Text>
                    <RadioButton value = "second"
                    status={checked==='second'?'checked':'unchecked}'}
                    onPress={() => setChecked('second')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Rainbow Road</Text>
                    <RadioButton value = "third"
                    status={checked==='third'?'checked':'unchecked}'}
                    onPress={() => setChecked('third')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Colossal Mountain</Text>
                    <RadioButton value = "fourth"
                    status={checked==='fourth'?'checked':'unchecked}'}
                    onPress={() => setChecked('fourth')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>DriveQuest Circuit</Text>
                    <RadioButton value = "fifth"
                    status={checked==='fifth'?'checked':'unchecked}'}
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
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Bell</Text>
                    <RadioButton value = "first"
                    status={soundChecked==='first'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('first')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Horn</Text>
                    <RadioButton value = "second"
                    status={soundChecked==='second'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('second')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Oink</Text>
                    <RadioButton value = "third"
                    status={soundChecked==='third'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('third')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Police Siren</Text>
                    <RadioButton value = "fourth"
                    status={soundChecked==='fourth'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('fourth')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Piano</Text>
                    <RadioButton value = "fifth"
                    status={soundChecked==='fifth'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('fifth')}
                    />
                </View>
                <Button onPress={hideDialog2}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
        
        {/* Stacy and Kevin's work */}
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Through
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Unnecessary Stop" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>
                                    

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Stop
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Gap/Limit Line" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Braking" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Full Stop" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Start
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>
            </ScrollView>
        </PaperProvider>
        
        
    );
}
