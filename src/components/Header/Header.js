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
                        <li className="">
                            <div className="relative ml-5 duration-200 rounded flex group h-[44px] items-center cursor-pointer">
                                <div className="mr-4">
                                    <p className="text-[15px]">{user.name}</p>
                                    <p className="text-[13px] capitalize ">
                                        {user.role}
                                    </p>
                                </div>
                                <div className="w-8 rounded-full">
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        title={user.name}
                                        className="rounded-full"
                                    />
                                </div>
                                <ul className="absolute border border-[#f0f0f0] rounded shadow-lg w-full top-14 bg-white text-black text-sm p-1 z-50 left-0 text-left opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible group-hover:top-10">
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            className="block hover:text-[#F08F80] rounded py-2 px-4 cursor-pointer text-sm duration-200 hover:bg-[rgba(240,142,128,.1)]"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="hover:text-[#F08F80] w-full text-left rounded p-2 px-4 cursor-pointer text-sm duration-200 hover:bg-[rgba(240,142,128,.1)]"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
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
