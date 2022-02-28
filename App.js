import * as React from 'react'
import { Fragment } from 'react'
import MainContainer from './navigation/MainContainer';
import BottomNav from './navigation/BottomNav';
import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './navigation/screens/HomeScreen';
import CommentsScreen from './navigation/screens/CommentsScreen';
import IntersectionScreen from './navigation/screens/IntersectionScreen';
import LaneChangeScreen from './navigation/screens/LaneChangeScreen';
import TurnScreen from './navigation/screens/TurnScreen';
import LogIn from './navigation/screens/LogIn';
import MainHome from './HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const _goBack = () => console.log('Went back');

let isLoggedIn = false;

let chosenScreen = <LogIn />

global.test = true;
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainHome} />
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Home" component={MainHome} />
        </Stack.Navigator>
      </NavigationContainer>

    </PaperProvider>


  );



}
function DrawerMain() {
  return (
    <Drawer.Section />
  );
}
function SettingsPanel() {


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