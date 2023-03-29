import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeMapScreen from '../screens/HomeMapScreen';
import StaticMap from '../components/StaticMap';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name = "Home"
                    component={HomeScreen}
                />
                {/* <Stack.Screen
                    name = "Profile"
                    component = { ProfileScreen }
                /> */}
                
                <Stack.Screen
                    name = "HomeMap"
                    component = { HomeMapScreen }
                />
                {/* <Stack.Screen
                    name = "StaticMap"
                    component = { StaticMap }
                /> */}
                <Stack.Screen
                    name = "AboutScreen"
                    component = { AboutScreen }
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;