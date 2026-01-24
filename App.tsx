import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";
import OrderScreen from "./components/OrderScreen";
import DeliveryScreen from "./components/DeliveryScreen";


const backgroundImage = require('./assets/images/HomeBackgroundImage.png');

export default function App() {

  const [screen, setScreen] = useState<"onboarding" | "home" | "detail" | "order" | "delivery">("onboarding");
  const [selectedDrinkId, setSelectedDrinkId] = useState<string | null>(null);

  
  if (screen === "home") {
    return <HomeScreen setScreen={setScreen} currentScreen="home" />
  }
  
  if (screen === "detail") {
    return <DetailScreen setScreen={setScreen} currentScreen="detail" />
  }

  if ( screen === "order") {
    return <OrderScreen setScreen={setScreen} currentScreen="order" />
  }

  if (screen === "delivery") {
    return <DeliveryScreen setScreen={setScreen} currentScreen="delivery" />  
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.HomeText}>
          <Text style={styles.HomeBoldText}>
            Fall in Love With Coffee in Blissful Delight!
          </Text>
          <Text style={styles.HomeNormalText}>
            Welcome to our cozy coffee corner, where every cup is a delight for you.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setScreen("home")}>
          <Text style={styles.buttonLabel}>Get Started</Text>
        </TouchableOpacity>
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  HomeText: {
    marginTop: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeBoldText: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FFFFFF',
    width: 327,
    height: 144,
    fontFamily: 'Sora',
    fontWeight: '600',
    lineHeight: 48,
    letterSpacing: 0.5,
  },
  HomeNormalText: {
    textAlign: 'center',
    marginTop: 12,
    color: 'white',
    width: 327,
    height: 42,
    fontFamily: "Sora",
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',


  },
  button: {
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 40,
    width: 327,
    height: 56,
    gap: 10,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Sora',
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0,    
  },
});
