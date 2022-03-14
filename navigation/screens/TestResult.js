import * as React from 'react';
import { View, Text } from 'react-native';
import { List, Provider as PaperProvider, Appbar, DefaultTheme } from 'react-native-paper';




const MyComponent = () => (

  <PaperProvider>
    <List.AccordionGroup>

      <List.Accordion title="Pre-Drive Check Results" id="1">
        <List.Item title="Item 1" />
      </List.Accordion>


      <List.Accordion title="Parking Lot Results" id="2">
        <List.Item title="Item 2" />
      </List.Accordion>


      <List.Accordion title="Residential Results" id="3">
        <List.Item title="Item 2" />
      </List.Accordion>



      <List.Accordion title="Reversing Results" id="4">
        <List.Item title="Item 2" />
      </List.Accordion>



      <List.Accordion title="Freeway Results" id="5">
        <List.Item title="Item 2" />
      </List.Accordion>


      <List.Accordion title="Parking Results" id="6">
        <List.Item title="Item 2" />
      </List.Accordion>


      <List.Accordion title="Turning Results" id="7">
        <List.Item title="Item 2" />
      </List.Accordion>


      <View>

        <List.Accordion title="Lane Change Results" id="8">
          <List.Item title="Item 3" />
        </List.Accordion>
        <Text>


          Overall Score: PASS/NOT PASS
        </Text>
      </View>
    </List.AccordionGroup>
  </PaperProvider>


);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#90C96A',
  },
};



export default MyComponent;