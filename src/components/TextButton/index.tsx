import React from "react";
import { Text } from "react-native";
import styles from "../../styles";
import AnimatedButton from "../AnimatedButton";

const TextButton = ( props ) => {
    return (
        <AnimatedButton { ...props } >
            <Text style = { styles.buttonText }>{ props.children }</Text>
        </AnimatedButton>
    )
}

export default TextButton;