import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import LogIn from './navigation/screens/LogIn';
import MainHome from './AllScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PreDriveScreen from './navigation/screens/PreDriveScreen';
import Residential from './navigation/screens/Residential'
import TurnScreen from './navigation/screens/FreewayDriving'
import TurnScreenLeft from './navigation/screens/TurnScreenLeft';
import TurnScreenRight from './navigation/screens/TurnScreenRight';
import FreewayLaneChangeScreen from './navigation/screens/FreewayLaneChange'
import ParkingLot from './navigation/screens/ParkingLot';
import TestResult from './navigation/screens/TestResult';
import AutoDQ from './navigation/screens/AutoDQ';
import CommentsScreen from './navigation/screens/CommentsScreen';



const Stack = createStackNavigator();

const _goBack = () => console.log('Went back');

let isLoggedIn = false;

let chosenScreen = <LogIn />

global.test = true;

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="freelanechange" component={FreewayLaneChangeScreen} />
          <Stack.Screen name="testresult" component={TestResult} />
          <Stack.Screen name="parkinglot" component={ParkingLot}/>
          <Stack.Screen name="Freeway" component={TurnScreen} />
          <Stack.Screen name="PreDrive" component={PreDriveScreen} />
          <Stack.Screen name="Home" component={MainHome} />
          <Stack.Screen name="Residential" component={Residential} />
          <Stack.Screen name="turnscreenleft" component={TurnScreenLeft} />
          <Stack.Screen name="turnscreenright" component={TurnScreenRight} />
          <Stack.Screen name="commentscreen" component={CommentsScreen} />
          <Stack.Screen name="autodq" component={AutoDQ} options={{presentation: 'transparentModal', cardOverlayEnabled: true}}/>


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