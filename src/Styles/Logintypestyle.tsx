import { StyleSheet } from "react-native";

export const Logintypestyle = StyleSheet.create({
  mainview: {
    flex: 1,
    paddingBlock: 70,

    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    alignSelf: "center",
  },
  backButton: {
    backgroundColor: "#e4e3e3e4",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 45,
  },
  view1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  button: {
    width: "90%",
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  box: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    flexDirection: "row",
    bottom: 20,
    marginTop: 20,
  },
  text1: {
    color: "#a5a5a5",
  },
  text2: {
    color: "#9775FA",
    fontWeight: "bold",
  },
  btn: {
    width: "100%",
    height: 100,
    backgroundColor: "#9775FA",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 22,
  },
});