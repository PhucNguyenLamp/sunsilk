import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import CalendarScreen from './CalendarScreen';

const NotificationScreen = () => {
    const [image, setImage] = useState(null)
    async function uploadImage() {
        // upload image to the app image tag
        // then the image will be save in the app
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }
    async function downloadImage() {
        // save the image displaying on the app to 1. gallery 2. download folder
        if (image) {
            const permission = await MediaLibrary.requestPermissionsAsync();
            if (permission.granted) {
                await MediaLibrary.createAssetAsync(image)
                alert('Image saved to gallery')
            }
        }
    }
    return (
        <>
            <Image
                source={image ? { uri: image } : require('../assets/images/users/colors.png')}
                style={{ height: 400, width: 400, alignSelf: 'center'}}
            />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={downloadImage}>
                    <Icon name='download' size={48} />
                </TouchableOpacity>
                <TouchableOpacity onPress={uploadImage}>
                    <Icon name='cloud-upload' size={48} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({

})