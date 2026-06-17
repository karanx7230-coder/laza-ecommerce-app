import { Back, Btn } from "@/components/ui/Btn";

import { Input } from "@/components/ui/Inputs";
import { Remember, Title } from "@/components/ui/Titles";
import { signupstyles } from "@/src/Styles/signupstyles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Signup() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [rememered, setrememberd] = useState<boolean>(true);

  const router = useRouter();
  const handlesignup = () => {
    if (username === "" || password === "" || email === "") {
      Alert.alert("please fill the datils before proceeding ");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("enter valid email");
      return;
    }
    if (!email.includes(".com")) {
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
    console.log("user's name is", username);
    console.log("user email is ", email);
    console.log("user's password is ", password);
    router.replace("/(tabs)");
  };

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
        />
        <Input
          title="E-mail"
          placeholder="email"
          value={email}
          onChangeText={setemail}
        />
        <Remember value={rememered} change={() => setrememberd(!rememered)} />
        <View style={signupstyles.box}>
          <View style={signupstyles.line}>
            <Text style={signupstyles.text1}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={signupstyles.text2}>Login</Text>
            </TouchableOpacity>
          </View>
          <Btn title="Create an Account" onPress={handlesignup} />
        </View>
      </View>
    </ScrollView>
  );
}
