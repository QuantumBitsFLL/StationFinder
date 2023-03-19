
import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Button
                title="Activate Profile Screen!"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
            <Button
                title="Map"
                onPress={() =>
                    navigation.navigate('HomeMap', { data: '...map data...' })
                }
            />
            <Button
                title="StaticMap"
                onPress={() =>
                    navigation.navigate('StaticMap', { data: '...map data...' })
                }
            />
        </>
    )
};

export default HomeScreen;