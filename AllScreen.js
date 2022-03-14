import * as React from 'react'
import { Fragment } from 'react'
import MainContainer from './navigation/MainContainer';
import BottomNav from './navigation/BottomNav';
import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton, FAB, Portal } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { clearAllStoredData } from './StorageHandler';


import HomeScreen from './navigation/screens/HomeScreen';
import CommentsScreen from './navigation/screens/CommentsScreen';
import IntersectionScreen from './navigation/screens/IntersectionScreen';
import LaneChangeScreenLeft from './navigation/screens/LaneChangeScreenLeft';
import TurnScreenLeft from './navigation/screens/TurnScreenLeft';
import TurnScreen from './navigation/screens/TurnScreenLeft';
import DrawerSide from './DrawerSide'


const _goBack = () => console.log('Went back');

const HomeRoute = () => <HomeScreen />

const Intersectionroute = () => <IntersectionScreen />

const TurnsRoute = () => <TurnScreenLeft />

const CommentsRoute = () => <CommentsScreen />

const Lane_ChangeRoute = () => <LaneChangeScreenLeft />
const MyComponent2 = () => {
    const [active, setActive] = React.useState('');


    return (
        <Drawer.Section title="Some title">
            <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
            />
        </Drawer.Section>
    );
};

const MyComponent = () => {
    const [active, setActive] = React.useState('');
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'intersection', title: 'Intersection', icon: 'traffic-light' },
        { key: 'turns', title: 'Turns', icon: 'directions' },
        { key: 'lane_change', title: 'Lane Change', icon: 'road' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        intersection: Intersectionroute,
        turns: TurnsRoute,
        lane_change: Lane_ChangeRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />

    );
};

export default function MainHome({navigation}) {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    return (

        <PaperProvider theme={theme}>
            <Portal >
                <FAB.Group
                    style={{paddingBottom: "25%"}}
                    open={open}
                    icon={open ? 'minus' : 'plus'}
                    actions={[
                        {
                            icon: 'alert',
                            label: 'Automatic DQ',
                            onPress: () => navigation.navigate('autodq'),
                            small: false,
                        },
                        {
                            icon: 'comment',
                            label: 'Comment',
                            onPress: () => navigation.navigate('commentscreen'),
                            small: false,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
            <PaperProvider theme={theme}>

                <MyComponent />
            </PaperProvider>

        </PaperProvider>
    );

}



const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#12414F',
        accent: '#12414F',
    },
};
