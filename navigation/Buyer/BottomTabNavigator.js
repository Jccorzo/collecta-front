import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { Image } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import PageInProgress from '../../screens/PageInProgress';
import Colors from '../../constants/Colors';
import BuyStackNavigator from './BuyStackNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BuyerBottomTabNavigator() {

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        showLabel:false,
        tabStyle:{borderTopLeftRadius:30,
          borderTopRightRadius:30,}, 
        style:{borderTopLeftRadius:30,
              borderTopRightRadius:30,
              shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.6,
        shadowRadius: 14.16,
        elevation: 10,}}}>

      <BottomTab.Screen
        name="Home"
        component={BuyStackNavigator}
        options={{
          tabBarIcon: ( {focused} ) => focused ? <Image source={require('../../assets/images/home_selected.png')} style={{height:30,width:30}} /> :<TabBarIcon name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={PageInProgress}
        options={{
          tabBarIcon: ({focused}) => focused ? <Image source={require('../../assets/images/profile_selected.png')} style={{height:30,width:30}} />: <TabBarIcon name="md-person" />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={PageInProgress}
        options={{
          tabBarIcon: ({focused}) => focused ? <Image source={require('../../assets/images/history_selected.png')} style={{height:30,width:30}} />: <FontAwesome name="history" size={25} color={Colors.tabIconDefault} />,
        }}
      />
      <BottomTab.Screen
        name="Configuration"
        component={PageInProgress}
        options={{
          tabBarIcon: ({focused}) => focused ? <Image source={require('../../assets/images/configuration_selected.png')} style={{height:30,width:30}} />: <TabBarIcon name="md-settings" />,
        }}
      />

    </BottomTab.Navigator>
  );
}
