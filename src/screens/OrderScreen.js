import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FDFCFF' />
      <View style={styles.appContainer}>
        <Text>2 items in cart</Text>
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/Pizza-friesB.png')}
                style={styles.image}
                resizeMode='contain'
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text>Pizza Fries</Text>
              <Text>$32</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity>
                  <Feather name='minus-circle' size={24} color='#462C9C' />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity>
                  <Feather name='plus-circle' size={24} color='#462C9C' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.closeIconContainer}>
            <AntDesign name='closecircleo' size={24} color='red' />
          </View>
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
  appContainer: {
    paddingHorizontal: 20,
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    backgroundColor: '#EFEEEE',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  image: {
    width: 83,
    height: 93,
    alignSelf: 'center'
  },
  detailsContainer: {
    padding: 10
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityText: {
    fontSize: 18,
    paddingHorizontal: 10
  },
  closeIconContainer: {
    justifyContent: 'flex-end'
  }
})

export default OrderScreen
