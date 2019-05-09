import React, { Component } from 'react';
import ReactNative from 'react-native';
import { StyleSheet, View, TextInput, Image, Text, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class App extends Component<{}> {

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }
  onFocus(e) {
    const node = ReactNative.findNodeHandle(e.target)
    this.refs.scroll.scrollToFocusedInput(node)
  }

  render() {
    return (
      <KeyboardAwareScrollView
      contentContainerStyle={styles.contenedorGrande}
      enableOnAndroid={true}
        ref="scroll"
      >
          <ScrollView contentContainerStyle={styles.container}>

          <Image
            source={require('../assets/images/logo.png')}
            style={styles.ImageStyle2}
          />
          <View style={styles.SectionStyle}>
            <Image
              source={require('../assets/images/icon-cervical-vph.png')}
              style={styles.ImageStyle}
            />


            <TextInput
              style={{ flex: 1 }}
              placeholder="Ingresa tu R.U.N aquí"
              underlineColorAndroid="transparent"
              onFocus={(event) => this.onFocus(event)}
            />


          </View>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
            onFocus={(event) => this.onFocus(event)}
          /><TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
            onFocus={(event) => this.onFocus(event)}
          /><TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
            onFocus={(event) => this.onFocus(event)}
          /><TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
            onFocus={(event) => this.onFocus(event)}
          /><TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
            onFocus={(event) => this.onFocus(event)}
          /><TextInput
            style={{ flex: 1 }}
            placeholder="Ingresa tu R.U.N aquí"
            underlineColorAndroid="transparent"
            onFocus={(event) => this.onFocus(event)}
          />
          <View>
            <Button
              containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:5, backgroundColor: 'white'}}
              disabledContainerStyle={{backgroundColor: '#ffc8eb'}}
              style={{fontSize: 17, color: '#1b4d83'}}>
              Consultar
            </Button>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contenedorGrande: {
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff4fb',
    resizeMode: 'cover'
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
