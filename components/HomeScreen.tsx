import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";

const bannerImage = require("../assets/images/Banner.png");
const links = [
  'All Coffee', 'Machiato', 'Latte', 'Americano', 'Flat White'
];

export default function HomeScreen() {
  const [ activeLink, setActiveLink ] = useState("All Coffee");

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
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thelinks}
            style={{ width: "100%" }}
          >
            {links.map((link) => {
              const isActive = activeLink === link;

              return (
                <TouchableOpacity
                  key={link}
                  style={[
                    styles.linkbutton,
                    isActive && styles.activeLinkButton,
                  ]}
                  onPress={() => setActiveLink(link)}
                >
                  <Text
                    style={[
                      styles.linkText,
                      isActive && styles.activeLinkText,
                    ]}
                  >
                    {link}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>

      {/* FLOATING PROMO BANNER */}
      <View
        style={styles.Banner}
        pointerEvents="none"
      >
        <ImageBackground
          source={bannerImage}
          style={styles.Banner}
          imageStyle={styles.bannerImage}
        />
      </View>
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
  safeArea: {
    backgroundColor: '#fff',
    width: "100%",
  },
  thelinks: {
    alignItems: 'center',
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  linkbutton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    
  },
  linkText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'normal'
  },
  activeLinkButton: {
    backgroundColor: "#C67C4E",
  },
  activeLinkText: {
    color: "#fff",
    fontWeight: "600",
  }

});
