import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon({name}) {
  return (
    <Ionicons
      name={name}
      size={25}
      color={Colors.tabIconDefault}
    />
  );
}
