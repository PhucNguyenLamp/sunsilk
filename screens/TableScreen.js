import { StyleSheet, View, Pressable } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import db from '../database/database'
import Table from '../components/Table'
import Header from '../components/Header'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const TableScreen = () => {
  const initDatabase = async () => {
    try {
      await db.initializeDatabase();
    } catch (error) {
      console.error(error);
    }
  }
  const getData = async () => {
    try {
      db.addATable('Table 1');
      const data = await db.getAllTables();
      setTables(data);
    } catch (error) {
      console.error(error);
    }
  }
  const removeAllData = async () => {
    try {
      await db.removeAllTables();
    } catch (error) {
      console.error(error);
    }
    setTables([]);
  }

  const [tables, setTables] = useState([]);
  useEffect(() => {
    const initialize = async () => {
      try {
        await initDatabase();
        const data = await db.getAllTables();
        setTables(data);
      } catch (error) {
        console.error(error);
      }
    }
    initialize();
  }, [])

  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  
  return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <Header title="Tables" />
          <View style={{flexDirection: 'row'}}>
            <Pressable onPress={removeAllData}>
              <Icon name="close-outline" style={styles.add} size={48} />
            </Pressable>
            <Pressable onPress={getData}>
              <Icon name="add" style={styles.add} size={48} />
            </Pressable>
          </View>
        </View>
        <Table tables={tables} />
      </View>
  )
}

export default TableScreen

const styles = StyleSheet.create({
  top: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})