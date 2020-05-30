import * as React from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


var { height, width } = Dimensions.get('window');

export default function MangoTommy({numeroPedido,nombre,cantidad,fecha}) {

    return (
        <View style={styles.container}>
            <Text style={styles.leftItem}>
                #{numeroPedido}
            </Text>
            <View style={{alignItems: 'center', marginBottom: 10, marginTop: 20}}>
                <Image
                    style={{ borderTopRightRadius:20, borderBottomRightRadius:20,
                    borderTopLeftRadius:20, borderBottomLeftRadius:20 }}
                    source={require('../assets/images/littleMango.png')}
                /> 

            </View>
           <View style={styles.columnItems}>     
           
             <Text>{nombre}</Text>
             <Text>{cantidad}</Text>
             <Text>Fecha de entrega: {fecha}</Text>     
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        minHeight: 82,
        borderWidth: 1,
        borderColor: '#00000029',
        width: width * 0.6,
        margin: 10,
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        elevation: 9,
        alignItems: 'stretch',
        //height: width * 0.5,
        
    },
    columnItems: {
        padding: 10,

    },
    leftItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end'
    }
})