import { View, Text, StyleSheet } from "react-native";
import Footer from "./Footer";
import OrderCard from "./OrderCard";
import { detailedDrinks } from "../data/detailedDrink";
import { useState } from "react";
import { Drink } from "../interfaces/Drink";
import { DeliveryScreen } from "./DeliveryScreen";

export default function OrderScreen({
  setScreen, currentScreen,
}: {
  setScreen: (screen: "onboarding" | "home" | "detail" | "order" | "delivery") => void;
  currentScreen: "home" | "detail" | "order" | "delivery";
}) {
  return (
    <View style={styles.container}>
      <OrderCard order={detailedDrinks[0]} />
      <Footer setScreen={setScreen} currentScreen={currentScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#000",
    
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
