import * as React from 'react';
import { StyleSheet, ScrollView, View, TextInput, Button, Alert, Text } from 'react-native';


export default class Ideascreen extends React.Component {

  constructor(props) {

    super(props)
  
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      placehoder: 'Share your thought with me.. :)',
      userInput: '',
    }
  }

  getUserInput(){
    Alert.alert('User Input : ' +this.state.userInput)
    this.setState({userInput: ''});
  }
  handleChange(event) {
    this.setState({userInput: event.nativeEvent.text});
  }




  render() {
    return (
    <View>
      <ScrollView>
        <View>
          <TextInput
            name='userInput'
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder={this.state.placehoder}
            style={styles.input}
          />
          <Button 
            title="ADD" 
            color="#000"
            onPress={() => this.getUserInput() }
          />
        </View>
        <View />
      </ScrollView>
    </View> 
  )}
}

const styles = StyleSheet.create({
  input:{
    marginTop: '2%',
    backgroundColor: '#fff',
    borderColor: '#b1b1b1',
    borderWidth: 1,
  },
  text: {
    fontFamily: 'lucida grande',
    fontSize: 20,
    color: '#fff',
  }
});