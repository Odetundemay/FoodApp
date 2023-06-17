import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  TextInput,
  SafeAreaView
} from 'react-native'
import { Feather } from '@expo/vector-icons'
const HomeScreen = () => {
  const {
    container,
    navBar,
    heading,
    profilePhotoSty,
    searchBar,
    searchSection,
    sectionImagWrapper
  } = styles
  return (
    <SafeAreaView style={container}>
      {/*Heading  */}
      <View style={navBar}>
        <Text style={heading}>Menu</Text>
        <Pressable style={profilePhotoSty}>
          <Image source={require('../../assets/profile-photo.png')} />
        </Pressable>
      </View>
      {/* Search Bar  */}
      <View style={searchSection}>
        <Feather name='search' size={24} color='#878686' />
        <TextInput placeholder='Search' style={searchBar} />
      </View>
      {/* Food Section  */}
      <View
        style={{
          flexDirection: 'column',
          marginTop: 20,
          justifyContent: 'center',
          // alignItems: 'center'
          marginLeft: 20,
          borderWidth: 3,
          borderColor: 'red'
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: '#EFEEEE',
            borderRadius: 20,
            width: 90,
            height: 90,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={require('../../assets/cheesecake.png')}
            resizeMode='contain'
          />
        </View>
        <Text style={{ textAlign: 'center' }}>All</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFF',
    paddingTop: StatusBar.currentHeight || 0
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 28
  },
  heading: {
    fontSize: 42,
    color: '#101010',
    fontWeight: 'normal'
  },
  profilePhotoSty: {
    borderRadius: 56
  },
  searchBar: {
    paddingVertical: 10,
    paddingLeft: 8,
    height: 40,
    flex: 1,
    color: '#878686',
    fontSize: 20
  },
  searchSection: {
    borderRadius: 30,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#EFEEEE',
    marginHorizontal: 28,
    alignItems: 'center'
  },
  sectionImagWrapper: {
    padding: 50,
    backgroundColor: '#462B9C',
    borderRadius: 20
  }
})
export default HomeScreen
