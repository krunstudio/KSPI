import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screen/login';
import Checkin from '../screen/checkin';
import Room from '../screen/room';
import HomeScreen from '../screen/home';
import Register from "../screen/register";
import Register2 from "../screen/register2";
import Register3 from "../screen/register3";
import FirstScreen from "../screen/Onboarding"
import { Icon } from 'native-base';
import {Share,Text,TouchableOpacity} from 'react-native';
import Onboarding from '../screen/Onboarding';

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const RootStack = createStackNavigator({
  Login: {
    screen: Onboarding,
    navigationOptions : {
      header : null
    }
  },  
  Account: {
    screen: Register,
    navigationOptions: navOpt => ({
      drawerLabel: ({ focused }) => (
        <DrawerItem focused={focused} screen="Register" title="Account" />
      )
    })
  },
  Checkin : {
    screen: Checkin,
    navigationOptions : {
      header : null
    }
  },
  Room : {
    screen: Room,
    navigationOptions : {
      header : null
    }
  },
  Home : {
    screen: HomeScreen,
    navigationOptions : {
      header : null
    }
  },
  Register : {
    screen: Register,
    navigationOptions : {
      header : null
    }
  },
  Register2 : {
    screen: Register2,
    navigationOptions : {
      header : null
    }
  },
  Register3 : {
    screen: Register3,
    navigationOptions : {
      header : null
    }
  },
});

export default createAppContainer(RootStack);