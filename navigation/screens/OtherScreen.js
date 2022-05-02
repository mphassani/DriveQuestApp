import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List, IconButton, Avatar, Appbar, DefaultTheme, TextInput } from "react-native-paper";
import Counter from '../../components/Counter';
import CounterRow from '../../components/CounterRow';
import SectionTitle from '../../components/SectionTitle';

const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4DB6AC',
        accent: '#FFFFFF',
    },
};

export default function ResidentialScreen({ navigation }) {
    const [item1, setItem1] = useState('');
    const [item2, setItem2] = useState('');
    const [item3, setItem3] = useState('');
    const [item4, setItem4] = useState('');

    return (
        <PaperProvider theme={theme}>
            <ScrollView>
                <SectionTitle name="Other"></SectionTitle>
                <List.Section>

                <Text style={styles.title}>Item 1</Text>
                <View style={styles.row}>
                    <TextInput 
                        style={styles.input}
                        value={item1}
                        multiline={true}
                        onChangeText={(text) => setItem1(text)}
                        storageKey="ITEM1_OTHER_COMMENTS"
                        />
                    <Counter storageKey="ITEM1_COUNTER" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Item 2</Text>
                <View style={styles.row}>
                    <TextInput 
                        style={styles.input}
                        value={item2}
                        multiline={true}
                        onChangeText={(text) => setItem2(text)}
                        storageKey="ITEM2_OTHER_COMMENTS"
                        />
                    <Counter storageKey="ITEM2_COUNTER" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Item 3</Text>
                <View style={styles.row}>
                    <TextInput 
                        style={styles.input}
                        value={item3}
                        multiline={true}
                        onChangeText={(text) => setItem3(text)}
                        storageKey="ITEM3_OTHER_COMMENTS"
                        />
                    <Counter storageKey="ITEM3_COUNTER" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Item 4</Text>
                <View style={styles.row}>
                    <TextInput 
                        style={styles.input}
                        value={item4}
                        onChangeText={(text) => setItem4(text)}
                        multiline={true}
                        storageKey="ITEM4_OTHER_COMMENTS"
                        />
                    <Counter storageKey="ITEM4_COUNTER" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                </List.Section>
            </ScrollView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    
    left: {
        flexDirection: "row",
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        alignItems: 'center', //Centered vertically
      },

      row: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10
      },

    title: {
        marginHorizontal: 8,
        alignItems: 'center',
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        marginTop: 10
    },

    divider: {
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 1,
    },
    input: {
        borderRadius: 10,
        backgroundColor: 'white',
        minHeight: 50,
        minWidth: 200,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.05,
        shadowRadius: 25,           
        margin: 10,
        maxWidth: 200
    }
});
