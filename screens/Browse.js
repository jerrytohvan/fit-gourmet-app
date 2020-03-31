import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  PixelRatio
} from "react-native";

import { Card, Badge, Button, Block, Text} from "../components";
import { theme, mocks} from "../constants";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const { width } = Dimensions.get("window");


class Browse extends Component {
  state = {
    active: "All",
    categories: []
  };
  

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };


  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  renderMenu(){
    return ( 
      <Block>
        <Text>
          Test
        </Text>
      </Block>

    )
  }


  renderDestinations = () => {
    return (
      <View style={[ styles.column, styles.destinations ]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible' }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {/* {this.renderDots()} */}
      </View>
    );
  }

  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes_home.radius }}
          // source={{ uri: item.preview }}
          source={ item.preview}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              {/* <Image source={{ uri: item.user.avatar }} style={styles.avatar} /> */}
              <Image source={ item.user.avatar } style={styles.avatar} />

            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes_home.padding / 2 }]}>
              <Text style={{ color: theme.colors_home.white, fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{ color: theme.colors_home.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes_home.font * 0.8}
                  color={theme.colors_home.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text style={{ fontSize: theme.sizes_home.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
              {item.title}
            </Text>
            <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
              <Text style={{ color: theme.colors_home.caption }}>
                {item.description.split('').slice(0, 50)}...
              </Text>
              <FontAwesome
                name="chevron-right"
                size={theme.sizes_home.font * 0.75}
                color={theme.colors_home.caption}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }




  render() {
    
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    // const tabs = ["Products", "Inspirations", "Shop"];
    const tabs = ["All", "Healthy", "Inspirations", "Indulge"];

    return (
     
      <Block marginTop={theme.sizes.base * 5}>

        <ScrollView>

        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
           {/* CHANGE USER NAME HERE */}
            Hello {"John"}
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            {/* CHANGE USER DP HERE */}
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

            {/* RECOMMENDATION BAR */}
            <Block flex={false} row center space="between" style={styles.headings_white_space}>
                <Text h3 bold>
                  Recommendations for you
                </Text>
              </Block>

          <Block flex={false} row center>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: theme.sizes_home.padding }}
                >
              {this.renderDestinations()}
              </ScrollView>
              </Block>


            {/* CATEGORIES TAB */}
        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>

          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate("Explore", { cat: category})}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {category.count} recipes
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>

        </ScrollView>

      </Block>
    );
  }
}

Browse.defaultProps = {
  destinations: mocks.recipes,
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;


const styles = StyleSheet.create({
  
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  headings_white_space: {
    paddingHorizontal: theme.sizes.base,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(7)
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  },


  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors_home.white,
    paddingHorizontal: theme.sizes_home.padding,
    paddingTop: theme.sizes_home.padding *0.4,
    paddingBottom: theme.sizes_home.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
  },
  destination: {
    width: width - (theme.sizes_home.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes_home.margin,
    paddingHorizontal: theme.sizes_home.padding,
    paddingVertical: theme.sizes_home.padding * 0.66,
    borderRadius: theme.sizes_home.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes_home.radius,
    paddingHorizontal: theme.sizes_home.padding,
    paddingVertical: theme.sizes_home.padding / 2,
    bottom: -theme.sizes_home.padding,
    right: theme.sizes_home.padding,
    left: theme.sizes_home.padding,
    backgroundColor: theme.colors_home.white,
  },
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes_home.padding,
    marginVertical: theme.sizes_home.margin * 0.66
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes_home.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors_home.white,
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes_home.border,
    borderTopLeftRadius: theme.sizes_home.border,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes_home.border,
    borderTopLeftRadius: theme.sizes_home.border,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes_home.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes_home.font * 1.25,
    color: theme.colors_home.white
  },
  recommendationImage: {
    width: (width - (theme.sizes_home.padding * 2)) / 2,
    height: (width - (theme.sizes_home.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes_home.padding,
    height: theme.sizes_home.padding,
    borderRadius: theme.sizes_home.padding / 2,
  },
  rating: {
    fontSize: theme.sizes_home.font * 2,
    color: theme.colors_home.white,
    fontWeight: 'bold'
  },
  shadow: {
    shadowColor: theme.colors_home.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors_home.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors_home.active,
  }
});
