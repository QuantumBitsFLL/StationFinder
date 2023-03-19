
import React from 'react';
import { Button, View, Text } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View>

            <Text>This is {route.params.name}'s profile</Text>
            <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    )
};

export default ProfileScreen;