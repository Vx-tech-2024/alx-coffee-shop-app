import { View, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import OrderCard from "./OrderCard";
import { detailedDrinks } from "../data/detailedDrink";

export default function DeliveryScreen({
  setScreen, currentScreen,
}: {
  setScreen: (screen: "onboarding" | "home" | "detail" | "order" | "delivery") => void;
  currentScreen: "home" | "detail" | "order" | "delivery";
}) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Maps.png")} style={{ width: '100%', height: '55%' }} />
      <Image source={require("../assets/images/DetailDriver.png")} style={{ width: "100%", height: 300,  }} />
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
