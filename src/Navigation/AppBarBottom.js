import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../Screens/HomeScreen';

import StatScreen from '../Screens/StatScreen';
import ContScreen from '../Screens/ContScreen';
import NavigationHome from './NavigationHome'

import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const AppBarBottom = () => {

    const [userselected, setUserSelected] = React.useState(0)
    const [selector,setSelector] = React.useState(0)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'account', title: 'Compte', focusedIcon: 'currency-eur', unfocusedIcon: 'currency-eur' },
        { key: 'stat', title: 'Statistiques', icon: 'chart-bar'}
    ]);

    const HomeRoute = () => <NavigationHome selector={selector} setSelector={setSelector} userselected={userselected} setUserSelected={setUserSelected} />
    const AccountRoute = () => <ContScreen userselected={userselected} setUserSelected={setUserSelected}/>
    const StatRoute = () => <StatScreen userselected={userselected} setUserSelected={setUserSelected} />

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        account: AccountRoute,
        stat: StatRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{backgroundColor:'blue'}}
            renderIcon={({ route }) => {
                return(<Icon name={routes[index].title == route.title ? route.unfocusedIcon : route.focusedIcon} size={20} color="white" />)
            }}
        />
    );
};

export default AppBarBottom