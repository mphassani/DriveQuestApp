import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider, DefaultTheme, BottomNavigation } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
// import { StylesProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TestResult from './TestResult';
import AutoDQ from './AutoDQ';
import HomeSectionButton from "../../components/HomeSectionButton";

// import {Restart} from 'fiction-expo-restart';

const MyComponent = () => {
  const [active, setActive] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
      // { key: 'home', title: 'Home', icon: 'home' },
      { key: 'auto', title: 'Auto DQ', icon: 'alert'},
      {key: 'finalTest', title: 'Test Result', icon: 'clipboard-check'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
      // home: HomeRoute,
      auto: AutoDQ,
      finalTest: TestResult,

  });

  return (
      <BottomNavigation barStyle = {{backgroundColor: 'ffffff', margin: 20}}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
      >

      </BottomNavigation>

  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  

  // Parsa's Page
  return (

    <PaperProvider theme={theme}>
      <ScrollView>
        
        <View style={{marginTop: 30}}/>
        <HomeSectionButton 
          title="Pre-Drive"
          destination = "PreDrive"
          storageKey="TEST_PROGRESS_1"
        />

        <HomeSectionButton
          title="Parking Lot"
          destination = "parkinglot"
          storageKey="TEST_PROGRESS_2"
        />

        <HomeSectionButton
          title="Residential/Business"
          destination = "Residential"
          storageKey="TEST_PROGRESS_3"
        />

        <HomeSectionButton
          title="Traffic"
          destination = "traffic"
          storageKey="TEST_PROGRESS_5"
        />

        <HomeSectionButton
          title="Freeway"
          destination = "Freeway"
          storageKey="USING_FREEWAY"
        />

        <HomeSectionButton
          title="Other"
          destination= "other"
          storageKey="USING_OTHER"
        />

      </ScrollView >

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  icon: {
    color: "rgba(205,50,50,1)",
    fontSize: 98,
  },

  buttonView: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#12414F',

  },
};



const win = Dimensions.get("window");
const ratio = win.width / 500;
