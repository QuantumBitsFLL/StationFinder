
import React, { useRef, useState } from 'react';
import { Button, View, Text, StyleSheet, Dimensions, Keyboard, Modal, FlatList,
    KeyboardAvoidingView, TouchableOpacity, Image, Pressable } from 'react-native';
import MapView, { enableLatestRenderer, Marker, PROVIDER_GOOGLE, LatLng } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modalize } from 'react-native-modalize';
import Stations from '../components/Stations';
import colors from '../shared/colors';
import stations from '../shared/data';
import styles, { mapStyle } from '../styles';

// @ts-ignore
import CurrentLocationIcon from '../assets/images/CurrentLocation.png'
// @ts-ignore
import ListViewIcon from '../assets/images/ListViewIcon.png'

// enableLatestRenderer();

const { width, height } = Dimensions.get('screen');

const HomeMapScreenScreen = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);

    // For View List
    const ModalizeRef = useRef<any>(null);

    const [Markers, setMarkers] = useState<Array<{title: string, description?: string, coords: LatLng}>>(
        stations.map( (station) => {
            const coords = station.coords,
                name = station.name,
                description = station.description;
            return { 
                title: name,
                coords: coords,
                description: description,
            };
        } )
    );
    console.debug( Markers );

    const onNavigate = (item) => {
        navigation.navigate('InternalServicesRouteName', { pdata: item })
    }

    const OpenModalize = () => {
        Keyboard.dismiss();

        setTimeout(() => {
            ModalizeRef.current.open();
        }, 50);
    };
    const CloseModalize = () => {
        ModalizeRef.current.close();
    };

    const OpenModel = () => {
        // alert(modalVisible)
        setModalVisible(true);
    };

    const modalRender = () => (
        <View style={{ flex: 1 }}>
            <FlatList
                data={stations}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (

                    <Text> MODAL PLACEHOLDER </Text>
                    // <Index
                    //     {...item}
                    //     ChangeWidth={true}
                    //     navigation={() => onInterNavigate(item)}
                    // />

                )}
            />

        </View>
    )

    return (
        <SafeAreaView style={styles.safe}>


            {/* <Text>Map 2</Text> */}
            <Pressable
                onPress={() =>
                    setModalVisible(true)
                }
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
                    },
                  ]}
            ><Text>Filters</Text></Pressable>
            {/*
            <Button
                title="Open Modal"
                onPress={() =>
                    OpenModalize()
                }
            />
            */}
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                customMapStyle = { mapStyle }
                initialRegion={{
                    latitude: 44.4178094,
                    longitude: 26.182995,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {Markers.map( ( marker, index ) => (
                    <Marker
                        key = { index }
                        coordinate = { marker.coords }
                        title={`${ marker.title }`}
                        description={`${marker.description}`}
                    // onRegionChangeComplete={region => setMarkers(region)}
                    />
                ))}

            </MapView>

            {/* Shown in DownSide of Map */}
            <View
                style={styles.flatView}>
                <FlatList
                    data={stations}
                    keyExtractor={(value, index) => index.toString()}
                    horizontal={true}
                    style={{ marginLeft: width * 0.01 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Stations
                            {...item}
                            navigation={() => onNavigate(item)}
                        //   bookNow={() => bookNow(item)}
                        />
                    )}
                />
            </View>


            <KeyboardAvoidingView
                keyboardVerticalOffset={height * 0.05}
                behavior={'padding'}
                style={styles.Round}>

                <View style={styles.RoundIcon}>
                    <Image
                        source={CurrentLocationIcon}
                        resizeMode="contain"
                        style={styles.Image}
                    />
                </View>

                <TouchableOpacity
                    style={styles.ViewLIstMainView}
                    onPress={() => OpenModalize()}>
                    <Image
                        source={ListViewIcon}
                        resizeMode="contain"
                        style={styles.Image}
                    />
                    <Text
                        // name={'poppins-semibold'}
                        // size={normalize(14)}
                        // pLeft={width * 0.015}
                        style={{ color: '#397DFF' }}>
                        {'VIEW LIST'}
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>


            {/* For View List */}
            <Modalize
                modalStyle={styles.modalView}
                modalHeight={height * 0.8}
                ref={ModalizeRef}
                customRenderer={modalRender()}

            />



            {/* For Filter */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => {
                    setModalVisible(modalVisible);
                }}
            >

                <Text>  Modal Filters  </Text>
                <Pressable
                    onPress={() =>
                        setModalVisible(false)
                    }
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? 'rgb(10, 30, 55)' : 'rgb(10, 20, 25)',
                        },
                      ]}
                ><Text>Close</Text></Pressable>


            </Modal>


        </SafeAreaView>
    )
};

export default HomeMapScreenScreen;