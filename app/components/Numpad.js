import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import AppButton from './AppButton';

function Numpad({ onPress, childToParent }) {
    const numbers = [
        { caption: 'C', backgroundColor: colors.orange, color: colors.lightgray },
        { caption: '(' },
        { caption: ')' },
        { caption: 7 },
        { caption: 8 },
        { caption: 9 },
        { caption: 4 },
        { caption: 5 },
        { caption: 6 },
        { caption: 1 },
        { caption: 2 },
        { caption: 3 },
        { caption: '.' },
        { caption: 0 },
        { caption: 'bksp', icon: 'backspace' },
    ];

    const controls = [
        { name: 'multiply', caption: '*' },
        { name: 'division', caption: '/' },
        { name: 'add', caption: '+' },
        { name: 'minus', caption: '-' },
        { name: 'equals', caption: '=', backgroundColor: colors.orange },
    ];

    const clickHandler = (item) => {
        // console.log(item.caption)
        childToParent(item.caption)
    }

    let _keyExtractor = (item, index) => item.key + index;

    return (
        <View style={styles.container}>

            {/* Left column - with digits */}
            <View style={styles.leftColumn}>
                <FlatList
                    data={numbers}
                    contentContainerStyle={{ justifyContent: 'center', alignContent: 'space-between', }}
                    keyExtractor={_keyExtractor}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <AppButton
                                caption={item.caption}
                                key={item}
                                icon={typeof (item.icon) !== 'undefined' ? item.icon : null}
                                color={typeof (item.color) !== 'undefined' ? item.color : colors.black}
                                backgroundColor={typeof (item.backgroundColor) !== 'undefined' ? item.backgroundColor : colors.lightgray}
                                onPress={() => clickHandler(item)}
                            />
                        )
                    }}
                />
            </View>

            {/* Right column - with controls */}
            <View style={styles.rightColumn}>
                <FlatList
                    data={controls}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => {
                        return (
                            <AppButton
                                caption={item.caption}
                                key={item}
                                backgroundColor={typeof (item.backgroundColor) !== 'undefined' ? item.backgroundColor : colors.violet}
                                color={colors.lightgray}
                                onPress={() => clickHandler(item)}
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