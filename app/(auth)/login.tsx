import { Back, Btn } from "@/components/ui/Btn";
import { Input } from "@/components/ui/Inputs";
import { Loginstyles } from "@/src/Styles/Loginstyles";
import { useRouter } from "expo-router";

import { Title2 } from "@/components/ui/Titles";
import { auth } from "@/config/firebase";
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rememered, setrememberd] = useState<boolean>(true);
  const router = useRouter();
  const handlesignup = async () => {
    try {
      const userCrenditial = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("loggedin", userCrenditial.user.uid);

      Alert.alert("success");
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("email not fun");
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return (
      <View style={{ height: "50%", width: "70%" }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={Loginstyles.mainview}>
        <StatusBar style="dark" backgroundColor="#ffffff" />
        <Back />
        <Text style={Loginstyles.title}>Let's Get Started</Text>
        <View style={Loginstyles.view1}>
          <Input
            title="Email"
            placeholder="email"
            value={email}
            onChangeText={setemail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            title="password"
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setpassword}
          />
          <Pressable onPress={() => router.push("/forget")}>
            <Text style={Loginstyles.forget}>Forget password?</Text>
          </Pressable>

          <View style={Loginstyles.row}>
            <Text style={Loginstyles.inputtitle}>Remember me </Text>
            <Switch
              trackColor={{ false: "grey", true: "blue" }}
              thumbColor="white"
              value={rememered}
              onValueChange={() => setrememberd(!rememered)}
            />
          </View>
        </View>
        <View style={Loginstyles.box1}>
          <Title2 title="By connecting your account you would confirm that you agree with our Term and Condition" />
          <Btn title="Login" onPress={handlesignup} />
        </View>
      </View>
    </ScrollView>
  );
}
