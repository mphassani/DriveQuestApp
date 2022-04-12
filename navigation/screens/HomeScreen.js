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
import { Provider as PaperProvider, Button, Card, Title, Paragraph, Avatar, FAB, Portal, DefaultTheme, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StylesProvider } from "@chakra-ui/react";
import CommentsScreen from './CommentsScreen';
import TestResult from './TestResult';

import AutoDQ from './AutoDQ';

const CommentsRoute = () => <CommentsScreen />
// import {Restart} from 'fiction-expo-restart';

const MyComponent = () => {
  const [active, setActive] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
      // { key: 'home', title: 'Home', icon: 'home' },
      { key: 'auto', title: 'Auto DQ', icon: 'alert'},
      {key: 'comment', title: 'Comments', icon: 'comment'},
      {key: 'finalTest', title: 'Test Result', icon: 'clipboard-check'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
      // home: HomeRoute,
      auto: AutoDQ,
      comment: CommentsRoute,
      finalTest: TestResult,

  });

  return (
      <BottomNavigation
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
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('Residential')}>Residential</Button>
          </Card.Actions>
          </View>
        </Card>
        <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
          <Card.Actions>
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('Freeway')}>Freeway</Button>
          </Card.Actions>
          </View>
        </Card>
        <View style={{padding: "2%"}}/>
        <Card>
        <View style={styles.buttonView}>
          <Card.Actions>
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('intersection')}>Intersection</Button>
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
            <Button style={{width: 250}} mode="contained" color="#90C96A" onPress={() => navigation.navigate('lanechangeleft')}>Lane change</Button>
          </Card.Actions>
          </View>
        </Card>
        

{/* 
        <View style={styles.buttonView}>
          <Card>
            <Card.Actions>
              <Button color="#12414F" mode="contained" onPress={() => navigation.navigate('testresult')}>Test Results</Button>
            </Card.Actions>
          </Card>
        </View> */}

      </ScrollView>


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
