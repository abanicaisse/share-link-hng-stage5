import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const registerUser = async (userEmail: string, userPassword: string) => {
  let appUser: { uid: string } = { uid: "" };
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );

    onAuthStateChanged(auth, (user) => {
      if (user) {
        appUser.uid = user.uid;
      } else {
      }
    });

    return appUser;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (userEmail: string, userPassword: string) => {
  let appUser: { uid: string } = { uid: "" };
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );

    onAuthStateChanged(auth, (user) => {
      if (user) {
        appUser.uid = user.uid;
      } else {
      }
    });

    return appUser;
  } catch (error) {
    console.log(error);
  }
};
