import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [query, setQuery] = useState("");

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
