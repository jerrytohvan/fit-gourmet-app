import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Icon from "react-native-vector-icons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SvgUri from 'react-native-svg-uri';

import { Block, Text,Button } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

import Counter from "react-native-counters";

const steak_icon = require('../assets/icons/svg/steak.svg');
const fish_icon = require('../assets/icons/svg/fish.svg');
const brocolli_icon = require('../assets/icons/svg/broccoli.svg');
const cabbage_icon = require('../assets/icons/svg/cabbage.svg');
const tomato_icon = require('../assets/icons/svg/tomato.svg');
const carrot_icon = require('../assets/icons/svg/carrot.svg');
const heart_icon = require('../assets/icons/svg/heart.svg');
const bread_icon =  require('../assets/icons/svg/bread-1.svg');
const pork_icon = require('../assets/icons/svg/pork.svg');
const meat_icon = require('../assets/icons/svg/meat-1.svg');
const nuts_icon = require('../assets/icons/svg/pistachio.svg');
const milk_icon = require('../assets/icons/svg/milk.svg');
const beans_icon = require('../assets/icons/svg/beans.svg');
const egg_icon = require('../assets/icons/svg/egg.svg');
const oat_icon = require('../assets/icons/svg/oat.svg');






// https://www.robinwieruch.de/react-state-array-add-update-remove
// https://github.com/tsepeti/react-native-counters

class WizardCheckout extends Component {
  state = {
    meal: "omnivore",
    lowcal: "",
    lowcarb: "",
    price: "free",
    pork: "",
    red_meat: "",
    shellfish: "",
    nuts: "",
    milk: "",
    soy: "",
    eggs: "",
    wheat: "",
    pax: 2
  }
  
  //Declare images


  renderSubmitButton() {
    const { navigation } = this.props;
    return (
      <LinearGradient
        locations={[0.5, 1]}
        style={styles.footer}
        colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"]}
      >
        <Button 
        gradient style={{ width: width / 2.678 }}
        onPress={() => navigation.navigate("ShoppingCart")}
        >
          <Text bold white center>
            Checkout
          </Text>
        </Button>
      </LinearGradient>
    );
  }

  render() { 
  
    var activeType = key => this.state.type === key;


    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>

        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
           Your Diet Plans 
          </Text>
        </Block>

        {/*  DIET TYPE */}
        <View style={styles.section}>
            <View>
              <Text style={styles.title}>Your Diet</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  this.state.meal === "omnivore" ? styles.active : null
                ]}
                onPress={() => this.setState({ meal: "omnivore" })}
              >
                <View style={{ flexDirection: "row" }}>
                <SvgUri 
                  width="20" 
                  height="20" 
                  source={steak_icon} 
                />
                 <SvgUri 
                  width="20" 
                  height="20" 
                  source={fish_icon} 
                />
                  <SvgUri 
                  width="20" 
                  height="20" 
                  source={brocolli_icon} 
                />
                </View>
                <Text
                  style={[
                    styles.buttonText,
                    this.state.meal === "omnivore" ? styles.activeText : null
                  ]}
                >
                  Omnivore
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  this.state.meal === "pescatarian"  ? styles.active : null
                ]}
                onPress={() => this.setState({ meal: "pescatarian" })}
              >
                <View style={{ flexDirection: "row" }}>
                
                  <SvgUri 
                  width="20" 
                  height="20" 
                  source={fish_icon} 
                />
                  <SvgUri 
                  width="20" 
                  height="20" 
                  source={brocolli_icon} 
                />
                 
                 </View>
                 
                <Text
                  style={[
                    styles.buttonText,
                    this.state.meal === "pescatarian" ? styles.activeText : null
                  ]}
                >
                 
                 
                  Pescatarian
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.last,
                  this.state.meal === "vegetarian"  ? styles.active : null
                ]}
                onPress={() => this.setState({ meal: "vegetarian" })}
              >

                <View style={{ flexDirection: "row" }}>
                <SvgUri 
                  width="20" 
                  height="20" 
                  source={cabbage_icon} 
                />
                <SvgUri 
                  width="20" 
                  height="20" 
                  source={carrot_icon} 
                />

                 <SvgUri 
                  width="20" 
                  height="20" 
                  source={tomato_icon} 
                />
                 </View>
                 
                <Text
                  style={[
                    styles.buttonText,
                   this.state.meal === "vegetarian"  ? styles.activeText : null
                  ]}
                >
                  Vegetarian
                </Text>
              </TouchableOpacity>
            </View>
          </View>

