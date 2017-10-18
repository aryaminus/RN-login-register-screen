import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import { StackNavigator } from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";

import Register from "./Register";
import ForgetPassword from "./ForgetPassword";

export default class MainLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
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
  async onLoginPress() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }
  render() {
    return (
      <View style={styles.containerl}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../images/banana.png")}
            />
            <Text style={styles.subtext}>
              Humdum
            </Text>
          </View>
          <KeyboardAvoidingView style={styles.formContainer}>
            <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#16a085" />
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                style={styles.input}
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLoginPress.bind(this)}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <Text style={styles.errorTextStyle}>{this.state.error}</Text>
              <Spinner visible={this.state.loading} />
            </View>
          </KeyboardAvoidingView>
        </View>
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
  },
  container: {
    flex: 1,
    backgroundColor: "#16a085"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  errorTextStyle: {
    color: "#E64A19",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
});

AppRegistry.registerComponent("Login", () => Login);
