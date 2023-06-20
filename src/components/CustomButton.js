import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const CustomButton = (props) => {
  const { button, onPress, buttonTxt } = styles
  const { title } = props
  return (
    <View>
      <TouchableOpacity style={button} onPress={onPress}>
        <Text style={buttonTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#462B9C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonTxt: {
    textAlign: 'center',
    fontSize: 27,
    color: 'white',
    fontWeight: '600'
  }
})
export default CustomButton
