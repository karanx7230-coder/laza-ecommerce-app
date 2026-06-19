import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient} from "expo-linear-gradient";
export default function Index({ navigation }: any) { 
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome");
      // router.replace("/(tabs)");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View>
      <LinearGradient colors={["#9675fa71", "#9775FA"]} style={style.gradient}>
        <Text style={style.text}>Laza..</Text>
      </LinearGradient>
    </View>
  );
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
