import * as React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';

var { height } = Dimensions.get('window');

var box_count = 4;
var box_height = height / box_count;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/NewCanvas1.png')}  style={{width:300, height:200, marginBottom: 40}}>
      </Image>
      <Text style={styles.text}>Te damos la bienvenida</Text>
      <View style={styles.box}>
        <Button
          title={'Registrarme'}
          onPress={() => navigation.navigate('SignUp')}
          buttonStyle={styles.button1}
          titleStyle={{fontFamily: 'roboto-regular'}}
        />
        <Button
          title={'Iniciar sesión'}
          onPress={() => navigation.navigate('SignIn')}
          buttonStyle={styles.button2}
          titleStyle={{ color: '#FFBB00', fontFamily: 'roboto-regular' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    color: '#FFBB00',
    fontFamily: 'roboto-regular',
  },
  button1: {
    width: 251,
    height: 50,
    backgroundColor: "#FFBB00",
    borderRadius: 30,
  },
  button2: {
    width: 251,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#FFBB00",
  },
  box: {
    height: box_height,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});