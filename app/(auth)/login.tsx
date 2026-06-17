import { Back, Btn } from "@/components/ui/Btn";
import { Input } from "@/components/ui/Inputs";
import { useRouter } from "expo-router";
import { Loginstyles } from "@/src/Styles/Loginstyles";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Pressable, ScrollView, Switch, Text, View } from "react-native";
import { Title2 } from "@/components/ui/Titles";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [rememered, setrememberd] = useState<boolean>(true);
  const router = useRouter();
  const handlesignup = () => {
    if (email === "" || password === "") {
      Alert.alert("fill them all");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("invalid email");
      return;
    }
    if (!email.includes(".com")) {
      Alert.alert("email inavlid");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Password must be 6 letters long");
      return;
    }
    // console.log("email=", email);
    // console.log("password=", password);
    router.replace("/(tabs)");
  };
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
//
