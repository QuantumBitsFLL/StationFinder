import React from 'react';
import styles from '../styles';
import { View, Text, StyleSheet } from 'react-native'; 

const AboutScreen = ( { navigation } ) => {
    return (
        <View>
            <Text style = { styles.title }>About screen</Text>
        </View>
    )
}

export default AboutScreen;