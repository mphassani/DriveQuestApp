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
                      right={(props) =><Counter storageKey="FREEWAY_ENTERING_SCANNING"/>}
                      />
                                      
                  <List.Item
                      title="Traffic Check"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_ENTERING_TRAFFIC_CHECK"/>}
                      />
                  <List.Item
                      title="Enter Speed"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_ENTERING_ENTER_SPEED"/>}
                      />
                  <List.Item 
                      title="Positioning" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/positioning.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_ENTERING_POSITIONING"/>}
                      />
                  <List.Item
                      title="Signal"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Signal.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_ENTERING_SIGNAL"/>}
                      />
  
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                      <Text
                          style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Driving
                      </Text>
                  </View>
                  <List.Item
                      title="Traffic Check"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_DRIVING_TRAFFIC_CHECK"/>}
                      />
                  <List.Item
                      title="Speed"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_DRIVING_SPEED"/>}
                      />
                  <List.Item
                      title="Positioning"
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/positioning.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_DRIVING_POSITIONING"/>}
                      />
                  <List.Item 
                      title="Signal" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Signal.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_DRIVING_SIGNAL"/>}
                      />
  
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                      <Text
                          style={{ fontSize: 25, fontWeight: 'bold' }}>Freeway Exiting
                      </Text>
                  </View>
                  <List.Item 
                      title="Traffic Check" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/TrafficCheck.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_TRAFFIC_CHECK"/>}
                      />
                  <List.Item 
                      title="Exit Speed" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_EXIT_SPEED"/>}
                      />
                  <List.Item 
                      title="Positioning" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/positioning.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_POSITIONING"/>}
                      />
                  <List.Item 
                      title="Signal" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Signal.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_SIGNAL"/>}
                      />
                  <List.Item 
                      title="Yield" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/Yield.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_YIELD"/>}
                      />
                  <List.Item 
                      title="Correct Lane" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/spacing.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_CORRECT_LANE"/>}
                      />
                  <List.Item 
                      title="Speed" 
                      left={(props) =><Avatar.Image {...props}  source={require('../../assets/speed.png')} />}
                      right={(props) =><Counter storageKey="FREEWAY_EXITING_SPEED"/>}
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