import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import useAllUser from "../../hooks/useAllUser";
import SingleAuthor from "./SingleAuthor";

const Author = () => {
    const [isLoading, users] = useAllUser();

    if (isLoading) return <Loader text="Loading author..." />;

    return (
        <Layout>
            <Breadcrumb title={"Author"} bottomLink="Author" />
            <div className="grid grid-cols-4 gap-8 text-center">
                {users &&
                    users.map((author) => (
                        <SingleAuthor key={author.id} author={author} />
                    ))}
            </div>
        </Layout>
    );
};

export default Author;
