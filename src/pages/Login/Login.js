import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../firebase.config";

const Login = () => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const user = result.user;
                setUser(user);

                const usersRef = collection(db, "users");

                await setDoc(doc(usersRef, user.uid), {
                    name: user.displayName,
                    email: user.email,
                    userId: user.uid,
                    role: "subscriber",
                    photo: user.photoURL ? user.photoURL : "",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn}>Login with google</button>
        </div>
    );
};

export default Login;
