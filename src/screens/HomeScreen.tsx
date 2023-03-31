
import React from 'react';
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import TextButton from '../components/TextButton';
import styles from '../styles';
import { buttonStyle } from '../styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style = { styles.screen }>
            <Text style = { styles.title }>Station Finder</Text>
            <Image
                source = { require( '../assets/images/bus.png' ) }
                style = { styles.image }
            />
            <TextButton onPress = { () => navigation.navigate( 'HomeMap' ) }>Map</TextButton>
            <TextButton onPress = { () => navigation.navigate( 'AboutScreen' ) }>About</TextButton>
            
            <Text style = { styles.smallText }>Powered by React Native</Text>
        </View>
    )
};

export default HomeScreen;