import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import { StatusBar, StyleSheet, View, Pressable } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import LogIn from './navigation/screens/LogIn';
import StartTest from './navigation/screens/StartTest';
import TestConfig from './navigation/screens/TestConfig';
import MainHome from './AllScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PreDriveScreen from './navigation/screens/PreDriveScreen';
import Residential from './navigation/screens/Residential'
import FreewayDriving from './navigation/screens/FreewayDriving'
import TurnScreenLeft from './navigation/screens/TurnScreenLeft';
import TurnScreenRight from './navigation/screens/TurnScreenRight';
import FreewayLaneChangeScreen from './navigation/screens/FreewayLaneChange'
import ParkingLot from './navigation/screens/ParkingLot';
import TestResult from './navigation/screens/TestResult';
import AutoDQ from './navigation/screens/AutoDQ';
import LaneChangeScreen from './navigation/screens/LaneChangeScreen';
import LaneChangeScreenLeft from './navigation/screens/LaneChangeScreenLeft';
import LaneChangeScreenRight from './navigation/screens/LaneChangeScreen';
import { clearAllStoredData } from './StorageHandler';
import Settings from './navigation/screens/Settings';
import OtherScreen from './navigation/screens/OtherScreen.js'
import InstructorInfo from './navigation/screens/InstructorInfo';

import Traffic from './navigation/screens/Traffic';

import FreewayLaneChangeRightScreen from './navigation/screens/FreewayLaneChangeRight';

import IntersectionScreen from './navigation/screens/IntersectionScreen';
import HomeScreen from './navigation/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

global.test = true;

global.selectedSound = 0;
global.currentErrorCount = 0;

// function TestSectionNavigationBar({ navigation, back }) {
//   return (
//     <Appbar.Header>
//       {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
//       <Appbar.Content title="test" />
//       <Appbar.Action icon={'cog'} onPress={ ()=> navigation.navigate('settings')}/>
//     </Appbar.Header>
//   );
// }
// function LoginNavigationBar({ navigation, back }) {
//   return (
//     <Appbar.Header>
//       {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
//       <Appbar.Content title="DriveQuest" />
//     </Appbar.Header>
//   );
// }

// function HomeNavigationBar({ navigation, back }) {
//   return (
//     <Appbar.Header>
//       <Appbar.Content title="DriveQuest" />
//       <Appbar.Action icon={'cog'} onPress={ ()=> navigation.navigate('settings')}/>
//     </Appbar.Header>
//   );
// }

function TurnsTabs() {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="turnscreenleft" options={{ title: 'Left' }} component={TurnScreenLeft} />
      <MaterialTopTab.Screen name="turnscreenright" options={{ title: 'Right' }} component={TurnScreenRight} />
    </MaterialTopTab.Navigator>
  );
}

function TrafficTabs() {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="intersection" options={{ title: 'Intersection' }} component={Traffic} />
      <MaterialTopTab.Screen name="lanechangeleft" options={{ title: 'Lane Change' }} component={LaneChangeScreenLeft} />
      <MaterialTopTab.Screen name="turns" options={{ title: 'Turns' }} component={TurnsTabs} />
    </MaterialTopTab.Navigator>
  );
}

function ResidentialTabs() {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="residentialbusiness" options={{ title: 'Residential/Business' }} component={Residential} />
      <MaterialTopTab.Screen name="turns" options={{ title: 'Turns' }} component={TurnsTabs} />
    </MaterialTopTab.Navigator>
  );
}

function FreewayTabs() {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="freeway" options={{ title: 'Driving' }} component={FreewayDriving} />
      <MaterialTopTab.Screen name="freewaylanechange" options={{ title: 'Lane Change' }} component={FreewayLaneChangeTabs} />
    </MaterialTopTab.Navigator>
  );
}

function FreewayLaneChangeTabs() {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="freewaylanechangeleft" options={{ title: 'Left' }} component={FreewayLaneChangeScreen} />
      <MaterialTopTab.Screen name="freewaylanechangeright" options={{ title: 'Right' }} component={FreewayLaneChangeRightScreen} />
    </MaterialTopTab.Navigator>
  );
}

