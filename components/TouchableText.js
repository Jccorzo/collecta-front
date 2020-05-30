import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function TouchableText({containerStyle, func, text, textStyle}) {

    return (
        <TouchableOpacity style={containerStyle} onPress={ func }>
            <Text style={textStyle}>{text} </Text>
        </TouchableOpacity>
    );
}