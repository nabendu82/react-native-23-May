import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from './CustomButton'
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail } from '../redux/actions';

const db = SQLite.openDatabase({ 
    name: 'MainDB', location: 'default' 
},
    () => {},
    error => console.log(error)
);

const LoginComponent = ({ navigation }) => {
    const { name, email } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        createTable();
    },[]);

    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT);"
            )
        })
    }

    const setData = async() => {
        if(name.length == 0 || email.length == 0) {
            alert('Please enter your name and email');
        } else {
            try {
                dispatch(setName(name));
                dispatch(setEmail(email));
                await db.transaction(async tx => {
                    await tx.executeSql("INSERT INTO Users (Name, Email) VALUES (?,?)", [name, email])
                })
                navigation.navigate('Home')
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body}>
            <TextInput style={styles.input} placeholder='Enter name' value={name} onChangeText={value => dispatch(setName(value))}/>
            <TextInput style={styles.input} placeholder='Enter email' value={email} onChangeText={value => dispatch(setEmail(value))}/>
            <CustomButton title='Login' pressFunction={setData} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightyellow' },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        padding: 10
    }
})

export default LoginComponent