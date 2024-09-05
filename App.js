/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import Ionicons from 'react-native-ionicons'
import FontComparisonExample from './screens/FontComparisonExample';
import { StatusBar } from 'expo-status-bar'

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <>
      <StatusBar
        style="auto"
      />


      <View style={{ flex: 1, marginTop: Platform.OS === 'android' ? 40 : 0 }}>
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
            <Stack.Screen name="FontComparisonExample" component={FontComparisonExample} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
})