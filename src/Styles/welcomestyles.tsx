import { StyleSheet } from "react-native";

export const welcomeStyles = StyleSheet.create({
  view: {
    flex: 1,
  },
  gradient: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: "90%",
    borderRadius: 30,
    bottom: 20,
    backgroundColor: "white",
  },
  text1: {
    color: "black",
    fontSize: 30,
    paddingTop: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  text2: {
    color: "#737373c5",
    fontSize: 17,
    width: "80%",
    alignSelf: "center",
    paddingTop: 5,
    textAlign: "center",
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#9775FA",
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  gender: {
    color: "white",
    fontWeight: "bold",
  },
  skipContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
  skipText: {
    color: "#a5a5a5",
    fontSize: 20,
    marginBottom: 20,
  },
});