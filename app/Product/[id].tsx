import { Back } from "@/components/ui/Btn";
import { LoadingSearch } from "@/components/ui/Loading";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { productstyles } from "@/src/Styles/productstyles";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Api } from "../../src/services/api";

interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  brand: string;
  category: string;
  rating: number;
  discountPercentage: string;
  reviews: Review[];
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setIsLoading(true);

        const response = await Api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.log("Failed to load product details", err);
        setError("Could not load product details.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (isLoading) {
    return <LoadingSearch />;
  }

  if (error || !product) {
    Alert.alert("retry");
    return;
  }

  return (
    <SafeAreaView style={productstyles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Back />
        <Image
          source={{ uri: product.thumbnail }}
          style={productstyles.thumbnail}
          resizeMode="contain"
        />

        <View style={productstyles.headerRow}>
          <Text style={productstyles.subtitle}>
            {product.brand}'s {product.category} product
          </Text>
          <Text style={[productstyles.subtitle, productstyles.priceLabel]}>
            price
          </Text>
        </View>

        <View style={productstyles.titleRow}>
          <Text style={productstyles.titleText}>{product.title}</Text>
          <Text style={productstyles.priceText}>${product.price}</Text>
        </View>

        <View style={productstyles.descriptionSection}>
          <Text style={productstyles.sectionHeading}>Description</Text>
          <Text style={productstyles.descriptionText}>
            {product.description}
          </Text>
        </View>

        <View style={productstyles.reviewsHeaderRow}>
          <Text style={productstyles.reviewsHeading}>Reviews</Text>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/Product/reviews",
                params: { id: product.id },
              })
            }
          >
            <Text style={productstyles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <View>
          <View style={productstyles.reviewUserRow}>
            <Text style={productstyles.reviewerName}>
              {product.reviews[0].reviewerName}
            </Text>
            <Text>
              {product.reviews[0].rating}
              <Text style={productstyles.ratingLabel}>rating</Text>
            </Text>
          </View>
          <View style={productstyles.reviewDateRow}>
            <Image
              source={require("../../assets/images/clock.png")}
              style={productstyles.clockIcon}
            />
            <Text style={productstyles.dateText}>
              {new Date(product.reviews[0].date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </View>
          <Text style={productstyles.commentText}>
            {product.reviews[0].comment} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis.
          </Text>
        </View>

        <View style={productstyles.totalPriceContainer}>
          <View style={productstyles.totalPriceDetails}>
            <Text style={productstyles.totalPriceHeading}>Total price</Text>
            <Text style={productstyles.vatText}>with VAT,SD</Text>
          </View>
          <Text style={productstyles.finalPriceText}>
            ${product.price + Number(product.discountPercentage)}
          </Text>
        </View>

        <View style={productstyles.footerContainer}>
          <TouchableOpacity style={productstyles.addToCartButton}>
            <Text style={productstyles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
