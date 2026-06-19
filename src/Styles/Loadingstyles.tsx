import { StyleSheet } from "react-native";

export const Loadingstyles = StyleSheet.create({
  // --- Loadinghome Styles ---
  homeContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  avatarSkeleton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#F5F6FA",
  },
  greetingContainer: {
    marginBottom: 20,
  },
  helloText: {
    fontSize: 28,
    color: "#1d1e20ac",
    fontWeight: "600", // changed from "semibold"
  },
  welcomeText: {
    fontSize: 15,
    color: "#8F959E",
    fontWeight: "400", // changed from "regular"
  },
  row: {
    flexDirection: "row",
  },
  searchSkeleton: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#F5F6FA",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10, // changed from marginBlock
  },
  sectionTitle: {
    fontSize: 17,
    color: "#1D1E20",
    fontWeight: "500", // changed from "medium"
    alignSelf: "center",
  },
  viewAllText: {
    fontSize: 13,
    color: "#8F959E",
    fontWeight: "500", // changed from "medium"
    alignSelf: "center",
    paddingTop: 5,
  },
  brandSkeleton: {
    width: 100,
    height: 50,
    backgroundColor: "#F5F6FA",
    marginRight: 10,
    borderRadius: 10,
  },
  productCardSkeleton: {
    height: 250,
    width: "45%",
    margin: 10,
    backgroundColor: "#F5F6FA",
  },

  // --- Loadingproduct Styles ---
  productListItemSkeleton: {
    height: 50,
    width: "90%",
    backgroundColor: "#e3e3e3cf",
    margin: 10,
    borderRadius: 10,
  },

  // --- Loadingsearch Styles ---
  searchErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  catImage: {
    height: 400,
    width: 300,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: "#8A63FF",
    fontSize: 16,
  },
});