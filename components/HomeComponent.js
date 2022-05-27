import { StyleSheet, TextInput, View, Text, Alert, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from './CustomButton'
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, getUsers } from '../redux/actions';

const db = SQLite.openDatabase({ 
    name: 'MainDB', location: 'default' 
},
    () => {},
    error => console.log(error)
);

const HomeComponent = () => {
    const { name, email, users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
        dispatch(getUsers())
    },[])

    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Email FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userEmail = results.rows.item(0).Email;
                            dispatch(setName(userName));
                            dispatch(setEmail(userEmail));
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please enter your name.')
        } else {
            try {
                db.transaction((tx) => {
                    tx.executeSql(
                        "UPDATE Users SET Name=?",
                        [name],
                        () => { Alert.alert('Success!', 'Your name has been updated.') },
                        error => { console.log(error) }
                    )
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM Users",
                    [],
                    () => { navigation.navigate('Login') },
                    error => { console.log(error) }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.body}>
            <Text style={styles.text}>Welcome {name}</Text>
            <Text style={styles.text}>Your email is {email}</Text>
            <TextInput style={styles.input} placeholder='Enter name' value={name}  onChangeText={value => dispatch(setName(value))}/>
            <CustomButton title='Update' pressFunction={updateData} />
            <CustomButton title='Remove' pressFunction={removeData} />
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.subtitle}>{item.email}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    body: { flex: 1, alignItems: 'center' },
    text: { fontSize: 40, margin: 10 },
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
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { fontSize: 20, margin: 5 },
    subtitle: { fontSize: 15, margin: 5, color: 'gray' }
})

export default HomeComponent