import React from "react";
import { StyleSheet, View } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";


// import all used images
const images = [
  require("./assets/icons/back.png"),
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/illustration_1.png"),
  require("./assets/images/illustration_2.png"),
  require("./assets/images/illustration_3.png"),
  require("./assets/images/avatar.png"),


    // WizardCheckout
  require('./assets/icons/svg/steak.svg'),
  require('./assets/icons/svg/fish.svg'),
  require('./assets/icons/svg/broccoli.svg'),
  require('./assets/icons/svg/cabbage.svg'),
  require('./assets/icons/svg/tomato.svg'),
  require('./assets/icons/svg/carrot.svg'),
  require('./assets/icons/svg/heart.svg'),
  require('./assets/icons/svg/bread-1.svg'),
  require('./assets/icons/svg/pork.svg'),
  require('./assets/icons/svg/meat-1.svg'),
  require('./assets/icons/svg/pistachio.svg'),
  require('./assets/icons/svg/milk.svg'),
  require('./assets/icons/svg/beans.svg'),
  require('./assets/icons/svg/egg.svg'),
  require('./assets/icons/svg/oat.svg'),

  // Explore
  require("./assets/images/foods/japan/soba-noodles.jpg"),
  require("./assets/images/foods/japan/okinawa-diet.png"),
  require("./assets/images/foods/japan/chicken-and-vegetable-katsu.png"),
  require("./assets/images/foods/japan/rsz_ramen.png"),
  require("./assets/images/foods/japan/japanese-pancake-FFGF-RCP-600x450.png"),
  require("./assets/images/foods/japan/shrimp-fritters-f2.png"),
  require("./assets/images/foods/japan/Asian-salmon-700-1.png"),

  //ShoppingCart
  require('./assets/icons/groceries/sesame.png'),
  require('./assets/icons/groceries/rice-vinegar.png'),
  require('./assets/icons/groceries/avocado.png'),
  require('./assets/icons/groceries/lemon.png'),
  require('./assets/icons/groceries/edamame.png'),
  require('./assets/icons/groceries/sesame-snaps.png'),
  require('./assets/icons/groceries/red-radish.jpg'),
  require('./assets/icons/groceries/fresh-mints.jpg'),
  require('./assets/icons/groceries/tamari.png'),
  require('./assets/icons/groceries/sesame-oil.png'),
  require('./assets/icons/groceries/ginger.png'),
  require('./assets/icons/groceries/garlic.png'),
  require('./assets/icons/groceries/honey.png'),
  require('./assets/icons/groceries/soba.png'),

  //browse,
  require('./assets/images/gordon_ramsay.jpg'),
  require('./assets/images/grilled_salmon.png'),
  require('./assets/images/jamie_oliver.jpg'),
  require('./assets/images/seafood_rissoto.jpg')
  
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});