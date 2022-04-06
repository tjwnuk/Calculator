import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import AppButton from './AppButton';

function Numpad(props) {
    const numbers = [
        { caption: 'C', backgroundColor: colors.orange },
        { caption: '(' },
        { caption: ')' },
        { caption: 1 },
        { caption: 2 },
        { caption: 3 },
        { caption: 4 },
        { caption: 5 },
        { caption: 6 },
        { caption: 7 },
        { caption: 8 },
        { caption: 9 },
        { caption: '.' },
        { caption: 0 },
        { caption: '' },
    ];

    const controls = [
        { name: 'multiply', caption: '*' },
        { name: 'division', caption: '/' },
        { name: 'add', caption: '+' },
        { name: 'minus', caption: '-' },
        { name: 'equals', caption: '=', backgroundColor: colors.orange },
    ];

    return (
        <View style={styles.container}>

            {/* Left column - with digits */}
            <View style={styles.leftColumn}>
                <FlatList
                    data={numbers}
                    contentContainerStyle={{ justifyContent: 'center', flexDirection: "row", flexWrap: "wrap", }}
                    renderItem={({ item }) => {
                        return (
                            <AppButton
                                caption={item.caption}
                                backgroundColor={typeof (item.backgroundColor) !== 'undefined' ? item.backgroundColor : colors.lightgray}
                                onPress={() => { alert(item.caption) }}
                            />
                        )
                    }}
                />
            </View>

            {/* Right column - with controls */}
            <View style={styles.rightColumn}>
                <FlatList
                    data={controls}
                    contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                    renderItem={({ item }) => {
                        return (
                            <AppButton caption={item.caption}
                                backgroundColor={typeof (item.backgroundColor) !== 'undefined' ? item.backgroundColor : colors.violet}
                                color={colors.lightgray}
                            />
                        )
                    }}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    leftColumn: {
        flex: 3,
        // backgroundColor: 'yellow'
        justifyContent: 'flex-start'
    },
    rightColumn: {
        flex: 1,
        // backgroundColor: 'red'
    },
})

export default Numpad;