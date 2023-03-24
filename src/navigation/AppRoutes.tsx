import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeMapScreenScreen from '../screens/HomeMapScreen';
import StaticMap from '../components/StaticMap';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Station Finder', headerShown: false }}
                /> 
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="HomeMap" component={HomeMapScreenScreen} />
                <Stack.Screen name="StaticMap" component={StaticMap} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;