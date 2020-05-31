import * as React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

var { height, width } = Dimensions.get('window');

export default function CanceledScreen({navigation}){
    return(
        <View style={{backgroundColor:'#FFFFFF', height:height}}>
        <View style={{backgroundColor:'#FFFFFF', padding:30, alignItems:''}}>
            <Text style={{fontFamily:'roboto-light',fontSize:37, color:'#8F8F8F'}}>Compra</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Image source={require('../../assets/images/pedido_cancelado.png')} ></Image>
            <View style={{alignItems:'center', height:height*0.25, justifyContent:'space-around'}}>
                <Text style={[styles.text, {fontSize:16}]}>Pedido # 1234</Text>
                <Text style={[styles.text,{fontFamily:'roboto-regular',fontSize:32}]}>¡Pedido Creado!</Text>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.text}>Muchas gracias por tu compra</Text>
                    <Text style={styles.text}>Te avisaremos cuando tu pedido</Text>
                    <Text style={styles.text}>sea aceptado</Text>
                </View>
            </View>
            <Button
                title={'Finalizar'}
                onPress={() => navigation.navigate('Home')}
                buttonStyle={styles.button}
                titleStyle={{ color: '#FFBB00', fontFamily: 'roboto-regular' }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 251,
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: "#FFBB00",
        marginTop:20
    },
    text:{
        color:'#8F8F8F',
        fontFamily: 'roboto-light',
        fontSize:20
    }
})