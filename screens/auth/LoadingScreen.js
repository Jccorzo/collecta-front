import * as React from 'react';
import {View, Image, Dimensions, Animated, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';

var { height, width } = Dimensions.get('window');
export default function LoadingScreen({style}) {

  const colorOn = 'rgba(255, 128, 0, 1)';
  const colorOf = 'rgba(205, 205, 205, 1)';

  const [changeColor] = React.useState(new Animated.Value(0))
  const [changeColor2] = React.useState(new Animated.Value(0))
  const [changeColor3] = React.useState(new Animated.Value(0))

  const AnimatedDot = Animated.createAnimatedComponent(Entypo)

  const interpolateColor = changeColor.interpolate({
    inputRange: [0, 150, 300],
    outputRange: [colorOf, colorOn, colorOf]
  })

  const interpolateColor2 = changeColor2.interpolate({
    inputRange: [0, 150, 300],
    outputRange: [colorOf, colorOn, colorOf]
  })

  const interpolateColor3 = changeColor3.interpolate({
    inputRange: [0, 150, 300],
    outputRange: [colorOf, colorOn, colorOf]
  })

 
  const time = 1000;
    
    React.useEffect(()=>{
      Animated.loop(
        Animated.sequence([
          Animated.timing(changeColor, {
            toValue: 300,
            duration: time,
          }),
          Animated.timing(changeColor2, {
            toValue: 300,
            duration: time
          }),
          Animated.timing(changeColor3, {
            toValue: 300,
            duration: time
          })
        ])
      ).start()
    })
    return (
        <View style={{...styles.container, ...style}}>
          <Image
          style={{height:height*.8, width:width}}
          
          resizeMode={'center'}
          />
          <View style={{flexDirection:'row', justifyContent:'space-evenly', width:60}}>
              <AnimatedDot name={'dot-single'} size={50} style={{color:interpolateColor}}/>
              <AnimatedDot name={'dot-single'} size={50} style={{color:interpolateColor2}}/>
              <AnimatedDot name={'dot-single'} size={50} style={{color:interpolateColor3}}/> 
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#FFFFFF', 
      height: height, 
      justifyContent:'space-around', 
      alignItems:'center'}
  })