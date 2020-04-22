//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Moment from 'moment';

export default class HomeScreen extends React.Component {
  ShowCurrentDate=()=>{
    var dt = Moment(new Date()).format('LL');
    return dt.toString()
 }
  //Home Screen to show in Home Option
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <View style={styles.header}>
            <Text style={styles.text}>{this.ShowCurrentDate()}</Text>
        </View> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>        
          <Text style={{ marginTop: 50, fontSize: 25 }}>Welcome Greg Foutska!</Text>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Text>Settngs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Github')}>
              <Text>Github</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Youtube')}>
              <Text>Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Ideas')}>
              <Text>Share Ideas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  header: {
    justifyContent: 'center',
    paddingTop: '5%'
  },
  text: {
    fontFamily: 'lucida grande',
    fontSize: 15,
    //color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: '10%'
  }
});