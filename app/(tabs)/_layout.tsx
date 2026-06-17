import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#efefef",
          height: 75,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/Vector (4).png")}
              style={{ height: 22, width: 22 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/Heart (1).png")}
              style={{ height: 22, width: 22 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
