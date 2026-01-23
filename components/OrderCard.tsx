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
            <View style={styles.deliverybutton}>
                <TouchableOpacity style={{ flexDirection: "row", gap: 24, marginLeft: 20, marginTop: 16, marginBottom: 16 }}>
                    <Text style={{ color: "#FFFFFF", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 153, height: 35, backgroundColor: "#C67C4E"  }}>Deliver</Text>
                    <Text style={{ color: "#242424", fontFamily: "Sora", fontWeight: "600", fontSize: 16, width: 49, height: 19 }}>Pick Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.deliverydetails}></View>
            <View style={styles.orderitems}></View>
            <View style={styles.discount}></View>
            <View style={styles.payment}></View>
            <View style={styles.modeofpayment}></View>
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
        gap: 70,
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
        width: 320,
        height: 43,
        backgroundColor: "#EDEDED",
        borderRadius: 12,
        padding: 4,
        marginLeft: 24,
    },
    deliverydetails: {
        flexDirection: "column",
    },
    orderitems: {
        flexDirection: "row",
    },
    discount: {
        flexDirection: "row",
    },
    payment: {
        flexDirection: "column",
    },
    modeofpayment: {
        flexDirection: "column",
    },
    orderbutton: {
        backgroundColor: "#C67C4E",
        height: 56,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "space-around",
        width: 327,
        marginLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,

    },
})