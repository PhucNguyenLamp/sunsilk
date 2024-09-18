import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
    return (
        <View>
            <Text style={styles.header}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 48,
    },
})