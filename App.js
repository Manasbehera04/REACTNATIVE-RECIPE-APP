import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import RecipesNavigator from "./navigator/RecipesNavigator";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "dancing-script-regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "dancing-script-bold": require("./assets/fonts/DancingScript-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return <RecipesNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "dancing-script-bold",
    fontSize: 22,
  },
});
