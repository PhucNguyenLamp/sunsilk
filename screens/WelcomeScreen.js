/* eslint-disable no-undef */
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native'
import Arrow from '../assets/images/arrow.svg'
const WelcomeScreen = (props) => {
    const onPress = () => {
        props.navigation.navigate('Login')
    }
    return (
        <View>
            <Image
                source={require('../assets/images/welcome.png')}
                style={styles.image}
            />
            <Text style={styles.h1}>
                Let&apos;s demolish your deadline.
            </Text>
            <Text style={styles.p}>
                Deadlines sucks, why not make it easier for you.
            </Text>
            <Pressable
                style={styles.button}
                onPress={onPress}
                >
            <Arrow width={24} height={24}/>
                
            </Pressable>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
    image: {
        width: 400,
        height: 350,
    },
    h1: {
        fontSize: 36,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
        marginHorizontal: 20,
    },
    p: {
        fontSize: 16,
        marginTop: 20,
        marginHorizontal: 20,
    },
    button: {
        width: 50,
        height: 50,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'yellowgreen',
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})