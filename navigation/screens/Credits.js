import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, Image, TextInput } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';


export default function Credits() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <PaperProvider>
                <View style={styles.container}>
                    <Text style={styles.pageTitle}>
                    Credits
                    </Text>

                    <Text style={styles.name}>Cecilia Marie Abrahamsson</Text>
                    <Text style={styles.name}>LouAnne Boyd</Text>
                    <Text style={styles.name}>Drew Bozarth</Text>
                    <Text style={styles.name}>Stacy Cappelloni</Text>
                    <Text style={styles.name}>Parsa Hassani</Text>
                    <Text style={styles.name}>Kai Itokazu</Text>
                    <Text style={styles.name}>Keoni Lanoza</Text>
                    <Text style={styles.name}>Christian Lopez</Text>
                    <Text style={styles.name}>Moises Lopez</Text>
                    <Text style={styles.name}>Stephanie Munday</Text>
                    <Text style={styles.name}>Kevin Oropeza</Text>
                    <Text style={styles.name}>Kevan Parang</Text>
                    <Text style={styles.name}>Mark Reiland</Text>
                    <Text style={styles.name}>Romtin Rezvani</Text>
                    <Text style={styles.name}>Pelin Nisa Top</Text>
                    <Text style={styles.name}>Lucas Torti</Text>
                </View>
            </PaperProvider>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 15,
      },
    
      //used for page title 
      pageTitle: {
        marginTop: 15,
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      name: {
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 12,
      }

});