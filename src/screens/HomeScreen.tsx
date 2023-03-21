
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style = { styles.homeScreen }>
            <Text style = { styles.title }>Station Finder</Text>
            <Pressable
                // title="Activate Profile Screen!"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text>ProfileScreen</Text></Pressable>
            <Pressable
                // title="Map"
                onPress={() =>
                    navigation.navigate('HomeMap', { data: '...map data...' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
            ><Text>Map</Text></Pressable>
            <Pressable
                // <Text> "StaticMap" </Text>
                onPress={() =>
                    navigation.navigate('StaticMap', { data: '...map data...' })
                }
                style={ ( {pressed} ) => homeScreenButton( pressed ) }
                  /*({pressed}) => [
                    {
                            backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
                    },
                    styles.wrapperCustom,
                  ]*/
            ><Text>StaticMap</Text></Pressable>
        </View>

    )
};
const homeScreenButton = ( pressed: boolean ) => [
  styles.homescreenButton,
   {
    backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
   },
//    styles.wrapperCustom,
];

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: 'rgb( 0, 0, 0 )',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        color: 'rgb( 255, 255, 255 )',
        fontWeight: '900',
        justifyContent: 'flex-start',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    homescreenButton: { 
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 2.5,
        padding: 6,
        borderRadius: 8,
        width: "80%",
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        alignItems: 'center',
    },
    text: {
      fontSize: 16,
      margin: 10,
    },
    title: {
      fontSize: 32,
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