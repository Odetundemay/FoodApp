import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} />
    </Tab.Navigator>
  )
}
export default Tabs
