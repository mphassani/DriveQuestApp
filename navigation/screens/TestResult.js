import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { AccordionDisplayer } from './components/AccordionDisplayer';
import datas from "./DummyData"



const MyComponent = () => {
  let sum = 0;
  let total = 0;
 datas.forEach((data)=>{
sum = sum + data.completed
total = total + data.total
})
let passed = sum > 70
  return(
     <View style={{paddingHorizontal:12}}>
   {
     datas.map((data,index)=> {
      return(
        <AccordionDisplayer style={{
          backgroundColor: index % 2 ? '#D6D6D6' : '#F6F6F6'
        }} title={data.title} completed={data.completed} total={data.total} key={data.title}>  
          <View>
          {
            data.errors.map((error)=>{
              return(
                <Text style={{marginVertical:5,marginLeft:5}}>{error.text}</Text>
              )
            })
          }
          </View>
        </AccordionDisplayer>
      )
     })
   }
   <View style={styles.passContainer}>
   <View style={{flexDirection:'row'}}>
  <Text>Overall Score: {' '}</Text>
<Text style={{color:passed ? 'green' :'red'}}>{passed? 'PASS' : 'FAILED'}</Text>
</View>
<Text>{sum}/{total}</Text>
   </View>
 </View>
  )
};

const styles = StyleSheet.create({
  passContainer:{
    borderRadius:5,
    backgroundColor:'#cacaca',
    padding:10,
flexDirection:'row',
justifyContent:'space-between',
marginTop:20
  }
})

export default MyComponent;