import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

const SocialLogin = () => {
    const { googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSocialLogin = async () => {
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button
                onClick={handleSocialLogin}
                className="flex border border-black px-5 text-sm uppercase duration-300 py-3 justify-center items-center mx-auto rounded"
            >
                <FcGoogle className="mr-2 text-[20px]" /> Login With Google
            </button>
        </>
    );
};

export default SocialLogin;
