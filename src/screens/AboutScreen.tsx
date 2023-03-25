import React from 'react';
import styles from '../styles';
import { View, Text, StyleSheet } from 'react-native'; 

const AboutScreen = ( { navigation } ) => {
    return (
        <View style = { styles.screen }>
            <Text style = { styles.title }>About this app</Text>
            <Text style = { [ styles.text, {textAlign: 'center'} ] }>Made by Quantum Bits for FLL Superpowered 2022-2023.</Text>
        </View>
    )
}

export default AboutScreen;