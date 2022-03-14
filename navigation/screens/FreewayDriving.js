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
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB, Appbar, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Counter from '../../components/Counter';
import { useNavigation } from '@react-navigation/native';


// Moises's page
export default function FreewayDriving() {
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView>
                <View style={{justifyContent: "center", alignContent:'center', flexDirection: "row", paddingTop:"8%"}}>
                <Button mode='contained' onPress={() => navigation.navigate("freelanechange")}>Freeway Lange Change</Button>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Entering
                    </Text>
                </View>
                <List.Section>
                  <List.Item 
                      title="Scanning" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/scanning.png')} />}
                      right={(props) =><Counter storageKey="freeway_entering_scanning"/>}
                      />
                                      
                  <List.Item
                      title="Traffic Check"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')} />}
                      right={(props) =><Counter storageKey="freeway_entering_traffic_check"/>}
                      />
                  <List.Item
                      title="Enter Speed"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="freeway_entering_enter_speed"/>}
                      />
                  <List.Item 
                      title="Positioning" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/positioning.png')} />}
                      right={(props) =><Counter storageKey="freeway_entering_positioning"/>}
                      />
                  <List.Item
                      title="Signal"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Signal.png')} />}
                      right={(props) =><Counter storageKey="freeway_entering_signal"/>}
                      />
  
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                      <Text
                          style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Driving
                      </Text>
                  </View>
                  <List.Item
                      title="Traffic Check"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')} />}
                      right={(props) =><Counter storageKey="freeway_driving_traffic_check"/>}
                      />
                  <List.Item
                      title="Speed"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="freeway_driving_speed"/>}
                      />
                  <List.Item
                      title="Positioning"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/positioning.png')} />}
                      right={(props) =><Counter storageKey="freeway_driving_positioning"/>}
                      />
                  <List.Item 
                      title="Signal" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Signal.png')} />}
                      right={(props) =><Counter/>}
                      />
  
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                      <Text
                          style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Exiting
                      </Text>
                  </View>
                  <List.Item 
                      title="Traffic Check" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_traffic_check"/>}
                      />
                  <List.Item 
                      title="Exit Speed" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_exit_speed"/>}
                      />
                  <List.Item 
                      title="Positioning" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/positioning.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_positioning"/>}
                      />
                  <List.Item 
                      title="Signal" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Signal.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_signal"/>}
                      />
                  <List.Item 
                      title="Yield" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Yield.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_yield"/>}
                      />
                  <List.Item 
                      title="Correct Lane" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/spacing.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_correct_lane"/>}
                      />
                  <List.Item 
                      title="Speed" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="freeway_exiting_speed"/>}
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