import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import { useState } from "react";
const HomeImage = require("../assets/images/Home.png");
const HeartImage = require("../assets/images/Heart.png");
const LockImage = require("../assets/images/Bag.png");
const NotificationImage = require("../assets/images/Notification.png");
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Footer() {     

    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={HomeImage} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image source={HeartImage} style={styles.icon} />
            </TouchableOpacity>
            <Image source={LockImage} style={styles.icon} />
            <Image source={NotificationImage} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    activeLinkButton: {
    backgroundColor: "#C67C4E",
    },
    activeLinkText: {
    color: "#fff",
    fontWeight: "600",
    },
    footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    },
    icon: {
    width: 24,
    height: 35,
    resizeMode: "contain",
    },
});