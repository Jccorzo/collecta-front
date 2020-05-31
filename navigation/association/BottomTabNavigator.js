import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import TabBarIcon from '../../components/TabBarIcon';
import PageInProgress from '../../screens/PageInProgress';
import Colors from '../../constants/Colors';
import AcceptOrderStackNavigator from '../association/AcceptOrderStackNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function AssociationBottomTabNavigator() {

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
        component={AcceptOrderStackNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={PageInProgress}
        options={{
          tabBarIcon: () => <TabBarIcon name="md-person" />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={PageInProgress}
        options={{
          tabBarIcon: () => <FontAwesome name="history" size={25} color={Colors.tabIconDefault} />,
        }}
      />
      <BottomTab.Screen
        name="Configuration"
        component={PageInProgress}
        options={{
          tabBarIcon: () => <TabBarIcon name="md-settings" />,
        }}
      />

    </BottomTab.Navigator>
  );
}
