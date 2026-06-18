import { StyleSheet } from "react-native";

export const homestyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  errorContainer: {
    height: 100,
    margin: 100,
  },
  errorText: {
    fontSize: 25,
    color: "red",
  },
  productCard: {
    width: "47%",
    margin: 5,
    padding: 10,
  },
  productImage: {
    height: 200,
    backgroundColor: "#e1e1e1",
    borderRadius: 20,
  },

  greetingContainer: {
    marginBottom: 20,
  },
  helloText: {
    fontSize: 28,
    color: "#1D1E20",
    fontWeight: "600",
  },
  welcomeText: {
    fontSize: 15,
    color: "#8F959E",
    fontWeight: "400",
  },
  searchRow: {
    flexDirection: "row",
    gap: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  searchInputWrapper: {
    flex: 1,
    borderColor: "#333",
  },
  searchText: {
    fontSize: 16,
    color: "#8F959E",
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 17,
    color: "#1D1E20",
    fontWeight: "500",
    alignSelf: "center",
  },
  viewAllText: {
    fontSize: 13,
    color: "#8F959E",
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 5,
  },
  categoryListContent: {
    paddingBottom: 15,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 15,
    height: 50,
  },
  categoryText: {
    textTransform: "capitalize",
  },
  productListContent: {
    paddingBottom: 20,
  },
});
