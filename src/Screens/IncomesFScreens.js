import React, { useState } from 'react'
import { Button, TextInput, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Formik, useFormik } from 'formik';
import dayjs from 'dayjs';
import {Picker} from '@react-native-picker/picker'
//import { Picker } from 'react-native-web';
import * as Yup from 'yup';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const IncomesFScreen = ({selector,setSelector,userselected,setUserSelected}) => {
     const [user, setUser] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState(new Date())
     const [category, setCategory] = useState('')
    // const [comments, setComments] = useState('')

    const UserList = [
        "Mayer Franklin",
        "Ross Hess",
        "Ingram Witt",
        "Mccormick Harrison",
        "Garcia Brown",
        "Ramsey Le",
        "Witt Tyler",
        "Diana Leon",
        "Millie Mcknight",
        "Daugherty Middleton"
    ]

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

    const validationIncomes = Yup.object().shape({
        user: Yup
        .string()
        .required("Selectionner un bénéficiaire")
        .oneOf(UserList),
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
        user: '',
        amount: '',
        date:dayjs(new Date()).format('DD/MM/YYYY'),
        category: '',
        comments: ''
    }
    /*
    const {values, handleBlur, handleChange, handleSubmit} = useFormik ({
        initialValues: { initialValues },
        validationSchema: validationIncomes,
        //onSubmit: values => alert(values)
        onSubmit:{handleSubmit}
    });*/



    return (
        
        <Formik
            initialValues={initialValues}
            validationSchema={validationIncomes}
            onSubmit={values => console.log(values)}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Ajout Revenus</Text>
                    
                            <Text style={styles.label}>Bénéficiaire</Text>
                            <Picker
                                style={styles.input}
                                selectedValue={user}
                                onValueChange={(itemValue, itemIndex) => {
                                    values.user = itemValue 
                                    setUser(itemValue)
                                }}
                            >
                                {UserList.map((item, index) => {
                                    return (<Picker.Item label={item} value={item} key={index} />)
                                })}
                            </Picker>
                            {errors.user &&
                                <Text style={styles.error}>{errors.user}</Text>
                            }
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
                                // value={dayjs(date).format('DD/MM/YYYY')}
                                onChangeText={handleChange('date')}
                                onBlur={handleBlur('date')}
                                placeholder="JJ/MM/AAAA"
                            />
                            {errors.date &&
                                <Text style={styles.error}>{errors.date}</Text>
                            }
                            <Text style={styles.label}>Catégorie</Text>
                            <Picker
                                style={styles.input}
                                selectedValue={category}
                                onValueChange={(itemValue, itemIndex) => {
                                    values.category = itemValue 
                                    setCategory(itemValue)
                                }}
                            // selectedValue={category}
                            >
                                {CategoryList.map((item, index) => {
                                    return (<Picker.Item label={item} value={item} key={index} />)
                                })}
                            </Picker>
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
                            {/* <Button label='Enregistrer' onPress={handleSubmit} /> */}
                            <Pressable style={[styles.button,{backgroundColor:'blue'}]} onPress={() => {
                                handleSubmit()
                                if (isValid) {
                                    setSelector(0)
                                }
                            }}>
                                <Text style={styles.textbutton}>Enregistrer</Text>
                            </Pressable>
                    
                </View >
            )}
        </Formik>
        
    )
}
export default IncomesFScreen

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        backgroundColor: 'white',
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
        alignContent: 'center'
    },
    comments: {
        height: 100,
        width: 300,
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center'
    },

    label: {
        fontSize: 20,
        marginTop: 20,
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
        margin:30,
        width:200
      },
      textbutton:{
        fontSize:20,
        textAlign:'center',
        padding:10,
        color:'#fff'
      },
})
