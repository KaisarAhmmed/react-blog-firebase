import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "../../context/userAuthContext";

const SocialLogin = () => {
    const { googleSignIn } = useUserAuth();

    return (
        <>
            <button
                onClick={googleSignIn}
                className="flex border border-black px-5 text-sm uppercase duration-300 py-3 justify-center items-center mx-auto rounded"
            >
                <FcGoogle className="mr-2 text-[20px]" /> Login With Google
            </button>
        </>
    );
};

export default SocialLogin;
