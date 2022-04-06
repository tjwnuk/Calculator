import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

/** Base screen template for use in future screens */
function Screen({ children, style }) {
    return (
        <SafeAreaView>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
    }
});

export default Screen;