import * as React from 'react';

import { View , Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'; 
import TouchableText from '../components/TouchableText';

var { height, width } = Dimensions.get('window');

function ProductToBuy({product, func}) {
    return (
        <TouchableOpacity onPress={func}>
        <View style={styles.container}>
            <View style={{alignItems: 'center', padding:5}}>
                <Image
                    style={{ borderRadius:10}}
                    source={product.url}
                /> 
            </View>
           <View style={styles.columnItems}>     
             <Text style={styles.title}>{product.name}</Text>
             <Text style={styles.text} >{product.price}</Text>
             <Text style={styles.light}>{product.info}</Text>     
           </View>
        </View>
        </TouchableOpacity>
    );
}

function BoughtProduct({order}){
    return(
        <View style={productToBuyStyles.container}>
            <Image
                    style={{ borderRadius:10 }}
                    source={order.image}
                />
            <View style={{justifyContent:'space-around'}}>
                    <Text style={[productToBuyStyles.text,{fontSize:10}]}>Pedido # {order.id}</Text>
                    <Text style={[productToBuyStyles.text,{fontFamily:'roboto-black', fontSize:16}]}>{order.productName}</Text>
                    <Text style={productToBuyStyles.text}>{`${order.cuantity}  ${order.unit}`}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={productToBuyStyles.text}>{order.date}</Text>
                    </View>
            </View> 
        </View>
    );
}

function AcceptedOrder({order}){
    return(
        <View style={productToBuyStyles.container}>
            <Image
                    style={{ borderRadius:10 }}
                    source={order.image}
                />
            <View style={{justifyContent:'space-around', marginLeft:5}}>
                    <Text style={[productToBuyStyles.text,{fontSize:10}]}>Pedido # {order.id}</Text>
                    <Text style={[productToBuyStyles.text,{fontFamily:'roboto-black', fontSize:16}]}>{order.productName}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[productToBuyStyles.text,{marginLeft:8}]}>{order.date}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name="store" size={16} color="#FFBB00"/>
                        <Text style={[productToBuyStyles.text,{marginLeft:8}]}>{order.clientName}</Text>
                    </View>
                    <TouchableText text={'Mas información'} textStyle={{color:"#FFBB00"}} containerStyle={{borderBottomWidth:1, borderBottomColor:'#FFBB00'}}/>
            </View> 
        </View>
    );
}

function NewOrder({order, func}){
    return(
        <View style={productToBuyStyles.container}>
            <Image
                    style={{ borderRadius:10 }}
                    source={order.image}
                />
            <View style={{justifyContent:'space-around', marginLeft:5}}>
                    <Text style={[productToBuyStyles.text,{fontFamily:'roboto-black', fontSize:16}]}>{order.productName}</Text>
                    <Text style={productToBuyStyles.text}>{`${order.cuantity}  ${order.unit}`}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name="calendar-alt" size={20} color="#FFBB00"/>
                        <Text style={[productToBuyStyles.text,{marginLeft:8}]}>{order.date}</Text>
                    </View>
                    <TouchableText func={func} text={'Mas información'} textStyle={{color:"#FFBB00"}} containerStyle={{borderBottomWidth:1, borderBottomColor:'#FFBB00'}}/>
            </View> 
        </View>
    );
}

export {ProductToBuy, BoughtProduct, NewOrder, AcceptedOrder};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        minHeight: 82,
        width: width * 0.42,
        margin: 10,
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        elevation: 5,
        alignItems: 'stretch',
        padding: 5        
    },
    columnItems: {
        padding: 10,
    },
    title:{
        fontFamily: 'roboto-black',
        fontSize: 14,
        color: '#8F8F8F',
    },
    text:{
        fontFamily: 'roboto-regular',
        fontSize: 10,
        color: '#8F8F8F',
    },
    light:{
        fontFamily: 'roboto-light',
        fontSize: 8,
        color: '#FFBB00',
    },
   
})

const productToBuyStyles = StyleSheet.create({
    container:{
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        elevation: 5,
        flexDirection:"row", 
        padding:8, 
        width: width*.8, 
        justifyContent:'space-evenly',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginBottom:10
    },
    text:{
        fontFamily:'roboto-regular',
        fontSize:14,
        color:'#8F8F8F'
    }
})