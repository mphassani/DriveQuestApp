import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Settings } from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";
import * as StorageHandler from '../StorageHandler';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
// import { getSoundVal } from '../navigation/screens/Settings';

const Counter = (props) => {

  const [counterValue, setCounterValue] = useState(0);
  const [showIncrementButton, setShowIncrementButton] = useState(true);
  const [showDecrementButton, setShowDecrementButton] = useState(false);
  const [maxCount, setMaxCount] = useState(4);


  useEffect(() =>
  {
    if (props.maxCount != null) {
      setMaxCount(props.maxCount);
    }

    setCounterToInitalSavedValue();
  }, [])


  async function setCounterToInitalSavedValue() {

    const valueFromStorage = await StorageHandler.getData(props.storageKey);
  
    if (valueFromStorage != null) {
      setCounterValue(parseInt(valueFromStorage));
      checkHideButtons(parseInt(valueFromStorage));
    }
    else {
      setCounterValue(0);
      checkHideButtons(0);
    }

    // const errorSoundFromStorage = await StorageHandler.getData("ERROR_SOUND");

    // if (errorSoundFromStorage != null) {
    //   selected_sound = parseInt(errorSoundFromStorage);
    //   console.log("Counter Selected Sound: " + global.test);
    // }
  }


  function checkHideButtons(count) {
    if (count >= maxCount) {
      setShowIncrementButton(false);
    }
    else {
      setShowIncrementButton(true);
    }

    if (count <= 0) {
      setShowDecrementButton(false);
    }
    else {
      setShowDecrementButton(true);
    }
  }


  function incrementCounter() {
    if (counterValue < maxCount) {
      setCounterValue(counterValue + 1);
      StorageHandler.storeStringData(props.storageKey, (counterValue + 1).toString());
      global.currentErrorCount += 1;
    }

    checkHideButtons(counterValue + 1);
  }

  function decrementCounter() {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
      StorageHandler.storeStringData(props.storageKey, (counterValue - 1).toString());
      global.currentErrorCount -= 1;
    }

    checkHideButtons(counterValue - 1);
  }






  // Sound Stuff
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    if (global.selectedSound == 1) {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/buttonPress.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }
    else if (global.selectedSound == 2) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/buttonPress2.wav')
      );
      setSound(sound);
      await sound.playAsync();
    }
    else if (global.selectedSound == 3) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/buttonPress3.wav')
      );
      setSound(sound);
      await sound.playAsync();
    }
    else if (global.selectedSound == 4) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/buttonPress4.wav')
      );
      setSound(sound);
      await sound.playAsync();
    }
    else if (global.selectedSound == 5) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/buttonPress5.wav')
      );
      setSound(sound);
      await sound.playAsync();
    }
    else if (global.selectedSound == 6) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/buttonPress6.wav')
      );
      setSound(sound);
      await sound.playAsync();
    }
    //setSound(sound);
  
  
    console.log('Playing Sound');
    //await sound.playAsync();
  }
  
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);



  
  return (
      <View style={styles.container}>

        <View style={styles.hideButtonSpacer} display = {showDecrementButton ? "none" : "flex"}></View>

        <View style={styles.textandbuttonContainer}>
          <Pressable
            onPress={() => decrementCounter() }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.button]}
            display = {showDecrementButton ? "flex" : "none"}
          >
            <Ionicons style={styles.buttonIcon} name="remove-outline" size={35} color="white" />
          </Pressable>

            <View style={styles.textContainer}>
              <Text style={styles.text}>{counterValue}</Text>
            </View>
            
          <Pressable
            onPress={() => {incrementCounter(), playSound()} }
            style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.button]}
            display = {showIncrementButton ? "flex" : "none"}
          >
            <Ionicons style={styles.buttonIcon} name="add-outline" size={35} color="white" />
          </Pressable>
        </View>

        <View style={styles.hideButtonSpacer} display = {showIncrementButton ? "none" : "flex"}></View>

      </View>
  )

} 

const styles = StyleSheet.create({
  container: {
    flexDirection:'row', 
    height: 50,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 25,
  },

  // Important! Used to keep the rounded corners and correct positioning when one of the buttons is hidden
  textandbuttonContainer: {
    flexDirection:'row',
    borderRadius: 10,
    height: 50,
    backgroundColor: "white",
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  text: {
    fontSize: 26,
    color: 'black',
    fontWeight: "500",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    marginLeft: 2,
    marginTop: 1,
  },
  hideButtonSpacer: {
    width: 50,
    height: 50,
  },

})

export default Counter;