import { StyleSheet, Text, View, Pressable, Image, Button, TextInput, SafeAreaView } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import React from 'react';
import FacebookLogo from '../assets/images/facebook.svg';
import GoogleLogo from '../assets/images/google.svg';
const LoginScreen = (props) => {
  const onPress = () => {
    props.navigation.navigate('Main');
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/welcome.png')}
          style={styles.image}
        />
      </View>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <Pressable onPress={onPress} style={styles.login} >
        <Text style={{ color: 'white' }}>Log In</Text>
      </Pressable>
      <Text style={{ textAlign: 'center' }}>Or Login with</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Pressable style={styles.logoIcon}>
          <GoogleLogo width={24} height={24}/>
        </Pressable>
        <Pressable style={styles.logoIcon}>
          <FacebookLogo width={24} height={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 200,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  input: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  login: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    marginBottom: 24,
  },
  logoIcon: {
    margin: 12,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  }
});