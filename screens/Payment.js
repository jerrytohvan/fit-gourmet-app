import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Picker,
  View
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");


import { CreditCardInput } from "react-native-credit-card-input";

//https://github.com/sbycrosz/react-native-credit-card-input

class Payment extends Component {
  state = {
    name: "",
    address: "",
    mobile: "",
    country: "",
    city: "",
    zip: "",
    errors: [],
    loading: false
  };
  

  handleForm() {
    const { navigation } = this.props;
    const { name, address, mobile, country, city,zip } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    

    // check with backend API or with some static data
    if (name === "") {
      errors.push("name");
    }
    if (address === "") {
      errors.push("address");
    }
    if (country === "") {
      errors.push("country");
    }
    if (city === "") {
      errors.push("city");
    }
    if (zip === "") {
      errors.push("zip");
    }


    if (mobile === "") {
      errors.push("mobile");
    }

    this.setState({ errors, loading: false });

    //IF NO ERROR MOVE TO PAGE
    if (!errors.length) {
      navigation.navigate("");
    }
  }
  
  renderAddressForm(){
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    
  
    return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
          <Text h2 bold>
            Shipping Address
          </Text>
            <Input
              label="Full Name"
              error={hasErrors("name")}
              style={[styles.input, hasErrors("name")]}
              // defaultValue={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />

            <Input
              label="Address"
              error={hasErrors("address")}
              style={[styles.input, hasErrors("address")]}
              // defaultValue={this.state.name}
              onChangeText={text => this.setState({ address: text })}
            />
    

            <Input
              label="Country"
              error={hasErrors("country")}
              style={[styles.input, hasErrors("country")]}
              // defaultValue={this.state.name}
              onChangeText={text => this.setState({ country: text })}
            />

             <Input
              label="City"
              error={hasErrors("city")}
              style={[styles.input, hasErrors("city")]}
              // defaultValue={this.state.name}
              onChangeText={text => this.setState({ city: text })}
            />  
            <Input
              label="Zipcode"
              error={hasErrors("zip")}
              style={[styles.input, hasErrors("zip")]}
              // defaultValue={this.state.name}
              onChangeText={text => this.setState({ zip: text })}
            />  

      
            <Input
              label="Mobile No."
              error={hasErrors("mobile")}
              style={[styles.input, hasErrors("mobile")]}
              // defaultValue={this.state.name}
              onChangeText={text => this.setState({ mobile: text })}
            />

           
            <Button gradient onPress={() => this.handleForm()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Confirm Order
                </Text>
              )}
            </Button>

          
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }

  renderCreditCard(){
    return(
      <Block style={styles.payment}>
          <CreditCardInput onChange={this._onChange} />
      </Block>
      );
  }

    render(){
      return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
          <Block flex={false} row center space="between" style={styles.header}>
              <Text h1 bold>
            Payment
          </Text>
        </Block>
        {this.renderCreditCard()}
        {this.renderAddressForm()}
      
    </SafeAreaView>
    </ScrollView>
    );
    
  }
}


const moduleActions = {
  // setFilters
};

export default Payment;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2 ,
    // paddingTop: theme.sizes.base * 8
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  payment:{
    paddingBottom: 40
  },
  login: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
  
});
