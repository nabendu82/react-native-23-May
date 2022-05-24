import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
// import Alignments from './components/Alignments';

const App = () => {
  // const [title, setTitle] = useState('TWD');
  // const [items, setItems] = useState([
  //   { id: 1, text: 'Learn React Native'},
  //   { id: 2, text: 'Learn ReactJS'},
  //   { id: 3, text: 'Learn Swift'},
  //   { id: 4, text: 'Learn Java'},
  //   { id: 5, text: 'Learn Python'},
  //   { id: 6, text: 'Learn C#'},
  //   { id: 7, text: 'Learn C++'},
  //   { id: 8, text: 'Learn C'},
  //   { id: 9, text: 'Learn PHP'},
  //   { id: 10, text: 'Learn Ruby'}
  // ])

  // const [refresh, setRefresh] = useState(false);

  // const onRefresh = () => {
  //   setRefresh(true);
  //   setItems([...items, { id: items.length + 1, text: `Learn Tech no. ${items.length + 1}`}]);
  //   setRefresh(false);
  // }

  // const DATA = [
  //   { title: 'Learn React Native', data: ['Item 1', 'Item 2', 'Item 3'] },
  //   { title: 'Learn ReactJS', data: ['Item 1', 'Item 2', 'Item 3'] },
  //   { title: 'Learn Swift', data: ['Item 1', 'Item 2'] },
  //   { title: 'Learn Java', data: ['Item 1',] },
  // ]

  // const languages = [
  //   { name: 'Pascal', key: '1' },
  //   { name: 'C', key: '2' },
  //   { name: 'C++', key: '3' },
  //   { name: 'C#', key: '4' },
  //   { name: 'Java', key: '5' },
  //   { name: 'Python', key: '6' },
  //   { name: 'Ruby', key: '7' },
  //   { name: 'PHP', key: '8' }
  // ]
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.container}>
    //     <Text style={styles.titleText}>{title}</Text>
    //     <Button 
    //       title="TWD YT"
    //       onPress={() => setTitle('TWD Youtube Channel')}
    //     />
    //   </View>
    // </SafeAreaView>
    
    // <>
    //   <Alignments />
    // </>
    <SafeAreaView style={styles.container}>
      {/* <SectionList 
        keyExtractor={index => index.toString()}
        sections={DATA}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>} 
        renderSectionHeader={({ section }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      /> */}
      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <FlatList 
        data={languages} 
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      /> */}
      <Text style={styles.text}>Enter Name:</Text>
      <TextInput 
        style={styles.inputBox}
        placeholder="Enter your Name"
        onChangeText={text => setName(text)}
        keyboardType='numeric'
        maxLength={4}
        secureTextEntry={true}
      />
      <Pressable 
        onPress={() => setSubmitted(!submitted)}
        style={styles.buttonStyle}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.buttonText}>
            {submitted ? 'Clear' : 'Submit'}
          </Text>
      </Pressable> 
      <Text style={styles.text}>You Entered: {name}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   paddingTop: 40,
  //   paddingHorizontal: 20
  // },
  // item: {
  //   marginTop: 20,
  //   padding: 30,
  //   backgroundColor: '#ffc600',
  //   fontSize: 24
  // }
  container: { flex: 1, backgroundColor: 'lightblue', alignItems: 'center'},
  text: { fontSize: 30, fontWeight: 'bold', color: 'black', padding: 10 },
  inputBox: { width: 300, borderColor: 'black', borderWidth: 1, padding: 10, margin: 10, fontSize: 20 },
  buttonStyle: { width: 100, height: 50, backgroundColor: 'darkmagenta', borderRadius: 5, alignItems: 'center', justifyContent: 'center' },
  buttonText: { fontSize: 20, fontWeight: 'bold', color: 'white' }
  // item: { margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow' },
  
  // container: {
  //   width: '100%',
  //   height: 120,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 10,
  //   borderColor: 'darkmagenta',
  //   borderRadius: 5,
  //   backgroundColor: 'lightblue'
  // },
  // titleText: {
  //   fontSize: 30,
  //   margin: 10,
  //   textTransform: 'uppercase'
  // }
})

export default App