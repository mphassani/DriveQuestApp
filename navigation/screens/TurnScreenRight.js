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

// CECE's PAGE

export default function TurnScreenRight({ navigation }) {
    return (
        <PaperProvider>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Approach
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => <Avatar.Icon {...props} color = "white" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                                    
                <List.Item
                    title="Signal"
                    left={(props) => <Avatar.Icon {...props} color= "white" icon = "arrow-left-right-bold" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Braking"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon = "plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Yield" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Lane Use"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Unnecessary Stop"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Stop
                    </Text>
                </View>
                <List.Item
                    title="Gap/Limit Line"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon = "plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Traffic Check"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item
                    title="Wheels Straight"
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Full Stop" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>During
                    </Text>
                </View>
                <List.Item 
                    title="Traffic Check" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Steering Control" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "steering-off" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Too Wide" 
                    left={(props) => <Avatar.Icon {...props} color = "white" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Too Short" 
                    left={(props) => <Avatar.Icon {...props} color = "white"  />}
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
                <List.Item 
                    title="Signal" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "arrow-left-right-bold"/>}
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

