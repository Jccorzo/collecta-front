import * as React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

var { height, width } = Dimensions.get('window');

export default function Confirmcreen({navigation}){
    return(
        <View style={{backgroundColor:'#FFFFFF', height:height}}>
            <Text>Confirm Screen</Text>
            <Button title={'Finalizar'} onPress={()=>{navigation.navigate('Thanks')}}/>
        </View>
    );
}

