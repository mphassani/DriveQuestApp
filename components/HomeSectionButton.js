import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Provider as PaperProvider, RadioButton, Button, Divider, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import * as StorageHandler from '../StorageHandler';
import { Ionicons } from '@expo/vector-icons';

const HomeSectionButton = (props) => {

    const [isChecked, setIsChecked] = useState(false); 


    useEffect(() =>
    {
    //   setCheckboxToInitalSavedValue();
      
    }, [])
    
    // function setCheckboxToInitalSavedValue() {
    //   var value = StorageHandler.getData(props.storageKey).then(res => {
    //     // console.log("Initial Value", res);
    //     if (res != null) {
    //         if (res == "true") {
    //             setIsChecked(true);
    //         }
    //         else {
    //             setIsChecked(false);
    //         }
    //     }
    //     else {
    //         setIsChecked(false);
    //     }
    //     return res;
    //   });
    // }

    return (

        <View style={styles.mainContainer}>

            <View style={styles.checkboxContainer}>

                <Pressable style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
                    onPress={() => {
                        setIsChecked(!isChecked);
                        console.log("PRESSED");
                        // StorageHandler.storeStringData(props.storageKey, (!notChecked).toString());
                }}>
                <Ionicons name="checkmark" size={40} color={isChecked ? "#FFFFFF" : "transparent"} />

                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => setIsChecked(isChecked)}
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.sectionButton]}
                >
                <Text style={styles.sectionButtonText}>Pre-Drive</Text>
        
                </Pressable>
            </View>

      </View>
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'baseline',
        flexDirection:'row', 
        flexWrap:'wrap',

        marginLeft: 15,
        marginRight: 15,
        // marginBottom: 15,
        backgroundColor: "gray",
    },
    checkboxContainer: {
        textAlign: "left",
        marginRight: 15,
    },
    buttonContainer: {
        flex: 1,
        width: 100,
        height: 50,
        textAlign: "right",

        // justifyContent: 'center',
        // alignItems: 'center',
    },
    sectionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
    },
    sectionButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    checkboxBase: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#00677F',
        backgroundColor: 'transparent',
    },
    checkboxChecked: { //checkbox color 
        backgroundColor: '#00677F',
    },
});

export default HomeSectionButton;