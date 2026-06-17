import { Back, Cart } from "@/components/ui/Btn";
import { LoadingWishlist } from "@/components/ui/Loading";
import { Title } from "@/components/ui/Titles";
 import { Api } from "@/src/services/api"; 
import { View, Text, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

export default function Wishlist() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <Back />
        <Title title="Wishlist" />
        <Cart />
      </View>
      {/* <FlatList/ */}
      {/* data={} */}
      <LoadingWishlist/>
    </SafeAreaView>
  );
}
// import React, { useState, useEffect } from 'react';
// import { 
//     View, 
//     Text, 
//     FlatList, 
//     ActivityIndicator, 
//     StyleSheet, 
//     Image, 
//     ListRenderItem 
// } from 'react-native';
// import { Api } from './api'; // Aapne jo axios instance banaya hai usko import karein

// // TypeScript interfaces for proper typing
// interface Product {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     thumbnail: string;
// }

// const ProductListScreen = () => {
//     // States manage karne ke liye
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     // Screen load hote hi API call karne ke liye useEffect
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             setLoading(true);
//             // dummyjson.com/products par GET request
//             const response = await Api.get('/products'); 
//             setProducts(response.data.products);
//         } catch (err) {
//             console.error("API Error: ", err);
//             setError("Data fetch karne mein error aayi.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Har ek list item ka UI design
//     const renderProduct: ListRenderItem<Product> = ({ item }) => (
//         <View style={styles.card}>
//             <Image 
//                 source={{ uri: item.thumbnail }} 
//                 style={styles.image} 
//                 resizeMode="cover"
//             />
//             <View style={styles.cardInfo}>
//                 <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
//                 <Text style={styles.description} numberOfLines={2}>
//                     {item.description}
//                 </Text>
//                 <Text style={styles.price}>${item.price}</Text>
//             </View>
//         </View>
//     );

//     // Agar data load ho raha hai, toh spinner dikhayein
//     if (loading) {
//         return (
//             <View style={styles.centerContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//                 <Text style={{ marginTop: 10 }}>Products load ho rahe hain...</Text>
//             </View>
//         );
//     }

//     // Agar error aayi hai
//     if (error) {
//         return (
//             <View style={styles.centerContainer}>
//                 <Text style={styles.errorText}>{error}</Text>
//             </View>
//         );
//     }

//     // Main FlatList jo products render karegi
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={products}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={renderProduct}
//                 contentContainerStyle={styles.listContainer}
//                 // Performance optimizations
//                 initialNumToRender={10}
//                 maxToRenderPerBatch={10}
//                 windowSize={5}
//                 showsVerticalScrollIndicator={false}
//             />
//         </View>
//     );
// };

// // UI Styling
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//     },
//     centerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     listContainer: {
//         padding: 16,
//     },
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         marginBottom: 16,
//         overflow: 'hidden',
//         elevation: 3, // Android shadow
//         shadowColor: '#000', // iOS shadow
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//     },
//     image: {
//         width: '100%',
//         height: 150,
//         backgroundColor: '#eaeaea',
//     },
//     cardInfo: {
//         padding: 12,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 4,
//     },
//     description: {
//         fontSize: 12,
//         color: '#666',
//         marginBottom: 8,
//     },
//     price: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#2e8b57',
//     },
//     errorText: {
//         color: 'red',
//         fontSize: 16,
//     }
// });

// export default ProductListScreen;