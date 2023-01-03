import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React from 'react'
// import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
const Header = () => {
  const image = {uri:"https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  // return (
  //   <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={["#D61C4E",'#354259',"#371B58",'#3C2C3E']} style={styles.headerBg}>

  //     <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#03256C','#BF1363',"#005F99"]} style={{ borderWidth: 1, borderColor: "#83f2fb", paddingVertical: 20, borderRadius: 10, opacity:1 }}>
  //       <Text style={styles.lightHeader}>Best Place for</Text>
  //       <Text style={styles.boldHeader}>Finding Top News</Text>
  //     </LinearGradient>
  //     <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#FF6B6B','#E63E6D',"#B42B51"]} style={styles.linearGradient}>
  //       <Text style={styles.buttonText}>
  //         Sign in
  //       </Text>
  //     </LinearGradient>
  //   </LinearGradient>
  // )
  return (
    <ImageBackground source={image} blurRadius={0} resizeMode="cover" style={styles.headerBg}>

      <View style={{ borderWidth: 1, borderColor: "#83f2fb", paddingVertical: 20, borderRadius: 5, opacity:1, backgroundColor:"rgba(0, 18, 83,0.6)" }}>
        <Text style={styles.lightHeader}>Best Place for</Text>
        <Text style={styles.boldHeader}>Finding Top News</Text>
      </View>
      <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#FF6B6B','#E63E6D',"#B42B51"]} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in
        </Text>
      </LinearGradient>
    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({
  headerBg: {
    // backgroundColor: "#041c32",
    // marginTop: 30,
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lightHeader: {
    fontSize: 25,
    marginTop: 10,
    marginHorizontal: 25,
    color: "#FFE867",
    textAlign:"center"

  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 25,
    color: "#FFF5FD",
    textAlign:"center",
  },
  linearGradient: {
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginTop:10
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})