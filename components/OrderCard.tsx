import OrderScreen from "./OrderScreen";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Footer from "./Footer";
import {Drink} from "../interfaces/Drink";

export default function OrderCard({ order }: { order: Drink }) {
    return (
        <View style={styles.container}>
            <View style={styles.ordertitle}>
                <Image  style={{ width: 19.5, height: 18.5, borderRadius: 8, marginRight: 12 }} source={require("../assets/images/Arrow_Left.png")} />
                <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "bold", fontSize: 16, width: 49, height: 19 }}>Order</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 24, marginTop: 20, marginLeft: 24 }}>
       <TouchableOpacity>
            <View style={styles.deliverbuttonside}>
                <Text>Deliver</Text>
            </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View style={styles.pickupbuttonside}>
             <Text>Pick up</Text>
        </View>
        </TouchableOpacity>
        </View>

            <View style={styles.deliverydetails}>
                <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 17, width: 200, height: 19, marginLeft: 24, marginTop: 16 }}>Delivery address</Text>
                <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 200, height: 19, marginLeft: 24, marginTop: 8 }}>Jl.Kpg Sutoyo</Text>
                <Text style={{ color: "#9B9B9B", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 200, height: 19, marginLeft: 24, marginTop: 4 }}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
                <View style={{ flexDirection: "row", gap: 8, marginLeft: 24, marginTop: 8 }}>
                    <TouchableOpacity style={{ flexDirection: "row", gap: 8 }}>
                        <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 100, height: 17, borderColor: "#C67C4E" }}>Edit Address</Text>
                        <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 100, height: 17, borderColor: "#C67C4E" }}>Add Note</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.orderitems}>
                <Image  style={{ width: 60, height: 60, borderRadius: 8, marginLeft: 24, marginTop: 16 }} source={order.image} />
                <View style={{ flexDirection: "column", marginLeft: 12, marginTop: 16 }}>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 150, height: 19 }}>{order.knownName}</Text>
                    <Text style={{ color: "#9B9B9B", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 100, height: 17, marginTop: 4 }}>{order.name}</Text>
                </View>
                <View style={{ marginLeft: 80, marginTop: 16, flexDirection: "row" }}>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 49, height: 19 }}>-</Text>
                    <Text style={{ color: "#9B9B9B", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 49, height: 17, marginLeft: 8 }}>1</Text>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 49, height: 19, marginLeft: 8 }}>+</Text>
                </View>
            </View>
            <View style={styles.discount}>
                <Image style={{ width: 16, height: 16, borderRadius: 8, marginLeft: 24, marginTop: 16 }} source={require("../assets/images/Discount.png")} />
                <Text style={{ color: "#C67C4E", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 100, height: 17, marginLeft: 8, marginTop: 16 }}>1 Discount Applies</Text>
                <Image style={{ width: 16, height: 16, borderRadius: 8, marginLeft: 150, marginTop: 16 }} source={require("../assets/images/Arrow_Left.png")} />
            </View>
            <View style={styles.payment}>
                <Text style={{ color: "#9B9B9B", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 100, height: 17, marginLeft: 24, marginTop: 16 }}>Payment Summary</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 24, marginRight: 24, marginTop: 8 }}>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 100, height: 19 }}>Price</Text>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 100, height: 19 }}>{order.price}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 24, marginRight: 24, marginTop: 8 }}>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 100, height: 19 }}>Delivery Fee</Text>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 100, height: 19 }}>$2.00</Text>
                </View>
            </View>
            <View style={styles.modeofpayment}>
                <Image style={{ width: 16, height: 16, borderRadius: 8, marginLeft: 24, marginTop: 16 }} source={require("../assets/images/Wallet.png")} />
                <View style={{ flexDirection: "column", marginLeft: 8, marginTop: 16 }}>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 150, height: 19 }}>Cash/Wallet</Text>
                    <Text style={{ color: "#9B9B9B", fontFamily: "Sora", fontWeight: "600", fontSize: 14, width: 100, height: 17, marginTop: 4 }}>6.30</Text>
                </View>
                <Image style={{ width: 16, height: 16, borderRadius: 8, marginLeft: 150, marginTop: 16 }} source={require("../assets/images/Arrow_Up.png")} />
            </View>
            <View style={styles.orderbutton}>
                <TouchableOpacity>
                    <Text style={{color: "#FFFFFF", width: 49, height: 24, fontFamily: "Sora", fontWeight: "bold", fontSize: 16 }}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    ordertitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        padding: 10,
        borderRadius: 12,
        height: 44,
        width: 44,
        justifyContent: "flex-start",
        marginLeft: 20,
        marginTop: 48,
    },
    deliverybutton: {
        flexDirection: "row",
        backgroundColor: "#EDEDED",
        borderRadius: 12,
        padding: 4,
        marginLeft: 24,
        marginTop: 20,
    },
    deliverydetails: {
        flexDirection: "column",
    },
    pickupbuttonside: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 24,
    },
    deliverbuttonside: {
        backgroundColor: "#C67C4E",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 24,
    },
    orderitems: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        marginTop: 20,
    },
    discount: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        paddingHorizontal: 24,
    },
    payment: {
        flexDirection: "column",
        marginTop: 24,
    },
    modeofpayment: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        paddingHorizontal: 24,
    },
    orderbutton: {
        backgroundColor: "#C67C4E",
        height: 56,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        width: 327,
        alignSelf: "center",
        marginTop: 32,

    },
})