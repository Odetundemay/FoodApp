import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from './src/screens/SplashScreen'
import Tabs from './src/components/Tabs'
import Stacks from './src/components/Stacks'

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  )
}
