import { Loadinghome } from "@/components/ui/Loading";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import {
  Alert,
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
import { signOut } from "firebase/auth";
import { homestyles } from "@/src/Styles/homestyles";
import { CartBtn, Menu } from "@/components/ui/Btn";

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
      setError("failed to load api try restart the app ");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts(selectedCategory);
  }, [selectedCategory]);

  const renderProductCard = ({ item }: { item: Product }) => {
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
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/Heart (1).png")}
              style={{
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

  const menu = async () => {
    try {
      const user = auth.currentUser;
      if (user && user.email) {
        Alert.alert("your email", `Email: ${user.email}`);
      }
    } catch (error) {
      Alert.alert("failed");
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      router.replace("/login-type");
    } catch (error) {
      Alert.alert("failed");
    }
  };
  return (
    <SafeAreaView style={homestyles.safeArea}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Menu onPress={menu} />
              <CartBtn onPress={logout} />
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
