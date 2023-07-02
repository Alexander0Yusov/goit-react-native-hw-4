import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default CreatePostScreen = () => {
  const [namePhoto, setNamePhoto] = useState("");
  const [namePlace, setNamePlace] = useState("");
  const [inputIsActive, setInputIsActive] = useState(false);

  useEffect(() => {
    setInputIsActive(false);
  }, []);

  return (
    <View style={styles.container}>
      {true && (
        <View style={styles.thumb}>
          <TouchableOpacity style={styles.photoButton}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      )}
      {true && <Text style={styles.title}>Завантажте фото</Text>}

      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.inputNamePhoto}
          placeholder="Назва..."
          cursorColor={"black"}
          paddingLeft={16}
          value={namePhoto}
          onChangeText={setNamePhoto}
          onFocus={() => {
            setInputIsActive(true);
          }}
          onBlur={() => {
            setInputIsActive(false);
          }}
        />
        <TextInput
          style={styles.inputNamePlace}
          placeholder="Місцевість..."
          cursorColor={"black"}
          paddingLeft={16}
          value={namePlace}
          onChangeText={setNamePlace}
          onFocus={() => {
            setInputIsActive(true);
          }}
          onBlur={() => {
            setInputIsActive(false);
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 32,
    paddingLeft: 12,
    paddingRight: 12,

    // borderWidth: 1,
    // borderColor: "red",
  },
  thumb: {
    height: 300,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  photoButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#BDBDBD",
    fontFamily: "Roboto-400",
    fontSize: 16,
    alignSelf: "flex-start",
  },
  inputNamePhoto: {
    marginTop: 30,
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
  inputNamePlace: {
    marginTop: 30,
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
});
