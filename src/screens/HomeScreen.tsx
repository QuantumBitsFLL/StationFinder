
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import TextButton from '../components/TextButton';
import styles from '../styles';
import { buttonStyle } from '../styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style = { styles.screen }>
            <Text style = { styles.title }>Station Finder</Text>
            <TextButton onPress = { () => navigation.navigate( 'HomeMap' ) }>Map</TextButton>
            <TextButton onPress = { () => navigation.navigate( 'AboutScreen' ) }>About</TextButton>
        </View>
    )
};

export default HomeScreen;