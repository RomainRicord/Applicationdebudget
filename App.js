import React, { useState, useEffect, createContext } from 'react';
import { View, Text,Button,TextInput,StyleSheet } from 'react-native';

import AppBarBottom from './src/Navigation/AppBarBottom';
import auth from '@react-native-firebase/auth';

import UserContext from './src/Components/UserContext';

import firestore from '@react-native-firebase/firestore';

import { GetData } from "./src/firebase/getdata";

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [email_, setEmail_] = useState();
  const [password_, setPassword_] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [expenses, setexpenses] = useState(0)
  const [incomes, setincomes] = useState(0)
  const [solde,setSolde] = useState(0)
  const [expenses_array, setexpenses_array] = useState([])
  const [incomes_array, setincomes_array] = useState([])
  const [data_, setdata_] = useState([])

  const SetSolde_ = async (uid) => {

    await GetData(uid).then(data => {
      setexpenses(data.expense__)
      setincomes(data.incomes__)
      setexpenses_array(data.expenses__array)
      setincomes_array(data.incomes__array)
      setdata_(data.expenses__array.concat(data.incomes__array))
      setSolde(data.solde__)
    }).catch(error => {
      console.log("Error getting documents: ", error);
    })

  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (user != null){
    SetSolde_(user.uid)
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {

    if (typeof(user) != "undefined"){
      SetSolde_(user.uid)
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <View style={{display:'flex',marginBottom:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={[styles.text,{marginBottom:20}]}>Connectez-vous par adresse email</Text>
          <TextInput style={styles.textInput} placeholder="Email"  onChangeText={(e) => setEmail(e) } />
          <TextInput style={[styles.textInput,{marginBottom:20}]} placeholder="Password" onChangeText={(e) => setPassword(e) } />
          <Button title="Se connecter" onPress={() => auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message) )} />

          {errorMessage && <Text style={{color:'red'}}>{errorMessage}</Text>}

        </View>
        <View style={{display:'flex',marginTop:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={[styles.text,{marginBottom:20}]}>Enregistrez-vous par adresse email</Text>
          <TextInput style={styles.textInput} value={email_} placeholder="Email"  onChangeText={(e) => setEmail_(e) } />
          <TextInput style={[styles.textInput,{marginBottom:20}]} value={password_} placeholder="Password" onChangeText={(e) => setPassword_(e) } />
          <Button title="S'inscrire" onPress={() => auth().createUserWithEmailAndPassword(email_, password_).then(() => {
            
          }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          })
          
          } />
        </View>
      </View>
    );
  }

  return (
    <UserContext.Provider value={{user,expenses, incomes, solde, expenses_array, incomes_array, data_ }}>
      <AppBarBottom />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(14,14,14)'
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:24,
    width:200,
    textAlign:'center'
  },
  textInput:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    width:300,

  }
})

export default App