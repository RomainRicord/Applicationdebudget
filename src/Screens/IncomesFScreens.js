import React, { useState,useContext } from 'react'
import { Button, TextInput, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Formik, useFormik } from 'formik';
import dayjs from 'dayjs';
//import { Picker } from 'react-native-web';
import * as Yup from 'yup';
import { Dimensions } from 'react-native';
import UserContext from "../Components/UserContext";
import firestore from '@react-native-firebase/firestore';

const IncomesFScreen = ({setSelector}) => {

    const UserContext_ = useContext(UserContext)

    const CategoryList = [
        "Salaire et assimilé",
        "Revenu financier",
        "Rente",
        "Pension alimentaire",
        "Allocation chômage",
        "Prestations sociales",
        "Revenu foncier",
        "Revenu exceptionnel",
        "Autre revenu"
    ]

    const addIncomes = async ({amount,date,category,comments}) => {
        await firestore().collection('Users').doc(UserContext_.user.uid).collection('incomes').add({
            amount: amount,
            date: date,
            category: category,
            comments: comments,
            user:UserContext_.user.uid,
            incomes:true
        }).then(() => {
            console.log('expenses added!');
            UserContext_.SetSolde_(UserContext_.user.uid)
        }).catch(error => {
            console.log(error);
        })
    }

    const validationIncomes = Yup.object().shape({
        amount: Yup
        .number("Montant invalide !")
        .required("Mettre un montant"),
        date: Yup
        .date('Date invalide !')
        .default(() => new Date()),
        category: Yup
        .string()
        .required("Selectionner une catégorie")
        .oneOf(CategoryList),
        comments: Yup
        .string("Commentaire invalide !")
        .required("Commentaire obligatoire !")
    })

    const initialValues = {
        amount: '',
        date:dayjs(new Date()).format('DD/MM/YYYY'),
        category: '',
        comments: ''
    }

    return (
        
        <Formik
            initialValues={initialValues}
            validationSchema={validationIncomes}
            onSubmit={values => console.log(values)}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
                <ScrollView style={{flex:1}}>
                    <View style={styles.container}>
                    
                        <Text style={styles.title}>Ajout Revenus</Text>
                        <Text style={styles.label}>Montant</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            keyboardType="number-pad"
                            
                        />
                        {errors.amount &&
                            <Text style={styles.error}>{errors.amount}</Text>
                        }
                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('date')}
                            onBlur={handleBlur('date')}
                            placeholder="JJ/MM/AAAA"
                            
                        />
                        {errors.date &&
                            <Text style={styles.error}>{errors.date}</Text>
                        }
                        <Text style={styles.label}>Catégorie</Text>
                        <TextInput
                            style={styles.comments}                           
                            onChangeText={handleChange('category')}
                            onBlur={handleBlur('category')}
                            
                        />
                        {errors.category &&
                            <Text style={styles.error}>{errors.category}</Text>
                        }
                        <Text style={styles.label}>Commentaires</Text>
                        <TextInput
                            style={styles.comments}                           
                            onChangeText={handleChange('comments')}
                            onBlur={handleBlur('comments')}
                        />
                        {errors.comments &&
                            <Text style={styles.error}>{errors.comments}</Text>
                        }
                        <Pressable style={[styles.button,{backgroundColor:'blue'}]} onPress={() => {
                            handleSubmit()
                            if ((isValid) && (values.amount > 0) && (values.date != '') && (values.category != '') && (values.comments != '')) {
                                addIncomes(values)
                                setSelector(0)
                            }
                        }}>
                            <Text style={styles.textbutton}>Enregistrer</Text>
                        </Pressable>
                        
                        <Pressable style={[styles.button,{backgroundColor:'red'}]} onPress={() => {
                            setSelector(0)
                        }}>
                            <Text style={styles.textbutton}>Annuler</Text>
                        </Pressable>
                    
                    </View >
                </ScrollView>
            )}
        </Formik>
        
    )
}
export default IncomesFScreen

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: 'rgb(14,14,14)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:20
    },
    groupInput: {
        flex: 1,

    },
    error:{
        fontSize:15,
        color:'red',
        textAlign:'left',
        width:300
    },
    input: {
        height: 40,
        width: 300,
        marginTop: 1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center',
        color:'black',
        backgroundColor:'white'
    },
    comments: {
        height: 100,
        width: 300,
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center',
        color:'black',
        backgroundColor:'white'
    },

    label: {
        fontSize: 20,
        marginTop: 20,
        color:'white',
        textAlign:'left',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    button:{
        borderRadius:20,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        width:200
      },
      textbutton:{
        fontSize:20,
        textAlign:'center',
        padding:10,
        color:'#fff'
      },
})
