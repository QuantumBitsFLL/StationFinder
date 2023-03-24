
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import styles from '../styles';
const HomeScreen = ({ navigation }) => {
    return (
        <View style = { styles.homeScreen }>
            <Text style = { styles.title }>Station Finder</Text>
            {/* <Pressable
                
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>ProfileScreen</Text></Pressable> */}
            <Pressable
                onPress={() =>
                    navigation.navigate('HomeMap', { data: '...map data...' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>Map</Text></Pressable>
            {/* <Pressable
                onPress={() =>
                    navigation.navigate('StaticMap', { data: '...map data...' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>StaticMap</Text></Pressable> */}
            <Pressable
                onPress = { () => navigation.navigate( 'AboutScreen', {} ) }
                style = { ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>About</Text></Pressable>
        </View>

    )
};
const homeScreenButton = ( pressed: boolean ) => [
    {
        backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
    },
    styles.button,
//    styles.wrapperCustom,
];

export default HomeScreen;