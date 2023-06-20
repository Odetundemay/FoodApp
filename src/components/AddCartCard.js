import { View, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
const AddCartCard = (props) => {
  const { image } = props
  return (
    <View>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          borderRadius: 20,
          padding: 10,
          position: 'relative',
          alignSelf: 'flex-start',
          marginTop: 'auto',
          marginBottom: 20,
          marginRight: 20,
          width: 80,
          height: 80,
          alignItems: 'center'
        }}
      >
        <Image
          source={image}
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain'
          }}
        />
        <TouchableOpacity
          style={{ position: 'absolute', bottom: -9, right: -9 }}
        >
          <FontAwesome name='plus-circle' size={30} color='#0E803C' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default AddCartCard
