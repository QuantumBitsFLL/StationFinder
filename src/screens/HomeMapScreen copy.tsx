
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import MapView, {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const HomeMapScreenScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>Map</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 44.4178094,
                    longitude: 26.182995,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    scrollview: {
      alignItems: 'center',
      paddingVertical: 40,
    },
    map: {
      width: '100%',
      height: '80%',
    },
  });

export default HomeMapScreenScreen;