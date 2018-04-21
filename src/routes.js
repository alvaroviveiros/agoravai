import React from 'react';
import { StackNavigator } from 'react-navigation';

import initialFlow from './pages/initialFlow'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'

export const InitialFlow = StackNavigator({
  InitialFlow: {
    screen: initialFlow
  },
});

export const SignIn = StackNavigator({
  SignIn: {
    screen: SignIn
  },
});

export const SignOut = StackNavigator({
  SignOut: {
    screen: SignOut
  },
});

export const createRootNavigator = (initialFlow = false, SignIn) => {

  return StackNavigator({

    InitialFlow: { screen: InitialFlow},
    SignedIn: { screen:  SignIn},
    SignedOut: { screen: SignOut},

  },

  {

    initialRouteName: initialFlow ? "InitialFlow" : (signedIn ? "SignedIn"  : "SignedOut"),

  });

};