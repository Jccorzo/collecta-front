import React from 'react';
import { SplashScreen, AppLoading } from 'expo';
import Amplify from 'aws-amplify';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';

import awsconfig from './aws-exports'; 

import AuthProvider from './AuthProvider';
import AppNavigator from './navigation/AppNavigator';
import { View } from 'react-native';

Amplify.configure(awsconfig);

export default function App(){
  const [isReady, setIsReady] = React.useState(false);

const loadFontsAsync = async () => {
  await Font.loadAsync({
    'roboto-light': require('./assets/fonts/RobotoSlab-Light.ttf'),
    'roboto-regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
    'roboto-black': require('./assets/fonts/RobotoSlab-Black.ttf'),
    })
}

/* const loadImagesAsync = async () => {
  const images = [require('./assets/images/splash2.png'),
                  require('./assets/images/DefaultBarberImage.png'),
                  require('./assets/images/log-in-image.png')]

      const cacheImages = images.map(image => {return Asset.fromModule(image).downloadAsync();}); 
    await Promise.all(cacheImages)                
}
 */
const loadResourcesAndDataAsync = async () => {
  await Promise.all([loadFontsAsync(), /* loadImagesAsync() */])
}   
  
   React.useEffect(() => {
    SplashScreen.preventAutoHide();  
    loadResourcesAndDataAsync().then(()=>{setIsReady(true)}).catch(e=>console.warn(e));
    SplashScreen.hide();
  }, []); 

  if(!isReady){
    return null
  }else {
    return(
      <AuthProvider>
        <AppNavigator/>
      </AuthProvider>
    );
  }
}
 
