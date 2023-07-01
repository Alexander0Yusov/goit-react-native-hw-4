import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import ProfileScreen from "./screens/ProfileScreen";

import Ionicons from "@expo/vector-icons/Ionicons";
import TabNavBar from "./components/TabNavBar";

const StackAuth = createStackNavigator();
const ButtomTabNav = createBottomTabNavigator();

const optionsPostsScreen = {
  headerShown: true,
  title: "Публікації",
  headerTitleAlign: "center",
  headerShadowVisible: true,
  headerStyle: {
    elevation: 10,
    shadowOpacity: 4,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontSize: 17,
  },

  headerRight: () => {
    // <TouchableOpacity activeOpacity={0.8}>
    //   <Ionicons name="exit-outline" size={28} color="#BDBDBD" />
    // </TouchableOpacity>;
  },
};

export default navSelector = (isAuth) => {
  if (isAuth) {
    return (
      <ButtomTabNav.Navigator
        initialRouteName="posts"
        backBehavior="history"
        screenOptions={{ tabBarShowLabel: false }}
        tabBar={(props) => <TabNavBar {...props} />}
      >
        <ButtomTabNav.Screen
          name="posts"
          component={PostsScreen}
          options={optionsPostsScreen}
        />
        <ButtomTabNav.Screen name="createPost" component={CreatePostScreen} />
        <ButtomTabNav.Screen name="profile" component={ProfileScreen} />
      </ButtomTabNav.Navigator>
    );
  }

  return (
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
    </StackAuth.Navigator>
  );
};
