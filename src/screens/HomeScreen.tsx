
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Text>Station Finder</Text>
            <Pressable
                // title="Activate Profile Screen!"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgrey',
                    },
                    styles.wrapperCustom,
                  ]}
            ><Text>ProfileScreen</Text></Pressable>
            <Pressable
                // title="Map"
                onPress={() =>
                    navigation.navigate('HomeMap', { data: '...map data...' })
                }
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgrey',
                    },
                    styles.wrapperCustom,
                  ]}
            ><Text>Map</Text></Pressable>
            <Pressable
                // <Text> "StaticMap" </Text>
                onPress={() =>
                    navigation.navigate('StaticMap', { data: '...map data...' })
                }
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgrey',
                    },
                    styles.wrapperCustom,
                  ]}
            ><Text>StaticMap</Text></Pressable>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
    },
    title: {
      fontSize: 32,
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
  });
export default HomeScreen;