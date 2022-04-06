import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from './AppButton';

function Numpad(props) {
    return (
        <View style={styles.container}>
            <AppButton></AppButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})

export default Numpad;