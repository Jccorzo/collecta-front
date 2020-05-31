import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Text, Animated, Button } from 'react-native';
import TouchableText from './TouchableText';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


var { height, width } = Dimensions.get('window');

function DropdownButton({func, text, styles}){
    return(
            <TouchableOpacity onPress={func}>
                <View style={[buttonStyles.row, styles]}>
                    <Text style={buttonStyles.text}>{text}</Text>
                    <AntDesign name={'down'} color={'#707070'}/>
                </View>
            </TouchableOpacity>
    );
}

function DropdownList ({visible,func,data, styleForMargin}){

    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500
        }).start();
      };

      const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500
        }).start();
      };

      React.useEffect(()=>{ visible ? fadeIn():fadeOut()},[visible])

    if(visible){
        return( 
                <Animated.View style={[styles.modalView, {opacity:fadeAnim},styleForMargin]}>
                        <FlatList
                            style={{maxHeight:height*0.4}}
                            data={data}
                            renderItem={({ item }) => <TouchableText containerStyle={styles.listInModal} func={()=>func(item)} text={item.title} textStyle={styles.text}/> }
                            keyExtractor={item => item.id}
                        />
                </Animated.View>
        );
    }else{return null}
}

export { DropdownList, DropdownButton };

const buttonStyles = StyleSheet.create({
    text:{
        color:'#707070',
        fontFamily:'roboto-regular',
        fontSize:10,
       
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:1,
        borderColor: '#FF8000',
        padding:18,
        borderRadius:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    }
})

const styles = StyleSheet.create({
    modalView: {
        width: width*0.9,
        margin:30,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position:'absolute',
        zIndex:1
    },
    text:{
        color:'#707070',
        fontFamily:'roboto-regular',
        fontSize:16,
    },
    listInModal : {
        padding:20,
        width:width*0.9,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,
        zIndex:4
    }
})