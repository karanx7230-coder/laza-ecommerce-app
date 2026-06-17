import { Back, Btn } from "@/components/ui/Btn";

import Objects from "@/components/ui/Object";
import { Title, Title2 } from "@/components/ui/Titles";
import { otpstyles } from"@/src/Styles/otpstyles";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { TextInput, View } from "react-native";
export default function OTP() {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const pin1Ref = useRef<TextInput>(null);
  const pin2Ref = useRef<TextInput>(null);
  const pin3Ref = useRef<TextInput>(null);
  const pin4Ref = useRef<TextInput>(null);
  const submitOTP = () => {
    const finalOtp = pin1 + pin2 + pin3 + pin4;
    console.log("Mera final OTP hai: ", finalOtp);
    router.replace("/(tabs)");
  };
  return (
    <View style={otpstyles.mainview}>
      <Back />
      <Title title="Verfication Code" />
      <Objects />
      <View style={otpstyles.container}>
        <TextInput
          ref={pin1Ref}
          style={otpstyles.box}
          keyboardType="numeric"
          maxLength={1}
          value={pin1}
          onChangeText={(text) => {
            setPin1(text);
            if (text !== "") pin2Ref.current?.focus();
          }}
        />
        <TextInput
          ref={pin2Ref}
          style={otpstyles.box}
          keyboardType="numeric"
          maxLength={1}
          value={pin2}
          onChangeText={(text) => {
            setPin2(text);
            if (text !== "") pin3Ref.current?.focus();
            else pin1Ref.current?.focus();
          }}
        />
        <TextInput
          ref={pin3Ref}
          style={otpstyles.box}
          keyboardType="numeric"
          maxLength={1}
          value={pin3}
          onChangeText={(text) => {
            setPin3(text);
            if (text !== "") pin4Ref.current?.focus();
            else pin2Ref.current?.focus();
          }}
        />
        <TextInput
          ref={pin4Ref}
          style={otpstyles.box}
          keyboardType="numeric"
          maxLength={1}
          value={pin4}
          onChangeText={(text) => {
            setPin4(text);
            if (text === "") pin3Ref.current?.focus();
          }}
        />
      </View>
      <View style={otpstyles.box1}>
        <Title2 title="Please write your email to receive a confirmation code to set a new password." />
        <Btn title="Confirm Mail" onPress={submitOTP} />
      </View>
    </View>
  );
}
