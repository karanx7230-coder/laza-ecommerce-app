import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Btnstyles } from "@/src/Styles/Btnstyles";

type BtnProps = {
  title: string;
  onPress: () => void;
};

type SocialProps = {
  title: string;
  backgroundColor: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
};

export const Btn = ({ title, onPress }: BtnProps) => {
  return (
    <TouchableOpacity style={Btnstyles.btn} onPress={onPress}>
      <Text style={Btnstyles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SocialButton = ({
  title,
  backgroundColor,
  imageSource,
  onPress,
}: SocialProps) => {
  return (
    <TouchableOpacity
      style={[Btnstyles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={imageSource} style={Btnstyles.icon} />
      <Text style={Btnstyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const CartBtn = () => {
  return (
    <TouchableOpacity style={Btnstyles.cartButton}>
      <Image
        source={require("../../assets/images/Bag (1).png")}
        style={Btnstyles.cartIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const Back = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={Btnstyles.backButton}
    >
      <Image source={require("../../assets/images/Arrow - Left.png")} />
    </TouchableOpacity>
  );
};

export const Menu = () => {
  const router = useRouter();
  return (
    <View style={Btnstyles.headerContainer}>
      <TouchableOpacity style={Btnstyles.menuButton}>
        <Image
          source={require("../../assets/images/menu (2).png")}
          style={Btnstyles.menuImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
