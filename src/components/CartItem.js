import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
const CartItem = ({
  imageSource,
  title,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onClose
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={styles.imageContainer}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text>{title}</Text>
          <Text>${price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={onDecrease}>
              <Feather name='minus-circle' size={24} color='#462C9C' />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={onIncrease}>
              <Feather name='plus-circle' size={24} color='#462C9C' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onClose}>
        <AntDesign name='closecircleo' size={24} color='red' />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
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
export default CartItem
