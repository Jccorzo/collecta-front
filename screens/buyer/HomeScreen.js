import * as React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView } from 'react-native';
import TouchableImage from '../../components/TouchableImage';
import { BoughtProduct } from '../../components/Product';
import {AuthContext} from '../../AuthProvider';

export default function HomeScreen({navigation}) {

  const context = React.useContext(AuthContext);
  (function (){console.log(context)})()
  let orders=[
    {
      id: '1',
      productName: 'Mango tommy',
      cuantity: 288,
      unit: 'Kilogramo',
      image: require('../../assets/images/Mango.png'),
      date: '15 Jul 2020'
    },
    {
      id: '2',
      productName: 'Mora',
      cuantity: 3500,
      unit: 'Kilogramo',
      image: require('../../assets/images/Mora.png'),
      date: '15 Jul 2020'
    },
    {
      id: '3',
      productName: 'Manzana',
      cuantity: 5000,
      unit: 'Kilogramo',
      image: require('../../assets/images/Manzana.png'),
      date: '15 Jul 2020'
    },
    {
      id: '4',
      productName: 'Pera',
      cuantity: 5000,
      unit: 'Kilogramo',
      image: require('../../assets/images/Manzana.png'),
      date: '15 Jul 2020'
    }
  ]
  return (
    <>
    <View style={{backgroundColor:'#FFFFFF', padding:30}}>
      <Text style={{fontFamily:'roboto-light',fontSize:37, color:'#8F8F8F'}}>Inicio</Text>
    </View>
    <ScrollView style={{backgroundColor:'#FFFFFF', paddingLeft:30, height:1000}}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.text}>Hola!</Text>
        <Text style={styles.text}>Aquí están tus pedidos activos</Text>
      </View>
    <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
              contentContainerStyle={{justifyContent:'space-between'}}
              data={orders}
              renderItem={({ item }) => <BoughtProduct order={item}/> }
              keyExtractor={item => item.id}
          />
      </ScrollView>
      <TouchableImage func={()=>{navigation.navigate('Buy')}}/>
      </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'roboto-light',
    fontSize:16,
    color: '#8F8F8F'
  }
});
