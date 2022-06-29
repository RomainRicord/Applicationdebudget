import * as React from 'react';
import {View,Text} from 'react-native'
import dayjs from 'dayjs'

const TransactionComponent = (props) => {

    const {name,category,date,montant} = props

    let date_ = dayjs(date).format('DD/MM/YYYY')

    console.log("Date",date_,date)

    return(
    <View style={{display:'flex',justifyContent:'space-between',margin:20,height:50,flexDirection:'row',alignItems:'center'}}>
        <View style={{display:'flex',flexDirection:'column'}}>
            <Text style={{fontWeight:'bold',color:'white'}}>{name}</Text>
            <Text style={{color:'white'}}>{category}</Text>
            <Text style={{color:'white'}}>{date_}</Text>
        </View>
        <Text style={{fontWeight:'bold',color:montant < 0 ? "red" : "green"}}>{montant < 0 && "-" }{montant > 0 && "+" } {Math.abs(montant)} €</Text>
    </View>)
}

export default TransactionComponent