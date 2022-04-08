import React from 'react';
import { Dimensions, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const horizontalSize = 1;

function AppButton({ caption, backgroundColor = colors.lightgray, color = colors.black, onPress, icon }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: backgroundColor }]}>
                <Text style={[styles.text, { color: color }]}>{icon == null ? caption : ''}</Text>
                {icon &&
                    <View style={{
                        flex: 1,
                        padding: 0,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}>
                        <MaterialCommunityIcons
                            name={icon}
                            size={styles.text.fontSize}
                        />
                    </View>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
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