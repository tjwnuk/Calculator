import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AppButton from './AppButton';

function Numpad(props) {
    const numbers = [
        { caption: 1 },
        { caption: 2 },
        { caption: 3 },
        { caption: 4 },
        { caption: 5 },
        { caption: 6 },
        { caption: 7 },
        { caption: 8 },
        { caption: 9 },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={numbers}
                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                renderItem={({ item }) => {
                    return (
                        <AppButton caption={item.caption} />
                    )
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Numpad;