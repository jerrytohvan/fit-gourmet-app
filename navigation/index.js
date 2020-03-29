import React from "react";
import { Image, PixelRatio } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/FontAwesome';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';


import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Bookmarks from '../screens/Bookmarks';
import Likes from '../screens/Likes';
import Private from '../screens/Private';
import Profile from '../screens/Profile';
import List from '../screens/List';
import WizardCheckout from '../screens/WizardCheckout';


import { theme } from "../constants";


//Change default property of the multibartoggle props
//#F4FEC1, #476A6F
MultiBarToggle.defaultProps.toggleColor = "#476A6F";


const TabsNavigator = createBottomTabNavigator({
  Browse: {
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
  Likes: {
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
                          routeName: 'OTHER_SCREEN',
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
                          routeName: 'OTHER_SCREEN',
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
                          routeName: 'OTHER_SCREEN',
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
                      //Change Props icon here, //envira
                          name="leaf"
                          color="#F4FEC1"
                          size={24}
                      />
                  )}
              />
          )
      }),
      params: {
          navigationDisabled: false
      }
  },
  Bookmarks: {
      screen: Bookmarks,
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
  Profile: {
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
      activeTintColor: theme.colors.primary,
      inactiveTintColor: '#586589',
      style: {
          backgroundColor: '#FFFFFF',
          height: PixelRatio.getPixelSizeForLayoutSize(27), 
      },
      tabStyle: {
            
      }
  }
});

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
    Welcome:{
        screen: Welcome,
        navigationOptions: {
            headerBackTitle: null,
        }
                    
    },
    Login: {
        screen: Login,
        navigationOptions: {
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
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
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
    },
    WizardCheckout: {
        screen: WizardCheckout,
        navigationOptions: {
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
    },
    Product: {
        screen: Product,
        navigationOptions: {
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
    },
    Explore: {
        screen: Explore,
        navigationOptions: {
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.white, // or 'white
                borderBottomColor: "transparent",
                elevation: 0 // for android
            },
            headerBackImage: <Image source={require("../assets/icons/back.png")} />,
            headerBackTitle: " ",
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
    },
    
    Browse,
    Forgot,
    Settings,
    List,
    Bookmarks,
    Likes,
    Private,
    Profile,
    Private,
    TabsNavigator:{
        screen: TabsNavigator,
        navigationOptions: {
            header: null
        }
    }
    
}, {
  headerMode: 'screen'
    // defaultNavigationOptions: {
        //disabling headers through `TabNavigation`
         
//   }
}
));

export default BaseNavigatorContainer;
// export {BaseNavigatorContainer as BaseNavigator};