function TestPages() {
	return (

    <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: () => (
                  <View style={styles.EndTestButtonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartTest") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
                    >
                      <Text style={styles.EndTestButtonText}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
            <Tab.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen} />
          </Stack.Group>

          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
              })}
          >

            <Stack.Screen name="PreDrive" options={{ title: 'Pre-Drive Checklist' }} component={PreDriveScreen} />
            <Stack.Screen name="freelanechange" options={{ title: 'Freeway Lane Change Left' }} component={FreewayLaneChangeScreen} />
            <Stack.Screen name="freelanechangeRight" options={{ title: 'Freeway Lane Change Right' }} component={FreewayLaneChangeRightScreen} />
            <Stack.Screen name="testresult" options={{ title: 'Results' }} component={TestResult} />
            <Stack.Screen name="parkinglot" options={{ title: 'Parking Lot' }} component={ParkingLot} />
            <Stack.Screen name="Freeway" options={{ title: 'Freeway' }} component={FreewayTabs} />
            <Stack.Screen name="Residential" options={{ title: 'Residential/Business' }} component={ResidentialTabs} />
            <Stack.Screen name="autodq" options={{ title: 'Automatic Disqualification' }} component={AutoDQ} />
            <Stack.Screen name="turnscreenleft" options={{ title: 'Left Turns' }} component={TurnScreenLeft} />
            <Stack.Screen name="turnscreenright" options={{ title: 'Right Turns' }} component={TurnScreenRight} />
            <Stack.Screen name='lanechangeleft' options={{ title: 'Lane Change' }} component={LaneChangeScreenLeft}/>
            <Stack.Screen name='intersection' options={{ title: 'Intersection' }} component={IntersectionScreen}/>
            <Stack.Screen name='traffic' options={{ title: 'Traffic' }} component={TrafficTabs}/>
            <Stack.Screen name='other' options = {{ title: 'Other' }} component={OtherScreen}/>
            
          </Stack.Group>
          </Stack.Navigator>
	);
}

function AutoDQStack() {
	return (
    <Stack.Navigator>
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: () => (
                  <View style={styles.EndTestButtonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartTest") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
                    >
                      <Text style={styles.EndTestButtonText}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
        <Stack.Screen name='AutoDQ' options = {{ title: 'Automatic Disqualification' }} component={AutoDQ}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

function TestResultsStack() {
	return (
    <Stack.Navigator>
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: () => (
                  <View style={styles.EndTestButtonContainer}>
                    <Pressable
                        onPress={() => navigation.navigate("StartTest") }
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
                    >
                      <Text style={styles.EndTestButtonText}>Back</Text>
            
                    </Pressable>
                  </View>
                ),
                gestureEnabled: false
              })}
          >
        <Stack.Screen name='testresult' options = {{ title: 'Results' }} component={TestResult}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

function MyTabs() {
	return (
    <PaperProvider theme={theme}>
		<Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#adadad',
        tabBarStyle:{
          backgroundColor:'#12414F',
        },
        gestureEnabled: false
      }} 
    >
			<Tab.Screen 
        name="Home" 
        component={TestPages} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen 
        name="Disqualification" 
        component={AutoDQStack} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alert" color={color} size={size} />
          ),
        }}
      />

			<Tab.Screen 
        name="Results" 
        component={TestResultsStack} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-check" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })} 
      />
		</Tab.Navigator>
   </PaperProvider>
	);
}


function App() {
  return (
		<NavigationContainer>
      {/* Sets the iOS status bar to white, instead of the default black */}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

			<Stack.Navigator initialRouteName="LogIn" >

        <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerLeft: null,
                gestureEnabled: false
              })}
          >
            <Stack.Screen name="LogIn" options={{ title: 'Login' }} component={LogIn} />
            <Stack.Screen name="StartTest" options={{ title: 'Start/Resume Driving Evaluation' }} component={StartTest} />
        </Stack.Group>

        <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',

              })}
          >
          <Stack.Screen name='settings' options={{ title: 'Settings' }} component={Settings}/>
          <Stack.Screen name="TestConfig" options={{ title: 'Driving Evaluation Configuration' }} component={TestConfig} />
          <Stack.Screen name="InstructorInfo" options={{ title: 'Instructor Info' }} component={InstructorInfo} />
        </Stack.Group>

        {/* <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
              })}
          > */}
          <Stack.Group screenOptions={{headerShown: false}}>
				    <Stack.Screen name="MainTestPages" options={{ title: 'Home' }}  component={MyTabs} />
          </Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
  );
}


// function App() {
//   return (
//     <PaperProvider theme={theme}>
//       <NavigationContainer>


      // {/* Sets the iOS status bar to white, instead of the default black */}
      // <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

//         <Stack.Navigator initialRouteName="LogIn">

