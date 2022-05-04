import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const CurrentErrorCount = (props) => {
    //global.currentErrorCount
    const [errors, setErrors] = useState(global.currentErrorCount);

    // React.useEffect(() => {
    //     setErrors(global.currentErrorCount);
    //   }, [errors]);

    return (
        
        <View style={ styles.container }>
            <View style={ styles.innerContainer }>
                <Text style={ styles.text }>Errors</Text>
                <Text style={ styles.text }>{errors}</Text>
            </View>
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        padding: 15,
    },

    innerContainer: {
        // flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'black',
        borderRadius: 10,

        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.05,
        shadowRadius: 25,

        // opacity: 0.8,
    },
    
    text: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
    }
});

export default CurrentErrorCount;