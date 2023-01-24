import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  //   console.log(id);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        style={styles.container}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#F53626",
    marginLeft: 100,
    fontSize: 30,
  },
  image: {
    height: 200,
    width: 300,
  },
  container: {
    marginLeft: 5,
    marginTop: 5,
    marginHorizontal: 5,
    marginStart: 50,
  },
});

export default ResultsShowScreen;
