import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { doc, onSnapshot } from "firebase/firestore";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            const loginUserId = currentuser ? currentuser.uid : null;
            if (loginUserId === null) return setUser(null);
            const postRef = doc(db, "users", loginUserId);
            onSnapshot(postRef, (snapshot) => {
                setUser({ ...snapshot.data(), id: snapshot.id });
            });
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </userAuthContext.Provider>
    );
};

export const useUserAuth = () => {
    return useContext(userAuthContext);
};
