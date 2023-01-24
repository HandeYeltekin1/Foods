import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  console.log("0123456789HANDE0123456789");
  console.log(result);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars , {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  rating: {
    color: "#7D8EA3",
  },
});

export default ResultDetail;
