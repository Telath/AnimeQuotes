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
    <Card>
      <Card.Title title={anime} subtitle={character} left={LeftContent} />
      <Card.Content>
        <Text style={styles.quote}>"{quote}"</Text>
      </Card.Content>
    </Card>
  );
};

export const HomeScreen = () => {
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
