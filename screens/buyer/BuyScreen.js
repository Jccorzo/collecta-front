import * as React from 'react';
import { FlatList } from 'react-native';
import Product from '../../components/Product';
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
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse'
        },
        {
          id: '2',
          name: 'Mora',
          price: 3500,
          unit: 'Kilogramo',
          url: require('../../assets/images/Mora.png'),
          urlGrande: require('../../assets/images/Mora_grande2x.png'),
          info: 'antes $4.000 x Kilo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse'
        },
        {
          id: '3',
          name: 'Manzana',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Manzana.png'),
          urlGrande: require('../../assets/images/Manzana_grande2x.png'),
          info: 'antes $7.500 x Kilo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse'
        },
        {
          id: '4',
          name: 'Pera',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Manzana.png'),
          urlGrande: require('../../assets/images/Manzana_grande2x.png'),
          info: 'antes $9.500 x Kilo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse'
        }
      ]
    return(
        <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
        data={products}
        renderItem={({ item }) => <Product product={item} func={()=>{navigation.navigate('Detail',item)}}/> }
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{justifyContent:'center'}} 
    />
    );
}