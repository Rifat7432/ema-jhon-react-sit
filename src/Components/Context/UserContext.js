import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Section/firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const DataContext = createContext({});

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const googleProvider = new GoogleAuthProvider();
  const register = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const registerGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const update = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  const verification = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {
      toast.info(
        "go to your email and verify your account.If you do not get the mail in inbox then check spam.",
        { autoClose: 3000 }
      );
    });
  };
  const forget = (email)=>{
   return sendPasswordResetEmail(auth, email)
  }
  const data = {
    logOut,
    register,
    login,
    update,
    registerGoogle,
    verification,
    forget,
    userData,
    loading,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default UserContext;
