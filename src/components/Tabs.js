import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import OrderScreen from '../screens/OrderScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Feather, Entypo, FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Remove the label of the tab bar
        tabBarActiveTintColor: '#462B9C',
        tabBarInactiveTintColor: '#E5E5E5'
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='home' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='search' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Orders'
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='shopping-cart' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-tie' size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
