import React, { useContext } from "react";
import {  StyleSheet,  Text,  View,ScrollView} from "react-native";
import ContComponent from "../Components/ContComponent";

import UserContext from "../Components/UserContext";

const ContScreen = (props) => {

  const UserContext_ = useContext(UserContext)

  return (
  <View style={styles.container}>
        <Text style={{fontSize:20,marginTop:40,marginBottom:20,textAlign:'center'}}>Welcome {UserContext_.user.email.split("@")[0]} !</Text>
        
        <View style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white'}}>Solde: {UserContext_.solde.ToFixed(2)}€</Text>
            <Text style={{color:'white'}}>Dépenses: {UserContext_.expenses.ToFixed(2)}€</Text>
            <Text style={{color:'white'}}>Revenus: {UserContext_.incomes.ToFixed(2)}€</Text>
          </View>
          
        </View>
        <ScrollView style={{height:300,marginTop:20,marginBottom:40,flex:1,display:'flex'}}>
          
          {UserContext_.data_.sort((a,b) => { 
          
          console.log("Try date",(new Date(b._data.date)),(new Date(a._data.date)),a._data.date,b._data.date,a,b)

          let date1 = new Date(a._data.date)
          let date2 = new Date(b._data.date)

          if (a._data.date.split("/")[0] >= 13) {
            date1 = new Date(a._data.date.split("/")[1]+"/"+a._data.date.split("/")[0]+"/"+a._data.date.split("/")[2])
          }

          if (b._data.date.split("/")[0] >= 13) {
            date2 = new Date(b._data.date.split("/")[1]+"/"+b._data.date.split("/")[0]+"/"+b._data.date.split("/")[2])
          }

          return(date2 - date1)
        
        
        }).map((item, index) => {
            
            return(
                <View key={index} style={[styles.contComponent]}>                 
                  <ContComponent style={[styles.contComponent]} comments={item._data.comments}  name={item._data.category} category={item._data.category} date={item._data.date} montant={((typeof(item._data.incomes) == "undefined") ? -Number(item._data.amount) : Number(item._data.amount))} />              
                </View>
          )})} 
          
        </ScrollView>
  </View>
  );
}

export default ContScreen
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(14,14,14)",

  },
  button:{
    borderRadius:20,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    flex:1
  },
  textbutton:{
    fontSize:20,
    textAlign:'center',
    padding:10,
    color:'#fff'
  },
  image: {
    marginBottom: 40,
        width: 200,
        height: 200,
        borderRadius: 100,
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth:  3,
    borderStyle:  'solid',
    borderColor:"#000000",
    width: "99%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#2564B6"
  },
 
  loginBtn: {
    width: "90%",
    borderRadius: 2,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2564B6",
    
  },

  signinBtn: {
    width: "90%",
    borderWidth:  3,
    borderStyle:  'solid',
    borderColor:"#000000",
    borderRadius: 2,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    
  },

  creer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 22,
  },

  loginText:{
    fontWeight: "bold",
    color:"white"
  },

  signinText:{
    fontWeight: "bold",
    color:"white"
  },

  message:{
    flexDirection: "column",
    alignItems:"center",
    fontSize:"74",
  },

  contComponent:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
    margin:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#000000",
    backgroundColor:"rgba(48,48,48,0.5)" 

  }
});