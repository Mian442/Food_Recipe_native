import * as React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import EditScreen from "../components/UpdateInfo/UpdateUserInfo";
import DisplayUserCustomizeList from "../components/ProjectComponents/Favourite/DisplayUserCustomeList";
import FoodDisplayList from "../components/ProjectComponents/foodlist";
import AddRecipeScreen from "../components/ProjectComponents/addrecipe";
import { Icon } from "native-base";
import LoginScreen from "../components/ProjectComponents/logegin";
//import FoodScreen from "../screens/ItemDetailScreen/Fooddetail";
import FavouriteScreen from "../components/ProjectComponents/Favourite/Favourite";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen
        name="FoodDisplayList"
        component={FoodDisplayList}
        options={{ title: "Food List" }}
      />
      <Stack.Screen
        name="DisplayList"
        component={DisplayUserCustomizeList}
        options={{ title: "Recipe List" }}
      />
      <Stack.Screen
        name="AddRecipe"
        component={AddRecipeScreen}
        options={{ title: "Add Recipe" }}
      />
      {/* <Stack.Screen name="Food" component={FoodScreen} /> */}
      <Stack.Screen name="Details" component={LoginScreen} />
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
    </Stack.Navigator>
  );
}
