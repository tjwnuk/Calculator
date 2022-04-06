import React from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const _width = Dimensions.get('screen').width * 0.25;

function AppButton({ caption }) {

    return (
        <View style={styles.button}>
            <Text style={styles.text}>{caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        margin: 2,
        borderRadius: 5,
    },
    text: {
        fontSize: 40,
        color: colors.black,
    }
})

export default AppButton;