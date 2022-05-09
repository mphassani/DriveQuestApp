import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Appbar, BottomNavigation } from 'react-native-paper';

// Screens
import HomeScreen from './screens/HomeScreen';
import LaneChangeScreen from './screens/LaneChangeScreen';
import TurnScreenLeft from './screens/TurnScreenLeft';

//Screen names
const homeName = "Home";
const intersectionName = "Intersection";
const laneChangeName = "LaneChange";
const turnName = "Turn"

const Tab = createBottomTabNavigator();

const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

function MainContainer() {
  return (
    <Appbar.Header>
      <Appbar.Header s={_goBack} />
      <Appbar.Content title="PAGE TITLE" />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    
    
    
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName={homeName}
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;
    //         let rn = route.name;

    //         if (rn === homeName) {
    //           iconName = focused ? 'home' : 'home-outline';

    //         } else if (rn === intersectionName) {
    //           iconName = focused ? 'logo-capacitor' : 'logo-capacitor';

    //         } else if (rn === commentsName) {
    //           iconName = focused ? 'add-circle' : 'add-circle-outline';

    //         } else if (rn === laneChangeName){
    //             iconName = focused ? 'car' : 'car-outline';

    //         } else if (rn === turnName){
    //             iconName = focused ? 'return-up-forward' : 'return-up-forward-outline';
    //         }

            
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: 'tomato',
    //       inactiveTintColor: 'grey',
    //       labelStyle: { paddingBottom: 10, fontSize: 10 },
    //       style: { padding: 10, height: 70}
    //     }}>

    //     <Tab.Screen name={homeName} component={HomeScreen} />
    //     <Tab.Screen name={intersectionName} component={IntersectionScreen} />
    //     <Tab.Screen name={commentsName} component={CommentsScreen} />
    //     <Tab.Screen name={laneChangeName} component={LaneChangeScreen} />
    //     <Tab.Screen name={turnName} component={TurnScreen} />

    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default MainContainer;
