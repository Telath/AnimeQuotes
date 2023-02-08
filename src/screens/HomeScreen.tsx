import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Avatar, Card } from "react-native-paper";
import { fetchData } from "../hooks/useAnimeQuotes";
import { default as data } from "../../api/data.json";

type ItemData = {
  anime: string;
  character: string;
  quote: string;
};

const LeftContent = (props: object) => (
  <Avatar.Icon {...props} icon="format-quote-close" />
);

const Item = ({ anime, character, quote }: ItemData) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={anime}
        subtitle={character}
        left={LeftContent}
        titleStyle={{ fontWeight: "700" }}
      />
      <Card.Content>
        <Text style={styles.quote}>"{quote}"</Text>
      </Card.Content>
    </Card>
  );
};

export const HomeScreen = () => {
  const { isLoading, isError, data } = useQuery(["animequotes"], fetchData);

  console.log(data);

  if (isLoading) {
    return (
      <View>
        <Text>Loading…</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }

  if (data === undefined) {
    return (
      <View>
        <Text>Not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            anime={item.anime}
            character={item.character}
            quote={item.quote}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  quote: {
    fontStyle: "italic",
  },
  card: {
    margin: 20,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  anime: {
    fontSize: 32,
  },
});
