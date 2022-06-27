import React, { useState, useEffect, createContext } from 'react';
import { View, Text,Button,TextInput,StyleSheet } from 'react-native';

import AppBarBottom from './src/Navigation/AppBarBottom';
import auth from '@react-native-firebase/auth';

import UserContext from './src/Components/UserContext';

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Login with Email</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Email"  onChangeText={(e) => setEmail(e) } />
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Password" onChangeText={(e) => setPassword(e) } />
        <Button title="Login" onPress={() => auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message) )} />

        {errorMessage && <Text style={{color:'red'}}>{errorMessage}</Text>}

        <Text>Signup with Email</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={email} placeholder="Email"  onChangeText={(e) => setEmail(e) } />
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={password} placeholder="Password" onChangeText={(e) => setPassword(e) } />
        <Button title="Login" onPress={() => auth().createUserWithEmailAndPassword(email, password).then(() => {
          console.log("User created");
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
    );
  }

  return (
    <UserContext.Provider value={{user:user}}>
      <AppBarBottom />
    </UserContext.Provider>
  );
}

export default App