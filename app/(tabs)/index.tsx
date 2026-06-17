import { Loadinghome } from "@/components/ui/Loading";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Api } from "../../src/services/api";
import { homestyles } from "@/src/Styles/homestyles";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface DummyJsonResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export default function HomeTabScreen() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const loadCategories = async () => {
    try {
      const response = await Api.get("/products/categories");
      const fetchedCategories = response.data.map((catgry: any) => catgry.slug);
      setCategories(["All", ...fetchedCategories]);
    } catch (error) {
      console.log("Failed to load categories", error);
    }
  };

  const loadProducts = async (category: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const endpoint =
        category === "All" ? "/products" : `/products/category/${category}`;

      const response = await Api.get<DummyJsonResponse>(endpoint);
      setProducts(response.data.products);
    } catch (error: any) {
      console.log("aggggggggg");
      setError("failed to load api try restarting the app ");
    } finally {
      setIsLoading(false);
    }
  };
  // const loadLikedProducts = async () => {
  //   try {
  //     const storedLikes = await AsyncStorage.getItem("wishlist");

  //     if (storedLikes) {
  //       setLikedProducts(JSON.parse(storedLikes));
  //     }
  //   } catch (error) {
  //     console.log("Error loading wishlist", error);
  //   }
  // };
  // const toggleWishlist = async (productId: number) => {
  //   try {
  //     let updatedLikes: number[] = [];

  //     if (likedProducts.includes(productId)) {
  //       updatedLikes = likedProducts.filter((id) => id !== productId);

  //       console.log(`Product ${productId} disliked`);
  //     } else {
  //       updatedLikes = [...likedProducts, productId];

  //       console.log(`Product ${productId} liked`);
  //     }

  //     setLikedProducts(updatedLikes);

  //     await AsyncStorage.setItem("wishlist", JSON.stringify(updatedLikes));
  //   } catch (error) {
  //     console.log("Wishlist Error", error);
  //   }
  // };
  // useEffect(() => {
  //   loadLikedProducts();
  // }, []);
  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts(selectedCategory);
  }, [selectedCategory]);

  const renderProductCard = ({ item }: { item: Product }) => {
    // const isLiked = likedProducts.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => {
          router.push(`/Product/${item.id}`);
          console.log(item.id);
        }}
        style={homestyles.productCard}
      >
        <ImageBackground
          source={{ uri: item.thumbnail }}
          style={homestyles.productImage}
          resizeMode="contain"
        >
          <TouchableOpacity
          // onPress={() => toggleWishlist(item.id)}
          >
            <Image
              source={require("../../assets/images/Heart (1).png")}
              style={{
                // tintColor: isLiked ? "red" : "#999",
                height: 20,
                width: 20,
                margin: 10,
                alignSelf: "flex-end",
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text>{item.title}</Text>
        <Text>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <Loadinghome />;
  }

  if (error) {
    return (
      <View style={homestyles.errorContainer}>
        <Text style={homestyles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={homestyles.safeArea}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={homestyles.headerContainer}>
              <TouchableOpacity style={homestyles.menuButton}>
                <Image
                  source={require("../../assets/images/menu (2).png")}
                  style={homestyles.menuImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={homestyles.greetingContainer}>
              <Text style={homestyles.helloText}>Hello</Text>
              <Text style={homestyles.welcomeText}>Welcome to Laza</Text>
            </View>

            <View style={homestyles.searchRow}>
              <View style={homestyles.searchBar}>
                <Image source={require("../../assets/images/Search (1).png")} />
                <TouchableOpacity
                  onPress={() => router.push("/search")}
                  style={homestyles.searchInputWrapper}
                >
                  <Text style={homestyles.searchText}>Search...</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View style={homestyles.sectionHeader}>
                <Text style={homestyles.sectionTitle}>Choose Brand</Text>
                <Pressable>
                  <Text style={homestyles.viewAllText}>View all</Text>
                </Pressable>
              </View>
            </View>

            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(index) => index.toString()}
              renderItem={({ item }) => {
                const isSelected = selectedCategory === item;
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedCategory(item)}
                    style={[
                      homestyles.categoryButton,
                      {
                        backgroundColor: isSelected ? "#8A63FF" : "#F5F5F5",
                        marginLeft: item === "All" ? 0 : 10,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        homestyles.categoryText,
                        { color: isSelected ? "white" : "#1D1E20" },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              contentContainerStyle={homestyles.categoryListContent}
            />

            <View>
              <View style={homestyles.sectionHeader}>
                <Text style={homestyles.sectionTitle}>New Arrival</Text>
                <Pressable>
                  <Text style={homestyles.viewAllText}>View all</Text>
                </Pressable>
              </View>
            </View>
          </View>
        }
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductCard}
        numColumns={2}
        contentContainerStyle={homestyles.productListContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
