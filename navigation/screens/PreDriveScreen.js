import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text, TextInput} from 'react-native';
import { Provider as PaperProvider, RadioButton, Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

//pre-drive screen display 

export default function PreDriveScreen({ navigation }){

    const [visible, setVisible] = React.useState(true);
    const [visible2, setVisible2] = React.useState(true);  
    const [visible3, setVisible3] = React.useState(true);   
    const showDialog2 = () => setVisible2=(true); 
    const showDialog3 = () => setVisible3=(true); 
    const hideDialog = () => setVisible(false);
    const hideDialog2 = () => setVisible2(false);
    const hideDialog3 = () => setVisible3(false);
    const [checked, setChecked] = React.useState('first');
    const [soundChecked, setSoundChecked] = React.useState('first');
    const navigator = useNavigation();

    return(
    //FIXME: need to add theme={theme}
    <PaperProvider style={styles.container}>
        <Portal>
            <Dialog visible={visible} dismissable={false} onDismiss={showDialog2}>
                <Dialog.Title>Freeway Driving</Dialog.Title>
                <Dialog.Content>
                <Paragraph>Do you want to enable freeway driving for this route?</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                <Button onPress={hideDialog}>Yes</Button>
                <Button onPress={hideDialog}>No</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal> 

        <Portal>
        <Dialog visible={visible3} dismissable={false} onDismiss={hideDialog3}>
                <Dialog.Title>Route Selection</Dialog.Title>
                <Dialog.Content>
                <Paragraph>Please select the route for this practice test</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Fairytale Gardens</Text>
                    <RadioButton value = "first"
                    status={checked==='first'?'checked':'unchecked}'}
                    onPress={() => setChecked('first')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Crystal Cove</Text>
                    <RadioButton value = "second"
                    status={checked==='second'?'checked':'unchecked}'}
                    onPress={() => setChecked('second')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Rainbow Road</Text>
                    <RadioButton value = "third"
                    status={checked==='third'?'checked':'unchecked}'}
                    onPress={() => setChecked('third')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>Colossal Mountain</Text>
                    <RadioButton value = "fourth"
                    status={checked==='fourth'?'checked':'unchecked}'}
                    onPress={() => setChecked('fourth')}
                    />
                </View>
                <View style= {{flex:1, padding:0}}>
                    <Text style= {{fontSize:8}}>DriveQuest Circuit</Text>
                    <RadioButton value = "fifth"
                    status={checked==='fifth'?'checked':'unchecked}'}
                    onPress={() => setChecked('fifth')}
                    />
                </View>
                <Button onPress={hideDialog3}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

        <Portal>
            <Dialog visible={visible2} dismissable={false} onDismiss={showDialog3}>
                <Dialog.Title>Sound Selection</Dialog.Title>
                <Dialog.Content>
                <Paragraph>Please select the error sound you'd like to use for this practice test.</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Bell</Text>
                    <RadioButton value = "first"
                    status={soundChecked==='first'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('first')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Horn</Text>
                    <RadioButton value = "second"
                    status={soundChecked==='second'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('second')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Oink</Text>
                    <RadioButton value = "third"
                    status={soundChecked==='third'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('third')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Police Siren</Text>
                    <RadioButton value = "fourth"
                    status={soundChecked==='fourth'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('fourth')}
                    />
                </View>
                <View style= {{flex:1, padding:10}}>
                    <Text style= {{fontSize: 9}}>Piano</Text>
                    <RadioButton value = "fifth"
                    status={soundChecked==='fifth'?'checked':'unchecked}'}
                    onPress={() => setSoundChecked('fifth')}
                    />
                </View>
                <Button onPress={hideDialog2}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

        <Container>
            <View>
                {/* Pre-Drive Checklist*/}
                <View style={styles.itemsWrapper}>
                <Text style={styles.title}>Pre-Drive Checklist Test</Text>
                    <View style={styles.items}>
                        <ChecklistItem text   ={'1. Driver Window               '} rectangleColor = {'grey'}/>
                        <ChecklistItem text ={'2. Windshield                    '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'3. Rear View Mirrors         '} rectangleColor = {'grey'}/>
                        <TurnSignalsItem text ={'4. Turn Signals                                        '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'5. Brake Lights                  '} rectangleColor = {'grey'}/>
                        <ChecklistItem text ={'6. Tires                               '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'7. FootBrakes                  '} rectangleColor = {'grey'}/>
                        <ChecklistItem text ={'8. Horn                            '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'9. Emergency/Parking Brake'} rectangleColor = {'grey'}/>
                        <ArmSignalsItem text ={'10. Arm Signals                                         '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'11. Windshield Wipers    '} rectangleColor = {'grey'}/>
                        <ChecklistItem text ={'12. Defroster                      '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'13. Emergency flasher     '} rectangleColor = {'grey'}/>
                        <ChecklistItem text ={'14. Headlights                   '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'15. Passenger Door        '} rectangleColor = {'grey'}/>
                        <ChecklistItem text ={'16. Glove Box                   '} rectangleColor = {'white'}/>
                        <ChecklistItem text   ={'17. Seatbelts                      '} rectangleColor = {'grey'}/>
                    </View>
                </View>
            </View>
        </Container>
    </PaperProvider>
    );
}


//checklist item class 
const ChecklistItem = ( props ) => {
    const [notChecked, isChecked] = React.useState(false);

    function onBoxPress(){
        isChecked(!notChecked);
        if (notChecked){
            decrementVal();
        }
        else{
            incrementVal();
        }  
    }
    
    return(
        <Pressable onPress={onBoxPress}>
            <View style={props.rectangleColor === 'white' ? styles.whiteRectangle : styles.greyRectangle}>
                <View style={styles.itemRight}>
                    <Text style={styles.itemText}>{props.text}</Text>
                    {/* not using paper checkbox since can't resize */ }
                    <Pressable
                    style={[styles.checkboxBase, notChecked && styles.checkboxChecked]}
                    onPress={onBoxPress}>
                    {notChecked && <Ionicons name="checkmark" size={70} color="white" />}
                    </Pressable>
                </View>
            </View>   
        </Pressable>  
    )
}

//Turn Signals Item 
const TurnSignalsItem = ( props ) => {

  return(
      <View style={styles.whiteRectangle}>
          <View style={styles.multipleItemsRight}>
              <Text style={styles.itemText}>{props.text}</Text>
              <CheckboxItem/>
              <CheckboxItem/>
              <Text style={styles.itemText}>{'Left               Right     '}</Text>
          </View>
      </View>   
  )
}

//Arm Signals Item 
const ArmSignalsItem = ( props ) => {

return(
    <View style={styles.whiteRectangle}>
        <View style={styles.multipleItemsRight}>
            <Text style={styles.itemText}>{props.text}</Text>
            <CheckboxItem/>
            <CheckboxItem/>
            <CheckboxItem/>
            <Text style={styles.itemText}>{'Left                Right            Stop       '}</Text>
        </View>
    </View>   
)
}

//Checkbox Item 
const CheckboxItem = ( props ) => {

const [notChecked, isChecked] = React.useState(false);

function onBoxPress(){
    isChecked(!notChecked);
    if (notChecked){
        decrementVal();
    }
    else{
        incrementVal();
    }  
}



return(
        <View>
            <Pressable
            style={[styles.checkboxBase, notChecked && styles.checkboxChecked]}
            onPress={onBoxPress}>
            {notChecked && <Ionicons name="checkmark" size={70} color="white" />}
            </Pressable>
        </View>
)
}

//counter
var counter = 0;

export function incrementVal () {
    ++counter;
    console.log(counter);
  }
  
export function decrementVal () {
    --counter;
    console.log(counter);
}

//scroll bar 
class Container extends React.Component {
    state = {
      screenHeight: height,
    };
    onContentSizeChange = (contentWidth, contentHeight) => {
      this.setState({ screenHeight: contentHeight });
    };
    render() {
      const scrollEnabled = this.state.screenHeight > height;
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#468189" />
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
          >
            <View style={styles.content}>
              {this.props.children}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }





//style-sheet 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    itemsWrapper:{
      paddingTop: 30,
      paddingHorizontal: 10,
    },
    title:{
      fontSize: 36, 
    },
    greyRectangle: {
        backgroundColor: '#EDEDED',
        padding: 15,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    whiteRectangle: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    itemRight:{
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    multipleItemsRight:{
      alignItems: 'center',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap',
  },

    itemText:{
        
    },
    checkboxBase: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 10,
        borderRadius: 10,
        borderColor: '#90C96A',
        backgroundColor: 'transparent',
        margin: 1.5,
        
    },
    
    checkboxChecked: { //checkbox color 
        backgroundColor: '#90C96A',
    },

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      scrollview: {
        flexGrow: 1,
      },
      content: {
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 0,
      },
  });
