import { Back, Btn } from "@/components/ui/Btn";
import { Input } from "@/components/ui/Inputs";
import Objects from "@/components/ui/Object";
import { Title } from "@/components/ui/Titles";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";
import { forgetstyle } from  "@/src/Styles/forgetstyle";

export default function Forget1() {
  const [email, setemail] = useState("");
  const submitemail = () => {
    const finalemail = email;
    if (finalemail === "") {
      Alert.alert("fill it ");
      return;
    }
    if (!finalemail.includes("@")) {
      Alert.alert("@");
      return;
    }
    if (!finalemail.includes(".com")) {
      Alert.alert(".com");
      return;
    }
    console.log("My email is: ", finalemail);
    router.push("/otp");
  };
  return (
    <View style={forgetstyle.container}>
      <Back />
      <Title title="Forget Password" />
      <Objects />
      <Input
        title="Email"
        placeholder="email"
        value={email}
        onChangeText={setemail}
      />
      <View style={forgetstyle.box}>
        <Btn title="Confirm Mail" onPress={submitemail} />
      </View>
    </View>
  );
}
