import * as React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView } from 'react-native';
import { NewOrder, AcceptedOrder } from '../../components/Product';
import { Button } from 'react-native-elements';
import {AuthContext} from '../../AuthProvider';


export default function HomeScreen({navigation}) {
  const [showNewOrders, setShowNewOrders] = React.useState(true)

  let acceptedOrders=[
    {
      id: '1',
      productName: 'Mango tommy',
      image: require('../../assets/images/Mango.png'),
      date: '15 Jul 2020',
      clientName: 'Juan Camilo'
    },
    {
      id: '2',
      productName: 'Mora',
      image: require('../../assets/images/Mora.png'),
      date: '15 Jul 2020',
      clientName: 'Daniel Steven'
    },
    {
      id: '3',
      productName: 'Manzana',
      image: require('../../assets/images/Manzana.png'),
      date: '15 Jul 2020',
      clientName: 'Nicolas Ortiz'
    },
    {
      id: '4',
      productName: 'Pera',
      image: require('../../assets/images/Manzana.png'),
      date: '15 Jul 2020',
      clientName: 'Manuela Morales'
    }
  ]

  let newOrders=[
    {
      id: '1',
      productName: 'Mango tommy',
      price: 3500,
      cuantity: 288,
      unit: 'Kilogramo',
      units: 'Kilogramos',
      image: require('../../assets/images/Mango.png'),
      date: '15 Jul 2020',
      total: 150000,
      clientName: 'Santiago Rendón',
      deliverySite: 'Unidad agricola La Ceja',
      observations:'Por favor entregarlas antes de las 12 del día. En la tarde no estaremos atendiendo'
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
  const context = React.useContext(AuthContext);
  return (
    <>
    <View style={{backgroundColor:'#FFFFFF', padding:30}}>
      <Text style={{fontFamily:'roboto-light',fontSize:37, color:'#8F8F8F'}}>Inicio</Text>
    </View>
    <ScrollView style={{backgroundColor:'#FFFFFF', paddingLeft:30, height:1000}}>
      <View style={styles.buttonsContainer}>
        <Button title={'Nuevos pedidos'} onPress={()=>{setShowNewOrders(true)}} titleStyle={{color:showNewOrders ? '#FFFFFF':'#8F8F8F'}} buttonStyle={{borderRadius:0,backgroundColor: showNewOrders ? '#FFBB00':'#FFFFFF'}}/>
        <Button title={'Ordenes aceptadas'} onPress={()=>{setShowNewOrders(false)}} titleStyle={{color:!showNewOrders ? '#FFFFFF':'#8F8F8F'}} buttonStyle={{borderRadius:0,backgroundColor: !showNewOrders ? '#FFBB00':'#FFFFFF'}}/>
      </View>
      {showNewOrders?
      <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
              contentContainerStyle={{justifyContent:'space-between'}}
              data={newOrders}
              renderItem={({ item }) => <NewOrder func={()=>{navigation.navigate('Detail',item)}} order={item}/> }
              keyExtractor={item => item.id}
          />
          :
      <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
              contentContainerStyle={{justifyContent:'space-between'}}
              data={acceptedOrders}
              renderItem={({ item }) => <AcceptedOrder order={item}/> }
              keyExtractor={item => item.id}
          />
      }
      </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'roboto-light',
    fontSize:16,
    color: '#8F8F8F'
  }, buttonsContainer:{
    alignItems:'center',
    flexDirection:'row',
    shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius:20
  }
});
