import * as React from 'react';
import { View, Text } from 'react-native';

export default function DetailScreen({route}){
    return(
        <View>
            <Text>{route.params.name}</Text>
        </View>
    );
}