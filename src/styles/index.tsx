import { Dimensions, StyleSheet } from "react-native";
import { wp } from "../shared/responsiveScreen";
import colors from "../shared/colors";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: 'rgb( 0, 0, 0 )',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        rowGap: 10,
    },
    title: {
        fontSize: 32,
        color: 'rgb( 255, 255, 255 )',
        fontWeight: '900',
        justifyContent: 'flex-start',
        marginBottom: 100,
        marginTop: 100,
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    // },
    button: { 
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 3,
        padding: 6,
        borderRadius: 8,
        width: "80%",
        borderColor: 'rgb( 155, 170, 180 )',
        color: 'rgb( 200, 200, 200 )',
        borderWidth: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        margin: 10,
        color: 'rgb( 200, 200, 200 )'
    },
    // wrapperCustom: {
    //   borderRadius: 8,
    //   padding: 6,
    //   margin: 2.5,
    // },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 0, 0)',
        flex: 1,
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    staticMap: {
        width: 250,
        height: 250,
    },
    PopularStationsMainView: {
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
    PopularStationsImage: {
        width: 100,
        height: 100,
        marginHorizontal: -10,
        marginVertical: -5,
    },
    PopularStationsName: {
        fontSize: 14,
        fontFamily: 'poppins-medium',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'left',
    },
    PopularStationsRatingMainView: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(45),
    },
    PopularStationsIconMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginLeft: 2,
    },
    PopularStationsBtnView: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 7,
        paddingHorizontal: 15,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    safe: {
        flex: 1,
        backgroundColor: colors.white
    },
    map: {
        flex: 1,
        marginTop: 10,
    },
    Image: {
        width: width * 0.07,
        height: width * 0.07,
    },
    Round: {
        flex: 1,
        position: 'absolute',
        top: height * 0.5,
        right: width * 0.05,
        shadowOffset: { width: 0, height: 3.09 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 1,
        shadowRadius: 16.2,
    },
    containerInput: {
        width: width * 0.9,
        alignSelf: 'center',
        backgroundColor: colors.viewcolor,
        height: width * 0.13,
    },
    RoundIcon: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 50,
        width: width * 0.12,
        alignSelf: 'flex-end',
        marginBottom: width * 0.02,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewLIstMainView: {
        width: width * 0.33,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        elevation: 15,
    },
    ModalStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: height * 0.82,
        flex: 1,
    },
    Container: {
        backgroundColor: colors.white,
        width: width,
        paddingHorizontal: 20,
        flex: 1,
    },
    modalView: {
        alignItems: 'center',
        paddingTop: width * 0.05,
    },
    flatView: {
        position: 'absolute',
        bottom: height * 0.03,
    },
});

export default styles;