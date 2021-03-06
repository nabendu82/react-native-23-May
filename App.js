import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#0080ff'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default App