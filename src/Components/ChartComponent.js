import React,{useContext} from 'react';
import {StyleSheet, View,Dimensions,SafeAreaView,Text} from 'react-native';

import {  LineChart,   BarChart,  PieChart,  ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit'

import {chart} from '../json/chart'
import UserContext from "./UserContext";

const ChartComponent = () => {

  const UserContext_ = useContext(UserContext)
  
    return (
        <SafeAreaView style={styles.container}>
        <Text style={{fontSize:32,fontWeight:'bold'}}>Analyse des revenus</Text>
        <BarChart
          data={chart(UserContext_.expenses_array,UserContext_.incomes_array).line}
          width={Dimensions.get('window').width} // from react-native
          height={600}
          yAxisSuffix={' €'}
          chartConfig={{
            backgroundColor: '#07034e',
            backgroundGradientFrom: '#07034e',
            backgroundGradientTo: '#090979',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
            }
          }}
          fromZero={true}
          style={{
            borderRadius: 0
          }}
          showValuesOnTopOfBars={true}
          yAxisInterval={1}
        />
        <Text style={{fontSize:32,fontWeight:'bold'}}>Analyse des dépenses</Text>
        <BarChart
          data={chart(UserContext_.expenses_array,UserContext_.incomes_array).line2}
          width={Dimensions.get('window').width} // from react-native
          height={600}
          yAxisSuffix={' €'}
          chartConfig={{
            backgroundColor: '#07034e',
            backgroundGradientFrom: '#07034e',
            backgroundGradientTo: '#090979',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
            }
          }}
          fromZero={true}
          style={{
            borderRadius: 0
          }}
          showValuesOnTopOfBars={true}
          yAxisInterval={1}
        />
      </SafeAreaView>      
    )
}

export default ChartComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      
    }
    
});