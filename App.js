/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { StyleSheet, Platform, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import Ionicons from 'react-native-ionicons'
import { StatusBar } from 'expo-status-bar'

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <SafeAreaView style={{flex:1}}>
      <StatusBar
        style="auto"
      />
      <View style={{ flex: 1, marginTop: Platform.OS === 'android' ? 24 : 0 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
            initialRouteName='Main'
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})