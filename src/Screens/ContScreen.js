import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect,useContext } from "react";
import {  StyleSheet,  Text,  View,  Image,  TouchableOpacity,Pressable,ScrollView} from "react-native";
import ContComponent from "../Components/ContComponent";

import UserContext from "../Components/UserContext";

import firestore from '@react-native-firebase/firestore';

import { GetData } from "../firebase/getdata";

const ContScreen = (props) => {
  const {userselected,setUserSelected} = props

    
  //const [data_, setdata_] = useState([])

  //console.log("PROPS OF CONTSCREEN",props)

  const UserContext_ = useContext(UserContext)

  return (
  <View style={styles.container}>
        <Text style={{fontSize:20,marginTop:40,marginBottom:20,textAlign:'center'}}>Welcome {UserContext_.user.email}!</Text>
        
        <View style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}}>Solde: {UserContext_.solde}€</Text>
            <Text style={{color:'black'}}>Dépenses: {UserContext_.expenses}€</Text>
            <Text style={{color:'black'}}>Revenus: {UserContext_.incomes}€</Text>
          </View>
          
        </View>
        <ScrollView style={{height:300,marginTop:20,marginBottom:40,flex:1,display:'flex'}}>
          
          {UserContext_.data_.sort((a,b) => new Date(b.date) - new Date(a.date)).map((item, index) => {
            
            console.log("DATATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",item)
            return(
                <View key={index} style={[styles.contComponent]}>                 
                  <ContComponent style={[styles.contComponent]} comments={item._data.comments}  name={item._data.category} category={item._data.category} date={item._data.date} montant={((typeof(item._data.incomes) == "undefined") ? -Number(item._data.amount) : Number(item._data.amount))} />              
                </View>
          )})} 
          
        </ScrollView>
  </View>
  );
}

/*

<Text>Solde: {Number(data_()[userselected]).toFixed(2)}€</Text>
            <Text>Dépenses: {Number(individuel().expenses[userselected]).toFixed(2)}€</Text>
            <Text>Revenus: {Number(individuel().incomes[userselected]).toFixed(2)}€</Text>

{expensesandincomes().two[userselected].sort((a,b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
              <View key={index} style={[styles.contComponent]}>                 
                <ContComponent style={[styles.contComponent]} comments={item.comments}  name={item.category} category={item.category} date={item.date} montant={((typeof(item._id_income) == "undefined") ? -Number(item.amount.replace("€","").replace(",","")) : Number(item.amount.replace("€","").replace(",","")))} />              
              </View>
            ))}

            */

export default ContScreen
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

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
    color:"black"
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
    backgroundColor:"#FFFFFF" 

  }
});