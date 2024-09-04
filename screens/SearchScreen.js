import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React, {useState} from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import SearchBar from 'react-native-elements'
const SearchScreen = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View style={styles.view}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
        </View>
    );

}

export default SearchScreen

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#dbdbdb',
        padding: 12,
        margin: 12,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
})