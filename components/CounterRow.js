import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Provider as PaperProvider, Divider, List } from 'react-native-paper';
import Counter from './Counter';

var maxValue = 4

const CounterRow = (props) => {

    useEffect(() =>
    {
        console.log("Row's MAX VALUE: " + props.maxValue);
        maxValue = props.maxValue
    }, [])

    return (

        <View>
            <List.Item 
                title={<Text style={styles.titleText}>{" " + props.title}</Text>}

                left={() => <Image style={styles.iconBackground} source={props.icon} />}

                right={() => 
                    <Counter storageKey={props.storageKey} maxCount={props.maxValue}/>
                }
            />

            <Divider />
        </View>

    )
};


const styles = StyleSheet.create({
    iconBackground: {
        height: 64,
        width: 64, 
        borderRadius: 10, 
        backgroundColor: '#4DB6AC',
    },

    titleText: {
        fontSize: 18,
        fontWeight: "500"
    }
});

export default CounterRow;