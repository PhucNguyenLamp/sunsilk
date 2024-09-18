import { StyleSheet, View, Appearance, useColorScheme, Text } from 'react-native'
import React, {useState} from 'react'
import { SearchBar } from 'react-native-elements'
const SearchScreen = () => {
    const [search, setSearch] = useState("");
    let colorScheme = useColorScheme();

    return (
        <View style={[{ flex: 1, alignItems: 'center', 'justifyContent': 'center' },colorScheme === 'dark' ? { backgroundColor: '#111' } : {}]}>
            {/* <SearchBar
                platform='ios'
                searchIcon={{type: 'Ionicons', name: 'search', size: 24}}
                clearIcon={{type: 'Ionicons', name: 'close', size: 24}}
                placeholder="Search..."
                onChangeText={newsearch => setSearch(newsearch)}
                value={search}
            /> */}
            {colorScheme === 'dark' && 
            
            <Text style={{color: '#eee', fontSize: 69}}>PORN</Text>}
        </View>
    );

}

export default SearchScreen

const styles = StyleSheet.create({
    
})