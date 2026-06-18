import { welcomeStyles } from "@/src/Styles/welcomestyles";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const route = useRouter();

  return (
    <View style={welcomeStyles.view}>
      <StatusBar style="dark" />

      <LinearGradient
        colors={["#9675fa7c", "#9775FA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={welcomeStyles.gradient}
      >
        <Image source={require("../../assets/images/backgroundMan.png")} />

        <View style={welcomeStyles.background}>
          <Text style={welcomeStyles.text1}>Look Good Feel Good</Text>
          <Text style={welcomeStyles.text2}>
            create your individual & unique style and look amazing everyday
          </Text>

          <View style={welcomeStyles.view1}>
            <TouchableOpacity
              onPress={() => {
                route.push("/login-type");
                console.log("male");
              }}
              style={welcomeStyles.button}
            >
              <Text style={welcomeStyles.gender}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                route.push("/login-type");
                console.log("female");
              }}
              style={welcomeStyles.button}
            >
              <Text style={welcomeStyles.gender}>Female</Text>
            </TouchableOpacity>
          </View>

          <Pressable
            onPress={() => {
              // route.push("/login-type");
              route.push("/(tabs)");
              console.log("skiped");
            }}
            style={welcomeStyles.skipContainer}
          >
            <Text style={welcomeStyles.skipText}>skip</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}
