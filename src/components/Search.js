import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import {FontAwesome} from "@expo/vector-icons"
import {LinearGradient} from 'expo-linear-gradient';
import {elevation} from '../styles/styles'
const Search = ({setTerm}) => {

    const [searchData, setSearchData]= useState("")

    const handleSubmitSearch = ()=>{
        if(!searchData) return
        setTerm(searchData)
        setSearchData("")
    }

  return (
    // <View style={[styles.container, styles.elevation]}>
    //     <FontAwesome name='search' size={25} color="#ee3f22"/>
    //     <TextInput
    //         style={styles.input}
    //         placeholder='Place to search here...'
    //         placeholderTextColor="#ee3f22"
    //     />
    // </View>
    <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#354259',"#371B58",'#3C2C3E',"#B20600"]} style={[styles.container, styles.elevation]}>
        <FontAwesome name='search' size={25} color="#ee3f22"/>
        <TextInput
            onChangeText={(text)=>setSearchData(text)}
            style={styles.input}
            placeholder='News to search here...'
            placeholderTextColor="#ee3f22"
            value={searchData}
            onEndEditing={handleSubmitSearch}
        />
    </LinearGradient>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:"center",
        // marginHorizontal:25,
        // marginTop:10,
        // backgroundColor:"#041c32",
        // borderRadius:5,
        paddingHorizontal:25,
        paddingVertical:10,
        marginBottom:10,
        
    },
    elevation,
    input:{
        fontSize:14,
        marginLeft:10,
        color:"#041c32",
        borderWidth:1,
        width:315,
        paddingVertical:8,
        borderRadius:50,
        borderColor:"#ee3f22",
        paddingStart:20,
        marginStart:10,
        backgroundColor:"#fff",
        elevation:2
        
    }
})