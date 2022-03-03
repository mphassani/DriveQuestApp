import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, PanResponder } from 'react-native';


const Counter = (props) => {

  const [count, setCount] = useState(0);
  const onAdd = () => setCount(prevCount => count < 4 ? prevCount + 1: prevCount);
  const onDecrement = () => setCount(prevCount => count > 0 ? prevCount - 1 : prevCount);

  return (
    <View>
      <View>
        
        {/* Plus Sign */}
        <View style={styles.counter}>  
          <TouchableOpacity style={styles.button} onPress={onDecrement}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>

          <Text style={styles.textSize}>{count}</Text>

          {/* Minus Sign */}
          <TouchableOpacity style={styles.button} onPress={onAdd}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )

} 

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
  },
  counter: {
    flexDirection:'row', 
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    top: 10,
    right: 6,
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
  },
  textSize: {
    fontSize: 25,
    top: 4,
    alignItems: 'center',
  },
  image: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    opacity: 0.4,
    borderRadius: 100,
    marginRight: 15,
  },
})

export default Counter;