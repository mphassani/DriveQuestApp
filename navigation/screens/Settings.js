import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Constants from 'expo-constants';

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings() {
  const [soundOpen, setSoundOpen] = useState(false);
  const [soundValue, setSoundValue] = useState(null);
  const [soundItems, setSoundItems] = useState([
    {label: 'No Sound', value: '1'},
    {label: 'Bell', value: '2'},
    {label: 'Horn', value: '3'},
    {label: 'Oink', value: '4'},
    {label: 'Police siren', value: '5'},
    {label: 'Piano', value: '6'},
  ]);
  const [routeOpen, setRouteOpen] = useState(false);
  const [routeValue, setRouteValue] = useState(null);
  const [routeItems, setRouteItems] = useState([
    {label: 'Route A', value: 'A'},
    {label: 'Route B', value: 'B'},
    {label: 'Route C', value: 'C'},
    {label: 'Route D', value: 'D'},
    {label: 'Route E', value: 'E'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Settings
      </Text>
      <Text style={styles.title}>
        Sounds
      </Text>
      <View style={{zIndex: 2}}>
        <DropDownPicker 
            showArrowIcon={true}
            open={soundOpen}
            value={soundValue}
            items={soundItems}
            setOpen={setSoundOpen}
            setValue={setSoundValue}
            setItems={setSoundItems}
            placeholder='Select a sound'
            defaultIndex={0}
            containerStyle={{height: 70, marginBottom: 15}}
            searchable={true}
            onChangeItem={item => console.log(item.label, item.value)}
        />
      </View>
      
      <Text style={styles.title}>
        Current Route
      </Text>
      <View style={{zIndex: 1}}>
        <DropDownPicker
            showArrowIcon={true}
            open={routeOpen}
            value={routeValue}
            items={routeItems}
            setOpen={setRouteOpen}
            setValue={setRouteValue}
            setItems={setRouteItems}
            placeholder='Select a route'
            defaultIndex={0}
            containerStyle={{height: 70}}
            searchable={true}
            onChangeItem={item => console.log(item.label, item.value)}
        />
      </View>

      <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", paddingBottom: "5%" }}>  
          <Button color= "#12414F" onPress={() => {clearAllStoredData(); alert("Cleared Saved Data");}}>Clear Data</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 150,
    backgroundColor: '#ecf0f1',
    padding: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
