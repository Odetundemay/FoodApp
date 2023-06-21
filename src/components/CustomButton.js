import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const CustomButton = (props) => {
  const { button, buttonTxt } = styles
  const { title, onPress } = props
  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={buttonTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#462C9C',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20
  },
  buttonTxt: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default CustomButton
