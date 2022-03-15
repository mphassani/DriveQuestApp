import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { useState } from "react";
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, List, Avatar, IconButton, Checkbox, Provider, DefaultTheme} from 'react-native-paper';

/* Code to create each individual checkbox */
const CheckboxItem = () => {

    /* Originally, each checkbox is set to notChecked */
    const [notChecked, setNotChecked] = useState(false); 

    return (
        /* Uses checkboxBase style for not checked checkbox, and checkboxChecked for checked checkbox */
        /* Essentially creates the "box" part of the checkbox */
        <View style={[styles.checkboxBase, notChecked && styles.checkboxChecked]}>
            {/* Code that creates the checkbox, counts the number of checkboxes checked to be used in calculating the number of errors */}
            <Checkbox
                color="#FFFFFF" status={notChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setNotChecked(!notChecked);
                }}
            />
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