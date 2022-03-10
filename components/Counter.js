import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, PanResponder } from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";
import * as StorageHandler from '../StorageHandler';

const Counter = (props) => {

  // count = StorageHandler.getData(props.storageKey);

  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount(prevCount => count < 4 ? prevCount + 1: prevCount);
    // console.log("key: ", props.storageKey, " count: ", count);
    StorageHandler.storeStringData(props.storageKey, count);
    // console.log("READING VALUE: " , StorageHandler.getData("@" + props.storageKey));

  }
  const onDecrement = () => {
    setCount(prevCount => count > 0 ? prevCount - 1 : prevCount);
    // console.log("key: ", props.storageKey, " count: ", count);
    // StorageHandler.storeStringData(props.storageKey, count);
    // let val = StorageHandler.getData("turns_approach_traffic_check").then(res => {
    //   // console.log(res);
    //   return res;
    // });

    // var val = StorageHandler.getData("turns_approach_traffic_check").then(
    //   (result) => { 
    //       return result;
    //   });

    var val = StorageHandler.getData("turns_approach_traffic_check");

    // var val = StorageHandler._getStorageValue("turns_approach_traffic_check");
    console.log("THE VALUE from Counter.js: ", val);
  }

  //Visibility Stuff
  const [shouldShow, setShouldShow] = useState(true);

  // shouldShow = false ? count > 0: true;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>

        <View style={styles.counter}>  

          {shouldShow ? (
            <IconButton icon = "minus-circle-outline" onPress={onDecrement} />
          ) : null }

          {shouldShow ? (
            <Text style={styles.text}>{count}</Text>
          ) : null }
          
          <IconButton icon = "plus-circle-outline" onPress={onAdd} />

        </View>


      </View>
    </SafeAreaView>

  )

} 

const styles = StyleSheet.create({
  counter: {
    flexDirection:'row', 
    justifyContent: 'center',
    left: 15,
  },
  text: {
    fontSize: 20,
    marginTop: 11,
    alignItems: 'center',
    color: 'red',
  },


})

export default Counter;