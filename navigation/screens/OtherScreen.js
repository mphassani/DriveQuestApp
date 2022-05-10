import React, { useState , useEffect} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView, 
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { Provider as PaperProvider, Button, List, IconButton, Avatar, Appbar, DefaultTheme } from "react-native-paper";
import {useHeaderHeight} from '@react-navigation/elements';
import Counter from '../../components/Counter';
import CounterRow from '../../components/CounterRow';
import * as StorageHandler from "../../StorageHandler";
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

export default function OtherScreen({ navigation }) {
    const headerHeight = useHeaderHeight();

    const [errorText1, setErrorText1] = React.useState("");
    const [errorText2, setErrorText2] = React.useState("");
    const [errorText3, setErrorText3] = React.useState("");
    const [errorText4, setErrorText4] = React.useState("");

    function saveComment(storageKey, text) {
        StorageHandler.storeStringData(storageKey, text);
    }

    async function setToInitalSavedValues() {

        const errorText1 = await StorageHandler.getData("OTHER_ERROR_TEXT_1");
        const errorText2 = await StorageHandler.getData("OTHER_ERROR_TEXT_2");
        const errorText3 = await StorageHandler.getData("OTHER_ERROR_TEXT_3");
        const errorText4 = await StorageHandler.getData("OTHER_ERROR_TEXT_4");
    
        if (errorText1 != null) {
            setErrorText1(errorText1);
        }
    
        if (errorText2 != null) {
            setErrorText2(errorText2);
        }
    
        if (errorText3 != null) {
            setErrorText3(errorText3);
        }
    
        if (errorText4 != null) {
            setErrorText4(errorText4);
        }
    }

    useEffect(() => {
        setToInitalSavedValues();
    }, []);

    return (
        <KeyboardAvoidingView 
        keyboardVerticalOffset={headerHeight}
        behavior="position" 
        >
            <ScrollView>
        <PaperProvider theme={theme}>

            
                <SectionTitle name="Other"></SectionTitle>

                <CounterRow 
                    title="Engine Not On"
                    icon={require("../../assets/engineOff.png")}
                    storageKey="OTHER_ERROR_ENGINE_NOT_ON"
                />

                <CounterRow 
                    title="Parking Brake"
                    icon={require("../../assets/parkingBrake.png")}
                    storageKey="OTHER_ERROR_PARKING_BRAKE"
                />

                <CounterRow 
                    title="Concentration"
                    icon={require("../../assets/Concentration.png")}
                    storageKey="OTHER_ERROR_CONCENTRATION"
                />

                <CounterRow 
                    title="Judgment"
                    icon={require("../../assets/Judgment.png")}
                    storageKey="OTHER_ERROR_JUDGEMENT"
                />

                <CounterRow 
                    title="Mindful of Signals"
                    icon={require("../../assets/icons8-traffic-light-100.png")}
                    storageKey="OTHER_ERROR_MINDFUL_OF_SIGNALS"
                />

                <CounterRow 
                    title="Off Course"
                    icon={require("../../assets/OffCourse.png")}
                    storageKey="OTHER_ERROR_OFF_COURSE"
                />

                <CounterRow 
                    title="Late Reaction to Hazards"
                    icon={require("../../assets/LateReaction.png")}
                    storageKey="OTHER_ERROR_LATE_REACTION_TO_HAZARDS"
                />

                <SectionTitle name="Custom Errors"></SectionTitle>

                <Text style={styles.title}>Error 1</Text>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <TextInput
                            editable
                            multiline
                            style={styles.textInput}
                            value={errorText1}
                            onChangeText={(text) => {setErrorText1(text); saveComment("OTHER_ERROR_TEXT_1", text);}}
                        />
                    </View>
                    <Counter storageKey="OTHER_COUNTER_1" maxValue={4}/>
                </View>

                <View style={styles.divider}></View>


                <Text style={styles.title}>Error 2</Text>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <TextInput
                            editable
                            multiline
                            style={styles.textInput}
                            value={errorText2}
                            onChangeText={(text) => {setErrorText2(text); saveComment("OTHER_ERROR_TEXT_2", text);}}
                        />
                    </View>
                    <Counter storageKey="OTHER_COUNTER_2" maxValue={4}/>
                </View>

                <View style={styles.divider}></View>


                <Text style={styles.title}>Error 3</Text>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <TextInput
                            editable
                            multiline
                            style={styles.textInput}
                            value={errorText3}
                            onChangeText={(text) => {setErrorText3(text); saveComment("OTHER_ERROR_TEXT_3", text);}}
                        />
                    </View>
                    <Counter storageKey="OTHER_COUNTER_3" maxValue={4}/>
                </View>

                <View style={styles.divider}></View>


                <Text style={styles.title}>Error 4</Text>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <TextInput
                            editable
                            multiline
                            style={styles.textInput}
                            value={errorText4}
                            onChangeText={(text) => {setErrorText4(text); saveComment("OTHER_ERROR_TEXT_4", text);}}
                        />
                    </View>
                    <Counter storageKey="OTHER_COUNTER_4" maxValue={4}/>
                </View>

                <View style={styles.divider}></View>


                <View style={{ marginBottom: 25 }}></View>

            
            </PaperProvider>
            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    
    left: {
        flexDirection: "row",
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        alignItems: 'center', //Centered vertically
        marginRight: 10,
      },

      row: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10,
        marginHorizontal: 10,
      },

    title: {
        marginLeft: 10,
        alignItems: 'center',
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 10,
    },

    divider: {
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 1,
    },
    input: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        minHeight: 50,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.05,
        shadowRadius: 25,           
        margin: 10,
    },
    textInput: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        minHeight: 50,
        padding: 15,
        fontSize: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.05,
        shadowRadius: 25,
      },
});
