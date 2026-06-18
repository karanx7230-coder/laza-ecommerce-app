import { Image, Text, View } from "react-native";
import { Loadingstyles } from "@/src/Styles/Loadingstyles";

export const Loadinghome = () => {
  return (
    <View style={Loadingstyles.homeContainer}>
      <View style={Loadingstyles.headerRow}>
        <View style={Loadingstyles.avatarSkeleton} />
        <View style={Loadingstyles.avatarSkeleton} />
      </View>
      <View style={Loadingstyles.greetingContainer}>
        <Text style={Loadingstyles.helloText}>Hello</Text>
        <Text style={Loadingstyles.welcomeText}>Welcome to Laza</Text>
      </View>
      <View style={Loadingstyles.row}>
        <View style={Loadingstyles.searchSkeleton} />
      </View>
      <View>
        <View style={Loadingstyles.sectionHeader}>
          <Text style={Loadingstyles.sectionTitle}>Choose Brand</Text>
          <Text style={Loadingstyles.viewAllText}>View all</Text>
        </View>
        <View style={Loadingstyles.row}>
          <View style={Loadingstyles.brandSkeleton} />
          <View style={Loadingstyles.brandSkeleton} />
          <View style={Loadingstyles.brandSkeleton} />
          <View style={Loadingstyles.brandSkeleton} />
        </View>
      </View>
      <View style={Loadingstyles.sectionHeader}>
        <Text style={Loadingstyles.sectionTitle}>New Arraival</Text>
        <Text style={Loadingstyles.viewAllText}>View all</Text>
      </View>
      <View style={Loadingstyles.row}>
        <View style={Loadingstyles.productCardSkeleton} />
        <View style={Loadingstyles.productCardSkeleton} />
      </View>
      <View style={Loadingstyles.row}>
        <View style={Loadingstyles.productCardSkeleton} />
        <View style={Loadingstyles.productCardSkeleton} />
      </View>
    </View>
  );
};

export const Loadingproduct = () => {
  return (
    <View>
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
        <View  style={Loadingstyles.productListItemSkeleton} />
    </View>
  );
};

export const Searchnotfound = () => {
  return (
    <View style={Loadingstyles.searchErrorContainer}>
      <Image
        source={require("../../assets/images/Cat.png")}
        style={Loadingstyles.catImage}
        resizeMode="contain"
      />
      <Text style={Loadingstyles.errorText}>no product found</Text>
    </View>
  );
};
export const LoadingWishlist = () => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "47%",
            margin: 5,
            padding: 10,
            height: 300,
            marginRight: 5,
            backgroundColor: "#e1e1e1",
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: "47%",
            margin: 5,
            padding: 10,
            height: 300,
            marginRight: 5,
            backgroundColor: "#e1e1e1",
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "47%",
            margin: 5,
            padding: 10,
            height: 300,
            marginRight: 5,
            backgroundColor: "#e1e1e1",
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: "47%",
            margin: 5,
            padding: 10,
            height: 300,
            marginRight: 5,
            backgroundColor: "#e1e1e1",
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "47%",
            margin: 5,
            padding: 10,
            height: 300,
            marginRight: 5,
            backgroundColor: "#e1e1e1",
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: "47%",
            margin: 5,
            padding: 10,
            height: 300,
            marginRight: 5,
            backgroundColor: "#e1e1e1",
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};
// productCard: {

// },
// productImage: {
