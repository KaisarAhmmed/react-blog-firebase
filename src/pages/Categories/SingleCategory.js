import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import SinglePost from "../../components/SinglePost/SinglePost";
import useCategoryPosts from "../../hooks/useCategoryPosts";

const SingleCategory = () => {
    const { id } = useParams();
    const [isLoading, categoryPosts] = useCategoryPosts(id);

    return (
        <Layout>
            <Breadcrumb
                title={id}
                bottomLink={id}
                topTitle="Showing posts from"
            />
            {isLoading && (
                <div>
                    <Loader />
                </div>
            )}

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-y-12">
                {categoryPosts &&
                    categoryPosts.map((post) => (
                        <SinglePost key={post.id} doc={post} />
                    ))}
            </div>
        </Layout>
    );
};

export default SingleCategory;
