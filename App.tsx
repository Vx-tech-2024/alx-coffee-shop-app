import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

const backgroundImage = require('./assets/images/HomeBackgroundImage.png');

export default function App() {
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

        <TouchableOpacity style={styles.button} onPress={() => alert('Get Started')}>
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
    fontSize: 30,
    color: 'white',
  },
  HomeNormalText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 12,
    color: 'white',
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
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 40,
    width: 327,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
