import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import TableItem from './TableItem'
const renderItem = ({ item, index }) => (
    <TableItem id={index} item={item} index={index}/>
)

const Table = (props) => {
  return (
    <FlatList
        data={props.tables}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Table

const styles = StyleSheet.create({
})