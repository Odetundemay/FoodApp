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
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import Card from '../components/Card'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All',
    img: require('../../assets/all-png.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Burger',
    img: require('../../assets/burger_sandwich.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pizza',
    img: require('../../assets/pizza-home.png')
  },
  {
    id: '58694a0f-3da1-471f-bd6-1471e29d72',
    title: 'Desert',
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

const HomeScreen = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null)

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      img={item.img}
      isSelected={selectedItem === item.id}
      onSelect={() => setSelectedItem(item.id)}
    />
  )

  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <View style={styles.navBar}>
        <Text style={styles.heading}>Menu</Text>
        <Pressable style={styles.profilePhotoSty}>
          <Image source={require('../../assets/profile-photo.png')} />
        </Pressable>
      </View>
      {/* Search Bar */}
      <View style={styles.searchSection}>
        <Feather name='search' size={24} color='#878686' />
        <TextInput placeholder='Search' style={styles.searchBar} />
      </View>
      {/* Food Section */}
      <View style={styles.foodSection}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      {/* Promotion Section Head */}
      <View>
        <Text style={styles.promotionSectionHead}>Promotions</Text>
        <View style={styles.promotionCard}>
          <View style={styles.promotionCardTxtContainer}>
            <Text style={styles.promotionCardTxt}>Today’s Offer</Text>
            <Text style={[styles.promotionCardTxt, styles.promotionCardTxtBig]}>
              Free box of Fries
            </Text>
            <Text style={styles.promotionCardTxt}>
              on all orders above $150
            </Text>
          </View>
          <Image
            source={require('../../assets/French-fries.png')}
            resizeMode='contain'
            style={styles.promotionCardImage}
          />
        </View>
      </View>
      {/* Popular section */}
      <Text style={styles.popularSectionHead}>Popular</Text>
      <View style={styles.popularSection}>
        <Card
          title={'Beef Burger'}
          img={require('../../assets/burger_sandwichB.png')}
          onPress={() => navigation.navigate('Cart')}
        />
        <Card
          title={'Pizza Fries'}
          img={require('../../assets/Pizza-friesB.png')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFF',
    paddingTop: StatusBar.currentHeight || 30
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 28,
    paddingTop: 10
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
  foodSection: {
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
  },
  promotionSectionHead: {
    marginLeft: 28,
    marginVertical: 15,
    fontSize: 24,
    color: '#101010'
  },
  promotionCardTxtContainer: {
    marginRight: 20
  },
  promotionCard: {
    flexDirection: 'row',
    backgroundColor: '#9577F2',
    padding: 15,
    marginHorizontal: 28,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  promotionCardTxt: {
    color: '#FFFBFB',
    fontSize: 16,
    paddingBottom: 10
  },
  promotionCardTxtBig: {
    fontSize: 20,
    fontWeight: '700'
  },
  promotionCardImage: {
    width: 80,
    height: 100,
    alignSelf: 'center'
  },
  popularSectionHead: {
    marginLeft: 28,
    marginTop: 15,
    fontSize: 24,
    color: '#010101'
  },
  popularSection: {
    flexDirection: 'row',
    margin: 20,
    borderRadius: 30,
    justifyContent: 'space-between'
  }
})

export default HomeScreen
