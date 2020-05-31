import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default function Calendario({datePassed}){

    const daysInMonth =(year,month)=>{return 32 - new Date(year,month,32).getDate()};

    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

    const  date = new Date(); 

    const [month, setMonth] = React.useState((new Date()).getMonth());

    const year = (new Date()).getFullYear(); 
    
    function next() {
        setMonth((month == 11) ? 0 : month+1)
    }
    
    function previous() {
        setMonth((month == 0) ? 11 : month-1)
    }

    const setDateUp = (number) => {
        date.setDate(number)
        date.setMonth(month)
        datePassed(date);
    }

    const touchableNumber=(number) => {
        return(
            <TouchableOpacity onPress={()=>{setDateUp(number)}}>
                <Text style={styles.cell} key={number}>{number}</Text>
            </TouchableOpacity>
        );
    } 
    
    const showCalendar = (year,month) =>{
        let firstDay = (new Date(year,month)).getDay();
    
        let date = 1;
    
            var numDays = daysInMonth(year,month);
            var numcolumns = Array(6).fill(0).map(fillArray);
        
            function fillArray(current,index,array) {
                return index;
              }
        
            const items = (item) => {
                var array = [];
                for(let j=0;j< 7;j++){ 
    
                    if(item == 0 && j <firstDay){
                        array.push(<Text key={item+j} style={{...styles.cell}}></Text>)
                    }
                    else if (date > numDays) {
                        break;
                    }
                    else{
                        array.push(touchableNumber(date)) 
                        date++;
                    }
                }
                
                return  array;
            }
        
            return  numcolumns.map((item) => <View key={item} style={styles.row}>{items(item)}</View> )
         
    }

    return(
        <View style={styles.container}>
            <View style={{...styles.row, ...styles.monthRow}}>
                <TouchableOpacity onPress={()=>{previous()}}><AntDesign name={'left'} size={20} color={'#FF8000'}/></TouchableOpacity>
                <Text style={styles.text}>{months[month]}</Text>
                <TouchableOpacity onPress={()=>{next()}}><AntDesign name={'right'} size={20} color={'#FF8000'}/></TouchableOpacity>
            </View>
            <View style={{margin:8}}>
                <View style={styles.row}>
                    <Text style={{...styles.cell, color:'#FF8000'}}>D</Text>
                    <Text style={{...styles.cell, color:'#FF8000'}}>L</Text>
                    <Text style={{...styles.cell, color:'#FF8000'}}>M</Text>
                    <Text style={{...styles.cell, color:'#FF8000'}}>M</Text>
                    <Text style={{...styles.cell, color:'#FF8000'}}>J</Text>
                    <Text style={{...styles.cell, color:'#FF8000'}}>V</Text>
                    <Text style={{...styles.cell, color:'#FF8000'}}>S</Text>
                </View>
                <View>
                {showCalendar(year,month)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:210, 
        minHeight:210, 
        borderColor:'#E5E5E5', 
        borderWidth:1, 
        borderRadius:10, 
        backgroundColor:'#FFFFFF',
        position: 'relative'
    },
    monthRow: {
        justifyContent:'space-around', 
        borderBottomColor:'#E5E5E5', 
        borderBottomWidth:1, 
        height:30, 
        padding:6
    },
    cell: {
        height:30,
        width:30,
        fontFamily:'roboto-light',
        color: '#707070'
    },
    text:{
        fontFamily:'roboto-light',
        color: '#707070'
    }, 
    row: {
        flexDirection: 'row',
    }
})