import React from "react";
import Layout from "../../components/Layout/Layout";
import Posts from "../../components/Posts/Posts";
import Wave from "../../images/wave.svg";

const Home = () => {
    return (
        <Layout>
            <div className="text-2xl py-28 ">
                <h1 className="w-10/12 mx-auto text-[64px] text-[#152035] text-center leading-normal relative z-0">
                    Taking control of your daily life is easy when you know how!
                    <span className="absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 -z-10">
                        <img src={Wave} alt="wave" />
                    </span>
                </h1>
            </div>
            <div className="">
                <Posts title={"Recent Posts"} />
            </div>
        </Layout>
    );
};

export default Home;
