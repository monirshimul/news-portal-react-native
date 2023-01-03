// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import WinterPlace from './src/components/WinterPlace';
import { LinearGradient } from 'expo-linear-gradient';
import react, { useState } from 'react';
import Product from './src/components/Product';
import Categories from './src/components/Categories';
import Restaurants from './src/components/HttpRequest';
import HomeScreen from './src/screens/HomeScreen';
import Details from './src/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home'>
          {
            (props)=><HomeScreen {...props} />
          }
        </Stack.Screen>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
