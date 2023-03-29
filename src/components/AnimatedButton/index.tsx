import React from "react";
import { Animated, Pressable, View } from "react-native";
import styles from "../../styles";

const AnimatedButton = ( props ) => {
    const animated = new Animated.Value( 1 );
    const fadeIn = () => {
        return Animated.timing(
            animated, {
                toValue: 0.4,
                duration: 100,
                useNativeDriver: true,
            }
        ).start();
    }
    const fadeOut = () => {   
        return Animated.timing(
            animated, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }
        ).start();
    }
    return (
        <View style = { styles.buttonView }>
            <Pressable
                { ...props }
                style = { styles.button }
                onPressIn = { fadeIn }
                onPressOut = { fadeOut }
                onPress = { props.onPress }
                onLongPress = { props.onPress }
            >
                <Animated.View
                    style = {{ opacity: animated }}
                >
                    { props.children }
                </Animated.View>
            </Pressable>
        </View>
    )
}

export default AnimatedButton;