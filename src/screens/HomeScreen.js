import { StyleSheet, Text, View,StatusBar,ScrollView,FlatList } from 'react-native'
import React,{useState} from 'react'
import Product from '../components/Product'
import Restaurants from '../components/HttpRequest'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Search from '../components/Search'

const HomeScreen = () => {
    const [term, setTerm] = useState("entertainment")
    const itemData = [
      {
        name: "Business",
        imageUrl: require('../assets/images/flowers.png'),
        bg: "#FFF6BD",
        value:"business"
      },
      {
        name: "Entertainment",
        imageUrl: require('../assets/images/02.png'),
        bg: "#CEEDC7",
        value:"entertainment"
      },
      {
        name: "General",
        imageUrl: require('../assets/images/03.png'),
        bg: "#BFEAF5",
        value:"general"
      },
      {
        name: "Technology",
        imageUrl: require('../assets/images/04.png'),
        bg: "#FFE5F1",
        value:"technology"
      },
      {
        name: "Science",
        imageUrl: require('../assets/images/05.png'),
        bg: "#F8EDE3",
        value:"science"
      },
      {
        name: "Sports",
        imageUrl: require('../assets/images/06.png'),
        bg: "#F3CCFF",
        value:"sports"
      }
  
    ]
  return (
    <View style={styles.container}>
      
        <Header  />
        <Search setTerm={setTerm} />
        <ScrollView>
        <View style={{ borderWidth: 1, borderColor: "#f4f4f4", paddingLeft: 20, paddingVertical: 15, backgroundColor: "#F8F4EA" }}>
          <Text style={{ fontSize: 16, color: "#707070" }}>Slide Options</Text>
        </View>

        <View style={{ marginLeft: 0 }}>
          <Categories itemData={itemData} term={term} setTerm={setTerm}/>
        </View>
        

        <View style={{ marginLeft: 0 }}>
          <Restaurants term={term}/>
        </View>

        <View style={{ borderWidth: 1, borderColor: "#f4f4f4", paddingLeft: 20, paddingVertical: 15, backgroundColor: "#F8F4EA" }}>
          <Text style={{ fontSize: 16, color: "#707070" }}>More Options</Text>
        </View>

        


        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 5, borderWidth: 10, borderColor: "#f9f9f9" }}>

          <FlatList
            data={itemData}
            renderItem={({ item }) => (

              <Product productData={item} />

            )}
            keyExtractor={(item, index) => index}
            numColumns={3}
            horizontal={false}
          />


        </View>
        <View style={{ borderWidth: 1, borderColor: "#f4f4f4", paddingLeft: 20, paddingVertical: 15, backgroundColor: "#F8F4EA" }}>
          <Text style={{ fontSize: 16, color: "#707070" }}>Special Offers</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 5, borderWidth: 10, borderColor: "#f9f9f9" }}>

          <FlatList
            data={itemData}
            renderItem={({ item }) => (

              <Product productData={item} />

            )}
            keyExtractor={(item, index) => index}
            numColumns={3}
            horizontal={false}
          />


        </View>
        </ScrollView>
        
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   paddingTop: StatusBar.currentHeight
    },
    text: {
      color: "#707070",
    }
  });