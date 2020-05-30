import  React, { useState, useContext } from 'react';
import { Auth } from 'aws-amplify';
import { Text } from 'react-native-elements';
import { ScrollView ,View, TextInput, StyleSheet, Image, Dimensions} from 'react-native';
import { AuthContext }  from '../AuthProvider';
import ButtonWithState from '../components/ButtonWithState';
import { DropdownList, DropdownButton } from '../components/Dropdown';



async function SignUp (username, password){
  const user = await Auth.signUp({
    username,
    password,
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

var { height } = Dimensions.get('window');

export default function SignUpScreen ({ navigation }){

  const genders = [{id:'1',title:'Mujer'},{id:'2',title:'Hombre'},{id:'3',title:'Otro'},{id:'4',title:'Prefiero no contestar'}];

  const [ visible, setVisible ] = React.useState(false);
  
  const [ name, setName ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cel, setCel ] = useState('');
  const [ gender, setGender ] = useState('Genero');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const [ focusN, setFocusN ] = React.useState(false);
  const [ focusL, setFocusL ] = React.useState(false);
  const [ focusE, setFocusE ] = React.useState(false);
  const [ focusC, setFocusC ] = React.useState(false);
  const [ focusP, setFocusP ] = React.useState(false);
  const [ focusCp, setFocusCp ] = React.useState(false);

  const [ disabled, setDisabled ] = useState(true);

  const context = useContext(AuthContext);

  const secondTextInputRef = React.useRef(null);
  const focusSecondTextInput = () => secondTextInputRef.current.focus();

  const thirdTextInputRef = React.useRef(null);
  const focusThirdTextInput = () => thirdTextInputRef.current.focus();

  const fourthTextInputRef = React.useRef(null);
  const focusFourthTextInput = () => fourthTextInputRef.current.focus();

  const seventhTextInputRef = React.useRef(null);
  const focusSeventhTextInput = () => seventhTextInputRef.current.focus();

  const selectGender = (gender)=>{
      setGender(gender.title);
      setVisible(false);
  }

  React.useEffect(()=>{
    (name.length>0 && lastname.length>0 && email.length>0 && cel.length>0 && gender.localeCompare('Genero') && password.length>0 && confirmPassword.length>0) ? setDisabled(false): setDisabled(true)
  })

  return (
                <ScrollView contentContainerStyle={styles.container}>
                  <View style={styles.box}>
                      <Image
                      style={{width:175, height:105}}
                      source={ require('../assets/images/log-in-image.png')}
                      />
                      <Text style={{fontSize:24, color: '#707070', bottom: 20, fontFamily: 'spartan-regular'}}>Registro</Text>
                  </View>
                  <View style={styles.inputBox}> 
                    <TextInput
                        placeholder={'Nombre'}
                        value={name}
                        style={[styles.input, focusN || name.length>0  ? {borderBottomColor: '#FF8000'}:{}]}
                        returnKeyType={'next'}
                        onChangeText={setName}
                        onSubmitEditing={focusSecondTextInput} 
                        autoFocus={true}
                        onFocus={()=>setFocusN(true)}
                        onBlur={()=>setFocusN(false)}  
                    />
                    <TextInput
                        ref={secondTextInputRef}
                        placeholder={'Apellido'}
                        value={lastname}
                        style={[styles.input, focusL || lastname.length>0  ? {borderBottomColor: '#FF8000'}:{}]}
                        returnKeyType={'next'}
                        onChangeText={setLastname}
                        onSubmitEditing={focusThirdTextInput}
                        onFocus={()=>setFocusL(true)}
                        onBlur={()=>setFocusL(false)}
                    />
                    <TextInput
                        ref={thirdTextInputRef}
                        value={email}
                        style={[styles.input, focusE || email.length>0  ? {borderBottomColor: '#FF8000'}:{}]}
                        onChangeText={setEmail}
                        returnKeyType={'next'}
                        placeholder={'Correo Electrónico'}
                        onSubmitEditing={focusFourthTextInput}
                        onFocus={()=>setFocusE(true)}
                        onBlur={()=>setFocusE(false)}
                    />
                    <TextInput
                        ref={fourthTextInputRef}
                        value={cel}
                        style={[styles.input, focusC || cel.length>0  ? {borderBottomColor: '#FF8000'}:{}]}
                        onChangeText={setCel}
                        returnKeyType={'next'}
                        maxLength={11}
                        keyboardType={'numeric'}
                        placeholder={'Número Celular'}
                        onFocus={()=>setFocusC(true)}
                        onBlur={()=>setFocusC(false)}
                    />
                    <View style={{alignItems:'center'}}>
                      <DropdownButton func={()=>{setVisible(true)}} text={gender} styles={[gender=='Genero' ? {borderBottomColor: '#707070'}:{}, {width:266}]}/>
                      <DropdownList visible={visible} data={genders} func={(gender)=>{selectGender(gender)}}/> 
                    </View>
                    <TextInput
                        value={password}
                        style={[styles.input, focusP || password.length>0  ? {borderBottomColor: '#FF8000'}:{}]}
                        onChangeText={setPassword}
                        placeholder={'Contraseña'}
                        onSubmitEditing={focusSeventhTextInput}
                        onFocus={()=>setFocusP(true)}
                        onBlur={()=>setFocusP(false)}
                    />
                      <TextInput
                        ref={seventhTextInputRef}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder={'Confirmar Contraseña'}
                        style={[styles.input, focusCp || confirmPassword.length>0  ? {borderBottomColor: '#FF8000'}:{}]}
                        onFocus={()=>setFocusCp(true)}
                        onBlur={()=>setFocusCp(false)}
                      />
                  </View>
                  <View style={[styles.box,{top:0,height:height*.25}]}>
                      <ButtonWithState func={()=>context.authContext.signUp(name,password,navigation)} title={'Registrarme'} disabled={disabled}/>
                  </View>
                </ScrollView>
        );
    }

    const styles = StyleSheet.create({
        container: {
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        },
        inputBox: {
          height: height/1.3,
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        box: {
          height: height/3,
          top: 30,
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        input: {
          width: 266,
          height: 38,
          borderBottomWidth: 2,
          borderBottomColor: '#707070',
          fontSize: 16,
          fontFamily: 'spartan-regular',
          color:'#707070',
          zIndex:-1
        }
      });
      