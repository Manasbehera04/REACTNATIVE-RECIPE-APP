import React from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";

import { CATEGORIES, RECIPES } from "../data/dummy-data";

import RecipeList from "../components/RecipeList";

const CategoryRecipesScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const displayedRecipes = RECIPES.filter(
    (recipe) => recipe.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <RecipeList listData={displayedRecipes} navigation={props.navigation} />
  );
};

CategoryRecipesScreen.navigationOptions = (navData) => {
  const categoryId = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryRecipesScreen;
