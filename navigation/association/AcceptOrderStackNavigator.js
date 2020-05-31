import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/association/HomeScreen'
import DetailScreen from '../../screens/association/DetailScreen'
import CanceledScreen from '../../screens/association/CanceledScreen'
import ConfirmedScreen from '../../screens/association/ConfirmedScreen';


const Stack = createStackNavigator();

export default function AcceptOrderStackNavigator(){

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}> 
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
            <Stack.Screen name="ConfirmedOrder" component={ConfirmedScreen}/>
            <Stack.Screen name="CanceledOrdered" component={CanceledScreen}/>
        </Stack.Navigator> 
    );
}