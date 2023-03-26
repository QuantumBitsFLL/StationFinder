
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import TextButton from '../components/TextButton';
import styles from '../styles';
const HomeScreen = ({ navigation }) => {
    return (
        <View style = { styles.screen }>
            <Text style = { styles.title }>Station Finder</Text>
            <TextButton onPress={ () => navigation.navigate( 'HomeMap' ) }>Map</TextButton>
            <TextButton onPress = { () => navigation.navigate( 'AboutScreen', {} ) }>About</TextButton>
        </View>

    )
};
const homeScreenButton = ( pressed: boolean ) => [
    {
        backgroundColor: pressed ? 'rgb(10, 55, 30)' : 'rgb(10, 35, 20)',
    },
    styles.button,
//    styles.wrapperCustom,
];

export default HomeScreen;