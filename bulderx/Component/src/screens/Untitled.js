import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Curso-autocad-2011-planta-baixa-ACAD11-PB-slideshow-08.jpg")}
          resizeMode="contain"
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.button2}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.button3}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Untitled1")}
          style={styles.button}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.button4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 141.21,
    left: -66.88,
    width: 492.02,
    height: 361.73,
    position: "absolute",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  button2: {
    top: 103.68,
    left: 198.03,
    width: 125.79,
    height: 173.72,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  button3: {
    top: 416.67,
    left: 198.03,
    width: 125.79,
    height: 127.29,
    backgroundColor: "rgba(223,0,0,1)",
    position: "absolute",
    opacity: 0
  },
  button: {
    top: 103.68,
    left: 36.3,
    width: 142.83,
    height: 228.87,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  button4: {
    top: 347.78,
    left: 36.3,
    width: 142.83,
    height: 113.81,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  }
});
