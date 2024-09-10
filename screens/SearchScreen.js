import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { SearchBar } from 'react-native-elements'
const SearchScreen = () => {
    const [search, setSearch] = useState("");
    return (
        <View>
            <SearchBar
                platform='ios'
                searchIcon={{type: 'Ionicons', name: 'search', size: 24}}
                clearIcon={{type: 'Ionicons', name: 'close', size: 24}}
                placeholder="Search..."
                onChangeText={newsearch => setSearch(newsearch)}
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