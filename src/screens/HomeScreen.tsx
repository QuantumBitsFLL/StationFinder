
import React from 'react';
import { Pressable, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Pressable
                // title="Activate Profile Screen!"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            ><Text>ProfileScreen</Text></Pressable>
            <Pressable
                // title="Map"
                onPress={() =>
                    navigation.navigate('HomeMap', { data: '...map data...' })
                }
            ><Text>Map</Text></Pressable>
            <Pressable
                // <Text> "StaticMap" </Text>
                onPress={() =>
                    navigation.navigate('StaticMap', { data: '...map data...' })
                }
            ><Text>StaticMap</Text></Pressable>
        </>
    )
};

export default HomeScreen;