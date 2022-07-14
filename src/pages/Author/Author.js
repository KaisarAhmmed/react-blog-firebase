import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import useAllUser from "../../hooks/useAllUser";
import SingleAuthor from "./SingleAuthor";

const Author = () => {
    const [isLoading, users] = useAllUser();

    return (
        <Layout>
            <Breadcrumb title={"Author"} bottomLink="Author" />
            {isLoading && (
                <div className="h-[400px] flex justify-center items-center">
                    <Loader text="Loading author..." />
                </div>
            )}
            <div className="grid grid-cols-4 pt-10 gap-8 text-center">
                {users &&
                    users.map((author) => (
                        <SingleAuthor key={author.id} author={author} />
                    ))}
            </div>
        </Layout>
    );
};

export default Author;
