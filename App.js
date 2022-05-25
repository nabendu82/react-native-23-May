import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="First"
          drawerPosition="left"
          drawerType="front"
          edgeWidth={100}
          hideStatusBar={false}
          ovelayColor="white"
          drawerStyle={{
            backgroundColor: '#fff',
            width: 250,
          }}
        >
          <Drawer.Screen name="First" component={FirstScreen} initialParams={{ name: 'This is Drawer', id: 95 }}/>
          <Drawer.Screen name="Second" component={SecondScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App