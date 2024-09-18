import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TableScreen from './TableScreen'
import TableInfoScreen from './TableInfoScreen'

const TableNavigatonScreen = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='TableScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name="TableScreen" component={TableScreen} />
            <Stack.Screen name="TableInfoScreen" component={TableInfoScreen} />
        </Stack.Navigator>
    )
}

export default TableNavigatonScreen

const styles = StyleSheet.create({

})