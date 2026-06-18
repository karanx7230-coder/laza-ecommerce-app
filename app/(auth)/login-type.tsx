import { Back } from "@/components/ui/Btn";
import { Btn, SocialButton } from "@/components/ui/Btn";
import { Title } from "@/components/ui/Titles";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Logintypestyle} from "@/src/Styles/Logintypestyle";

import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function LoginType() {
  const router = useRouter();

  return (
    <View style={Logintypestyle.mainview}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Back />
      <Title title="Let's Get Started" />
      <View style={Logintypestyle.view1}>
        <SocialButton
          onPress={() => Alert.alert("feature yet to add")}
          title="Facebook"
          backgroundColor="#4267B2"
          imageSource={require("../../assets/images/Facebook.png")}
        />
        <SocialButton
          onPress={() => Alert.alert("feature yet to add")}
          title="Twitter"
          backgroundColor="#1DA1F2"
          imageSource={require("../../assets/images/x.png")}
        />
        <SocialButton
          onPress={() => Alert.alert("feature yet to add")}
          title="Google"
          backgroundColor="#EA4335"
          imageSource={require("../../assets/images/Google.png")}
        />
      </View>
      <View style={Logintypestyle.box}>
        <View style={Logintypestyle.line}>
          <Text style={Logintypestyle.text1}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={Logintypestyle.text2}>Login</Text>
          </TouchableOpacity>
        </View>
        <Btn
          title="create an Account"
          onPress={() => router.push("/sign-up")}
        />
      </View>
    </View>
  );
}
