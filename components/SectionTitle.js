import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';


const SectionTitle = (props) => {


    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                {props.name}
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 30, 
        paddingBottom: 0
    },
    text: {
        fontSize: 21, 
        fontWeight: 'bold'
    }
});

export default SectionTitle;