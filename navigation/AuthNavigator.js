import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../AuthProvider';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ConfirmCodeScreen from '../screens/auth/ConfirmCodeScreen';
import LoadingScreen from '../screens/auth/LoadingScreen';

const Stack = createStackNavigator();

export default function AuthNavigator(){

    const context = React.useContext(AuthContext);

    return(
        <Stack.Navigator 
        screenOptions={
        {headerShown:false}}
        >
            {context.state.isloading ? (
            <Stack.Screen name="Loading" component={LoadingScreen}/>
            ) : (
                <>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/> 
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="ConfirmCode" component={ConfirmCodeScreen}/>
                </>
            )}
        </Stack.Navigator> 
    );
}