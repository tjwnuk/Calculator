import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/screens/Screen';

import colors from './app/config/colors';
import Numpad from './app/components/Numpad';

export default function App() {
  return (
    <Screen>
      {/* calculator screen-display */}
      <View style={styles.display}>

      </View>

      {/* numpad */}
      <View style={styles.numpad}>
        <Numpad />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: colors.lightgray,
  },
  numpad: {
    flex: 2,
    backgroundColor: colors.gray,
    padding: 5,
  }
})