import * as React from 'react';
import { View, Text } from 'react-native';

// CECE's PAGE

export default function TurnScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Turn Screen</Text>
        </View>
        //<View>
        //    <Text>Buttons</Text>
        //</View>
        
    );
}
