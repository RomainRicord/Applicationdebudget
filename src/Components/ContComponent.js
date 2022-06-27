import {View,Text, StyleSheet} from 'react-native'
import dayjs from 'dayjs'

const ContComponent = (props) => {

    const {name,category,date,montant,comments} = props

    let date_ = dayjs(date).locale('fr-FR').format('DD/MM/YYYY')

    return(
    <View style={[styles.container]}>

<Text style={{fontWeight:'bold',color:montant < 0 ? "red" : "green"}}>{montant < 0 && "-" }{montant > 0 && "+" } {Math.abs(montant)} €</Text>
<Text>Date: {date_}</Text>
<Text style={{fontWeight:'bold', color:'blue'}}>Categorie: {category}</Text>

        <View style={{display:'flex',flexDirection:'column'}}>
            
            <Text>Comments: </Text>
            <Text style={[styles.commentsComponent]}>{comments}</Text>
            
        </View>
       
    </View>)
}

export default ContComponent

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:2
    },
    contComponent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    commentsComponent:{
        fontSize:12,
        color:'#036BA0',
        fontStyle:'italic',
        textAlign:'justify',
        width:'100%',
        marginBottom:10,
        marginTop:10,
        padding:10,
        borderRadius:10,
        backgroundColor:'#FBF8FB',
        overflow:'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap'
    }

})
