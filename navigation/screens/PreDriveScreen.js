import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions, Pressable, Text } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
const { height } = Dimensions.get('window');

//pre-drive screen display 

export default function PreDriveScreen({navigation}){
    return(
    //FIXME: need to add theme={theme}
    <PaperProvider style={styles.container}>
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
