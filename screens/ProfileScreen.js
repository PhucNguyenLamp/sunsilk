import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.profile}> Profile </Text>
            <Image
                source={require('../assets/images/users/avatar.png')}
                style={{ width: 84, height: 84, borderRadius: 100, marginTop: 16 }}
            />
            <Text style={styles.username}> Phúc Nguyễn </Text>
            <View style={styles.options}>
                <View style={styles.option}>
                    <Text>Account</Text>
                </View>
                <View style={styles.option}>
                    <Text>Themes</Text>
                </View>
                <View style={styles.logout}>
                    <Text style={{color: '#dd4040ff'}}>Logout</Text>
                </View>
                
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    profile: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 16,
    },
    username:{
        fontWeight: 'bold',
        marginTop: 16,
        fontSize: 18,
    },
    options: {
        marginTop: 36,
        width: '100%',
    },
    option: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
    },
    logout: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
    },
})