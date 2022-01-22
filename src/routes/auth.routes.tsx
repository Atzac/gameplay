//manage routes and authentication

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from '../screens/home';
import { SignIn } from '../screens/signIn';

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
              backgroundColor:'transparent'
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
        </Navigator>
    )
}