import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'
const MainScreen = (props) => {
    const onPress = () => props.navigation.navigate('Login');
    return (
        <SafeAreaView>
            <View style={styles.top}>
                <Text style={styles.header}>
                    <Text>Hello</Text>
                    <Text style={{ fontWeight: "bold"}}> Phuc 👋</Text>
                </Text>
                <Icon name="add" style={styles.add}/>
            </View>
            <Button
                title="Go Back"
                onPress={onPress}
                style={{position: 'absolute', bottom: 0}}
            />
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        color: 'black',
        marginHorizontal: 20,
    },
    top: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    add: {
        fontSize: 36,
        color: 'black',
        marginHorizontal: 20,
    },
})