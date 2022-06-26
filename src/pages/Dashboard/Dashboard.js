import React from "react";
import { Link, Outlet } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import { useUserAuth } from "../../context/userAuthContext";

const Dashboard = () => {
    const { user } = useUserAuth();

    return (
        <Layout>
            <Breadcrumb title={"Dashboard"} />
            <div className="mx-auto flex justify-center items-start gap-8">
                <div className="w-3/12">
                    <ul className="bg-white/50 p-3 rounded">
                        <li>
                            <Link
                                to="/"
                                className="text-base py-2 px-4 block duration-200 rounded hover:bg-[#FEEAE3]"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
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
                    </ul>
                </div>
                <div className="w-9/12">
                    <Outlet context={[user]}></Outlet>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
