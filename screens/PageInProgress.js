import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function PageInProgress() {
  return (
    <ImageBackground source={require('../assets/images/Pagina_en_construccion2.png')} style={{width: '100%', height: '100%'}}>
    </ImageBackground>
  );
}

