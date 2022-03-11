import * as React from 'react'
import { Fragment } from 'react'
import MainContainer from './navigation/MainContainer';
import BottomNav from './navigation/BottomNav';
import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import {clearAllStoredData} from './StorageHandler';


import HomeScreen from './navigation/screens/HomeScreen';
import CommentsScreen from './navigation/screens/CommentsScreen';
import IntersectionScreen from './navigation/screens/IntersectionScreen';
import LaneChangeScreen from './navigation/screens/LaneChangeScreen';
import TurnScreenLeft from './navigation/screens/TurnScreenLeft';
import TurnScreen from './navigation/screens/TurnScreenLeft';
import DrawerSide from './DrawerSide'


const _goBack = () => console.log('Went back');

const HomeRoute = () => <HomeScreen />

const Intersectionroute = () => <IntersectionScreen />

const TurnsRoute = () => <TurnScreenLeft />

const CommentsRoute = () => <CommentsScreen />

const Lane_ChangeRoute = () => <LaneChangeScreen />
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
        { key: 'comments', title: 'Comments', icon: 'comment' },
        { key: 'turns', title: 'Turns', icon: 'directions' },
        { key: 'lane_change', title: 'Lane Change', icon: 'road' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        intersection: Intersectionroute,
        comments: CommentsRoute,
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
export default function MainHome() {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (

        <PaperProvider>
            <PaperProvider theme={theme}>
                <Appbar.Header>
                    <Appbar.Action icon="logout" onPress={() => alert("Logged out")} />
                    <Appbar.Content title="DriveQuest" />
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<IconButton icon="dots-vertical" onPress={openMenu} color="white" />}>
                        <Menu.Item onPress={() => { }} title="Settings" icon={"cog"} />
                        <Menu.Item onPress={() => {clearAllStoredData();}} title="Clear Saved Data" icon={"delete"} />
                        <Divider />
                        <Menu.Item onPress={() => { }} title="Credits" icon="information" />
                    </Menu>
                </Appbar.Header>
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
        accent: '#90C96A',
    },
};
