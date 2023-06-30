// import { StatusBar } from "expo-status-bar"; // <StatusBar style="auto" />
// import { Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

const StackAuth = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-100": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-300": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-900": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  // return <RegistrationScreen />;
  // return <LoginScreen />;
  // return <PostsScreen />;

  return (
    <NavigationContainer>
      <StackAuth.Navigator>
        <StackAuth.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <StackAuth.Screen
          options={{ headerShown: false }}
          name="register"
          component={RegistrationScreen}
        />
        <StackAuth.Screen
          options={{ headerShown: false }}
          name="home"
          component={PostsScreen}
        />
      </StackAuth.Navigator>
    </NavigationContainer>
  );
}

// npx expo start
// Добрий день, іконки треба додавати з бібліотеки expo/vector-icons
