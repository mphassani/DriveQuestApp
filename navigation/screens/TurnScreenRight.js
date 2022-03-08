import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView
  } from "react-native";
import { Provider as PaperProvider, Button, List,IconButton, Avatar, FAB } from "react-native-paper";
import Counter from '../../components/Counter';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// CECE's PAGE

export default function TurnScreenRight() {
    const navigation = useNavigation();
    return (
        <PaperProvider>
        <ScrollView>
            <View style={{ flexDirection:"row", justifyContent: "space-around" }}>
            <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft : 5, paddingRight: 5}}>
                        <Button mode="contained" color = '#87181A' >Left</Button>
                    </View>
                    <View style={{paddingBottom: 10, paddingTop: 10, marginBottom: 10, width: "40%",marginTop: 10, paddingLeft: 5, paddingRight: 5}}>
                        <Button mode="contained" color = "gray">Right</Button>
                    </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                <Text
                    style={{ fontSize: 25, fontWeight: 'bold' }}>Approach
                </Text>
            </View>
            <List.Section>

            <List.Item 
                title="Traffic Check" 
                left={(props) => 
                <Image 
                    style={{height:50,width:50,borderRadius: 50/ 2, backgroundColor: '#87181A'}}source={require('../../assets/TrafficCheck.png')}/>}
                right={(props) =><Counter/>}
                />
                                
            <List.Item
                title="Signal"
                left={(props) => 
                <Image 
                    style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                right={(props) =><Counter/>}
                /> 
            <List.Item
                title="Braking"
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Breaking.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item 
                title="Yield" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Yield.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item
                title="Lane Use"
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/positioning.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item
                title="Unnecessary Stop"
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/UnnecessaryStop.png')}/>}
                right={(props)  =><Counter/>}
                />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                <Text
                    style={{ fontSize: 25, fontWeight: 'bold' }}>Stop
                </Text>
            </View>
            <List.Item
                title="Gap/Limit Line"
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/GapLimitLine.png')}/>}
                right={(props)  =><Counter/>}
                />
            <List.Item
                title="Traffic Check"
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/TrafficCheck.png')}/>}
                right={(props)  =><Counter/>}
                />
            <List.Item
                title="Wheels Straight"
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/WheelsStraight.png')}/>}
                right={(props)  =><Counter/>}
                />
            <List.Item 
                title="Full Stop" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/FullStop.png')}/>}
                right={(props)  =><Counter/>}
                />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingRight: "50%", paddingTop: "5%"}}>
                <Text
                    style={{ fontSize: 25, fontWeight: 'bold' }}>During
                </Text>
            </View>
            <List.Item 
                title="Traffic Check" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/TrafficCheck.png')}/>}
                right={(props)  =><Counter/>}
                />
            <List.Item 
                title="Steering Control" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/SteeringControl.png')}/>}
                right={(props)  =><Counter/>}
                />
            <List.Item 
                title="Too Wide" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item 
                title="Too Short" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 400/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                right={(props)  =><Counter/>}
                />
            <List.Item 
                title="Yield" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Yield.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item 
                title="Correct Lane" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item 
                title="Speed" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/speed.png')}/>}
                right={(props) =><Counter/>}
                />
            <List.Item 
                title="Signal" 
                left={(props) => 
                    <Image 
                        style={{height:50, width:50,borderRadius: 50/ 2, backgroundColor: '#87181A' }}source={require('../../assets/Signal.png')}/>}
                right={(props) =><Counter/>}
                />
            </List.Section>
        </ScrollView>

    </PaperProvider>
    
       // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         //   <Text
           //     onPress={() => navigation.navigate('Home')}
             //   style={{ fontSize: 26, fontWeight: 'bold' }}>Turn Screen</Text>
       // </View>
        //<View>
        //    <Text>Buttons</Text>
        //</View>
        
    );
}

