import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainApp from './src/components/pages/MainApp'

export default function App() {
  return (
    <View style={styles.generalContainer}>
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
    generalContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#b1b1b1',
    },
    body: {
      height: '100%', 
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '2%',
      paddingBottom: '2%',
    },
});
