import * as React from 'react';
import { View, Text } from 'react-native';

// Stephanie's Page
export default function ResidentialDrivingScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Intersection Screen</Text>
        </View>
    );
}
