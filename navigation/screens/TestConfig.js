import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, DefaultTheme } from 'react-native-paper';
// import TestSettings from "../../components/TestSettings";
import Settings from './Settings';


export default function TestConfig({ navigation }) {


    return (
        <PaperProvider>
            <ScrollView>
                <Settings pageTitle="Test Configuraton"/>

                <View style={styles.ButtonContainer}>
                    <Pressable
                    onPress={() => navigation.navigate("Home") }
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#1c667d' : '#12414F' } , styles.Button]}
                    >
                    <Text style={styles.ButtonText}>Start Test</Text>

                    </Pressable>
                </View>

            </ScrollView>
        </PaperProvider>
    );


}



const styles = StyleSheet.create({
    title: {
      fontSize: 25, 
      fontWeight: 'bold'
    },
    ButtonContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
    },
    ButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});