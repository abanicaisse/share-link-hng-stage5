import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export let currentUser: {
  uid: string;
  email: string | null;
} = {
  uid: "",
  email: "",
};

const getCurrentUser = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.uid = user.uid;
      currentUser.email = user.email;

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      return currentUser;
    } else {
    }
  });
};

export const authenticateUser = async (
  authType: string,
  userEmail: string,
  userPassword: string
) => {
  // let appUser: { uid: string } = { uid: "" };
  try {
    if (authType === "Create account") {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      await getCurrentUser();
      console.log(currentUser);

      return userCredential;
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );

    getCurrentUser();
    console.log(currentUser);

    return userCredential;
  } catch (error) {
    console.log(error);
  }
};
