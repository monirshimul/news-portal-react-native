import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import cred from '../api/cred'
import axios from 'axios'
import useApiCall from '../api/useApiCall'
import EachApiData from './EachApiData'

const Restaurants = ({ term }) => {
  console.log("Term", term)
  const [{ data, error, loading }, searchApis] = useApiCall()
  useEffect(() => {
    searchApis(term)
  }, [term])

  console.log("all status========", data)
  if (loading){
    return (
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <ActivityIndicator size="large" color="#D2001A" style={{ marginVertical: 10 }} />
        <Text style={{ color: "#6B728E", fontSize: 15, color: "#707070" }}>Please Wait for sometime.!</Text>
      </View>
    )
  }
    

  if (error){
    return (
      <View style={{ borderWidth: 1, alignItems: "center", borderColor: "#f4f4f4", paddingLeft: 20, paddingVertical: 15, backgroundColor: "#F8F4EA", marginVertical: 10 }}>
        <Text style={{ fontSize: 16, color: "#707070" }}>{error}</Text>
      </View>
    )
  }
    if(loading === false && error === null){
      return (
        <View style={{ borderWidth: 1, borderColor: "#f4f4f4", paddingVertical: 10, backgroundColor: "#F8F4EA", marginVertical: 10 }}>
          <Text style={{ fontSize: 17, color: "#707070", marginLeft:15 }}>Top Search Result</Text>
          <FlatList
          data={data}
          keyExtractor={(d,i)=>i}
          renderItem={({item})=>(
            <EachApiData data={item}/>
          )}
          style={{paddingVertical:5}}
          />
        </View>
      )
    }
  
}

export default Restaurants

const styles = StyleSheet.create({

})