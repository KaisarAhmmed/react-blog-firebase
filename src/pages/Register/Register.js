import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useUserAuth } from "../../context/userAuthContext";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
    const { signUpWithEmail } = useUserAuth();
    const navigate = useNavigate();
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSignup = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            await signUpWithEmail(name, email, password);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="text-center lg:w-5/12 w-full mx-auto bg-white/80 rounded p-6">
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="text-left block mb-1.5"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            ref={nameRef}
                            placeholder="Type your name..."
                            className="border w-full rounded p-3 outline-none duration-300 border-[#bdbdbd] text-[15px]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="text-left block mb-1.5"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            ref={emailRef}
                            placeholder="Type your email address..."
                            className="border w-full rounded p-3 outline-none duration-300 border-[#bdbdbd] text-[15px]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="text-left block mb-1.5"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            ref={passwordRef}
                            placeholder="Type your password..."
                            className="border w-full rounded p-3 outline-none duration-300 border-[#bdbdbd] text-[15px]"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <button className="bg-primary px-20 py-3 rounded duration-300 text-white uppercase hover:bg-black">
                            Login
                        </button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </Layout>
    );
};

export default Register;
