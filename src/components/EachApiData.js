import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const EachApiData = ({data}) => {
  const navigation = useNavigation();
  // console.log("navigation", navigation)
  return (
    <TouchableOpacity onPress={()=> navigation.push("Details")}>
    <View style={{backgroundColor:"#fff", marginVertical:5, elevation:1, alignSelf:"stretch", flexDirection:"row", justifyContent:"space-around", alignItems:"center", paddingVertical:15}}
    
    >
      
      <Image source={{uri: data.urlToImage}} style={{width:120, height:120, borderWidth:5, borderColor:"#EAEAEA"}}/>
      
      <View style={{width:255,}}>
      <Text style={{color:"#3C4048"}}>{data.title}</Text>
      <Text style={{color:"#82CD47"}}>{data.publishedAt}</Text>
      <Text style={{color:"#B2B2B2"}}>{data.description}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default EachApiData

const styles = StyleSheet.create({})