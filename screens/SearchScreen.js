import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

const SearchScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.top}>
                <Text style={styles.header}>
                    <Text>Hello</Text>
                    <Text style={{ fontWeight: "bold" }}> Phuc from Search👋</Text>
                </Text>
                <Icon name="add" style={styles.add} />
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})