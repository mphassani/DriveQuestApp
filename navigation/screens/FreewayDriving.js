import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView
  } from "react-native";
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";

// Moises's page
export default function TurnScreen({ navigation }) {
    return (
        <PaperProvider>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Entering
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Scanning" 
                    left={(props) => <Avatar.Icon {...props} color = "white" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                                    
                <List.Item
                    title="Traffic Check"
                    left={(props) => <Avatar.Icon {...props} color= "white" icon = "arrow-left-right-bold" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Enter Speed"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon = "plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Signal"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Driving
                    </Text>
                </View>
                <List.Item
                    title="Traffic Check"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon = "plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Speed"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Positioning"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Signal" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Exiting
                    </Text>
                </View>
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Exit Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "steering-off" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Positioning" 
                    left={(props) => <Avatar.Icon {...props} color = "white" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Signal" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "arrow-left-right-bold"/>}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => <Avatar.Icon {...props} color = "white" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Correct Lane" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>
            </ScrollView>

        </PaperProvider>
    
       // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         //   <Text
           //     onPress={() => navigation.navigate('Home')}
             //   style={{ fontSize: 26, fontWeight: 'bold' }}>Turn Screen</Text>
       // </View>
        //<View>
        //    <Text>Buttons</Text>
        //</View>
        
    );
}

