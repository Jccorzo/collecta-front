import * as React from 'react';
import { FlatList, View, Text, Dimensions, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ProductToBuy } from '../../components/Product';
import { FontAwesome } from '@expo/vector-icons';

var { height, width} = Dimensions.get('window');

export default function BuyScreen({navigation}){
    let products=[
        {
          id: '1',
          name: 'Mango tommy',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Mango.png'),
          urlGrande: require('../../assets/images/Mango_grande2x.png'),
          info: 'Nuevo producto',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse',
          units: 'Kilogramos'
        },
        {
          id: '2',
          name: 'Mora',
          price: 3500,
          unit: 'Kilogramo',
          url: require('../../assets/images/Mora.png'),
          urlGrande: require('../../assets/images/Mora_grande2x.png'),
          info: 'antes $4.000 x Kilo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse',
          units: 'Kilogramos'
        },
        {
          id: '3',
          name: 'Manzana',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Manzana.png'),
          urlGrande: require('../../assets/images/Manzana_grande2x.png'),
          info: 'antes $7.500 x Kilo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse',
          units: 'Kilogramos'
        },
        {
          id: '4',
          name: 'Pera',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Manzana.png'),
          urlGrande: require('../../assets/images/Manzana_grande2x.png'),
          info: 'antes $9.500 x Kilo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse',
          units: 'Kilogramos'
        }
      ]
    return(
        <>
        <View style={{backgroundColor:'#FFFFFF', padding:30}}>
          <Text style={{fontFamily:'roboto-light',fontSize:37, color:'#8F8F8F'}}>Compra</Text>
        </View>
        
        <ScrollView style={{backgroundColor:'#FFFFFF'}}>
        <View style={{backgroundColor:'#FFFFFF', alignItems:'center', marginBottom:10}}>
          <View style={styles.searchContainer}>
            <FontAwesome name="search" size={20} color="#8F8F8F" />
            <TextInput placeholder={'Buscar'} placeholderTextColor={'#8F8F8F'} style={{fontFamily:'roboto-regular',color:'#8F8F8F', marginLeft:8}}/>
          </View>
        </View>
          <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
          data={products}
          renderItem={({ item }) => <ProductToBuy product={item} func={()=>{navigation.navigate('Detail',item)}}/> }
          keyExtractor={item => item.id}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{justifyContent:'center'}}/>
        </ScrollView>
        </> 
    
    );
}

const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:"row", 
    backgroundColor:'#FFFFFF', 
    width: width*.8,
    alignItems:'flex-start', 
    borderRadius:20,
    shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        elevation: 9,
        flexDirection:"row",
        padding:10 
  }
})