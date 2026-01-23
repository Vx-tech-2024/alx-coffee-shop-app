import OrderScreen from "./OrderScreen";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import Drink from "../interfaces/Drink";

export default function OrderCard({ order }: { order: Drink }) {
    return (
        <View style={styles.container}>
            <View style={styles.ordertitle}></View>
            <View style={styles.deliverybutton}></View>
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
    },
    deliverybutton: {
        flexDirection: "row",
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