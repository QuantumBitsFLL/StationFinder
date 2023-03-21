import React from 'react';

import { View, Text, StyleSheet } from 'react-native'; 

const AboutScreen = ( { navigation } ) => {
    return (
        <View>
            <Text style = { styles.title }>About screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
    container: {
        
    }
})

export default AboutScreen;