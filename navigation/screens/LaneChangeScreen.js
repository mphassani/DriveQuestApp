import * as React from 'react';
import { View, Text } from 'react-native';

//Christians page
export default function LaneChangeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Lane Change Screen</Text>
        </View>
    );
}
