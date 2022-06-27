import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import {  StyleSheet,  Text,  View,  Image,  TouchableOpacity,Pressable,ScrollView} from "react-native";
import TransactionComponent from "../Components/TransactionComponent";
import UserListComponent from "../Components/UserListComponent";

import {data_} from "../json/data";

import {expensesandincomes} from '../json/expensesandincomes'

import data from "../../assets/data.json";

import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = ({selector,setSelector,userselected,setUserSelected}) => {

  //const [data_, setdata_] = useState([])

  return (
  <View style={styles.container}>
        <Text style={{fontSize:20,marginTop:40,marginBottom:20,textAlign:'center'}}>Welcome {data[userselected].user}!</Text>
        <View style={{backgroundColor:'white',height:120,display:'flex',justifyContent:'center'}}>
          <UserListComponent userselected={userselected} listrevenus={data_()} setUserSelected={setUserSelected} />
        </View>
        <View style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
          <Pressable style={[styles.button,{backgroundColor:'green'}]} onPress={() => {setSelector(2)}}>
            <Text style={styles.textbutton}>Revenu</Text>
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'red'}]} onPress={() => {setSelector(1)}}>
             <Text style={styles.textbutton}>Dépense</Text>
          </Pressable>
        </View>
        <ScrollView style={{height:300,marginTop:20,marginBottom:40,flex:1,display:'flex'}}>
          
          
            {expensesandincomes().two[userselected].sort((a,b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
              <View key={index}>                 
                <TransactionComponent name={item.category} category={item.category} date={item.date} montant={((typeof(item._id_income) == "undefined") ? -Number(item.amount.replace("€","").replace(",","")) : Number(item.amount.replace("€","").replace(",","")))} />              
              </View>
            ))}
          
        </ScrollView>
  </View>
  );
}

export default HomeScreen
 
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
  }
});