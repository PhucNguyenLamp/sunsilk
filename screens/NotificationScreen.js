import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

const NotificationScreen = () => {
    return (
        <View>
            <View style={styles.top}>
                <Text style={styles.header}>
                    <Text>Hello</Text>
                    <Text style={{ fontWeight: "bold" }}> Phuc from Notification👋</Text>
                </Text>
                <Icon name="add" style={styles.add} />
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({

})