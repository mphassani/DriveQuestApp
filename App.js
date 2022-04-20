import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import { StatusBar } from 'react-native';


import LogIn from './navigation/screens/LogIn';
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

import Traffic from './navigation/screens/Traffic';

import FreewayLaneChangeRightScreen from './navigation/screens/FreewayLaneChangeRight';

import IntersectionScreen from './navigation/screens/IntersectionScreen';
import HomeScreen from './navigation/screens/HomeScreen';

const Stack = createStackNavigator();

const _goBack = () => console.log('Went back');

let isLoggedIn = false;

let chosenScreen = <LogIn />

global.test = true;

function TestSectionNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="test" />
      <Appbar.Action icon={'cog'} onPress={ ()=> navigation.navigate('settings')}/>
    </Appbar.Header>
  );
}
function LoginNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="DriveQuest" />
    </Appbar.Header>
  );
}

function HomeNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
      <Appbar.Content title="DriveQuest" />
      <Appbar.Action icon={'cog'} onPress={ ()=> navigation.navigate('settings')}/>
    </Appbar.Header>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>


      {/* Sets the iOS status bar to white, instead of the default black */}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <Stack.Navigator initialRouteName="LogIn">

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
          </Stack.Group>

          {/* <Stack.Group screenOptions={{ header: HomeNavigationBar, gestureEnabled: false}}> */}
          <Stack.Group style={ { backgroundColor: '#6a51ae' }}
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: '#12414F',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                  <IconButton icon = "cog" color={"white"} onPress={() => {navigation.navigate('settings')}} />
                ),
                headerLeft: null,
                gestureEnabled: false
              })}
          >
            <Stack.Screen name="Home" component={MainHome} />
          </Stack.Group>

          {/* <Stack.Group screenOptions={{ header: TestSectionNavigationBar, gestureEnabled: true }}> */}
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
            <Stack.Screen name="testresult" options={{ title: 'Test Results' }} component={TestResult} />
            <Stack.Screen name="parkinglot" options={{ title: 'Parking Lot' }} component={ParkingLot} />
            <Stack.Screen name="Freeway" options={{ title: 'Freeway' }} component={FreewayDriving} />
            <Stack.Screen name="Residential" options={{ title: 'Residential/Business' }} component={Residential} />
            <Stack.Screen name="autodq" options={{ title: 'Automatic Disqualification' }} component={AutoDQ} />
            <Stack.Screen name="turnscreenleft" options={{ title: 'Left Turns' }} component={TurnScreenLeft} />
            <Stack.Screen name="turnscreenright" options={{ title: 'Right Turns' }} component={TurnScreenRight} />
            <Stack.Screen name='lanechangeleft' options={{ title: 'Lange Change Left' }} component={LaneChangeScreenLeft}/>
            <Stack.Screen name='lanechangeright' options={{ title: 'Lane Change Right' }} component={LaneChangeScreenRight}/>
            <Stack.Screen name='intersection' options={{ title: 'Intersection' }} component={IntersectionScreen}/>
            <Stack.Screen name='traffic' options={{ title: 'Traffic' }} component={Traffic}/>
            
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
          </Stack.Group>


        </Stack.Navigator>
      </NavigationContainer>

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

export default App;