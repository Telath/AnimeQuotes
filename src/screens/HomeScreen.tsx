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
import { Avatar, Button, Card } from "react-native-paper";
import { fetchData } from "../hooks/useAnimeQuotes";

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
  const { isLoading, isError, data, refetch } = useQuery(
    ["animequotes"],
    fetchData
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.status}>
        <Text style={styles.statusText}>🕓 Loading 🕓</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.status}>
        <Text>🛑 Error 🛑</Text>
      </SafeAreaView>
    );
  }

  if (data === undefined) {
    return (
      <SafeAreaView style={styles.status}>
        <Text>🥹 Not found 🥹</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.title}>Anime Quotes</Text>
      <Button onPress={() => refetch()} mode="outlined" style={styles.button}>
        Refresh
      </Button>
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
  button: {
    marginTop: 10,
    // width: "fit-content",
    // backgroundColor: "red",
    // color: "white",
  },
  card: {
    margin: 20,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  anime: {
    fontSize: 32,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
  },
  status: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
