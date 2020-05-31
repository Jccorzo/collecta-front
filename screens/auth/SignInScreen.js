import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { ScrollView , View, Image, TextInput, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { AuthContext } from '../../AuthProvider';
import { Text } from 'react-native-elements';
import TouchableText from '../../components/TouchableText';
import ButtonWithState from '../../components/ButtonWithState';


async function uSignIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
  }
  catch (err) {
    if (err.code === 'PasswordResetRequiredException') {
      // The error happens when the password is reset in the Cognito console
      // In this case you need to call forgotPassword to reset the password
      // Please check the Forgot Password part.
    } else if (err.code === 'NotAuthorizedException') {
      // The error happens when the incorrect password is provided
    } else if (err.code === 'UserNotFoundException') {
      // The error happens when the supplied username/email does not exist in the Cognito user pool
    } else {
      console.log(err);
    }
  }
}

var { height } = Dimensions.get('window');

export default function SignInScreen() {

  const context = React.useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [focusU, setFocusU] = useState(false);
  const [focusP, setFocusP] = useState(false);

  const [disabled, setDisabled] = useState(true);

  React.useEffect(() => {
    (password.length > 0 && username.length > 0) ? setDisabled(false) : setDisabled(true)
  })


  const secondTextInputRef = React.useRef(null);
  const focusSecondTextInput = () => secondTextInputRef.current.focus();

  return (
    <ImageBackground source={require('../../assets/images/fondo_transparente2x.png')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={[styles.box, {height:height*0.4, justifyContent:'space-around', alignItems: 'center'}]}>
          <Image source={require('../../assets/images/mango2x.png')}
            style={{ width: 175, height: 200, marginTop: 30 }}
          />
          <Text style={styles.text}>Bienvenidos a Collecta</Text>
        </View>
        <View style={styles.box}>
         
            <TextInput
              value={username}
              onChangeText={setUsername}
              returnKeyType={'next'}
              placeholder={'Correo electrónico'}
              style={[ styles.input, focusU || username.length > 0 ? {borderColor: '#FF8000'} : {}]}
              autoFocus={true}
              onSubmitEditing={focusSecondTextInput}
              onFocus={() => setFocusU(true)}
              onBlur={() => setFocusU(false)}
            />
          
          
            <TextInput
              value={password}
              ref={secondTextInputRef}
              onChangeText={setPassword}
              placeholder={'Contraseña'}
              secureTextEntry={true}
              style={[styles.input, focusP || password.length > 0 ? {borderColor: '#FF8000'} : {}]}
              onFocus={() => setFocusP(true)}
              onBlur={() => setFocusP(false)}
            />

            
        </View>
        <TouchableText textStyle={styles.passButton} text={'Olvidaste tu contraseña'}/>
        <View style={styles.box}>
          <ButtonWithState func={() => {(async function(){ await context.authContext.signIn(username, password)})()}} title={'Ingresar'} disabled={disabled}/>
        </View>

      </ScrollView>
    </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: height,
    
  },
  button: {
        width: 264,
        height: 48,
        backgroundColor: "#FFBB00",
        borderRadius: 30,
  },
  box: {
    height: height*0.3,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 24,
    color: '#FFBB00',
    fontFamily: 'roboto-bold'
  },
  input: {
    borderRadius: 20,
    padding:18,
    width: 270,
    height: 50,
    borderWidth: 1,
    borderColor: '#00000029',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    color: '#FFBB00'
  },
  passButton: {
    color: "#B8B5B5",
    textDecorationLine: 'underline',
    fontFamily: 'roboto-regular'
  }
});
