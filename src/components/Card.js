import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
const Card = (props) => {
  const { title, amount, img, onPress } = props
  const { popularSectionTxt, popularSectionTxtAmount, imageSty } = styles
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: '#EBE8E8',
        borderRadius: 20
      }}
    >
      <Image source={img} style={imageSty} resizeMode='contain' />
      <Text style={popularSectionTxt}>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8
        }}
      >
        <Text style={popularSectionTxtAmount}>$20</Text>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name={'pluscircle'} size={28} color={'#0E803C'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  popularSectionTxt: {
    color: '#101010',
    fontSize: 18,
    marginTop: 8
  },
  popularSectionTxtAmount: {
    fontSize: 18,
    color: '#C9AA05',
    fontWeight: '600'
  },
  imageSty: {
    height: 80,
    width: 80
  }
})
export default Card
