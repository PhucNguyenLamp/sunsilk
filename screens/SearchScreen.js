import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React, {useState} from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { SearchBar } from 'react-native-elements'
const SearchScreen = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <SafeAreaView>
            <SearchBar
                
                searchIcon={{type: 'Ionicons', name: 'search', size: 24}}
                clearIcon={{type: 'Ionicons', name: 'close', size: 24}}
                platform='ios'
                placeholder="Search..."
                onChangeText={updateSearch}
                value={search}
            />
        </SafeAreaView>
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