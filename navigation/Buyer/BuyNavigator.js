import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/buyer/HomeScreen'
import BuyScreen from '../../screens/buyer/BuyScreen'
import DetailScreen from '../../screens/buyer/DetailScreen'
import ConfirmScreen from '../../screens/buyer/ConfirmScreen'
import ThanksScreen from '../../screens/buyer/ThanksScreen'


const Stack = createStackNavigator();

export default function BuyNavigator(){

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}> 
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Buy" component={BuyScreen}/> 
            <Stack.Screen name="Detail" component={DetailScreen}/>
            <Stack.Screen name="ConfirmBuy" component={ConfirmScreen}/>
            <Stack.Screen name="Thanks" component={ThanksScreen}/>
        </Stack.Navigator> 
    );
}