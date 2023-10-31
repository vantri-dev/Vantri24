import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";


const AuthProvider = createContext();
export function useAuth() {
  return useContext(AuthProvider);
}
export function useProfile(){
  return useContext(useProfile)
}
export function Context({ children }) {
  //Auth
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log(currentUser);
  const [error, setError] = useState("");
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const hanldeSignOut = async () => {
    try {
      setError("");
      await auth.signOut();
    } catch (error) {
      setError("Fail To SignOut");
    }
  };
  function ForgotPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function handleLoginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
   function hanldeLoginFacebook(){
     const provider = new FacebookAuthProvider()
     return signInWithPopup(auth,provider)
   }
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setLoading(false);
      setcurrentUser(user);
    });
  }, []);
  //CountDown
   function CountDown(){
    const time = "Nov 09 2023 23:59:59"
    return time
   }

 

  const value = {
    //Auth
    currentUser,
    signIn,
    signUp,
    hanldeSignOut,
    ForgotPassword,
    handleLoginGoogle,
    hanldeLoginFacebook,
    //CountDown
    CountDown
    //Profile
   
  };
  return (
    <AuthProvider.Provider value={value}>
      {!loading && children}
    </AuthProvider.Provider>
  );
}
