import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

import ShopNavigator from "./navigation/ShopNavigator";

enableScreens();

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
