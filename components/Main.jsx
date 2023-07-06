import { NavigationContainer } from "@react-navigation/native";
import navSelector from "../routing";

import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../redux/stateSelectors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { useState } from "react";
import { setUser } from "../redux/authService/authSlice";

export default function Main() {
  const { uid } = useSelector(authSelector);
  const [uid_, setUid_] = useState("");
  // const routes = navSelector(uid);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (userUpd) => {
    if (userUpd) {
      setUid_(userUpd.uid);
      console.log("uid_== ", uid_);
      console.log("uid== ", uid);
      dispatch(setUser(userUpd));
    } else {
      console.log("User is signed out");
      setUid_("");
    }
  });

  const routes = navSelector(uid_);

  return <NavigationContainer>{routes}</NavigationContainer>;
}
