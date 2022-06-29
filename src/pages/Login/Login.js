import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
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
    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn}>Login with google</button>
        </div>
    );
};

export default Login;
