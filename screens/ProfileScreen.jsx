import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <View style={styles.footer}>
        <View style={styles.footerNavigation}>
          <TouchableOpacity
            style={styles.buttonGrid}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("posts")}
          >
            <SimpleLineIcons name="grid" size={24} color="#212121" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.8}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonUser} activeOpacity={0.8}>
            <Feather name="user" size={24} color="#212121" />
          </TouchableOpacity>
        </View>
        <View style={styles.footerRow}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },

  title: {
    fontSize: 17,
    fontWeight: 500,
    fontFamily: "Roboto-500",
    color: "#212121",

    alignSelf: "center",

    // borderWidth: 1,
    // borderColor: "blue",
  },

  footer: {
    width: "100%",
    height: 83,

    alignItems: "center",
    marginTop: 16,

    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
  },
  footerNavigation: {
    height: 42,
    width: 208,
    marginTop: 16,

    flexDirection: "row",
    justifyContent: "space-between",

    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonGrid: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonAdd: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonUser: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "red",
  },
});
