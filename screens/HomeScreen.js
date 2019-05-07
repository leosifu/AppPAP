import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import Button from 'react-native-button';
 
export default class App extends Component<{}> {
  render() {
    return (

      <View style={styles.container}>
      
      <Image
           
            source={require('../assets/images/logo.png')}
 
            style={styles.ImageStyle2}
          />


        <View style={styles.SectionStyle}>
          <Image
            //We are showing the Image from online
            source={require('../assets/images/icon-cervical-vph.png')}
 
            //You can also show the image from you project directory like below
            //source={require('./Images/user.png')}
 
            //Image Style
            style={styles.ImageStyle}
          />
 
          <TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
          />
        </View>
         <View>
          <Button
    containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:5, backgroundColor: 'white'}}
    disabledContainerStyle={{backgroundColor: 'grey'}}
    style={{fontSize: 17, color: '#1b4d83'}}>
    Consultar
  </Button>
        </View>
         
         
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#52c2d8',
  },
 
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
 
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
   ImageStyle2: {
    padding: 10,
    margin: 5,
    height: 100,
    width: 160,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
},
});