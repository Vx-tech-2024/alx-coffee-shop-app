import { View,Image, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";
import DrinkCard  from "./DrinkCard";
import { drinks } from "../data/drink";
import Footer from "./Footer";
import DetailScreen  from "./DetailScreen";

const bannerImage = require("../assets/images/Banner.png");
const links = [
  'All Coffee', 'Machiato', 'Latte', 'Americano', 'Flat White'
];
const FilterImage = require("../assets/images/Filter.png");
const SearchIcon = require("../assets/images/downloadwhite.png");
const arrowdown = require("../assets/images/whitearrowdown.png");

export default function HomeScreen({ setScreen, currentScreen, }: { setScreen: (screen: "onboarding" | "home" | "detail") => void; currentScreen: "home" | "detail" }) {
  const [ activeLink, setActiveLink ] = useState("All Coffee");

  return (
    <View style={styles.container}>

      {/* BLACK HEADER */}
      <View style={styles.TopBlackBackground}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.location}>Bilzen, Tanjungbalai {<Image source={arrowdown} style={styles.arrowdown} />}</Text>

        <View style={styles.searcharea}>
           <View style={styles.searchBar}>
              <View style={styles.searchIcon}>
                 <Image source={SearchIcon} />
              </View>
              <Text style={{ color: "#A2A2A2" }}>Search coffee</Text>
           </View>
           <View style={styles.filterIcon}>
              <Image source={FilterImage} />
           </View>
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

        <FlatList
          data={drinks}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <DrinkCard drink={item} />
          )}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        />
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
      <Footer
        setScreen={setScreen} currentScreen={currentScreen}
       />
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
    backgroundColor: "#111111",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: 375,
  },

  locationLabel: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "400",
  },
  searcharea: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",

  },

  filterIcon: {
    marginLeft: 10,
    backgroundColor: "#C67C4E",
    width: 52,
    height: 50,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  location: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Sora",
    fontWeight: "600",
  },

  searchBar: {
    height: 49,
    backgroundColor: "#222",
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    width: 240,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    color: "#A2A2A2",
    marginRight: 8,
  }, 
  arrowdown: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 5,
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
