import  React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Modal, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';
var { height, width } = Dimensions.get('window');

export default function DetailScreen({route,navigation}){

    const [modalVisible, setModalVisible] = React.useState(false);

    return(
        <View style={{height: height}}>
          <Image
              style={{ width: width, height: height*0.25 }}
              source={route.params.image}
          />
         
                    <View style={styles.container}><Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.text}>¿Deseas Aceptar</Text>
                    <Text style={styles.text}>este pedido?</Text>

                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>
                      <Text style={styles.title}>{route.params.productName}</Text>
                      <Text style={{fontFamily:'roboto-bold', color:'#FFBB00', fontSize:25}}>$ {route.params.total}</Text>
                        <Text style={{fontFamily:'roboto-regular', color:'#8F8F8F', fontSize:14}}>$ {route.params.price} x {route.params.unit}</Text>
                      <Text style={styles.light}>{route.params.description}</Text>    
                      <View>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[styles.text,{marginLeft:8}]}>{route.params.cuantity}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[styles.text,{marginLeft:8}]}>{route.params.date}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[styles.text,{marginLeft:8}]}>{route.params.clientName}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[styles.text,{marginLeft:8}]}>{route.params.deliverySite}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[styles.text,{marginLeft:8}]}>{route.params.observations}</Text>
                    </View>
                      </View>
                      <Button titleStyle={{fontFamily:'roboto-bold', fontSize:24}} buttonStyle={styles.button} title="Solid Button" onPress={()=>{setModalVisible(true)}}/>   
              </View>
      </View>
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
        fontSize: 24,
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
   
})