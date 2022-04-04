import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import * as StorageHandler from '../StorageHandler';
import { Ionicons } from '@expo/vector-icons';

/* Code to create each individual checkbox */
const CheckboxItem = (props) => {

    /* Originally, each checkbox is set to notChecked */
    const [notChecked, setNotChecked] = useState(false); 

    /* Getting initial values from storage*/
    useEffect(() =>
    {
      setCheckboxToInitalSavedValue();
    }, [])
    
    function setCheckboxToInitalSavedValue() {
      var value = StorageHandler.getData(props.storageKey).then(res => {
        // console.log("Initial Value", res);
        if (res != null) {
            if (res == "true") {
                setNotChecked(true);
            }
            else {
                setNotChecked(false);
            }
        }
        else {
            setNotChecked(false);
        }
        return res;
      });
    }

    return (
        /* Uses checkboxBase style for not checked checkbox, and checkboxChecked for checked checkbox */
        /* Essentially creates the "box" part of the checkbox */
        <View>
            {/* Code that creates the checkbox, counts the number of checkboxes checked to be used in calculating the number of errors */}
            <Pressable style={[styles.checkboxBase, notChecked && styles.checkboxChecked]}
            
            status={notChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setNotChecked(!notChecked);
                    StorageHandler.storeStringData(props.storageKey, (!notChecked).toString());
                }}>
            <Ionicons name="checkmark" size={45} color={notChecked ? "#FFFFFF" : "#f1f2f2"} />
                
            </Pressable>
        </View>

    );
};


const styles = StyleSheet.create({
    /* Creates outline for the checkbox with no fill; used when item is incorrect */
    checkboxBase: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 7,
        borderRadius: 10,
        borderColor: '#00677F',
        backgroundColor: 'transparent',
        margin: 1.5,

    },

    /* Creates filled in checkbox, used when item is marked correct */
    checkboxChecked: { //checkbox color 
        backgroundColor: '#00677F',
    }
});

export default CheckboxItem;