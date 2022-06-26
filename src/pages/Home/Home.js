import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import Wave from "../../images/wave.svg";
import { Link } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import Loader from "../../components/Loader/Loader";
import SinglePost from "../../components/SinglePost/SinglePost";

const Home = () => {
    const [isLoading, posts] = useFirestore();

    return (
        <Layout>
            <div className="text-2xl pt-6 pb-28 ">
                <h1 className="w-10/12 mx-auto text-[64px] text-[#152035] text-center leading-normal relative z-0">
                    Taking control of your daily life is easy when you know how!
                    <span className="absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 -z-10">
                        <img src={Wave} alt="wave" />
                    </span>
                </h1>
            </div>
            <div className="">
                <Breadcrumb title={"Recent Posts"} />
            </div>
            {isLoading && <Loader />}
            <div className="grid grid-cols-2 gap-10">
                {posts &&
                    posts
                        .slice(0, 6)
                        .map((doc) => <SinglePost key={doc.id} doc={doc} />)}
            </div>
            <div className="mt-20 flex justify-center">
                <Link
                    to="/blog"
                    className="flex items-center bg-[#F08F80] text-white py-3.5 px-8 rounded duration-300 hover:bg-[#152035]"
                >
                    View all posts
                </Link>
            </div>
        </Layout>
    );
};

export default Home;
