import React,{useState} from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export const AccordionDisplayer = ({ title, completed, total, children,
style }) => {
  const [expanded,setExpanded] = useState(false)
  return (
    <View style={style} >
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{ fontSize: 19 }}>{title}</Text>
        <TouchableOpacity onPress={()=>setExpanded(!expanded)}>
        <Image
          style={{ width: 16, height: 16, marginLeft: 10,transform:[
            {
              rotate:expanded ?'0deg': '-90deg'
            }
          ],tintColor:'green' }}
          source={require('../down-chevron.png')}
        />
        </TouchableOpacity>
      </View>
<Text>{completed}/{total}</Text>  
    </View>
    {expanded && children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
padding:5,

  },
});
