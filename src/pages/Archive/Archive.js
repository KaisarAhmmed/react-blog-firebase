import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";

const Archive = () => {
    return (
        <Layout>
            <Breadcrumb
                title={"Archive"}
                topTitle={"Showing posts from"}
                bottomLink={true}
            />
        </Layout>
    );
};

export default Archive;
