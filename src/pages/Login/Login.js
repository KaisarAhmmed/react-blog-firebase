import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useUserAuth } from "../../context/userAuthContext";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const { logIn } = useUserAuth();
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        setError("");
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        try {
            await logIn(email, pass);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Layout>
            <div className="text-center lg:w-5/12 w-full mx-auto bg-white/80 rounded p-6">
                <form onSubmit={handleEmailSignIn}>
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
                            ref={passRef}
                            placeholder="Type your password..."
                            className="border w-full rounded p-3 outline-none duration-300 border-[#bdbdbd] text-[15px]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <button className="bg-primary px-20 py-3 rounded duration-300 text-white uppercase hover:bg-black">
                            Login
                        </button>
                    </div>
                    {error && (
                        <p className="mb-6 text-red-500 text-sm">{error}</p>
                    )}
                </form>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </Layout>
    );
};

export default Login;
