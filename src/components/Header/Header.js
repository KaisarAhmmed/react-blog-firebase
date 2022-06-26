import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

const Header = () => {
    const { user, logOut } = useUserAuth();

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="container mx-auto flex py-8 items-center">
            <div className="w-3/12">
                <Link to="/">
                    <h1 className="text-2xl font-black uppercase text-black">
                        RFB
                    </h1>
                </Link>
            </div>
            <div className="w-9/12">
                <ul className="flex justify-end">
                    <li>
                        <Link
                            className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                            to="/blog/archive"
                        >
                            Archive
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    {user ? (
                        <li>
                            <button
                                onClick={handleLogOut}
                                className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                            >
                                {user.name}, LogOut
                            </button>
                        </li>
                    ) : (
                        <li>
                            <Link
                                className="py-2.5 px-5 rounded text-base text-black inline-block duration-200 hover:bg-[#FEEAE3]"
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;
