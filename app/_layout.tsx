import { Slot, useRouter } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("App Booted! Current User is:", currentUser ? currentUser.email : "NOBODY");
      setUser(currentUser);
      
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (loading) return; 

    if (user) {
      router.replace("/(tabs)");
    } else {
      router.replace("/welcome");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={style.view}>
        <LinearGradient colors={["#9675fa71", "#9775FA"]} style={style.gradient}>
          <Text style={style.text}>Laza</Text>
        </LinearGradient>
      </View>
    );
  }

  return <Slot />;
}

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  gradient: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 59,
    fontWeight: "500",
    color: "#ffffff",
  },
});