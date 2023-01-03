import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { elevation } from '../styles/styles'
import {LinearGradient} from 'expo-linear-gradient';
const WinterPlace = ({name, imageUrl, bg, index, active, onOptionsChange}) => {
    // console.log(name)
  return (
    // <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={["#D61C4E",'#354259',"#371B58",'#3C2C3E']} style={[styles.container, styles.elevation]}>
    //     <View >
    //     <Image source={imageUrl} style={styles.image}/>
    //     </View>
    //   <Text style={{marginVertical:10, color:"#fff"}}>{name}</Text>
    // </LinearGradient>
    <TouchableOpacity onPress={onOptionsChange}>
        <View style={[
        styles.container,
        styles.elevation, 
        index === 0 ? {marginLeft:15} : {marginLeft:15},
        active ? {backgroundColor:"#FFCC8F"} : {backgroundColor:"#FFF5E4"}]}>
        <View >
        <Image source={imageUrl} style={styles.image}/>
        </View>
      <Text style={{marginVertical:10, color:"#73777B"}}>{name}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default WinterPlace

const styles = StyleSheet.create({
    container:{
        width:100,
        height:120,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginVertical:10,
        // marginRight:10,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:10,
        // backgroundColor:"#FFF5E4",
        // backgroundColor:"#EEF1FF",
    
    },
    
    image:{
        width:80,
        height:80,
    }
})