import { Loadingproduct, Loadingsearch } from "@/components/ui/Loading";
import { searchstyles } from "@/src/Styles/searchstyles";
import { Api } from "@/src/services/api";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (searchText: string) => {
    if (!searchText.trim()) {
      setResult([]);
      return;
    }
    setLoading(true);
    try {
      const response = await Api.get(`/products/search?q=${searchText}`);
      setResult(response.data.products || []);
    } catch (error) {
      console.error("search error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSearchResults(query);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const renderProduct = () => {
    if (loading) {
      return <Loadingproduct />;
    }
    if (query.trim() && result.length === 0) {
      return <Loadingsearch />;
    }
    return (
      <FlatList
        data={result}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={searchstyles.listContent}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push(`/Product/${item.id}`);
              console.log(item.id);
            }}
            style={searchstyles.productItem}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={searchstyles.productThumbnail}
            />
            <Text style={searchstyles.productTitle}>{item.title}</Text>
          </Pressable>
        )}
      />
    );
  };

  return (
    <View style={searchstyles.container}>
      <View style={searchstyles.searchRow}>
        <View style={searchstyles.searchInputContainer}>
          <Image source={require("../assets/images/Search (1).png")} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={"#8F959E"}
            style={searchstyles.textInput}
            autoFocus
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
        </View>
      </View>
      {renderProduct()}
    </View>
  );
}

