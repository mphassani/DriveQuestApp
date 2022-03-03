import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, PanResponder } from 'react-native';
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";

const Counter = (props) => {

  const [count, setCount] = useState(0);
  const onAdd = () => setCount(prevCount => count < 4 ? prevCount + 1: prevCount);
  const onDecrement = () => setCount(prevCount => count > 0 ? prevCount - 1 : prevCount);

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
    top: 5,
  },
  text: {
    fontSize: 20,
    top: 11,
    alignItems: 'center',
    color: 'red',
  },


})

export default Counter;