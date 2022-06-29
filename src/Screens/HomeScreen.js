import React, { useContext } from "react";
import {  StyleSheet,  Text,  View, Pressable,ScrollView} from "react-native";
import TransactionComponent from "../Components/TransactionComponent";

import UserContext from "../Components/UserContext";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import dayjs from 'dayjs';

const HomeScreen = ({selector,setSelector,userselected,setUserSelected}) => {

  const UserContext_ = useContext(UserContext)

  return (
  <View style={styles.container}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:40,marginBottom:20}}>
          <Pressable style={{display:'flex',justifyContent:'center',alignItems:'center',height:32,width:32,marginRight:20}} onPress={() => {auth().signOut()}}>
            <Icon name="account-arrow-left" size={32} color="white" />
          </Pressable>
          <Text style={{fontSize:20,textAlign:'center',color:'white',width:200}}>Welcome {UserContext_.user.email.split("@")[0]} !</Text>
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
          
        {UserContext_.data_.sort((a,b) => new Date(b._data.date) - new Date(a._data.date).map((item, index) => {
          
          return(
              <View key={index}>                 
                <TransactionComponent name={item._data.category} category={item._data.category} date={item._data.date} montant={((typeof(item._data.incomes) == "undefined") ? -Number(item._data.amount) : Number(item._data.amount))} />              
              </View>
          )})}
          
        </ScrollView>
  </View>
  );
}

export default HomeScreen
 
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
    color:"black"
  },

  message:{
    flexDirection: "column",
    alignItems:"center",
    fontSize:"74",
  }
});