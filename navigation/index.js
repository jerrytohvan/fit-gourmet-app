import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/FontAwesome';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';


import {Routes} from "./Routes";


import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import List from '../screens/List';
import Article from '../screens/Article';
import {Bookmarks, Likes, Private, Profile} from "../screens";

import { theme } from "../constants";


// const screens = createStackNavigator(
//   {
//     Welcome,
//     Login,
//     SignUp,
//     Forgot,
//     Explore,
//     Browse,
//     Product,
//     Settings,
//     List,
//     Article
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         height: theme.sizes.base * 4,
//         backgroundColor: theme.colors.white, // or 'white
//         borderBottomColor: "transparent",
//         elevation: 0 // for android
//       },
//       headerBackImage: <Image source={require("../assets/icons/back.png")} />,
//       headerBackTitle: null,
//       headerLeftContainerStyle: {
//         alignItems: "center",
//         marginLeft: theme.sizes.base * 2,
//         paddingRight: theme.sizes.base
//       },
//       headerRightContainerStyle: {
//         alignItems: "center",
//         paddingRight: theme.sizes.base
//       }
//     }
//   }
// );


// export default createAppContainer(screens);


const TabsNavigator = createBottomTabNavigator({
  [Routes.TabsHome]: {
      screen: Browse,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="home"
                  color={tintColor}
                  size={24}
              />
          )
      })
  },
  [Routes.TabsLikes]: {
      screen: Likes,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="heart"
                  color={tintColor}
                  size={24}
              />
          )
      })
  },
  MultiBar: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
          tabBarIcon: () => (
              <MultiBarToggle
                  navigation={navigation}
                  actionSize={30}
                  routes={[
                      {
                          routeName: Routes.OtherScreen,
                          color: '#FF8360',
                          icon: (
                              <Icon
                                  name="rocket"
                                  color="#333333"
                                  size={15}
                              />
                          )
                      },
                      {
                          routeName: Routes.OtherScreen,
                          color: '#E8E288',
                          icon: (
                              <Icon
                                  name="dashboard"
                                  color="#333333"
                                  size={15}
                              />
                          )
                      },
                      {
                          routeName: Routes.OtherScreen,
                          color: '#7DCE82',
                          icon: (
                              <Icon
                                  name="gears"
                                  color="#333333"
                                  size={15}
                              />
                          )
                      },
                  ]}
                  icon={(
                      <Icon
                          name="plus"
                          color="#FFFFFF"
                          size={24}
                      />
                  )}
              />
          )
      }),
      params: {
          navigationDisabled: true
      }
  },
  [Routes.TabsPrivate]: {
      screen: Private,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="lock"
                  color={tintColor}
                  size={24}
              />
          )
      })
  },
  [Routes.TabsProfile]: {
      screen: Profile,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="user"
                  color={tintColor}
                  size={24}
              />
          )
      })
  }
}, {
  tabBarComponent: MultiBar,
  tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
          backgroundColor: '#171F33'
      },
      tabStyle: {}
  }
});

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
  [Routes.Tabs]: TabsNavigator,
  [Routes.OtherScreen]: Settings,
  Welcome,
    Login,
    SignUp,
    Forgot,
    Explore,
    Browse,
    Product,
    Settings,
    List,
    Article
}, {
  // headerMode: 'none'
    defaultNavigationOptions: {
            headerStyle: {
              height: theme.sizes.base * 4,
              backgroundColor: theme.colors.white, // or 'white
              borderBottomColor: "transparent",
              elevation: 0 // for android
            },
            headerBackImage: <Image source={require("../assets/icons/back.png")} />,
            headerBackTitle: null,
            headerLeftContainerStyle: {
              alignItems: "center",
              marginLeft: theme.sizes.base * 2,
              paddingRight: theme.sizes.base
            },
            headerRightContainerStyle: {
              alignItems: "center",
              paddingRight: theme.sizes.base
            }
  }
}
));

export * from './Routes';
export default BaseNavigatorContainer;
// export {BaseNavigatorContainer as BaseNavigator};