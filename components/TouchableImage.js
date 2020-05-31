import * as React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native';

var { height, width} = Dimensions.get('window');
export default function TouchableImage({func}){
    return(
        <TouchableOpacity onPress={func} style={{position:'absolute',top:height*.75,left:width*.7}}>
            <Image
            source={require('../assets/images/shop.png')}/>
        </TouchableOpacity>
    );
}