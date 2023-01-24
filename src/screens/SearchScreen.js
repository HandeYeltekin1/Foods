import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price == '$' || '$$' || ' $$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  // console.log(results);
  //   searchApi("pasta");
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList
          result={filterResultsByPrice("$")}
          title="Cost Effective"
          // navigation={navigation}
        />
        <ResultList
          result={filterResultsByPrice("$$")}
          title="Bit Pricier"
          // navigation={navigation}
        />
        <ResultList
          result={filterResultsByPrice("$$$")}
          title="Big Spender "

          // navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginHorizontal: 120,
    color: "#D0D5F2",
  },
});
export default SearchScreen;
