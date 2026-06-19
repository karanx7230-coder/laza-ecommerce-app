import { useEffect } from "react";
import { StyleSheet, Text,} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <LinearGradient colors={["#9675fa71", "#9775FA"]} style={style.gradient}>
      <Text style={style.text}>Laza</Text>
    </LinearGradient>
  );
}
const style = StyleSheet.create({
  gradient: {
    flex: 1,
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
