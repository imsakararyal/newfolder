import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import tvShowContent from "../../../assets/news/tvShowContent";

class Button extends React.Component {
  render() {
    const props = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          this.props.navigation.navigate(props.target);
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.button} source={props.image} />
          <View style={styles.overlay}>
            <Text style={styles.buttonText}>{props.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const Menu = props => (
  <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
    <StatusBar />
    <Button
      {...props}
      image={require("../../../assets/news/NZ.jpg")}
      text="BasicUsage"
      target="basicUsage"
    />
    <Button
      {...props}
      image={tvShowContent.image}
      text="TV Show"
      target="tvShow"
    />
    <Button
      {...props}
      image={require("../../../assets/news/cutecat.jpg")}
      text="Cute cat"
      target="colors"
    />
    <Button
      {...props}
      image={require("../../../assets/news/avignon.jpg")}
      text="Flatlist"
      target="avignon"
    />
    <Button
      {...props}
      image={require("../../../assets/news/pullrefresh.jpg")}
      text="Pull To Refresh"
      target="pullrefresh"
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  pageContent: {
    alignItems: "stretch",
    padding: 30
  },
  button: {
    height: 100,
    width: Dimensions.get("window").width - 60,
    position: "absolute"
  },
  buttonText: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 20,
    fontWeight: "bold"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    height: 100,
    width: Dimensions.get("window").width - 60,
    borderRadius: 10,
    marginVertical: 15
  }
});

export default Menu;
