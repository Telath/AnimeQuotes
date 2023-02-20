import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

export const CreditScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* <Text style={styles.title}>Anime Quotes</Text> */}
      <Appbar.BackAction onPress={goBack} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>
          Cette application permet d'avoir 10 citations d'animes / mangas.
        </Text>
        <Text style={{ marginBottom: 50, textAlign: "center" }}>
          Elle a aussi un bouton qui permet d'avoir 10 nouvelles citations
        </Text>
        <Text style={{ textAlign: "center" }}>
          Application développée par Clément POUILLART.
        </Text>
        <Text style={{ textAlign: "center" }}>
          Pour le cours de React Native de M.LEULIETTE David
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
  },
});
