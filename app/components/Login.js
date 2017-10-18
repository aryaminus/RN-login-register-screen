import React, { Component } from "react";
import {
  AppRegistry,
  StatusBar,
  TouchableOpacity,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import { StackNavigator } from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";

import Register from "./Register1";
import ForgetPassword from "./ForgetPassword";

export default class MainLogin extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  render() {
    return (
      <View style={styles.containerl}>
        <Login navigation={this.props.navigation} />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up"
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("ForgetPassword")}
            title="Forget Password"
          >
            Forget Password
          </Text>
        </TouchableOpacity>
        <Spinner visible={this.state.loading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerl: {
    flex: 1
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  }
});

AppRegistry.registerComponent("Login", () => Login);
