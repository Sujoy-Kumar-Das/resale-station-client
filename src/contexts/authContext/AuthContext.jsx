import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/Firebase.init";

export const AuthContextProvider = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
  // providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google singin method
  const singUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github singin method
  const singupWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // singup with email and password
  const singupWithEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user
  const updateUser = (user)=>{
    return updateProfile(auth.currentUser,user)
  }
  // login with email and password
  const loginWithEmailAndPass = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  // auth values
  const authInfo = {
    singUpWithGoogle,
    singupWithGithub,
    singupWithEmailAndPass,
    updateUser,
    loginWithEmailAndPass
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
