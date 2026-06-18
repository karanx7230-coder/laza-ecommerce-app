import {
  View,
  Text,
  Alert,
  FlatListComponent,
  FlatList,
  Image,
} from "react-native";
import { Api } from "@/src/services/api";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Loadingproduct } from "@/components/ui/Loading";
import { Back } from "@/components/ui/Btn";
import { Title } from "@/components/ui/Titles";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export default function Review() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [savedname, setSavedName] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const loadProfileData = async () => {
    try {
      // 'user_profile' key se data wapas nikala
      const storedName = await AsyncStorage.getItem("emailid");
      if (storedName !== null) {
        setSavedName(storedName); // State mein daal diya taaki UI par dikhe
      }
    } catch (error) {
      console.log("Data nikalne mein error:", error);
    }
  };
  useEffect(() => {
    const fetchProductReviews = async () => {
      try {
        setIsLoading(true);

        const response = await Api.get(`/products/${id}`);
        const data = response.data;
        if (data && data.reviews) {
          setReviews(data.reviews);
        }
      } catch {
        setError("Could not load reviews.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProductReviews();
      loadProfileData();
    }
  }, [id]);

  if (isLoading) {
    return <Loadingproduct />;
  }

  if (error) {
    Alert.alert("Error", error);
    return (
      <View>
        <Text>Error loading reviews.</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", gap: "18%" }}>
        <Back />
        <Title title="Reviews" />
      </View>
      <FlatList
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 15,
              padding: 10,
              marginHorizontal: 20,
              backgroundColor: "#e4e4e4",
              borderRadius: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{item.reviewerName}</Text>
              <Text>{item.rating}rating</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/images/clock.png")}
                style={{ margin: 3 }}
              />
              <Text>{new Date(item.date).toDateString()}</Text>
            </View>
            <Text>{item.comment}</Text>
          </View>
        )}
      />
      <Text>{savedname}</Text>
    </SafeAreaView>
  );
}
// View
//             style={{
//               marginBottom: 16,
//               padding: 12,
//               borderWidth: 1,
//               borderRadius: 8,
//             }}
//           >
//             <Text style={{ fontWeight: "bold" }}>{item.reviewerName}</Text>
//             <Text>⭐ {item.rating}</Text>
//             <Text>{item.comment}</Text>
//             <Text style={{ fontSize: 12, color: "gray" }}>
//               {new Date(item.date).toLocaleDateString()}
//             </Text>
// </View>
