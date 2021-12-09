import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterReultsByPrice = (price) => {
      // price === '$' || '$$' || '$$$'
      return results.filter(result => {
          return result.price === price;
      })
   }

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={() => searchApi(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results = {filterReultsByPrice('$')} title= "Cost Effective"/>
      <ResultsList results = {filterReultsByPrice('$$')} title= "Bit Pricier"/>
      <ResultsList results = {filterReultsByPrice('$$$')} title= "Big Spender"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
