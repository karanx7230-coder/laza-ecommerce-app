import { StyleSheet } from "react-native";

export const Loginstyles = StyleSheet.create({
  mainview: {
    flex: 1,
    paddingTop: 70,

    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    alignSelf: "center",
  },

  view1: {
    justifyContent: "center",
    marginTop: "20%",
    marginBottom: 100,
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    borderRadius: 8,
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
    marginTop: "auto",
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
  inputview: {
    borderWidth: 1,
    borderBottomColor: "#8585853a",
    borderColor: "white",
    height: 60,
    width: "95%",
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputtitle: {
    color: "#3b3b3b",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    width: "90%",
  },
  btn: {
    height: 100,

    marginTop: "auto",
    backgroundColor: "#9775FA",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 22,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 20,
    marginTop: 20,
    marginRight: 20,
  },
  forget: {
    color: "red",
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "flex-end",
    margin: 10,
  },
  lastbtn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});