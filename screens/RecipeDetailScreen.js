import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { RECIPES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/CustomHeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const RecipeDetailScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");
  const selectedRecipe = RECIPES.find((cat) => cat.id === recipeId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedRecipe.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedRecipe.duration}m</Text>
        <Text>{selectedRecipe.complexity.toUpperCase()}</Text>
        <Text>{selectedRecipe.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedRecipe.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedRecipe.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

RecipeDetailScreen.navigationOptions = (navData) => {
  const recipeId = navData.navigation.getParam("recipeId");
  const selectedRecipe = RECIPES.find((cat) => cat.id === recipeId);
  return {
    headerTitle: selectedRecipe.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as Favorites");
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : Colors.secondaryColor,
    },
    headerTintColor: "white",
  };
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "dancing-script-regular",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
});
