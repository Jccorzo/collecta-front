import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import TabBarIcon from '../../components/TabBarIcon';
import PageInProgress from '../../screens/PageInProgress';
import Colors from '../../constants/Colors';
import BuyNavigator from '../Buyer/BuyNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        showLabel:false, 
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
        component={BuyNavigator}
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
