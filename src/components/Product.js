import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Product = ({productData}) => {
    // console.log("productData", productData)
    const {name, imageUrl} = productData
  return (
    <View style={styles.container}>
        <Image source={imageUrl} style={{width:50, height:50}}/>
      <Text style={{color:"#707070", marginVertical:5}}>{name}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        borderWidth:5,
        borderColor:"#f9f9f9",
        width:"30%",
        height:100,
        margin:5,
        // elevation:0.5
    }
})