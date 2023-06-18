import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  TextInput,
  SafeAreaView,
  FlatList
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All',
    img: require('../../assets/all-png.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pizza',
    img: require('../../assets/pizza-home.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cheesecake',
    img: require('../../assets/cheesecake.png')
  },
  {
    id: '58694a0f-3da1-471f-bd6-1471e29d72',
    title: 'Cheesecake',
    img: require('../../assets/cheesecake.png')
  }
]

const Item = ({ title, img, isSelected, onSelect }) => (
  <View>
    <Pressable
      style={[styles.item, isSelected && styles.selectedItem]}
      onPress={onSelect}
    >
      <Image style={styles.image} source={img} resizeMode='contain' />
    </Pressable>
    <Text style={[styles.title, isSelected && styles.selectedTitle]}>
      {title}
    </Text>
  </View>
)

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      img={item.img}
      isSelected={selectedItem === item.id}
      onSelect={() => setSelectedItem(item.id)}
    />
  )
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
      <View style={styles.foodSection}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      {/*Promotion Section Head */}
      <View>
        <Text>Promotions</Text>
        <View>
          <Text>Today’s Offer</Text>
          <Text>Free box of Fries</Text>
          <Text>on all orders above $150</Text>
          <Text>Today’s Offer</Text>
          <Text>Free box of Fries</Text>
          <Text>on all orders above $150</Text>
          <Text>Today’s Offer</Text>
          <Text>Free box of Fries</Text>
          <Text>on all orders above $150</Text>
        </View>
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
  },
  foodSection: {
    // height: 100,
    marginVertical: 10
  },
  item: {
    marginHorizontal: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    marginLeft: 20,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedItem: {
    backgroundColor: '#462B9C'
  },
  selectedTitle: {
    color: '#462B9C'
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#868585',
    fontSize: 17
  }
})
export default HomeScreen
