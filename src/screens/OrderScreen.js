import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native'
import CartItem from '../components/CartItem'
import CustomButton from '../components/CustomButton'

let paddingTop = StatusBar.currentHeight || 0
if (Platform.OS === 'ios') {
  paddingTop = 30 // Hardcoded value for iOS
}

const OrderScreen = ({ route, navigation }) => {
  // const { selectedItem } = route.params
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imageSource: require('../../assets/get-started.png'),
      title: 'Pizza Fries',
      price: 32,
      quantity: 1
    },
    {
      id: 2,
      imageSource: require('../../assets/Pizza-friesB.png'),
      title: 'Pizza Fries',
      price: 32,
      quantity: 1
    }
  ])

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const tax = subtotal * 0.1
  const total = subtotal + tax
  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  return (
    <ScrollView
      style={[styles.container, { paddingTop }]}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor='#FDFCFF' />
      <View style={styles.appContainer}>
        <Text style={styles.sectionTitle}>Number of Items</Text>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            imageSource={item.imageSource}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => handleIncreaseQuantity(item.id)}
            onDecrease={() => handleDecreaseQuantity(item.id)}
            onClose={() => handleRemoveItem(item.id)}
          />
        ))}

        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentContainer}>
          <Text style={styles.cardName}>John Doe</Text>
          <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          <Text style={styles.expiryDate}>Expiry: 12/24</Text>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax (10%)</Text>
            <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, styles.totalLabel]}>Total</Text>
            <Text style={[styles.summaryValue, styles.totalValue]}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>

        <CustomButton
          title={'Order'}
          onPress={() => console.log('Order pressed')}
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.backButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
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
  },
  paymentContainer: {
    backgroundColor: '#EFEEEE',
    padding: 20,
    borderRadius: 10,
    marginTop: 10
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cardNumber: {
    fontSize: 16
  },
  expiryDate: {
    fontSize: 16
  },
  summaryContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  summaryLabel: {
    fontSize: 16,
    color: '#6F6D6D',
    fontWeight: '500'
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#868585'
  },
  totalLabel: {
    fontWeight: 'bold'
  },
  totalValue: {
    fontWeight: 'bold',
    color: '#C9AA05'
  },
  orderButton: {
    backgroundColor: '#462C9C',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30
  },
  backButtonText: {
    color: '#303030',
    fontSize: 18,
    fontWeight: 'normal'
  }
})

export default OrderScreen
