import { View, Text, StyleSheet, ImageBackground } from "react-native";

const bannerImage = require("../assets/images/Banner.png");

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* BLACK HEADER */}
      <View style={styles.TopBlackBackground}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.location}>Bilzen, Tanjungbalai</Text>

        <View style={styles.searchBar}>
          <Text style={{ color: "#999" }}>Search coffee</Text>
        </View>
      </View>

      {/* WHITE GAP (behind banner) */}
      <View style={styles.whitesecondbackground} />

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>All Coffee</Text>
        {/* Coffee cards go here */}
      </View>

      {/* FLOATING PROMO BANNER */}
      <ImageBackground
        source={bannerImage}
        style={styles.Banner}
        imageStyle={styles.bannerImage}
      >

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* BLACK HEADER */
  TopBlackBackground: {
    height: 280,
    backgroundColor: "#111",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: 375,
  },

  locationLabel: {
    color: "#aaa",
    fontSize: 12,
  },

  location: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  searchBar: {
    height: 52,
    backgroundColor: "#222",
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
  },

  /* WHITE GAP */
  whitesecondbackground: {
    height: 60,
    backgroundColor: "#fff",
  },

  /* CONTENT */
  content: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    width: 375,
    height: 436,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  /* PROMO BANNER */
  Banner: {
    position: "absolute",
    top: "26%",
    alignSelf: "center",
    width: 327,
    height: 140,
    borderRadius: 16,
    overflow: "hidden",
    paddingTop: 211,
  },

  bannerImage: {
    borderRadius: 20,
  },

  promoBadge: {
    backgroundColor: "#eee",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    margin: 16,
  },

  promoText: {
    fontWeight: "600",
  },
});
