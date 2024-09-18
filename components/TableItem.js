import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TableInfoScreen from '../screens/TableInfoScreen'

const TableItem = (props) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('TableInfoScreen', {tableId: props.item.id})
    }
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, props.index===0 && styles.firstItem ]}>{props.item.tableName}</Text>
    </TouchableOpacity>
  )
}

export default TableItem

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderBottomWidth: 1,
    }, 
    firstItem: {
        borderTopWidth: 1,
    }
})