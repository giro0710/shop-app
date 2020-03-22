import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
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
  );
};

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={OrdersScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Products"
          component={ProductsNavigator}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={Platform.OS == "android" ? "md-cart" : "ios-cart"}
                color={color}
                size={size}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersNavigator}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={Platform.OS == "android" ? "md-list" : "ios-list"}
                color={color}
                size={size}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