{/* MEAL TYPE */}
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Your Meal Type</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  this.state.lowcal === "low-calories" ? styles.active : null
                ]}
                onPress={() =>
                  this.state.lowcal === "low-calories" ?
                   this.setState({ lowcal: "" }) : this.setState({ lowcal: "low-calories" })  
                  }
              >
             

                <SvgUri 
                  width="30" 
                  height="30" 
                  source={heart_icon} 
                />
                <Text
                  style={[
                    styles.buttonText,
                    this.state.lowcal  === "low-calories" ? styles.activeText : null
                  ]}
                >
                  Low-Calories
                </Text>
              </TouchableOpacity>



              <TouchableOpacity
                style={[
                  styles.button,
                  styles.last,
                  this.state.lowcarb  === "low-carbs" ? styles.active : null
                ]}

                onPress={() => 
                  this.state.lowcarb === "low-carbs" ?
                  this.setState({ lowcarb: "" }) : this.setState({ lowcarb: "low-carbs" })  
                }
              >
            

                <SvgUri 
                width="40" 
                height="40" 
                source={bread_icon} 

                />
                <Text
                  style={[
                    styles.buttonText,
                    this.state.lowcarb  === "low-carbs" ? styles.activeText : null 
                  ]}
                >
                  Low-Carbs
                </Text>
              </TouchableOpacity>
             
            </View>
          </View>

         
{/* ALLERGIES  */}
          
        <View style={styles.section}>
            <View>
              <Text style={styles.title}>Food Restrictions and Allergies</Text>
            </View>
                            {/* <View style={{ flexDirection: "row" }}> */}

            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.pork === "pork" ? styles.active : null
                ]}
                onPress={() => 
                  this.state.pork === "pork" ?
                  this.setState({ pork: "" }) : this.setState({ pork: "pork" })  
                }
              >


              <SvgUri 
                width="40" 
                height="40" 
                source={pork_icon} 

                />

                <Text
                  style={[
                    styles.buttonText,
                    this.state.pork === "pork" ? styles.activeText : null
                  ]}
                >
                  Pork
                </Text>
              </TouchableOpacity>
            </View>

        <View style={styles.group}>

              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.red_meat === "red_meat"  ? styles.active : null
                ]}
  

                onPress={() => 
                  this.state.red_meat === "red_meat" ?
                  this.setState({ red_meat: "" }) : this.setState({ red_meat: "red_meat" })  
                }
              >
                
              <SvgUri 
                width="30" 
                height="30" 
                source={meat_icon} 
              />
          
                 
                <Text
                  style={[
                    styles.buttonText,
                    this.state.red_meat === "red_meat" ? styles.activeText : null
                  ]}
                >
                  Red Meat
                </Text>
              </TouchableOpacity>
              </View>

              <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.nuts === "nuts"  ? styles.active : null
                ]}
                
                onPress={() => 
                  this.state.nuts === "nuts" ?
                  this.setState({ nuts: "" }) : this.setState({ nuts: "nuts" })  
                }
              >

              <SvgUri 
                width="30" 
                height="30" 
                source={nuts_icon} 
              />
          
          
                  
                <Text
                  style={[
                    styles.buttonText,
                   this.state.nuts === "nuts"  ? styles.activeText : null
                  ]}
                >
                  Nuts
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.milk === "milk"  ? styles.active : null
                ]}
                onPress={() => 
                  this.state.milk === "milk" ?
                  this.setState({ milk: "" }) : this.setState({ milk: "milk" })  
                }
              >

              <SvgUri 
                width="30" 
                height="30" 
                source={milk_icon} 
              />
          
          
                  
                <Text
                  style={[
                    styles.buttonText,
                   this.state.milk === "milk"  ? styles.activeText : null
                  ]}
                >
                  Milk
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.soy === "soy"  ? styles.active : null
                ]}
                onPress={() => 
                  this.state.soy === "soy" ?
                  this.setState({ soy: "" }) : this.setState({ soy: "soy" })  
                }
              >

              <SvgUri 
                width="30" 
                height="30" 
                source={beans_icon} 
              />
          
                <Text
                  style={[
                    styles.buttonText,
                   this.state.soy === "soy"  ? styles.activeText : null
                  ]}
                >
                  Soy
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.eggs === "eggs"  ? styles.active : null
                ]}
                onPress={() => 
                  this.state.eggs === "eggs" ?
                  this.setState({ eggs: "" }) : this.setState({ eggs: "eggs" })  
                }
              >

              <SvgUri 
                width="30" 
                height="30" 
                source={egg_icon} 
              />
          
                <Text
                  style={[
                    styles.buttonText,
                   this.state.eggs === "eggs"  ? styles.activeText : null
                  ]}
                >
                  Eggs
                </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  styles.last,
                  this.state.wheat === "wheat"  ? styles.active : null
                ]}
                onPress={() => 
                  this.state.wheat === "wheat" ?
                  this.setState({ wheat: "" }) : this.setState({ wheat: "wheat" })  
                }            
                  >

              <SvgUri 
                width="30" 
                height="30" 
                source={oat_icon} 
              />
          
                <Text
                  style={[
                    styles.buttonText,
                   this.state.wheat === "wheat"  ? styles.activeText : null
                  ]}
                >
                  Wheat
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Number of Pax</Text>
            </View>
            <View style={{flex:1,        justifyContent: 'center',
 flexDirection:'row-reverse'}}>
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

                start={ this.state.pax}  />
          </View>
          </View>

          <View style={{flex:1,        justifyContent: 'center',  flexDirection:'row-reverse'}}>
             {this.renderSubmitButton()}
          </View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// const moduleState = state => ({
//   filters: state.campings.filters,
//   loading: state.campings.loading
// });

const moduleActions = {
  // setFilters
};

export default WizardCheckout;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
    // paddingTop: theme.sizes.base * 8
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  // header: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: height * 0.1,
  //   width: width,
  //   paddingHorizontal: 14
  // },
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
  }
});
