import React, { useState } from 'react'
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import dayjs from 'dayjs';
import { Picker } from 'react-native-web';

const IncomesScreen = () => {
    const [user, setUser] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(new Date())
    const [category, setCategory] = useState('')
    const [comments, setComments] = useState('')

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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajout Revenus</Text>
            <View style={styles.groupInput}>
                <Text style={styles.label}>Bénéficiaire</Text>
                {/* <TextInput
                    style={styles.input}
                    value={user}
                    onChangeText={(user) => setUser(user)}
                /> */}
                 <Picker
                    style={styles.input}
                    selectedValue={user}
                >
                    {UserList.map((item, index) => {
                        return (<Picker.Item label={item} value={index} key={index} />)
                    })}
                </Picker>
                <Text style={styles.label}>Montant</Text>
                <TextInput
                    style={styles.input}
                    value={amount}
                    onChangeText={(amount) => setAmount(amount)}
                />
                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.input}
                    value={dayjs(date).format('DD/MM/YYYY')}
                    onChangeText={(date) => setDate(date)}
                />
                <Text style={styles.label}>Catégorie</Text>
                <Picker
                    style={styles.input}
                    selectedValue={category}
                >
                    {CategoryList.map((item, index) => {
                        return (<Picker.Item label={item} value={index} key={index} />)
                    })}
                </Picker>
                <Text style={styles.label}>Commentaires</Text>
                <TextInput
                    style={styles.comments}
                    value={comments}
                    onChangeText={(comments) => setComments(comments)}
                />


            </View>
        </View>
    )
}
export default IncomesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'

    },
    groupInput: {
        flex: 1,

    },
    input: {
        height: 40,
        width: 300,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center'
    },
    comments: {
        height: 100,
        width: 300,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center'
    },

    label: {
        fontSize: 20,
        marginTop: 20,
    },
})
