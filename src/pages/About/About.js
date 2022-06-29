import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";

const About = () => {
    return (
        <Layout>
            <Breadcrumb title={"About"} bottomLink={true} />
        </Layout>
    );
};

export default About;
