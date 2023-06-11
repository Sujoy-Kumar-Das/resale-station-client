import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
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

  const singupWithEmailAndPass = (email,password) =>{
    return creat
  }

  // auth values
  const authInfo = { singUpWithGoogle, singupWithGithub };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
