import { Back, Btn } from "@/components/ui/Btn";

import { Input } from "@/components/ui/Inputs";
import { Remember, Title } from "@/components/ui/Titles";
import { signupstyles } from "@/src/Styles/signupstyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function Signup() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rememered, setrememberd] = useState<boolean>(false);

  const router = useRouter();
  const handlesignup = () => {
    if (username === "" || password === "" || email === "") {
      Alert.alert("please fill the datils before proceeding ");
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert("enter valid email");
      return;
    }

    if (password.length < 6) {
      Alert.alert("password must be 6 letter long");
      return;
    }
    if (!rememered) {
      Alert.alert("turn on the switch pls");
      return;
    }
    handlesignupsave();
  };
  const handlesignupsave = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.setItem("name", username.trim());
      await AsyncStorage.setItem("emailid", email.trim());
      await AsyncStorage.setItem("password", password.trim());
      router.push("/(tabs)");
    } catch (error) {
      Alert.alert("saving failed");
      console.log("error");
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
      <View style={signupstyles.mainview}>
        <Back />
        <Title title="Let's Get Started" />
        <View style={signupstyles.view1} />
        <Input
          title="username"
          placeholder="username"
          value={username}
          onChangeText={setusername}
        />
        <Input
          title="password"
          placeholder="password"
          value={password}
          onChangeText={setpassword}
          secureTextEntry
        />
        <Input
          title="E-mail"
          placeholder="email"
          value={email}
          onChangeText={setemail}
          keyboardType="email-address"
        />
        <Remember value={rememered} change={() => setrememberd(!rememered)} />
        <View style={signupstyles.box}>
          <View style={signupstyles.line}>
            <Text style={signupstyles.text1}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
              <Text style={signupstyles.text2}>Login</Text>
            </TouchableOpacity>
          </View>
          <Btn title="Create an Account" onPress={handlesignup} />
        </View>
      </View>
    </ScrollView>
  );
}
