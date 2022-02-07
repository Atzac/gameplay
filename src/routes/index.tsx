import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../context/auth';

import { SignIn } from "../screens/signIn"

export function Routes() {
    const { user } = useAuth();
    return (
          <NavigationContainer>
            {
              user.id ? <AuthRoutes /> : <SignIn />
            }
          </NavigationContainer>
    )
}
