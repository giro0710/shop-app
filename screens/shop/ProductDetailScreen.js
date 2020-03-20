import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import * as cartActions from "../../store/actions/cart";

const ProductDetailScreen = props => {
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(
      prod => prod.id === props.route.params.productId
    )
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: "center"
  },
  price: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20
  }
});

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.route.params.productTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default ProductDetailScreen;
