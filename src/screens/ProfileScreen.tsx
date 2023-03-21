
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View>

            <Text>This is {route.params.name}'s profile</Text>
            <Pressable
                onPress={() =>
                    navigation.navigate('Home')
                }
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgrey',
                    },
                    styles.wrapperCustom,
                  ]}
            ><Text>Home</Text></Pressable>
        </View>
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

export default ProfileScreen;