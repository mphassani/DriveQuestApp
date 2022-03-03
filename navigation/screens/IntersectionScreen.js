import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

// Stephanie's Page
export default function IntersectionScreen({ navigation }) {
    return (
        <PaperProvider>
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
