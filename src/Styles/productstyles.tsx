import{StyleSheet} from 'react-native';
export const productstyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  thumbnail: {
    height: 300,
    width: 400,
    alignSelf: "center",
  },
  headerRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "400",
    color: "#8F959E",
  },
  priceLabel: {
    marginRight: 30,
  },
  titleRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 22,
    width: "80%",
    fontWeight: "600",
    color: "#1D1E20",
  },
  priceText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1D1E20",
    marginRight: 10,
  },
  descriptionSection: {
    marginVertical: 10,
  },
  sectionHeading: {
    fontSize: 17,
    marginHorizontal: 18,
    fontWeight: "600",
    color: "#1D1E20",
  },
  descriptionText: {
    fontSize: 15,
    marginHorizontal: 20,
    fontWeight: "400",
    color: "#8F959E",
    marginTop: 5,
  },
  reviewsHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  reviewsHeading: {
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
  reviewUserRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  reviewerName: {
    fontSize: 17,
    color: "#1D1E20",
    fontWeight: "500",
  },
  ratingLabel: {
    fontSize: 13,
    fontWeight: "400",
    color: "#8F959E",
  },
  reviewDateRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 4,
  },
  clockIcon: {
    alignSelf: "center",
    marginRight: 5,
  },
  dateText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#8F959E",
  },
  commentText: {
    fontSize: 15,
    marginHorizontal: 20,
    fontWeight: "400",
    color: "#8F959E",
    textAlign: "left",
    marginTop: 8,
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  totalPriceDetails: {
    marginLeft: 20,
    marginTop: 20,
  },
  totalPriceHeading: {
    fontSize: 17,
    color: "#1D1E20",
    fontWeight: "500",
  },
  vatText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#8F959E",
  },
  finalPriceText: {
    fontSize: 22,
    fontWeight: "600",
    marginRight: 20,
    marginTop: 20,
    color: "#1D1E20",
  },
  footerContainer: {
    padding: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#F5F6FA",
  },
  addToCartButton: {
    backgroundColor: "#8A63FF",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});