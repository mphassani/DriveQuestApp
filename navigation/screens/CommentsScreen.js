import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CommentsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Comment Screen</Text>
                <TextInput style={{
                        flexDirection: 'row',
                        flex: 0.1,
                        flexWrap: 'wrap-reverse',
                        height: 0.2,
                        width: 800,
                        margin: 10,
                        borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        padding: 10,
                    }}
                    multiline = {true}
                    numLines = {5}
                    placeholder="Add a comment here"
                    keyboardType="default"
                />
        </View>
    );

}
