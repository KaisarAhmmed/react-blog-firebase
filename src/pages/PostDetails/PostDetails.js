import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import usePost from "../../hooks/usePost";
import Calender from "../../images/calender.svg";
import Clock from "../../images/clock.svg";
import Category from "../../images/category.svg";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
} from "react-share";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import { ImPinterest2, ImReddit } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";

import "./PostDetails.css";
import useUser from "../../hooks/useUser";
import Loader from "../../components/Loader/Loader";
import Likes from "../../components/Likes/Likes";
import Bookmarks from "../../components/Bookmarks/Bookmarks";
import { FiArrowUpRight } from "react-icons/fi";

const PostDetails = () => {
    const { id } = useParams();

    const [isLoading, post] = usePost(id);

    const { authorId, likes } = post;

    const [loading, author] = useUser(authorId);

    if (isLoading || loading)
        return (
            <div className="py-40">
                <Loader />
            </div>
        );

    const { name, photo, bio } = author;

    return (
        <Layout>
            <div className="w-11/12 mx-auto ">
                {post && (
                    <>
                        <h1 className="text-[60px] mb-6 ml-8">{post.title}</h1>
                        <div className="flex justify-between items-center">
                            <ul className="flex text-[#505050] mb-12 ml-8">
                                <li className="relative flex pr-10 justify-start items-center before:absolute before:content-[''] before:w-[12px] before:h-[2px] before:bg-[#505050] before:right-[13px]">
                                    <img
                                        src={Calender}
                                        alt="date"
                                        className="w-[20px] mr-2"
                                    />
                                    {undefined !== post.createdAt
                                        ? post.createdAt.toDate().toDateString()
                                        : ""}
                                </li>
                                <li className="flex pr-10 relative before:absolute before:content-[''] before:w-[12px] before:h-[2px] before:bg-[#505050] before:right-[13px] before:top-[11px]">
                                    <img
                                        src={Clock}
                                        alt="reading time"
                                        className="w-[20px] mr-2"
                                    />
                                    {post?.readingTime} min read
                                </li>
                                <li className="flex pr-10 relative before:absolute before:content-[''] before:w-[12px] before:h-[2px] before:bg-[#505050] before:right-[13px] before:top-[11px]">
                                    <img
                                        src={Category}
                                        alt="category"
                                        className="w-[20px] mr-2"
                                    />
                                    {post.category}
                                </li>
                                <li className="flex items-center">
                                    <FaRegHeart className="text-[18px]" />
                                    <span className="inline-block mx-1.5">
                                        {post.likes?.length}
                                    </span>
                                    {post.likes?.length < 2 ? "Like" : "Likes"}
                                </li>
                            </ul>
                            <ul className="flex text-[#505050] mb-12 mr-8">
                                <li className="mr-3">
                                    <Bookmarks postId={id} />
                                </li>
                                <li>
                                    <Likes id={id} likes={likes} />
                                </li>
                            </ul>
                        </div>
                        <div className="mb-12">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-[595px] object-cover rounded bg-slate-50"
                            />
                        </div>
                        <div className="flex">
                            <div className="w-2/12 relative">
                                <div className="sticky top-10">
                                    <span className="text-[#505050] text-[14px] block mb-4 ml-8">
                                        SHARE
                                    </span>
                                    <ul className="ml-8">
                                        <li className="mb-2">
                                            <TwitterShareButton
                                                title={post.title}
                                                url={
                                                    "https://localhost:3000/blog/"
                                                }
                                                hashtags={[post.category]}
                                                className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]"
                                            >
                                                <FiTwitter className="mx-auto group-hover:text-white duration-300" />
                                            </TwitterShareButton>
                                        </li>
                                        <li className="mb-2">
                                            <FacebookShareButton
                                                title={post.title}
                                                url={"/blog/"}
                                                className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]"
                                            >
                                                <FiFacebook className="mx-auto group-hover:text-white duration-300" />
                                            </FacebookShareButton>
                                        </li>
                                        <li className="mb-2">
                                            <LinkedinShareButton className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]">
                                                <FiLinkedin className="mx-auto group-hover:text-white duration-300" />
                                            </LinkedinShareButton>
                                        </li>
                                        <li className="mb-2">
                                            <RedditShareButton className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]">
                                                <ImReddit className="mx-auto group-hover:text-white duration-300" />
                                            </RedditShareButton>
                                        </li>
                                        <li>
                                            <PinterestShareButton className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]">
                                                <ImPinterest2 className="mx-auto group-hover:text-white duration-300" />
                                            </PinterestShareButton>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-10/12 mr-8">
                                <div
                                    className="mb-12 text-[#505050] post_details"
                                    dangerouslySetInnerHTML={{
                                        __html: post.description,
                                    }}
                                ></div>
                                <div>
                                    Tags:
                                    {post.tags?.map((tag, index) => (
                                        <Link
                                            key={index}
                                            to="/"
                                            className="capitalize ml-4 py-2 px-3 text-[#505050] font-medium duration-300 rounded bg-white text-[14px] hover:text-[#F08F80]"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-24 ml-8 mr-8 flex gap-10">
                            <img
                                src={photo}
                                alt={name}
                                className="h-[155px] w-[155px] object-cover rounded"
                            />
                            <div>
                                <h4 className="text-2xl text-[#212529] mb-5">
                                    <Link
                                        to={`/author/${authorId}`}
                                        className="duration-300 hover:text-primary"
                                    >
                                        {name}
                                    </Link>
                                </h4>
                                <p className="text-[#505050] leanding-10 text-base mb-4">
                                    {undefined !== bio
                                        ? bio.slice(0, 160)
                                            ? `${bio.slice(0, 160)}...`
                                            : bio.slice(0, 160)
                                        : ""}

                                    {!bio &&
                                        `${name} is a writer based in New York City. He's interested in all things tech, science, and photography related, and likes to read book and more.`}
                                </p>
                                <Link
                                    to={`/author/${authorId}`}
                                    className="flex items-center font-medium underline text-black duration-300 hover:text-primary"
                                >
                                    See all post by this user{" "}
                                    <FiArrowUpRight className="text-[18px] ml-1 mt-0.5" />
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default PostDetails;
