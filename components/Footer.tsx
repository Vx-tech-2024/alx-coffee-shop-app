import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomeImage = require("../assets/images/Home.png");
const HeartImage = require("../assets/images/Heart.png");
const BagImage = require("../assets/images/Bag.png");
const NotificationImage = require("../assets/images/Notification.png");

export default function Footer({ setScreen, currentScreen }: { setScreen: (screen: "onboarding" | "home" | "detail") => void; currentScreen: "home" | "detail" }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => setScreen("home")}>
        <Image source={HomeImage} style={[styles.icon, currentScreen === "home" && styles.activeIcon]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen("detail")}>
        <Image source={HeartImage} style={[styles.icon, currentScreen === "detail" && styles.activeIcon]} />
      </TouchableOpacity>

      <Image source={BagImage} style={styles.icon} />
      <Image source={NotificationImage} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  icon: {
    width: 24,
    height: 35,
    resizeMode: "contain",
    opacity: 0.4,
  },
  activeIcon: {
    opacity: 1,
    tintColor: "#C67C4E",
  },
});
