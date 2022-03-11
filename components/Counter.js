import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, PanResponder } from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";
import * as StorageHandler from '../StorageHandler';

const Counter = (props) => {

  // var count = 0;
  const [count, setCount] = useState(0);
  // function setCount(val) {
  //   count = val;
  // }
  
  useEffect(() =>
  {
    setCountersToInitalSavedValues();
  }, [])
  
  function setCountersToInitalSavedValues() {
    var value = StorageHandler.getData(props.storageKey).then(res => {
      console.log("Initial Value", res);
      if (res != null) {
        setCount(parseInt(res));
      }
      else {
        setCount(0);
      }
      return res;
    });
  }

  
  

  
  const onAdd = () => {
    // StorageHandler.clearAll();
    setCount(prevCount => count < 4 ? prevCount + 1: prevCount);

    // if (count < 4) {
    //   count += 1;
    // }
    
    console.log("onAdd count: ", count);
    // console.log("key: ", props.storageKey, " count: ", count);
    StorageHandler.storeStringData(props.storageKey, count);
    // console.log("READING VALUE: " , StorageHandler.getData("@" + props.storageKey));

  }
  const onDecrement = () => {
    setCount(prevCount => count > 0 ? prevCount - 1 : prevCount);
    
    // if (count > 0) {
    //   count -= 1;
    // }

    console.log("onDecrement count: ", count);
    // console.log("key: ", props.storageKey, " count: ", count);
    StorageHandler.storeStringData(props.storageKey, count);



    // var val = StorageHandler.getData("turns_approach_traffic_check").then(
    //   (result) => { 
    //       return result;
    //   });

    // var val = StorageHandler.getData("TURNS_LEFT_APPROACH_TRAFFIC_CHECK");
    // var val = StorageHandler.promise_resolver("TURNS_LEFT_APPROACH_TRAFFIC_CHECK");
    

    // var val = StorageHandler._getStorageValue("turns_approach_traffic_check");
    // console.log("THE VALUE from Counter.js: ", val);

    // getValue()
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
    fontWeight: 500,
  },


})

export default Counter;