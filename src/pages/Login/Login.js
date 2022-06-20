import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase.config";

const Login = () => {
    const provider = new GoogleAuthProvider();

    const [userName, setUserName] = useState("");

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                console.log(user.displayName);
                setUserName(user.displayName);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="text-center">
            {userName}
            <button onClick={handleGoogleSignIn}>Login with google</button>
        </div>
    );
};

export default Login;
