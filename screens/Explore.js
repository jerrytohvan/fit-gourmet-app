import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as Icon from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { Button, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Explore extends Component {
  static navigationOptions = {
    // header: null,
    // headerStyle: {
    //   height: theme.sizes.base * 4,
    //   backgroundColor: theme.colors.white, // or 'white
    //   borderBottomColor: "transparent",
    //   elevation: 0 // for android
    // },
    // headerBackImage: <Image source={require("../assets/icons/back.png")} />,
    // headerBackTitle: " ",
    // headerLeftContainerStyle: {
    //     alignItems: "center",
    //     marginLeft: theme.sizes.base * 2,
    //     paddingRight: theme.sizes.base
    // },
    // headerRightContainerStyle: {
    //     alignItems: "center",
    //     paddingRight: theme.sizes.base
    // }
  };

  state = {
    searchFocus: new Animated.Value(0.6),
    searchString: null,
  };

  handleSearchFocus(status) {
    Animated.timing(this.state.searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150 // ms
    }).start();
  }

  renderSearch() {
    const { searchString, searchFocus } = this.state;
    const isEditing = searchFocus && searchString;

    return (
      <Block animated middle flex={searchFocus} style={styles.search}>
        <Input
          placeholder="Search"
          placeholderTextColor={theme.colors.gray2}
          style={styles.searchInput}
          onFocus={() => this.handleSearchFocus(true)}
          onBlur={() => this.handleSearchFocus(false)}
          onChangeText={text => this.setState({ searchString: text })}
          value={searchString}
          onRightPress={() =>
            isEditing ? this.setState({ searchString: null }) : null
          }
          rightStyle={styles.searchRight}
          rightLabel={
            <Icon.FontAwesome
              name={isEditing ? "close" : "search"}
              size={theme.sizes.base / 1.6}
              color={theme.colors.gray2}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    );
  }

  renderImage(img, index) {
    const { navigation } = this.props;
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - theme.sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 50 ? fullWidth : sizes.width * 1;

    return (
      <TouchableOpacity
        key={`img-${index}`}
          //pass product id or name to Product page 
        onPress={() => navigation.navigate("Product", {name: "Japanese Soba Noodles Salad"})}
      >
        <Image
          source={img}
          style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
        />
      </TouchableOpacity>
    );
  }

  renderExplore() {
    const { images, navigation } = this.props;
    const mainImage = images[0];

    return (
      <Block style={{ marginBottom: -height/3 }}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          onPress={() => navigation.navigate("Product")}
        >
          <Image source={mainImage} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <Block row space="between" wrap>
          {images.slice(1).map((img, index) => this.renderImage(img, index))}
        </Block>
      </Block>
    );
  }



  render() {
    const { navigation } = this.props;
    return (
      
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            {navigation.state.params.cat.name}
          </Text>
          {this.renderSearch()}
        </Block>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
          {this.renderExplore()}
        </ScrollView>

      </Block>
    );
  }

}

export default Explore;

Explore.defaultProps = {
  images: mocks.explore
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
    // paddingTop: theme.sizes.base * 8
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: "rgba(142, 142, 147, 0.06)",
    borderColor: "rgba(142, 142, 147, 0.06)",
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent"
  },
  searchIcon: {
    position: "absolute",
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6
  },
  explore: {
    marginHorizontal: theme.sizes.padding * 1.25,
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - theme.sizes.padding * 2.5,
    marginBottom: theme.sizes.base,
    borderRadius: 4
  },
  mainImage: {
    minWidth: width - theme.sizes.padding * 2.5,
    minHeight: width - theme.sizes.padding * 2.5
  }
})

