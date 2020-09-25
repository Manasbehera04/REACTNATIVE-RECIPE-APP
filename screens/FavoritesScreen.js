import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import RecipeList from "../components/RecipeList";
import { RECIPES } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favRecipes = RECIPES.filter(
    (recipe) => recipe.id === "m11" || recipe.id === "m8"
  );

  return <RecipeList listData={favRecipes} navigation={props.navigation} />;
};
FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
