import React, {useState} from 'react';
import { StyleSheet,} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


{/* ____________function App_____________ */}   

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Incomes" component={IncomesScreen}/>
                
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
