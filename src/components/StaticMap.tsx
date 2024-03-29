import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView, Pressable} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from '../styles';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const state = {
    region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    },
};


const StaticMap = ( {navigation} ) => {
    
    
    return (
        <View style={styles.container}>
            <ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={styles.scrollview}>
            <Text>Clicking</Text>
            <Text>and</Text>
            <Text>dragging</Text>
            <Text>the</Text>
            <Text>map</Text>
            <Text>will</Text>
            <Text>cause</Text>
            <Text>the</Text>
            <MapView
            // provider={this.props.provider}
            style={styles.staticMap}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={state.region}>
                <Marker
                title="This is a title"
                description="This is a description"
                coordinate={state.region}
                />
            </MapView>
            <Text>parent</Text>
            <Text>ScrollView</Text>
            <Text>to</Text>
            <Text>scroll.</Text>
            <Text>When</Text>
            <Text>using</Text>
            <Text>a Google</Text>
            <Text>Map</Text>
            <Text>this only</Text>
            <Text>works</Text>
            <Text>if you</Text>
            <Text>disable:</Text>
            <Text>scroll,</Text>
            <Text>zoom,</Text>
            <Text>pitch,</Text>
            <Text>rotate.</Text>
            <Text>...</Text>
            <Text>It</Text>
            <Text>would</Text>
            <Text>be</Text>
            <Text>nice</Text>
            <Text>to</Text>
            <Text>have</Text>
            <Text>an</Text>
            <Text>option</Text>
            <Text>that</Text>
            <Text>still</Text>
            <Text>allows</Text>
            <Text>zooming.</Text>
            <Pressable
                onPress={ () => navigation.navigate('Home') }
                style={ ( {pressed} ) => staticMapScreenButton( pressed ) }
            ><Text>Home</Text></Pressable>
            </ScrollView>
        </View>
        );
}
const staticMapScreenButton = ( pressed: boolean ) => [
    styles.button,
    {
        backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
    },
];

export default StaticMap;
