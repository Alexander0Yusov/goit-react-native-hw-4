import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CardPost from "../components/CardPost";

export default PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts((prev) => [...prev, route.params]);
    console.log(posts);
  }, [route.params]);

  const toMapScreen = () => {
    navigation.navigate("mapPostsSubScreen");
  };

  const toCommentsScreen = () => {
    navigation.navigate("commentsPostsSubScreen");
  };

  return (
    <View style={styles.container}>
      {false && (
        <>
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
        </>
      )}
      {posts.length > 0 && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => {
            if (item) {
              return (
                <CardPost
                  photo={item.photo}
                  namePhoto={item.namePhoto}
                  namePlace={item.namePlace}
                  toMap={toMapScreen}
                  toComments={toCommentsScreen}
                />
              );
            }
          }}
        ></FlatList>
      )}
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
