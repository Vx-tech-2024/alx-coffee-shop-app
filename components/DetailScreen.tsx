import { View, Text, StyleSheet } from "react-native";
import { DrinkDetail } from "../interfaces/Drink";
import { detailedDrinks } from "../data/detailedDrink";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";
import DrinkCard from "./DrinkCard";
import OrderScreen from "./OrderScreen";
import DetailCard from "./DetailCard";

export default function DetailScreen({
  setScreen, currentScreen,
}: {
  setScreen: (screen: "onboarding" | "home" | "detail") => void;
  currentScreen: "home" | "detail";
}) {
  return (
    <View style={styles.container}>
      <DetailCard drinkId="1" />

      <Footer setScreen={setScreen} currentScreen={currentScreen} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
