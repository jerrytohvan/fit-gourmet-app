import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  FlatList, 
  Image
} from "react-native";


// import Header from './components/Header';
// import ItemsContainer from './components/ItemsContainer';
// import BasketContainer from './components/BasketComponent';
// import Footer from './components/Footer';
import Counter from "react-native-counters";


import { LinearGradient } from "expo-linear-gradient";

import { Block, Text,Button } from "../components";
import Icon from 'react-native-vector-icons/Ionicons';
import SvgUri from 'react-native-svg-uri';


import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");


class ShoppingCart extends Component {

  _renderItem({ item, index }) {
    const { 
      containerStyle, 
      imageStyle, 
      textStyle, 
      counterStyle,
      priceStyle 
    } = styles;

    return (
    <View style={containerStyle}>
      <Image source={item.image} style={imageStyle} />
      
      <View style={textStyle}>
          <Text h4 semibold style={{ color: '#2e2f30' }}>{item.name}</Text>
          <Text h5 style={{ color: '#2e2f30'}}>${item.price} </Text>
      </View>

      <View style={counterStyle}>
          <Counter buttonStyle={{
                borderColor: '#A4CD8C',
                borderWidth: 2,
                borderRadius: 30
              }}
              buttonTextStyle={{
                color: '#A4CD8C',
              }}
              countTextStyle={{
                color: '#A4CD8C',
              }}

              start={item.amountTaken} 
        />
      </View>
    </View>);
  }


  renderItem(){
    const { groceries } = this.props;

      return (
        <FlatList
          data={groceries}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
        />
      );
  }


  renderTotalComponent(){
    const { componentContainerStyle, goodsStyle, totalStyle } = styles;
    return (
      <View style={componentContainerStyle}>
        <View style={goodsStyle}>
        <SvgUri 
                  width="30" 
                  height="30" 
                  source={require('../assets/icons/svg/supermarket.svg')} 
                  style={{ marginRight: 8 }}
                 
                  />
          <Text h2 style={{ color: '#2e2f30' }}> 8 items </Text>
        </View>
        <View style={totalStyle}>
          
          <Text h2 bold style={{ color: '#2e2f30' }}>Total </Text>
          <Text h3 style={{ color: '#2e2f30' }}>$57.5 </Text>
        </View>
      </View>
    );
  }

  renderFooter(){
    const { 
      footerContainerStyle, 
      buttonContainerStyle, 
      closeButtonStyle, 
      checkoutButtonStyle } = styles;
    return (
      <View style={footerContainerStyle}>
        {this.renderTotalComponent()}
        <View style={buttonContainerStyle}>
 
          
        </View>
        {this.renderPaymentButton()}

        {this.renderBackButton()}

      </View>
    );
  }

  renderPaymentButton() {
    const { navigation } = this.props;
    return (
      <Block middle flex={1} margin={[0, theme.sizes.padding * 2]}>

        <Button gradient onPress={() => navigation.navigate("Payment")}>
            <Text center semibold white>
              Proceed to Payment
            </Text>
          </Button>
      </Block>
    );
  }

  renderBackButton() {
    const { navigation } = this.props;
    return (
      <Block middle flex={1} margin={[0, theme.sizes.padding * 2]}>

      <Button shadow onPress={() => navigation.navigate("WizardCheckout")}>
        <Text center semibold>
          Back
        </Text>
      </Button>
      </Block>
    );
  }

  render() { 
    return (
      <SafeAreaView style={styles.container}>
        <Block flex={false} row center space="between" style={styles.header}>
            <Text h1 bold>
            Your Groceries List
            </Text>
          </Block>
        <ScrollView  style={styles.groceriesContainer}>
          <View style={{ flex: 1 }}>
              <View style={styles.mainContainterStyle}>
                {this.renderItem()}
              </View>
           </View> 
        </ScrollView>
       
      <View  style={styles.bottomContainer}>
            {this.renderFooter()}
      </View>
         

      </SafeAreaView>
    );
  }
}


ShoppingCart.defaultProps = {
  groceries: mocks.groceries
};


export default ShoppingCart;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
  groceriesContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bottomContainer: {
    flex: 0.4,
    backgroundColor: "#fff"
  },
  section: {
    flexDirection: "column",
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: "#A4CD8C",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
    marginVertical: 14
  },
  group: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#A4CD8C",
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    padding: 14,
    alignContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500"
  },
  active: {
    backgroundColor: "#A4CD8C"
  },
  activeText: {
    color: "#FFF"
  },
  first: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13
  },
  last: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13
  },
  option: {
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },


  //new
  mainContainterStyle: {
    flex: 4,
    backgroundColor: '#DCDCDC'
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 20,
    paddingLeft: 25,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    paddingLeft: 25,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 60, 
    height: 60, 
    marginRight: 20,
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  basketContainerStyle: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#DCDCDC'
  },
  bagsTextStyle: {
    fontSize: 12
  },
  priceTextStyle: {
    fontSize: 12,
  },  
  footerContainerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  closeButtonStyle: {
    backgroundColor: '#7f8c8d',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3,
  }, 
  checkoutButtonStyle: {
    backgroundColor: '#f39c12',
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
  },
  componentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
