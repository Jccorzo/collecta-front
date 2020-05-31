import  React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { AuthContext } from '../../AuthProvider';
var { height, width } = Dimensions.get('window');

export default function ConfirmScreen({route,navigation}){

    const context = React.useContext(AuthContext);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const [ready , setReady] = React.useState(false);

    let order = {}

    let total = route.params.route.params.price * Number.parseInt(route.params.cuantity);

    const productId = route.params.route.params.id;

    const { observations, date} = route.params;

    const sendOrder = ()=>{
        order = {...order,total,productId,date,observations};
        context.socket.emit('shoping',order);
        navigation.navigate('Thanks');
    }

    return(
        <ScrollView style={{backgroundColor:'#FFFFFF', padding: 30}}>
          <Image
              style={{ width: width, height: height*0.25 }}
              source={route.params.urlGrande}
          />
                <Text style={{color:'#8F8F8F', fontFamily:'roboto-bold', fontSize:32, marginBottom:15}}>{route.params.route.params.name}</Text>
                    <Text style={{fontFamily:'roboto-bold', color:'#FFBB00', fontSize:25}}>$ {total}</Text>
                        <Text style={{fontFamily:'roboto-regular', color:'#8F8F8F', fontSize:14}}>$ {route.params.route.params.price} x {route.params.route.params.unit}</Text>
                        <Text style={styles.light}>{route.params.description}</Text>   
                      <View style={{padding:20}}>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <Image source={require('../../assets/images/cantidad.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Cantidad</Text>
                            <Text style={styles.text}>{`${route.params.cuantity} ${route.params.route.params.units}`}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginBottom:10}}>
                            <Image source={require('../../assets/images/fecha_de_entrega.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Fecha de Entrega</Text>
                            <Text style={styles.text}> {route.params.date.getDate()} ${months[route.params.date.getMonth()]} {route.params.date.getFullYear()} </Text>
                            </View>
                        </View>
                       
                        <View style={{flexDirection:'row', marginBottom:10}}>
                            <Image source={require('../../assets/images/punto_entrega.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Punto de entrega</Text>
                             <Text style={styles.text}>{context.state.userInfo.adress}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginBottom:10}}>
                            <Image source={require('../../assets/images/observaciones.png')}/>
                            <View style={{marginLeft:8}}>
                            <Text style={[styles.text,{fontFamily:'roboto-bold'}]}>Observaciones</Text>
                            <Text style={[styles.text,{maxWidth:200}]}>{route.params.observations}</Text>
                            </View>
                        </View>
                      </View>
                      <Button containerStyle={{alignItems:'center', }} titleStyle={{fontFamily:'roboto-bold', fontSize:24}} buttonStyle={styles.button} title="Aceptar pedido" onPress={()=>{sendOrder()}} disabled={ready} disabledStyle={{backgroundColor:'#6E6E6E'}}/>  
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 251,
        height: 50,
        backgroundColor: "#FFBB00",
        borderRadius: 30,
      },
      container: {
       backgroundColor: '#FFFFFF',
       padding: 30,
       borderRadius:30,
       bottom:5,
       justifyContent: 'space-between',
    },
    text:{
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#8F8F8F',
    },
    
}
);

