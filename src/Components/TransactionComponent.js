import {View,Text} from 'react-native'
import dayjs from 'dayjs'

const TransactionComponent = (props) => {

    const {name,category,date,montant} = props

    let date_ = dayjs(date).locale('fr-FR').format('DD/MM/YYYY - HH:mm')

    return(
    <View style={{display:'flex',justifyContent:'space-between',margin:20,height:50,flexDirection:'row',alignItems:'center'}}>
        <View style={{display:'flex',flexDirection:'column'}}>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            <Text>{category}</Text>
            <Text>{date_}</Text>
        </View>
        <Text style={{fontWeight:'bold',color:montant < 0 ? "red" : "green"}}>{montant < 0 && "-" }{montant > 0 && "+" } {Math.abs(montant)} €</Text>
    </View>)
}

export default TransactionComponent