import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/screens/Screen';

import colors from './app/config/colors';
import Numpad from './app/components/Numpad';

export default function App() {
  const [data, setData] = useState('')
  let [equationString, setEquationString] = useState('')

  const childToParent = (button) => {
    type(button)
  }

  const type = (button) => {

    if (button == 'C') {
      setEquationString('')
      return
    }
    if (button == 'bksp') {
      if (equationString.length == 0) return;

      setEquationString(equationString.slice(0, -1));
      return
    }
    if (button == '=') {
      try {
        var result = eval(equationString)
      }
      catch (error) {
        setEquationString('')
        result = ''
        alert('An error occured. Please enter the correct equation.')
      }
      finally {
        setEquationString(result)
        return
      }
    }

    setEquationString(equationString += button)

  }

  return (
    <Screen>
      {/* calculator screen-display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>
          {equationString}
        </Text>
      </View>

      {/* numpad */}
      <View style={styles.numpad}>
        <Numpad
          childToParent={childToParent}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: colors.violet,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  displayText: {
    color: colors.white,
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'right',
    paddingBottom: 20,
  },
  numpad: {
    flex: 2,
    backgroundColor: colors.gray,
    padding: 5,
  }
})