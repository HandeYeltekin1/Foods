import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  navigation,
} from "react-native";
import ResultDetail from "./ResultDetail/";
import { withNavigation } from "react-navigation";
const ResultList = ({ title, result, navigation }) => {
  if (!result.length) {
    return null;
  }
  console.log(result);
  return (
    <View style={styles.cotainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cotainer: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
