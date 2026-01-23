import { View, Text, StyleSheet } from "react-native";
import Footer from "./Footer";
import OrderCard from "./OrderCard";

export default function OrderScreen({
  setScreen, currentScreen,
}: {
  setScreen: (screen: "onboarding" | "home" | "detail" | "order") => void;
  currentScreen: "home" | "detail" | "order";
}) {
  return (
    <View style={styles.container}>
      <OrderCard />
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
