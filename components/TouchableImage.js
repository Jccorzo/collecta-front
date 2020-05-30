import * as React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default function TouchableImage({func}){
    return(
        <TouchableOpacity onPress={func}>
            <Image
            source={require('../assets/images/shop.png')}/>
        </TouchableOpacity>
    );
}