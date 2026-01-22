import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Drink } from "../interfaces/Drink";

interface Props {
  drink: Drink;
}

export default function DrinkCard({ drink }: Props) {
  return (
    <View style={styles.card}>
      <Image source={drink.image} style={styles.image} />

      <Text style={styles.knownName}>{drink.knownName}</Text>
      <Text style={styles.name}>{drink.name}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>$ {drink.price}</Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  width: 160,
  marginRight: 12,
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 12,
},
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    color: "#999",
  },
  knownName: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: "#C67C4E",
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
