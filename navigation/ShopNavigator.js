import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen
          name="ProductsOverview"
          component={ProductOverviewScreen}
          options={ProductOverviewScreen.navigationOptions}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={ProductDetailScreen.navigationOptions}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={CartScreen.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
