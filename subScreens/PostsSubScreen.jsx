import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default PostsScreen = ({ navigation }) => {
  const toMapScreen = () => {
    navigation.navigate("mapPostsSubScreen");
  };

  const toCommentsScreen = () => {
    navigation.navigate("commentsPostsSubScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts Screen</Text>

      <TouchableOpacity
        style={{ borderWidth: 1, borderColor: "red", marginBottom: 12 }}
        onPress={toMapScreen}
      >
        <Text style={{ fontSize: 24 }}>Go to Map screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ borderWidth: 1, borderColor: "red" }}
        onPress={toCommentsScreen}
      >
        <Text style={{ fontSize: 24 }}>Go to Comments screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },

  title: {
    fontSize: 17,
    fontWeight: 500,
    fontFamily: "Roboto-500",
    color: "#212121",
    marginBottom: 12,

    // alignSelf: "center",

    // borderWidth: 1,
    // borderColor: "blue",
  },
});
