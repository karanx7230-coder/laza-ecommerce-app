import { StyleSheet } from "react-native";

export const Btnstyles = StyleSheet.create({
  button: {
    width: "90%",
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
  cartButton: {
    height: 45,
    width: 45,
    marginVertical: 20,
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#F5F6FA",
  },
  cartIcon: {
    alignSelf: "center",
    height: 25,
    width: 25,
  },
  backButton: {
    backgroundColor: "#F5F6FA",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 45,
    height: 50,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuButton: {
    height: 45,
    width: 45,
    marginVertical: 20,
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#F5F6FA",
  },
  menuImage: {
    alignSelf: "center",
    height: 25,
    width: 25,
  },
});
