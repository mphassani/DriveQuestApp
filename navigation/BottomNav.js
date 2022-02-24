import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Provider as PaperProvider, Button, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

function BottomNav(){
    return(
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  
    );
  }

  export default BottomNav;