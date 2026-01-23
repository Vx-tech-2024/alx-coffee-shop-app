import { detailedDrinks } from "../data/detailedDrink";
import { DrinkDetail } from "../interfaces/Drink";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Footer from "./Footer";

export default function DetailCard({ drinkId }: { drinkId: string }) {
    const drink: DrinkDetail | undefined = detailedDrinks.find(d => d.id === drinkId);
    if (!drink) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Drink not found</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.Detailtitle}>
                <Image source={require("../assets/images/Arrow_Left.png")} />
                <Text style={{ fontSize: 18, fontWeight: "600" }}>Detail</Text>
                <Image source={require("../assets/images/Heart.png")}  />
            </View>
            <View style={styles.imagecontainer}>
                <Image source={drink.image} style={styles.drinkImage}/>
            </View>
            <View style={styles.nameandrating}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>{drink.knownName}</Text>
                <View style={styles.nameicons}>
                    <Text style={{ fontSize: 14, color: "#999" }}>{drink.name}</Text>
                    <Image source={require("../assets/images/delivery.png")} />
                    <Image source={require("../assets/images/flowerlike.png")} />
                    <Image source={require("../assets/images/milkbox.png")} />
                </View>
                <View style={styles.ratingandnumber}>
                    <Image source={require("../assets/images/Star.png")} style={{ width: 16, height: 16, tintColor: "#C67C4E", color:"#C67C4E"  }} />
                    <Text style={{ color: "#242424" }}>{drink.rating}</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={{ fontSize: 16, fontWeight: "600", justifyContent:"flex-start" }}>Description</Text>
                <Text style={{ fontSize: 14, color: "#999"}}>{drink.description}</Text>

            </View>
            <View style={styles.Size}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Size</Text>
                <View style={styles.sizeoptions}>
                    <TouchableOpacity style={styles.sizebutton}>
                        <Text style={{ fontSize: 14, color: "#242424" }}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sizebutton}>
                        <Text style={{ fontSize: 14, color: "#242424" }}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sizebutton}>
                        <Text style={{ fontSize: 14, color: "#242424" }}>L</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.priceandorder}>
                
                <View style={{flexDirection: "column", alignItems: "center", gap: 4}}>
                    <Text style={{ fontSize: 14, color: "#999" }}>Price</Text>
                    <Text style={{ fontSize: 24, fontWeight: "600", color: "#C67C4E" }}>$ {drink.price}</Text>
                    
                </View>
                <TouchableOpacity style={{ backgroundColor: "#C67C4E", width: 160, height: 52, borderRadius: 16, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        width: 375,
        alignItems: "center",
    },
    Detailtitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: 44,
        marginTop: 68,
        width: 285,
    },
    imagecontainer: {
  width: 390,
  height: 200,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
}, 
drinkImage: {
  width: 320,
  height: 200,
  resizeMode: "cover",
  borderRadius: 10,
},


    nameandrating: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: 100,
        width: 327,
        gap: 8,
        justifyContent: "flex-start",
    },
    nameicons: {
        flexDirection: "row",
        alignItems: "center",
        height: 24,
        width: 200,
        gap: 8,
        justifyContent: "space-between",
    },
    ratingandnumber: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        fontWeight: "600",
    },
    description: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: 95,
        width: 327,
        gap: 8,
        justifyContent: "flex-start",
        alignContent: "flex-start",
        marginTop: 29,
    },
    sizeoptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sizebutton: {
        alignItems: "center",
        justifyContent: "center",
        width:80,
        height: 30,
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 5,
        borderColor: "#242424",
        borderWidth: 1,
    },
    Size: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: 81,
        width: 320,
        gap: 16,
        justifyContent: "flex-start",
        marginTop: 29,

    },
    priceandorder: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 52,
        width: 327,
    },
    text: {
        color: "white",
        fontSize: 22,
    }
});
