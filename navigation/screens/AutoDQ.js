import * as React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView,
} from "react-native";
import { Provider as PaperProvider, Button, List } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function AutoDQ({ navigation }) {
    return (
        <PaperProvider>
            <List.Section>
                <List.Subheader>Some title</List.Subheader>
                <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                <List.Item
                    title="Second Item"
                    left={() => <List.Icon color="#000" icon="folder" />}
                />
            </List.Section>
        </PaperProvider>
    );

}
