//manage routes and authentication

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from '../screens/home';
import { SignIn } from '../screens/signIn';
import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export type RootStackParamsList = {
  SignIn: undefined,
  Home: undefined,
}

export function AuthRoutes() {
    return (
        <Navigator
          screenOptions={{  //define navigation screen settings
            headerShown: false,
            contentStyle: {
              backgroundColor: theme.colors.secondary90
            }
        }}
        >
          <Screen 
            name="SignIn"
              component={SignIn}
          />
          <Screen 
            name="Home"
             component={Home}
          />
          <Screen 
            name="AppointmentDetails"
             component={AppointmentDetails}
          />
        </Navigator>
    )
}