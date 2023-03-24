
import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../shared/colors';
import { wp } from '../shared/responsiveScreen';
import SvgIcons from '../shared/SvgIcons';
import styles from '../styles';

const { width, height } = Dimensions.get('screen');

const Stations = (props: any) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <TouchableOpacity onPress={props.navigation}>
            <View
                style={[
                    styles.StationsMainView,
                    // props.ChangeWidth
                    //     ? { width: width * 0.85, marginBottom: 15, shadowOffset: { height: 8 } }
                    //     : {},
                ]}>
                {/* <Image
                    source={props.pimg}
                    resizeMode="contain"
                    style={[
                        styles.StationsImage,
                        // props.ChangeWidth
                        // ? {width: width * 0.35, height: width * 0.35}
                        // : {},
                    ]}
                /> */}

                <View style = {{ flex: 1,  alignItems: 'center', alignContent: 'center', padding: 10, paddingRight: 10 }}>
                    <Image
                        source = { require( '../assets/images/location.png' ) }
                        style = {{ resizeMode: 'contain', width: 50 }}/>
                    <Text style = { styles.StationsName }> { props.name } </Text>
                    {/* <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <SvgIcons.Location />
                        <Text
                            style={{ marginLeft: 6, color: colors.lightViolet, fontSize: 12 }}>
                            {props.salonAddress}
                        </Text>
                    </View> */}

                    {/* <View style={styles.StationsRatingMainView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>{props.ratingText}</Text>

                            {stars.map(item => {
                                return (
                                    <Image
                                        source={props.stars}
                                        style={{
                                            marginLeft: 3,
                                            width: 10,
                                            height: 10,
                                            tintColor: '#ff0000',
                                        }}
                                    />
                                );
                            })}
                        </View>

                        <Text
                            style={{
                                color: Number(props.shopStatus) > 50 ? '#0D8B47' : '#ff0000',
                                fontSize: 12,
                                fontFamily: 'poppins-medium',
                            }}>
                            {props.shopStatus}%
                        </Text>
                    </View> */}

                    <View style={styles.StationsIconMainView}>
            <View
                style={{
                flexDirection: 'row',
                width: wp(15),
                alignItems: 'center',
                justifyContent: 'space-between',
                }}>
                {/* <SvgIcons.Heart />
                <SvgIcons.Share /> */}
            </View>
            <View>
                {/* <TouchableOpacity
                style = {styles.StationsBtnView}
                onPress={props.bookNow}>
                <Text
                    style = {{
                    color: colors.white,
                    fontFamily: 'poppins-medium',
                    fontSize: 12,
                    }}>
                    {props.book}
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>

                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Stations;


