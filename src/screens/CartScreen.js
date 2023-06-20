import React from 'react'
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable
} from 'react-native'
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons'
import AddCartCard from '../components/AddCartCard'
import CustomButton from '../components/CustomButton'

let paddingTop = StatusBar.currentHeight || 0
if (Platform.OS === 'ios') {
  paddingTop = 30 // Hardcoded value for iOS
}
const CartScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, { paddingTop }]}>
      <StatusBar backgroundColor='#462B9C' />
      <Pressable onPress={handleGoBack} style={styles.backButton}>
        <MaterialIcons name='arrow-back-ios' size={24} color='#FFFFFF' />
      </Pressable>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Ellipse.png')}
          style={styles.ellipseImage}
        />
        <Image
          source={require('../../assets/burger_sandwich3.png')}
          style={styles.burgerImage}
          resizeMode='contain'
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <FontAwesome name='star' size={20} color='#C9AA05' />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
          <Text style={styles.priceText}>$20</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Beef Burger</Text>
          <View style={styles.quantityContainer}>
            <Feather name='minus-circle' size={24} color='#462C9C' />
            <Text style={styles.quantityText}>1</Text>
            <Feather name='plus-circle' size={24} color='#462C9C' />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Big juicy beef burger with cheese, lettuce, tomato, onions and
            special sauce!
          </Text>
          <Text style={styles.addOnsTitle}>Add Ons</Text>
          <View style={styles.addOnsContainer}>
            <AddCartCard image={require('../../assets/cheese.png')} />
            <AddCartCard image={require('../../assets/hotsauce.png')} />
            <AddCartCard image={require('../../assets/sauce.png')} />
          </View>
          <CustomButton title='Add to cart' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#462B9C'
  },
  backButton: {
    paddingLeft: 20,
    paddingTop: 15
  },
  imageContainer: {
    alignItems: 'center'
  },
  ellipseImage: {
    width: 345,
    height: 345,
    opacity: 0.75
  },
  burgerImage: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 70
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 70,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  infoContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: '#472C9D',
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 25,
    color: 'white'
  },
  priceText: {
    color: '#C9AA05',
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '500'
  },
  quantityContainer: {
    flexDirection: 'row'
  },
  quantityText: {
    fontSize: 18,
    paddingHorizontal: 10
  },
  descriptionContainer: {
    marginTop: 10
  },
  descriptionText: {
    color: '#595959',
    fontSize: 18,
    fontWeight: '300'
  },
  addOnsTitle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#373737',
    marginVertical: 10
  },
  addOnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default CartScreen
