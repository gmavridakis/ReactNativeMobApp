import * as React from 'react';
import { StyleSheet, ScrollView, View, TextInput, Button, Alert, Text } from 'react-native';
import { WebView } from "react-native-webview";

export default class YoutubeScreen extends React.Component {

  constructor(props) {

    super(props)
  
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      placehoder: 'Add youtube link..',
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
        <View style={styles.MainContainer}>
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
        <View style={styles.YoutubeContainer}>
          <WebView
            style={ styles.WebViewStyle }
            source={{ uri: 'https://www.youtube.com/watch?v=GuDqHwoCGl0' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}   
            startInLoadingState = {true}
            allowsInlineMediaPlayback = {true}
          />
        </View>    
      </ScrollView>
    </View> 
  )}
}

const styles = StyleSheet.create({
  MainContainer:{
    padding: '7.5%',
  },  
  input:{
    paddingLeft: 20,
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: '#fff',
    borderColor: '#b1b1b1',
    borderWidth: 1,
  },
  text: {
    fontFamily: 'lucida grande',
    fontSize: 20,
    color: '#fff',
  },
  Container: {
    flex: 1
  },
  YoutubeContainer:{
    marginTop: '2%',
    marginBottom: '2%',
  },
  WebViewStyle: {
    margin: 20,
    height: 400,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%'
  }
});