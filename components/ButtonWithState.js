import React from 'react';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function ButtonWithState({title, func, disabled, style}){
    return(
        <Button
            title={title}
            onPress={func}
            buttonStyle={[styles.mainButton, style]}
            disabledStyle={{ backgroundColor: "#6E6E6E" }}
            titleStyle={{fontFamily: 'roboto-regular'}}
            disabledTitleStyle={{ color: '#FFFFFF' }}
            disabled={disabled}
        />
    );
}

const styles = StyleSheet.create({
    mainButton: {
        width: 251,
        height: 50,
        backgroundColor: "#FF8000",
        borderRadius: 30,
        top: 30,
    }
})