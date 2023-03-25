import React from "react";
import { Animated, Pressable, View } from "react-native";
import styles from "../../styles";

const Button = ( props ) => {
    const animated = new Animated.Value( 1 );
    const fadeIn = () => {
        Animated.timing(
            animated, {
                toValue: 0.4,
                duration: 100,
                useNativeDriver: true,
            }
        ).start();
    }
    const fadeOut = () => {   
        Animated.timing(
            animated, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }
        ).start();
    }
    return (
        <View>
            <Pressable
                style = { styles.button }
                onPressIn = { fadeIn }
                onPressOut = { fadeOut }
                onPress = { props.onPress }
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

export default Button;