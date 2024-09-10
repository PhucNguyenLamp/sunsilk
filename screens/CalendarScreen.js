import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { Calendar, LocaleConfig } from 'react-native-calendars';


const CalendarScreen = () => {
    const [selected, setSelected] = useState('');
    return (
        <View>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />
        </View>
    )
}

export default CalendarScreen

const styles = StyleSheet.create({

})