import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import AboutUs from "../../images/01.webp";
import AboutUs2 from "../../images/00.webp";
import AboutUs3 from "../../images/05.webp";

const About = () => {
    return (
        <Layout>
            <Breadcrumb title={"About"} bottomLink={true} />
            <div className="text-center pt-10 pb-16">
                <h2 className="text-[38px]">We are the Qurno,</h2>
                <h2 className="text-[38px]">
                    Team of content writers and designers.
                </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <img
                    src={AboutUs}
                    alt="our images"
                    className="col-span-2 rounded"
                />
                <img
                    src={AboutUs2}
                    alt="our images"
                    className="rounded mt-12"
                />
                <img src={AboutUs3} alt="our images" className="rounded mt-2" />
            </div>
            <div className="mt-20 mb-16 text-center font-medium text-[#505050] w-11/12 mx-auto leading-[1.8]">
                <p className="mb-8">
                    If ever a place existed where you could just go crazy
                    creatively, it is definitely your about page. It’s your
                    chance to show your readers who you really are. Pictures,
                    quotes, inspirational graphics, whatever it is that drives
                    you.. Display it here in a way that only you can.
                </p>

                <p>
                    I’ve included a plugin in the setup of this theme that will
                    make adding columns to your pages and posts a piece of cake.
                    Let creativity take control, and forget about the technical
                    end of things, I’ve got your six.
                </p>
            </div>
        </Layout>
    );
};

export default About;
