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
import {
    collection,
    doc,
    getDoc,
    onSnapshot,
    setDoc,
} from "firebase/firestore";

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signUpWithEmail = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                const user = result.user;
                setUser(user);

                const usersRef = collection(db, "users");
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                } else {
                    await setDoc(doc(usersRef, user.uid), {
                        name: user.displayName ? user.displayName : name,
                        email: user.email,
                        userId: user.uid,
                        role: "subscriber",
                        bookmarks: [],
                        bio: "",
                        photo: user.photoURL ? user.photoURL : "",
                    });
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const logOut = () => {
        return signOut(auth);
    };
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleAuthProvider)
            .then(async (result) => {
                const user = result.user;
                setUser(user);

                const usersRef = collection(db, "users");
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                } else {
                    await setDoc(doc(usersRef, user.uid), {
                        name: user.displayName,
                        email: user.email,
                        userId: user.uid,
                        role: "subscriber",
                        bookmarks: [],
                        bio: "",
                        photo: user.photoURL ? user.photoURL : "",
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
            value={{ user, logIn, signUpWithEmail, logOut, googleSignIn }}
        >
            {children}
        </userAuthContext.Provider>
    );
};

export const useUserAuth = () => {
    return useContext(userAuthContext);
};
