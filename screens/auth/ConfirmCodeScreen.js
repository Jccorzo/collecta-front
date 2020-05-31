import * as React from 'react';
import { View, StyleSheet, TextInput, Image, Text, Dimensions } from 'react-native';
import TouchableText from '../../components/TouchableText';
import ButtonWithState from '../../components/ButtonWithState';

var { height } = Dimensions.get('window');
 
var box_count = 4;
var box_height = height / box_count;

export default function ConfirmCodeScreen() {

    const [ confirmCode, setConfirmCode ] = React.useState(['','','','','','']);
    const [ disabled, setDisabled ] = React.useState(true);
    const [ focus1, setFocus1 ] = React.useState(false);
    const [ focus2, setFocus2 ] = React.useState(false);
    const [ focus3, setFocus3 ] = React.useState(false);
    const [ focus4, setFocus4 ] = React.useState(false);
    const [ focus5, setFocus5 ] = React.useState(false);
    const [ focus6, setFocus6 ] = React.useState(false);

    React.useEffect(()=>{
        (confirmCode.reduce((a,b)=>a+b,'').length==6) ? setDisabled(false): setDisabled(true)
      })
      
    const secondTextInputRef = React.useRef(null);
    const focusSecondTextInput = () => secondTextInputRef.current.focus();

    const thirdTextInputRef = React.useRef(null);
    const focusThirdTextInput = () => thirdTextInputRef.current.focus();

    const fourthTextInputRef = React.useRef(null);
    const focusFourthTextInput = () => fourthTextInputRef.current.focus();

    const fifthTextInputRef = React.useRef(null);
    const focusFifthTextInput = () => fifthTextInputRef.current.focus();

    const sixthTextInputRef = React.useRef(null);
    const focusSixthTextInput = () => sixthTextInputRef.current.focus();

    return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image
                      style={{width:168, height:100}}
                      
                    />
                    <Text style={{fontSize:24, color: '#707070', paddingBottom: 15, fontFamily: 'roboto-regular'}}>Iniciar sesión</Text>
                </View>
                <View style={styles.box}>
                    <View>
                        <Text style={{textAlign:'center', width:260, fontSize:12, color:'#707070', fontFamily: 'roboto-regular'}}>Introduce el código que ha sido enviado a tu correo electrónico</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TextInput
                            value={confirmCode[0]}
                            style={confirmCode[0].length>0 || focus1 ? styles.focusInput:styles.input}
                            returnKeyType={'next'}
                            onChangeText={text => {confirmCode.splice(0,1,text); setConfirmCode(confirmCode=>confirmCode.map(a=>a=a,''))}}
                            maxLength={1}
                            keyboardType={'numeric'}
                            autoFocus={true}
                            onSubmitEditing={focusSecondTextInput}
                            onFocus={()=>setFocus1(true)}
                            onBlur={()=>setFocus1(false)}     
                        />
                        <TextInput
                            ref={secondTextInputRef}
                            value={confirmCode[1]}
                            style={confirmCode[1].length>0 || focus2 ? styles.focusInput:styles.input}
                            returnKeyType={'next'}
                            onChangeText={text => {confirmCode.splice(1,1,text); setConfirmCode(confirmCode=>confirmCode.map(a=>a=a,''))}}
                            maxLength={1}
                            keyboardType={'numeric'}
                            onSubmitEditing={focusThirdTextInput}
                            onFocus={()=>setFocus2(true)}
                            onBlur={()=>setFocus2(false)}
                        />
                        <TextInput
                            ref={thirdTextInputRef}
                            value={confirmCode[2]}
                            style={confirmCode[2].length>0 || focus3 ? styles.thirdFocusInput:styles.thirdInput}
                            onChangeText={text => {confirmCode.splice(2,1,text); setConfirmCode(confirmCode=>confirmCode.map(a=>a=a,''))}}
                            returnKeyType={'next'}
                            maxLength={1}
                            keyboardType={'numeric'}
                            onSubmitEditing={focusFourthTextInput}
                            onFocus={()=>setFocus3(true)}
                            onBlur={()=>setFocus3(false)}
                        />
                        <TextInput
                            ref={fourthTextInputRef}
                            value={confirmCode[3]}
                            style={confirmCode[3].length>0 || focus4 ? styles.focusInput:styles.input}
                            onChangeText={text => {confirmCode.splice(3,1,text); setConfirmCode(confirmCode=>confirmCode.map(a=>a=a,''))}}
                            returnKeyType={'next'}
                            maxLength={1}
                            keyboardType={'numeric'}
                            onSubmitEditing={focusFifthTextInput}
                            onFocus={()=>setFocus4(true)}
                            onBlur={()=>setFocus4(false)}
                        />
                        <TextInput
                            ref={fifthTextInputRef}
                            value={confirmCode[4]}
                            style={confirmCode[4].length>0 || focus5? styles.focusInput:styles.input}
                            onChangeText={text => {confirmCode.splice(4,1,text); setConfirmCode(confirmCode=>confirmCode.map(a=>a=a,''))}}
                            returnKeyType={'next'}
                            maxLength={1}
                            keyboardType={'numeric'}
                            onSubmitEditing={focusSixthTextInput}
                            onFocus={()=>setFocus5(true)}
                            onBlur={()=>setFocus5(false)}
                        />
                        <TextInput
                            ref={sixthTextInputRef}
                            value={confirmCode[5]}
                            style={confirmCode[5].length>0 || focus6 ? styles.focusInput:styles.input}
                            onChangeText={text => {confirmCode.splice(5,1,text); setConfirmCode(confirmCode=>confirmCode.map(a=>a=a,''))}}
                            maxLength={1}
                            keyboardType={'numeric'}
                            returnKeyType={'done'}
                            onFocus={()=>setFocus6(true)}
                            onBlur={()=>setFocus6(false)}
                        />
                    </View>
                    <View>
                        <TouchableText textStyle={styles.passButton} text={'Reenviar el código'}/>
                    </View>
                </View>
                <View style={styles.box}>
                    <ButtonWithState func={()=> console.log(code)} title={'Ingresa'} disabled={disabled}/>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },
    box: {
        height : box_height,
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    input: {
        width: 44,
        height: 93,
        borderWidth: 0.5,
        borderColor:  '#707070',
        marginBottom: 10,
        margin: 2,
        textAlign: "center",
        fontFamily: 'roboto-bold'
    },
    focusInput: {
        width: 44,
        height: 93,
        borderWidth: 0.5,
        borderColor:  '#FF8000',
        marginBottom: 10,
        margin: 2,
        textAlign: "center",
        fontSize: 36,
        color: '#FF8000',
        fontFamily: 'roboto-bold'
    },
    thirdInput: {
        width: 44,
        height: 93,
        borderWidth: 0.5,
        borderColor: '#707070',
        marginBottom: 10,
        margin: 2,
        marginRight: 10,
        textAlign: "center",
        fontFamily: 'roboto-bold'
    },
    thirdFocusInput: {
        width: 44,
        height: 93,
        borderWidth: 0.5,
        borderColor: '#FF8000',
        marginBottom: 10,
        margin: 2,
        marginRight: 10,
        textAlign: "center",
        fontSize: 36,
        color: '#FF8000',
        fontFamily: 'roboto-bold'
    },
    passButton: {
      fontSize: 12,
      color: "#707070",
      textDecorationLine: 'underline',
      fontFamily: 'roboto-regular'
    },   
  });
