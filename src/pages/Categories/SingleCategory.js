import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";

const SingleCategory = () => {
    const { id } = useParams();

    return (
        <Layout>
            <Breadcrumb
                title={id}
                bottomLink={id}
                topTitle="Showing posts from"
            />
        </Layout>
    );
};

export default SingleCategory;
