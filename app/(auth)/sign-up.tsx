import { Back, Btn } from "@/components/ui/Btn";
import { Input } from "@/components/ui/Inputs";
import { Remember, Title } from "@/components/ui/Titles";
import { signupstyles } from "@/src/Styles/signupstyles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

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

      const userCrenditial = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("logedin succes", userCrenditial.user.uid);
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("sign in failed");
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return (
      <View style={{ height: "50%", width: "70%", backgroundColor: "black" }}>
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
