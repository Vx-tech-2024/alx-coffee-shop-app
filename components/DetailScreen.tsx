import { View, Text, StyleSheet } from "react-native";
import { DrinkDetail } from "../interfaces/Drink";
import { detailedDrinks } from "../data/detailedDrink";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";
import DrinkCard from "./DrinkCard";
import OrderScreen from "./OrderScreen";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Item Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
