import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.pressFunction}
            style={styles.buttonStyle}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </Pressable> 
    )
}

const styles = StyleSheet.create({
    buttonStyle: { width: 120, height: 50, backgroundColor: 'darkmagenta', borderRadius: 5, alignItems: 'center', justifyContent: 'center' },
    buttonText: { fontSize: 20, fontWeight: 'bold', color: 'white' },
})

export default CustomButton