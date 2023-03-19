
import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../shared/colors';
import { wp } from '../shared/responsiveScreen';
import SvgIcons from '../shared/SvgIcons';

const { width, height } = Dimensions.get('screen');

const PopularStations = (props: any) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <TouchableOpacity onPress={props.navigation}>
            <View
                style={[
                    styles.PopularSalonsMainView,
                    // props.ChangeWidth
                    //     ? { width: width * 0.85, marginBottom: 15, shadowOffset: { height: 8 } }
                    //     : {},
                ]}>

                <Image
                    source={props.pimg}
                    resizeMode="contain"
                    style={[
                        styles.PopularSalonsImage,
                        // props.ChangeWidth
                        // ? {width: width * 0.35, height: width * 0.35}
                        // : {},
                    ]}
                />

                <View
                    style={props.ChangeWidth ? { flex: 1, marginRight: width * 0.03 } : {}}>
                    <Text style={styles.PopularSalonsName}> {props.salonName}</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <SvgIcons.Location />
                        <Text
                            style={{ marginLeft: 6, color: colors.lightViolet, fontSize: 12 }}>
                            {props.salonAddress}
                        </Text>
                    </View>

                    <View style={styles.PopularSalonsRatingMainView}>
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
                    </View>

                    <View style={styles.PopularSalonsIconMainView}>
            <View
                style={{
                flexDirection: 'row',
                width: wp(15),
                alignItems: 'center',
                justifyContent: 'space-between',
                }}>
                <SvgIcons.Heart />
                <SvgIcons.Share />
            </View>
            <View>
                <TouchableOpacity
                style = {styles.PopularSalonsBtnView}
                onPress={props.bookNow}>
                <Text
                    style = {{
                    color: colors.white,
                    fontFamily: 'poppins-medium',
                    fontSize: 12,
                    }}>
                    {props.book}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

                </View>

            </View>
        </TouchableOpacity>
    )
}

export default PopularStations;

const styles = StyleSheet.create({
    PopularSalonsMainView: {
        width: wp(70),
        marginLeft: 5,
        marginRight: 15,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: colors.white,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowColor: colors.darkgray,
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 8,
        marginBottom: 20,
        paddingBottom: 10,
    },
    PopularSalonsImage: {
        width: 100,
        height: 100,
        marginHorizontal: -10,
        marginVertical: -5,
    },
    PopularSalonsName: {
        fontSize: 14,
        fontFamily: 'poppins-medium',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'left',
    },
    PopularSalonsRatingMainView: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(45),
    },
    PopularSalonsIconMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginLeft: 2,
    },
    PopularSalonsBtnView: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 7,
        paddingHorizontal: 15,
    },
});


