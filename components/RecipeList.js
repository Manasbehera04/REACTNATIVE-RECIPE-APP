import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import RecipeItem from "../components/RecipeItem";

const RecipeList = (props) => {
  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectRecipe={() => {
          props.navigation.navigate({
            routeName: "RecipeDetails",
            params: {
              recipeId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderRecipeItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

export default RecipeList;
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
