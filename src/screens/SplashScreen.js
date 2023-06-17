import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
const SplashScreen = ({ navigation }) => {
  const { container, image, splashText, getStartedBtn, getStartedTxt } = styles
  return (
    <View style={container}>
      <Image
        source={require('../../assets/get-started.jpg')}
        style={image}
        resizeMode='contain'
      />
      <Text style={splashText}>Enjoy {'\n'} Your Food</Text>
      <Pressable
        onPress={() => navigation.navigate('AppLayout')}
        style={getStartedBtn}
      >
        <Text style={getStartedTxt}>Get started</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#462B9C',
    alignItems: 'center'
  },
  image: {
    borderRadius: 345
  },
  splashText: {
    fontSize: 42,
    textAlign: 'center',
    paddingVertical: 15,
    color: 'white',
    fontWeight: '500',
    marginTop: 40
  },
  getStartedBtn: {
    // padding: 15,
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: '#FFFDFD',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  getStartedTxt: {
    color: '#462B9C',
    fontSize: 27,
    fontWeight: '500'
  }
})
export default SplashScreen
