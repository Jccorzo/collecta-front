import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { DropdownButton, DropdownList } from '../../components/Dropdown';
import Calendario from '../../components/Calendario';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';

var { height, width } = Dimensions.get('window');

let unitList = [
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

export default function DetailScreen({ route, navigation }) {


    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const [visible, setVisible] = React.useState(false);

    const [unit, setUnit] = useState('');

    const [cuantity, setCuantity] = useState('');

    const [observations, setObservations] = useState('');

    const [date, setDate] = useState(null);

    const [showCalendar, setShowCalendar] = useState(false);

    const [editable, setEditable] = useState(true);

    let order = {};

    const selectUnit = (Unit) => {
        setUnit(Unit.title);
        setVisible(false);
    }

    React.useEffect(() => {
        setShowCalendar(false)
    }, [date])


    const showD = () => {
        setEditable(false);
        setShowCalendar(!showCalendar);
    };

    const fillOrderObject = () => {
      order =  {...order,cuantity,date,observations,route};
        navigation.navigate('ConfirmBuy', order)
    };

    return (

        <ScrollView contentContainerStyle={{ justifyContent: 'space-between', }}>
            <Image
                style={{ width: width, height: height * 0.25 }}
                source={route.params.urlGrande}
            />

            <View style={styles.container}>
                <Text style={styles.title}>{route.params.name}</Text>
                <Text style={styles.text}>${route.params.price} x {route.params.unit}</Text>
                <Text style={styles.light}>{route.params.description}</Text>

                <View style={styles.form}>
                    <Text style={[styles.list, { marginTop: 14 }]}>Cantidad</Text>
                    <TextInput
                        value={cuantity}
                        style={styles.input}
                        keyboardType={'numeric'}
                        returnKeyType={'next'}
                        onChangeText={setCuantity}
                        autoFocus={true}
                    />
                    <Text style={styles.list}>Unidad de medida</Text>
                    <View style={{ alignItems: 'center' }}>
                        <DropdownButton func={() => { setVisible(true) }} text={unit} styles={styles.row}></DropdownButton>
                        <DropdownList visible={visible} data={unitList} func={(Unit) => { selectUnit(Unit) }}></DropdownList>
                    </View>
                    <Text style={[styles.list, { marginTop: 34 }]}>Fecha de entrega</Text>
                    <TouchableOpacity onPress={showD} >
                        <Input
                            rightIcon={{ type: 'feather', name: 'calendar', color: '#00000029', size: 20 }}
                            inputContainerStyle={{ borderColor: '#00000029' }}
                            inputStyle={{ fontFamily: 'roboto-regular', fontSize: 16, marginLeft: 5, color: '#707070', width: 350 }}
                            containerStyle={{ width: width * .6, marginBottom: 15 }}
                            value={(date == null) ? null : `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
                            onFocus={showD}
                            editable={editable}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        {showCalendar ? <Calendario datePassed={setDate} /> : null}
                    </View>
                    <Text style={[styles.list, { marginTop: 34 }]}>
                        Observaciones
                    </Text>
                    <TextInput
                        value={observations}
                        style={[styles.input, { height: 137 }]}
                        returnKeyType={'next'}
                        onChangeText={setObservations}
                        autoFocus={true}
                        multiline={true}
                    />
                    <Button buttonStyle={styles.button} title="Comprar" titleStyle={{fontFamily: 'roboto-regular', fontSize: 24 }} onPress={() => { fillOrderObject() }} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        borderRadius: 30,
        bottom: 5,
        justifyContent: 'space-between',

    },
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
    },
    columnItems: {
        padding: 10,
        marginTop: 8,
    },
    title: {
        fontFamily: 'roboto-black',
        fontSize: 32,
        color: '#8F8F8F',
        marginTop: 6,
    },
    text: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#2C9400',
        marginTop: 6,
    },
    list: {
        fontFamily: 'roboto-regular',
        fontSize: 14,
        color: '#8F8F8F',
    },
    light: {
        fontFamily: 'roboto-light',
        fontSize: 12,
        color: '#8F8F8F',
        marginTop: 6,
    },
    row: {
        width: 280,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        fontSize: 10,
        borderColor: '#00000029',
        padding: 18,
        borderRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    input: {
        width: 280,
        height: 48,
        borderRadius: 20,
        padding: 18,
        borderWidth: 0.5,
        borderColor: '#00000029',
        fontSize: 12,
        fontFamily: 'roboto-bold',
        zIndex: -1,
        marginTop: 4,
        marginBottom: 34,
    }, button: {
        marginTop: 34,
        borderRadius: 20,
        backgroundColor: '#FFBB00',
        
        
    }
})