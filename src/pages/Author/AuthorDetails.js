import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import SinglePost from "../../components/SinglePost/SinglePost";
import useAuthorPosts from "../../hooks/useAuthorPosts";
import useUser from "../../hooks/useUser";

const AuthorDetails = () => {
    const { authorId } = useParams();

    const [authorPosts, authorPostCount, isLoading] = useAuthorPosts(authorId);
    const [loading, author] = useUser(authorId);

    const { name, photo, bio } = author;

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: "100px",
        });
    }, [authorId]);

    return (
        <Layout>
            {isLoading && (
                <div className="flex justify-center items-center h-[400px]">
                    <Loader />
                </div>
            )}
            {!isLoading && (
                <>
                    <div className="w-11/12 mx-auto flex gap-5 items-center mb-24">
                        <div className="w-3/12">
                            <img
                                src={photo}
                                alt={name}
                                className="h-[230px] w-[230px] object-cover rounded"
                            />
                        </div>
                        <div className="w-9/12">
                            <p className="font-medium text-[#505050] mb-2.5">
                                <span className="font-medium text-black inline-block mr-1">
                                    {authorPostCount}
                                </span>
                                Published
                                {authorPostCount < 1 ? " post" : " posts"}
                            </p>
                            <h2 className="text-[28px] mb-4">{name}</h2>
                            <p className="text-[#505050] font-medium leading-[1.8] mb-6">
                                {bio
                                    ? bio
                                    : `${name} is a writer based in New York City. He's interested in all things tech, science, and photography related, and likes to read book and more.`}
                            </p>
                            <p className="font-medium text-[17px]">
                                Follow him On Twitter
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-y-12">
                        {authorPosts &&
                            authorPosts.map((doc) => (
                                <SinglePost key={doc.id} doc={doc} />
                            ))}
                    </div>
                </>
            )}
        </Layout>
    );
};

export default AuthorDetails;
