import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Provider as PaperProvider, RadioButton, Button, Divider, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import * as StorageHandler from '../StorageHandler';
import { Ionicons } from '@expo/vector-icons';

const CheckboxRow = (props) => {

    const [isChecked, setIsChecked] = useState(false); 

    const [checkboxBaseStyle, setCheckboxBaseStyle] = useState(styles.checkboxBaseGood); 
    const [checkboxCheckedStyle, setCheckboxCheckedStyle] = useState(styles.checkboxCheckedGood); 
    const [checkboxIcon, setCheckboxIcon] = useState("checkmark"); 

    useEffect(() =>
    {
      setCheckboxToInitalSavedValue();
      
      if (props.checkboxType == "good") {
        setCheckboxBaseStyle(styles.checkboxBaseGood);
        setCheckboxCheckedStyle(styles.checkboxCheckedGood);
        setCheckboxIcon("checkmark")
      }
      else if (props.checkboxType == "bad") {
        setCheckboxBaseStyle(styles.checkboxBaseBad);
        setCheckboxCheckedStyle(styles.checkboxCheckedBad);
        setCheckboxIcon("close")
      }
    }, [])
    
    function setCheckboxToInitalSavedValue() {
      var value = StorageHandler.getData(props.storageKey).then(res => {
        // console.log("Initial Value", res);
        if (res != null) {
            if (res == "true") {
                setIsChecked(true);
            }
            else {
                setIsChecked(false);
            }
        }
        else {
            setIsChecked(false);
        }
        return res;
      });
    }

    return (

        <View>
            <List.Item 
                title={<Text style={styles.titleText}>{" " + props.title}</Text>}

                left={() => <Image style={styles.iconBackground} source={props.icon} />}

                right={() => 
                    <View style={[checkboxBaseStyle, isChecked && checkboxCheckedStyle]}>
                        <Ionicons name={checkboxIcon} size={45} color={isChecked ? "#FFFFFF" : "transparent"} />
                    </View>
                }

                onPress={() => {
                    setIsChecked(!isChecked);
                    StorageHandler.storeStringData(props.storageKey, (!isChecked).toString());
                }}
            />

            <Divider />
        </View>

    )
};


const styles = StyleSheet.create({
    // Good (GREEN)
    /* Creates outline for the checkbox with no fill; used when item is incorrect */
    checkboxBaseGood: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#00677F',
        backgroundColor: 'transparent',
        margin: 1.5,
    },

    /* Creates filled in checkbox, used when item is marked correct */
    checkboxCheckedGood: { //checkbox color 
        backgroundColor: '#00677F',
    },


    // Bad (RED)
    /* Creates outline for the checkbox with no fill; used when item is incorrect */
    checkboxBaseBad: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#87181A',
        backgroundColor: 'transparent',
        margin: 1.5,
    },

    /* Creates filled in checkbox, used when item is marked correct */
    checkboxCheckedBad: { //checkbox color 
        backgroundColor: '#87181A',
    },
    

    
    iconBackground: {
        height: 64,
        width: 64, 
        borderRadius: 32, 
        backgroundColor: '#4DB6AC',
    },

    titleText: {
        fontSize: 18,
        fontWeight: "500"
    }
});

export default CheckboxRow;