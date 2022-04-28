import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider, Button, Card, Title, Paragraph, Avatar, FAB, Portal, RefreshControl, DefaultTheme, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as StorageHandler from "../../StorageHandler";
import { StylesProvider } from "@chakra-ui/react";
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
      <ScrollView 
      // refreshControl={
      //   <RefreshControl
      //     refreshing={refreshing}
      //     onRefresh={onRefresh}
      //   />
      // }
      >
      {/* <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
        <Card.Actions>
              <Button style={{width: 250}} color="#90C96A" mode="contained" onPress={() => navigation.navigate('PreDrive')} >Pre-Drive Checklist</Button>
          </Card.Actions>
        </View>
      </Card>
      <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
        <Card.Actions>
              <Button style={{width: 250}} color="#90C96A" mode="contained" onPress={() => navigation.navigate('parkinglot')} >Parking Lot</Button>
          </Card.Actions>
        </View>
        </Card>
        <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
          <Card.Actions>
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('Residential')}>Residential/Business</Button>
          </Card.Actions>
          </View>
        </Card>
        <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
          <Card.Actions>
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('turnscreenleft')}>Turns</Button>
          </Card.Actions>
          </View>
        </Card>
        <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
          <Card.Actions>
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('traffic')}>Traffic</Button>
          </Card.Actions>
          </View>
        </Card>
        <View style={{padding: "2%"}}/>
        <Card style={{display: freewayDisplay}}>
        <View style={styles.buttonView}>
          <Card.Actions>
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('Freeway')}>Freeway</Button>
          </Card.Actions>
          </View>
        </Card> */}

        
        {/* This is my proposed solution for improved test navigation, if it doesn't work, the old buttons are still up above */}
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
          title="Turns"
          destination = "turnscreenleft"
          storageKey="TEST_PROGRESS_4"
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

      </ScrollView >


      {/* <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 200, height: 300 }} onPress={() => Restart()}/> */}
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
