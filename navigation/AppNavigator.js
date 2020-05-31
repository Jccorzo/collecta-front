import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {AuthContext} from '../AuthProvider';
import AuthNavigator from './AuthNavigator';
import BuyerBottomTabNavigator from './buyer/BottomTabNavigator';
import AssociationBottomTabNavigator from './association/BottomTabNavigator';

export default function AppNavigator(){
const context = React.useContext(AuthContext);
    
    return(

            <NavigationContainer>
                           {context.state.userToken == null ? (
                                <AuthNavigator/>
                            ) : ( context.state.userInfo.rol=='buyer' ? <BuyerBottomTabNavigator/>: <AssociationBottomTabNavigator/>)} 
            </NavigationContainer>

    );
}