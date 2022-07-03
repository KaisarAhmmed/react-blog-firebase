import React from "react";
import { Link, Outlet } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import { useUserAuth } from "../../context/userAuthContext";

const Dashboard = () => {
    const { user } = useUserAuth();

    return (
        <div className="w-[1400px] mx-auto py-20">
            <Breadcrumb title={"Dashboard"} />
            <div className="mx-auto flex justify-center items-start gap-8 min-h-[50vh]">
                <div className="w-3/12">
                    <ul className="bg-white/50 p-3 rounded">
                        <li>
                            <Link
                                to="/dashboard"
                                className="text-base py-2 px-4 block duration-200 rounded hover:bg-[#FEEAE3]"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/bookmark-post"
                                className="text-base py-2 px-4 block duration-200 rounded hover:bg-[#FEEAE3]"
                            >
                                Bookmark Post
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/profile"
                                className="text-base py-2 px-4 block duration-200 rounded hover:bg-[#FEEAE3]"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/add-post"
                                className="text-base py-2 px-4 block duration-200 rounded hover:bg-[#FEEAE3]"
                            >
                                Add New Post
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/users"
                                className="text-base py-2 px-4 block duration-200 rounded hover:bg-[#FEEAE3]"
                            >
                                All User
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-9/12">
                    <Outlet context={[user]}></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