//         <Stack.Group style={ { backgroundColor: '#6a51ae' }}
//               screenOptions={({ navigation }) => ({
//                 headerStyle: {
//                   backgroundColor: '#12414F',
//                 },
//                 headerTintColor: '#fff',
//                 headerLeft: null,
//                 gestureEnabled: false
//               })}
//           >
//             <Stack.Screen name="LogIn" options={{ title: 'Login' }} component={LogIn} />
//             <Stack.Screen name="StartTest" options={{ title: 'Start/Resume Test' }} component={StartTest} />
//           </Stack.Group>

//           {/* <Stack.Group screenOptions={{ header: HomeNavigationBar, gestureEnabled: false}}> */}
          // <Stack.Group style={ { backgroundColor: '#6a51ae' }}
          //     screenOptions={({ navigation }) => ({
          //       headerStyle: {
          //         backgroundColor: '#12414F',
          //       },
          //       headerTintColor: '#fff',
          //       headerRight: () => (
          //         <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
          //       ),
          //       headerLeft: () => (
          //         <View style={styles.EndTestButtonContainer}>
          //           <Pressable
          //               onPress={() => navigation.navigate("StartTest") }
          //               style={({ pressed }) => [{ backgroundColor: pressed ? '#d1d1d1' : 'white' } , styles.EndTestButton]}
          //           >
          //             <Text style={styles.EndTestButtonText}>Back</Text>
            
          //           </Pressable>
          //         </View>
          //       ),
          //       gestureEnabled: false
          //     })}
          // >
//             <Stack.Screen name="Home" component={MainHome} />

//           </Stack.Group>

//           {/* <Stack.Group screenOptions={{ header: TestSectionNavigationBar, gestureEnabled: true }}> */}
//           <Stack.Group style={ { backgroundColor: '#6a51ae' }}
//               screenOptions={({ navigation }) => ({
//                 headerStyle: {
//                   backgroundColor: '#12414F',
//                 },
//                 headerTintColor: '#fff',
//                 headerRight: () => (
//                   <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
//                 ),
//               })}
//           >
//             <Stack.Screen name="PreDrive" options={{ title: 'Pre-Drive Checklist' }} component={PreDriveScreen} />
//             <Stack.Screen name="freelanechange" options={{ title: 'Freeway Lane Change Left' }} component={FreewayLaneChangeScreen} />
//             <Stack.Screen name="freelanechangeRight" options={{ title: 'Freeway Lane Change Right' }} component={FreewayLaneChangeRightScreen} />
//             <Stack.Screen name="testresult" options={{ title: 'Test Results' }} component={TestResult} />
//             <Stack.Screen name="parkinglot" options={{ title: 'Parking Lot' }} component={ParkingLot} />
//             <Stack.Screen name="Freeway" options={{ title: 'Freeway' }} component={FreewayDriving} />
//             <Stack.Screen name="Residential" options={{ title: 'Residential/Business' }} component={Residential} />
//             <Stack.Screen name="autodq" options={{ title: 'Automatic Disqualification' }} component={AutoDQ} />
//             <Stack.Screen name="turnscreenleft" options={{ title: 'Left Turns' }} component={TurnScreenLeft} />
//             <Stack.Screen name="turnscreenright" options={{ title: 'Right Turns' }} component={TurnScreenRight} />
//             <Stack.Screen name='lanechangeleft' options={{ title: 'Lane Change' }} component={LaneChangeScreenLeft}/>
//             <Stack.Screen name='lanechangeright' options={{ title: 'Lane Change Right' }} component={LaneChangeScreenRight}/>
//             <Stack.Screen name='intersection' options={{ title: 'Intersection' }} component={IntersectionScreen}/>
//             <Stack.Screen name='traffic' options={{ title: 'Traffic' }} component={Traffic}/>
//             <Stack.Screen name='other' options = {{ title: 'Other' }} component={OtherScreen}/>
            
//           </Stack.Group>

          // <Stack.Group style={ { backgroundColor: '#6a51ae' }}
          //     screenOptions={({ navigation }) => ({
          //       headerStyle: {
          //         backgroundColor: '#12414F',
          //       },
          //       headerTintColor: '#fff',

          //     })}
          // >
          // <Stack.Screen name='settings' options={{ title: 'Settings' }} component={Settings}/>
          // <Stack.Screen name="TestConfig" options={{ title: 'Test Configuration' }} component={TestConfig} />
          // <Stack.Screen name="InstructorInfo" options={{ title: 'Instructor Info' }} component={InstructorInfo} />
          // </Stack.Group>


//         </Stack.Navigator>
//       </NavigationContainer>

//     </PaperProvider>


//   );

// }

const styles = StyleSheet.create({
  EndTestButtonContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EndTestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  EndTestButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#90C96A',
     
  },
};

export default App;