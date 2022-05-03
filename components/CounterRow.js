import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Provider as PaperProvider, Divider, List } from 'react-native-paper';
import Counter from './Counter';

var maxValue = 4

const CounterRow = (props) => {

    useEffect(() =>
    {
        // console.log("Row's MAX VALUE: " + props.maxValue);
        maxValue = props.maxValue
    }, [])

    return (

        // <View>
        //     <List.Item 
        //         title={<Text style={styles.titleText}>{" " + props.title}</Text>}

        //         left={() => <Image style={styles.iconBackground} source={props.icon} />}

        //         right={() => 
        //             <Counter storageKey={props.storageKey} maxCount={props.maxValue}/>
        //         }
        //     />

        //     <Divider />
        // </View>

        <View>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.iconBackground} source={props.icon} />
                    <Text style={styles.title} adjustsFontSizeToFit >{props.title}</Text>
                </View>

            
                <View style={styles.right}>
                    <Counter storageKey={props.storageKey} maxCount={props.maxValue}/>
                </View>

            </View>
            
            <View style={styles.divider}></View>
        </View>

    )
};


const styles = StyleSheet.create({
    
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
      },

    left: {
        flexDirection: "row",
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        alignItems: 'center', //Centered vertically
      },

    iconBackground: {
        height: 50,
        width: 50, 
        borderRadius: 10, 
        // backgroundColor: '#12414F',
        backgroundColor: '#4DB6AC',
    },

    title: {
        marginHorizontal: 8,
        alignItems: 'center',
        flex: 1,
        fontSize: 18,
        fontWeight: "400",
    },

    divider: {
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 1,
    },
});

export default CounterRow;