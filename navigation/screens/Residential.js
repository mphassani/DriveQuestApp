import * as React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    SafeAreaView 
} from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, Appbar, BottomNavigation, DefaultTheme} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";


// Stephanie's Page
export default function Residential({ navigation }) {
    return (
        <PaperProvider>
                <Appbar.Header theme={theme}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('Home')}/>
                </Appbar.Header>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Residential
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Safe Distance" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Good Positioning" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Safe Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>
                                    

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Business
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Safe Distance" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "car-multiple" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Good Positioning" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "car-multiple" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Observation" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Safe Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Signal" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "arrow-left-right-bold" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Mirrors" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Pulling up to the curb
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Safe Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Avoids Hitting Curb" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Signal" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "arrow-left-right-bold" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "60%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Reversing
                    </Text>
                </View>
                <List.Section>
                <List.Item 
                    title="Right Shoulder" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "account-arrow-right" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Avoids Hitting Curb" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Mirrors" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                <List.Item 
                    title="Safe Speed" 
                    left={(props) => <Avatar.Icon {...props} color = "white" icon = "speedometer" />}
                    right={(props) =><IconButton {...props} icon="plus-circle-outline" onPress={() => {}} />}
                    />
                </List.Section>
            </ScrollView>
            
        </PaperProvider>
        
    );
    
}
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#12414F',
      accent: '#90C96A',
    },
  };
