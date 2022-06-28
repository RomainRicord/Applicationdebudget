import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import ExpensesFScreen from '../Screens/ExpensesFScreen';
import IncomesFScreen from '../Screens/IncomesFScreens';
import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native'

const Stack = createStackNavigator();

const NavigationHome = (props) => {
    
    const {selector,setSelector} = props

    return(
        <View style={{flex:1}}>
            {(selector == 0) &&
                <HomeScreen selector={selector} setSelector={setSelector}  />
            }
            {(selector == 1) &&
                <ExpensesFScreen selector={selector} setSelector={setSelector} />
            }
            {(selector == 2) &&
                <IncomesFScreen selector={selector} setSelector={setSelector} />
            }
        </View>
    )
}

export default NavigationHome