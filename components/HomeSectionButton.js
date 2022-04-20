import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Provider as PaperProvider, RadioButton, Button, Divider, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';
import * as StorageHandler from '../StorageHandler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const HomeSectionButton = (props) => {

    const navigation = useNavigation();

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


                <Pressable style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
                    onPress={() => {
                        setIsChecked(!isChecked);
                        console.log("PRESSED");
                        // StorageHandler.storeStringData(props.storageKey, (!notChecked).toString());
                }}>
                <Ionicons name="checkmark" size={40} color={isChecked ? "#FFFFFF" : "transparent"} />

                </Pressable>

                <Pressable
                    onPress={() => {setIsChecked(true); navigation.navigate(props.destination);}}
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.sectionButton]}
                >
                <Text style={styles.sectionButtonText}>{props.title}</Text>
        
                </Pressable>

            

      </View>
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        // alignSelf: 'stretch',
        // alignItems: 'baseline',
        flexDirection:'row', 
        // flexWrap:'wrap',

        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30,
    },
    sectionButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        height: 50,
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
        marginRight: 15,
    },
    checkboxChecked: { //checkbox color 
        backgroundColor: '#00677F',
    },
});

export default HomeSectionButton;