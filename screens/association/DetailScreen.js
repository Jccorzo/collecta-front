import  React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
var { height, width } = Dimensions.get('window');

export default function DetailScreen({route,navigation}){

    const [modalVisible, setModalVisible] = React.useState(false);

    const aceptOrder = () =>{
        setModalVisible(false);
        navigation.navigate('ConfirmedOrder')
    }
    return(
        <ScrollView style={{backgroundColor:'#FFFFFF', opacity: modalVisible ? 0.5:1}}>
          <Image
              style={{ width: width, height: height*0.25 }}
              source={route.params.image}
          />
            <View style={styles.container}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{alignItems:'center', marginBottom:15}}>
                        <Text style={styles.text}>¿Deseas aceptar</Text>
                        <Text style={styles.text}>este pedido?</Text>
                    </View>

                            <Button 
                            containerStyle={{alignItems:'center',height:48,marginBottom:15}} 
                            titleStyle={{fontFamily:'roboto-bold', fontSize:24}} 
                            buttonStyle={styles.button} title="Aceptar pedido" 
                            onPress={()=>{aceptOrder()}}/>   
                            <Button
                            title={'Volver'}
                            onPress={() => {setModalVisible(!modalVisible)}}
                            buttonStyle={styles.button2}
                            titleStyle={{ color: '#FFBB00', fontFamily: 'roboto-regular' }}
                            />
                   
                </View>
                </View>
                </Modal>
                      <Text style={{color:'#8F8F8F', fontFamily:'roboto-bold', fontSize:32, marginBottom:15}}>{route.params.productName}</Text>
                      <Text style={{fontFamily:'roboto-bold', color:'#FFBB00', fontSize:25}}>$ {route.params.total}</Text>
                        <Text style={{fontFamily:'roboto-regular', color:'#8F8F8F', fontSize:14}}>$ {route.params.price} x {route.params.unit}</Text>
                      <Text style={styles.light}>{route.params.description}</Text>    
                      <View style={{padding:20}}>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <Image source={require('../../assets/images/cantidad.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Cantidad</Text>
                            <Text style={styles.text}>{`${route.params.cuantity} ${route.params.units}`}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginBottom:10}}>
                            <Image source={require('../../assets/images/fecha_de_entrega.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Fecha de Entrega</Text>
                            <Text style={styles.text}>{route.params.date}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <Image source={require('../../assets/images/punto_entrega.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Cliente</Text>
                            <Text style={styles.text}>{route.params.clientName}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginBottom:10}}>
                            <Image source={require('../../assets/images/cliente.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Punto de entrega</Text>
                            <Text style={styles.text}>{route.params.deliverySite}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginBottom:10}}>
                            <Image source={require('../../assets/images/observaciones.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Observaciones</Text>
                            <Text style={[styles.text,{maxWidth:200}]}>{route.params.observations}</Text>
                            </View>
                        </View>
                      </View>
                      <Button containerStyle={{alignItems:'center'}} titleStyle={{fontFamily:'roboto-bold', fontSize:24}} buttonStyle={styles.button} title="Aceptar pedido" onPress={()=>{setModalVisible(true)}}/>   
              </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#FFFFFF',
       padding: 30,
       borderRadius:30,
       bottom:5,
       justifyContent: 'space-between',
    },
    text:{
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#8F8F8F',
    },
    button: {
        width: 251,
        height: 50,
        backgroundColor: "#FFBB00",
        borderRadius: 30,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      button2: {
        width: 251,
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: "#FFBB00",
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
   
})