import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, PanResponder } from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";
import * as StorageHandler from '../StorageHandler';
import { Audio } from 'expo-av';

const Counter = (props) => {

  const [count, setCount] = useState(0);
  
  useEffect(() =>
  {
    setCountersToInitalSavedValues();
  }, [])
  
  function setCountersToInitalSavedValues() {
    var value = StorageHandler.getData(props.storageKey).then(res => {
      // console.log("Initial Value", res);
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
    setCount(prevCount => count < 4 ? prevCount + 1: prevCount);

    if (count < 4) {
      // console.log("onAdd count: ", count + 1);
      StorageHandler.storeStringData(props.storageKey, (count + 1).toString());
    }
    // StorageHandler.clearAllStoredData();
  }

  const onDecrement = () => {
    setCount(prevCount => count > 0 ? prevCount - 1 : prevCount);
    
    if (count > 0) {
      // console.log("onDecrement count: ", count - 1);
      StorageHandler.storeStringData(props.storageKey, (count - 1).toString());
    }
  }

const [sound, setSound] = React.useState();

async function playSound() {
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync(
      require('../assets/buttonPress.wav')
  );
  setSound(sound);


console.log('Playing Sound');
  await sound.playAsync();
}

React.useEffect(() => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync(); }
    : undefined;
}, [sound]);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>

        <View style={styles.counter}>  

           <IconButton icon = "minus-circle-outline" size={35} onPress={() => {playSound(); onDecrement();}} />
           <Text style={styles.text}>{count}</Text>
           <IconButton icon = "plus-circle-outline" size={35} onPress={() => {playSound(); onAdd();}} /> 
          
        </View>


      </View>
    </SafeAreaView>

  )

} 

const styles = StyleSheet.create({
  counter: {
    flexDirection:'row', 
    justifyContent: 'center',
    left: 13,
  },
  text: {
    fontSize: 26,
    marginTop: 16,
    alignItems: 'center',
    color: 'red',
    fontWeight: "500",
  }

})

export default Counter;