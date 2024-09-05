import { StyleSheet, Text, View, SafeAreaView, Button, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import db from '../database/database'
import { render } from 'react-native-web'

const TableScreen = () => {
  const [tables, setTables] = useState([]);
  const getData = async () => {
    try {
      await db.testAddandShow();
      const data = await db.getAllTables();
      setTables(data)
    } catch (error) {
      console.log(error)
    }
  }
  const renderItem = ({ item, index }) => (
    <View key={index}>
      <Text>{item.task}</Text>
    </View>
  )
  useEffect(() => {
    getData()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.top}>
        <Text style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 48 }}>Tables</Text>
        </Text>
        <Pressable onPress={getData}>
          <Icon name="add" style={styles.add} size={48} />
        </Pressable>
      </View>
      <FlatList
        data={tables}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default TableScreen

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})