import  React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button } from 'react-native';
import { DropdownButton, DropdownList } from '../../components/Dropdown';

var { height, width } = Dimensions.get('window');

let unitList= [
    {
        id: '1',
        title: 'Kilogramos'
    },
    {
        id: '2',
        title: 'Onzas'
    },
    {
        id: '3',
        title: 'Toneladas'
    }
]

export default function DetailScreen({route,navigation}){

    const [ visible, setVisible ] = React.useState(false);

    const [ unit, setUnit ] = useState('');

    const selectUnit = (Unit)=>{
        setUnit(Unit.title);
        setVisible(false);
    }

    return(
        <View style={{height: height}}>
          <Image
              style={{ width: width, height: height*0.25 }}
              source={route.params.url}
          />
         
              <View style={styles.container}>
                      <Text style={styles.title}>{route.params.name}</Text>
                      <Text style={styles.text}>{route.params.price}</Text>
                      <Text style={styles.light}>{route.params.description}</Text>  
                      
                        <Text style={styles.list}>Cantidad</Text>
                        <Text style={styles.list}>Unidad de medida</Text>
                        <View>
                            <DropdownButton func={()=>{setVisible(true)}} text={unit} style={styles.dropdownButton}></DropdownButton>
                            <DropdownList visible={visible} data={unitList} func={(Unit)=>{selectUnit(Unit)}}></DropdownList>    
                        </View>
              </View>

              <Button title="Solid Button" onPress={()=>{navigation.navigate('ConfirmBuy')}}/>
         
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
       // backgroundColor: '#FFFFFF',
       backgroundColor: '#FFFFFF',
       padding: 30,
       borderRadius:30,
       bottom:5,
       justifyContent: 'space-between',
    },
    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:1,
        padding:18,
        borderRadius:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    columnItems: {
        padding: 10,
    },
    title:{
        fontFamily: 'roboto-black',
        fontSize: 32,
        color: '#8F8F8F',
    },
    text:{
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#2C9400',
    },
    list:{
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#8F8F8F',
    },
    light:{
        fontFamily: 'roboto-light',
        fontSize: 12,
        color: '#8F8F8F',
    },
   
})