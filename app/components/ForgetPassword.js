import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
//import { StackNavigator } from "react-navigation";
export default class ForgetPassword extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return <Text>OLA</Text>;
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("ForgetPassword", () => ForgetPassword);
