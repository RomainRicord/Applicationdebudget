import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import StatScreen from '../Screens/StatScreen';
import ContScreen from '../Screens/ContScreen';
import NavigationHome from './NavigationHome'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const AppBarBottom = () => {

    const [selector,setSelector] = React.useState(0)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'account', title: 'Compte', focusedIcon: 'currency-eur', unfocusedIcon: 'currency-eur' },
        { key: 'stat', title: 'Statistiques', focusedIcon: 'chart-bar', unfocusedIcon: 'chart-bar'}
    ]);

    const HomeRoute = () => <NavigationHome selector={selector} setSelector={setSelector}  />
    const AccountRoute = () => <ContScreen />
    const StatRoute = () => <StatScreen  />

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