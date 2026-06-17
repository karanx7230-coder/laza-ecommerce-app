import { StyleSheet } from "react-native";

export const searchstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  productItem: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  productThumbnail: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginRight: 15,
  },
  productTitle: {
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
  },
   productprice: {
    fontSize: 16,
    color: "#0a1068c1",
    flexShrink: 1,
  },
});