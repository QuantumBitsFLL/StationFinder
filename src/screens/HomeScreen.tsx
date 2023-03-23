
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style = { styles.homeScreen }>
            <Text style = { styles.title }>Station Finder</Text>
            <Pressable
                
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>ProfileScreen</Text></Pressable>
            <Pressable
                onPress={() =>
                    navigation.navigate('HomeMap', { data: '...map data...' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>Map</Text></Pressable>
            <Pressable
                onPress={() =>
                    navigation.navigate('StaticMap', { data: '...map data...' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>StaticMap</Text></Pressable>
            <Pressable
                onPress = { () => navigation.navigate( 'AboutScreen', {} ) }
                style = { ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text style = { styles.text }>About Screen</Text></Pressable>
        </View>

    )
};
const homeScreenButton = ( pressed: boolean ) => [
    {
        backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
    },
    styles.homescreenButton,
//    styles.wrapperCustom,
];

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: 'rgb( 0, 0, 0 )',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        rowGap: 10,
    },
    title: {
        fontSize: 32,
        color: 'rgb( 255, 255, 255 )',
        fontWeight: '900',
        justifyContent: 'flex-start',
        marginBottom: 100,
        marginTop: 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    homescreenButton: { 
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 3,
        padding: 6,
        borderRadius: 8,
        width: "80%",
        borderColor: 'rgb( 155, 170, 180 )',
        color: 'rgb( 200, 200, 200 )',
        borderWidth: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        margin: 10,
        color: 'rgb( 200, 200, 200 )'
    },
    // wrapperCustom: {
    //   borderRadius: 8,
    //   padding: 6,
    //   margin: 2.5,
    // },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
  });
export default HomeScreen;