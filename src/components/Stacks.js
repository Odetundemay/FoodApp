import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import Tabs from './Tabs'
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='AppLayout' component={Tabs} />
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  )
}
export default Stacks
const styles = StyleSheet.create({})
