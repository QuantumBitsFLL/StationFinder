
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-svg';

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={{backgroundColor: 'rgb(0, 0, 0)', flex: 1}}>
            <Text style = { ( styles.text ) }>This is {route.params.name}'s profile</Text>
            <Pressable
                onPress={() =>
                    navigation.navigate('Home')
                }
                style={ ( {pressed} ) => profileScreenButton( pressed ) }
            ><Text>Home</Text></Pressable>
        </View>
    )
};
const profileScreenButton = ( pressed: boolean ) => [
    styles.profilescreenButton,
    {
        backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
    },
    styles.wrapperCustom,
];
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    profilescreenButton: { 
        justifyContent: 'center',
        margin: 2.5,
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        textAlign: 'center',
        color: 'white',
        alignContent: 'center',
    },
    text: {
        fontSize: 16,
        margin: 10,
        color: 'white',
    },
    title: {
        fontSize: 32,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
        margin: 2.5,
        color: 'white',
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});
export default ProfileScreen;