import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import TouchableImage from '../../components/TouchableImage';
import { ProductToBuy } from '../../components/Product';


export default function HomeScreen({navigation}) {
  let products=[
    {
      id: '1',
      name: 'Mango tommy',
      price: 5000,
      unit: 'Kilogramo',
      url: require('../../assets/images/Mango.png'),
      info: 'Nuevo producto'
    },
    {
      id: '2',
      name: 'Mora',
      price: 3500,
      unit: 'Kilogramo',
      url: require('../../assets/images/Mora.png'),
      info: 'antes $4.000 x Kilo'
    },
    {
      id: '3',
      name: 'Manzana',
      price: 5000,
      unit: 'Kilogramo',
      url: require('../../assets/images/Manzana.png'),
      info: 'antes $7.500 x Kilo'
    },
    {
      id: '4',
      name: 'Pera',
      price: 5000,
      unit: 'Kilogramo',
      url: require('../../assets/images/Manzana.png'),
      info: 'antes $9.500 x Kilo'
    }
  ]
  return (
    <>
    <FlatList style={{backgroundColor:"#FFFFFF", marginTop:10}}
              data={products}
              renderItem={({ item }) => <ProductToBuy product={item}/> }
              keyExtractor={item => item.id}
              numColumns={2}
              horizontal={false}
              columnWrapperStyle={{justifyContent:'center'}} 
          />
      <TouchableImage func={()=>{navigation.navigate('Buy')}}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
