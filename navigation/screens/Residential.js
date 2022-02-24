import * as React from 'react';
import { View, Text } from 'react-native';

// Stephanie's Page
export default function ResidentialScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Residential Screen
            </Text>
        </View>
    );
}