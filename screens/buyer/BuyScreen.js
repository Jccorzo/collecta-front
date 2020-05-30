import * as React from 'react';
import { FlatList } from 'react-native';
import { ProductToBuy } from '../../components/Product';
export default function BuyScreen({navigation}){
    let products=[
        {
          id: '1',
          name: 'Mango tommy',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Mango.png'),
          info: 'Nuevo producto'
        },
        {
          id: '2',
          name: 'Mora',
          price: 3500,
          unit: 'Kilogramo',
          url: require('../../assets/images/Mora.png'),
          info: 'antes $4.000 x Kilo'
        },
        {
          id: '3',
          name: 'Manzana',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Manzana.png'),
          info: 'antes $7.500 x Kilo'
        },
        {
          id: '4',
          name: 'Pera',
          price: 5000,
          unit: 'Kilogramo',
          url: require('../../assets/images/Manzana.png'),
          info: 'antes $9.500 x Kilo'
        }
      ]
    return(
        <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
        data={products}
        renderItem={({ item }) => <ProductToBuy product={item} func={()=>{navigation.navigate('Detail',item)}}/> }
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{justifyContent:'center'}} 
    />
    );
}