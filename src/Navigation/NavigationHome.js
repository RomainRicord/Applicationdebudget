import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import ExpensesFScreen from '../Screens/ExpensesFScreen';
import IncomesFScreen from '../Screens/IncomesFScreens';
import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native'

const Stack = createStackNavigator();

const NavigationHome = (props) => {
    
    const {selector,setSelector,userselected,setUserSelected} = props

    return(
        <View style={{flex:1}}>
            {(selector == 0) &&
                <HomeScreen selector={selector} setSelector={setSelector} userselected={userselected} setUserSelected={setUserSelected} />
            }
            {(selector == 1) &&
                <ExpensesFScreen selector={selector} setSelector={setSelector} userselected={userselected} setUserSelected={setUserSelected}/>
            }
            {(selector == 2) &&
                <IncomesFScreen selector={selector} setSelector={setSelector} userselected={userselected} setUserSelected={setUserSelected}/>
            }
        </View>
    )
}

export default NavigationHome