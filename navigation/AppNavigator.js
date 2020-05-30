import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {AuthContext} from '../AuthProvider';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

export default function AppNavigator(){
const context = React.useContext(AuthContext);

    return(

            <NavigationContainer>
                           {context.state.userToken == null ? (
                                <AuthNavigator/>
                            ) : (
                                <BottomTabNavigator/>
                             )} 
            </NavigationContainer>

    );
}