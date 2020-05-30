import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { ScrollView , View, Image, TextInput, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthContext } from '../AuthProvider';
import { Text } from 'react-native-elements';
import TouchableText from '../components/TouchableText';
import ButtonWithState from '../components/ButtonWithState';


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

var box_count = 4;
var box_height = height / box_count;

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={[styles.box, {height:height*0.4, justifyContent:'space-evenly', alignItems: 'center'}]}>
          <Image
            style={{ width: 175, height: 105 }}
            source={require('../assets/images/log-in-image.png')}
          />
          <Text style={styles.text}>Iniciar Sesión</Text>
        </View>
        <View style={styles.box}>
          <View>
            <TextInput
              value={username}
              onChangeText={setUsername}
              returnKeyType={'next'}
              placeholder={'Correo electrónico'}
              style={[ styles.input, focusU || username.length > 0 ? {borderBottomColor: '#FF8000'} : {}]}
              autoFocus={true}
              onSubmitEditing={focusSecondTextInput}
              onFocus={() => setFocusU(true)}
              onBlur={() => setFocusU(false)}
            />
            <Text style={{ color: '#D5D4D4', fontSize: 10 }}>Ej:Jhon.Doe@gmail.com</Text>
          </View>
          <View>
            <TextInput
              value={password}
              ref={secondTextInputRef}
              onChangeText={setPassword}
              placeholder={'Contraseña'}
              secureTextEntry={true}
              style={[styles.input, focusP || password.length > 0 ? {borderBottomColor: '#FF8000'} : {}]}
              onFocus={() => setFocusP(true)}
              onBlur={() => setFocusP(false)}
            />
          </View>

        </View>
        <TouchableText textStyle={styles.passButton} text={'Olvidaste tu contraseña'}/>
        <View style={styles.box}>
          <ButtonWithState func={() => context.authContext.signIn(username, password)} title={'Ingresar'} disabled={disabled}/>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: height
  },
  box: {
    height: height*0.3,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 24,
    color: '#707070',
    fontFamily: 'spartan-regular'
  },
  input: {
    width: 270,
    height: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#707070',
    borderColor: 'black',
    fontSize: 16,
    fontFamily: 'spartan-regular',
    color: '#707070'
  },
  passButton: {
    color: "#B8B5B5",
    textDecorationLine: 'underline',
    fontFamily: 'spartan-regular'
  }
});
