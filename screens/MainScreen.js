import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TableScreen from './TableScreen'
import ProfileScreen from './ProfileScreen'
import CalendarScreen from './CalendarScreen'
import NotificationScreen from './NotificationScreen'
import SearchScreen from './SearchScreen'

import Icon from '@expo/vector-icons/Ionicons'
const Tab = createBottomTabNavigator()

const MainScreen = (props) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Search'>
            <Tab.Screen name="Table" component={TableScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return focused ? <Icon name="home" size={24} color={color} /> : <Icon name="home-outline" size={24} color={color} />
                },
                tabBarLabel: 'Home',
            }} />
            <Tab.Screen name="Calendar" component={CalendarScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return focused ? <Icon name="calendar" size={24} color={color} /> : <Icon name="calendar-outline" size={24} color={color} />
                },
                tabBarLabel: 'Calendar',
            }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return focused ? <Icon name="search" size={24} color={color} /> : <Icon name="search-outline" size={24} color={color} />
                },
                tabBarLabel: 'Search',
            }} />
            <Tab.Screen name="Notification" component={NotificationScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return focused ? <Icon name="notifications" size={24} color={color} /> : <Icon name="notifications-outline" size={24} color={color} />
                },
                tabBarLabel: 'Notification',
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return focused ? <Icon name="person-circle" size={24} color={color} /> : <Icon name="person-circle-outline" size={24} color={color} />
                },
                tabBarLabel: 'Profile',
            }} />
        </Tab.Navigator>
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