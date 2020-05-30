import * as React from 'react';

import { View , Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


var { height, width } = Dimensions.get('window');

export default function Product({product, func}) {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', marginBottom: 10, marginTop: 20}}>
                <Image
                    style={{ borderTopRightRadius:20, borderBottomRightRadius:20,
                    borderTopLeftRadius:20, borderBottomLeftRadius:20 }}
<<<<<<< HEAD
                    source={require(product.url)}
=======
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        minHeight: 82,
        borderWidth: 1,
        borderColor: '#00000029',
        width: width * 0.45,
        margin: 10,
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        elevation: 9,
        alignItems: 'stretch',
        padding: 5
        //height: width * 0.5,
        
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