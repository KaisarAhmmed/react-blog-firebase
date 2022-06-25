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
import "./Single.css";

const SinglePost = () => {
    const { id } = useParams();
    const [isLoading, post] = usePost(id);

    if (isLoading) return <span>Loading...</span>;

    return (
        <Layout>
            <div className="w-11/12 mx-auto py-20">
                {post && (
                    <>
                        <h1 className="text-[60px] mb-6 ml-8">{post.title}</h1>
                        <ul className="flex text-[#505050] mb-12 ml-8">
                            <li className="relative flex pr-10 justify-start items-center before:absolute before:content-[''] before:w-[12px] before:h-[2px] before:bg-[#505050] before:right-[13px]">
                                <img
                                    src={Calender}
                                    alt="date"
                                    className="w-[20px] mr-2"
                                />
                                June 20, 2022
                            </li>
                            <li className="flex pr-10 relative before:absolute before:content-[''] before:w-[12px] before:h-[2px] before:bg-[#505050] before:right-[13px] before:top-[11px]">
                                <img
                                    src={Clock}
                                    alt="reading time"
                                    className="w-[20px] mr-2"
                                />
                                03 min read
                            </li>
                            <li className="flex">
                                <img
                                    src={Category}
                                    alt="category"
                                    className="w-[20px] mr-2"
                                />
                                {post.category}
                            </li>
                        </ul>
                        <div className="mb-12">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-[595px] object-cover rounded"
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
                                            <TwitterShareButton className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]">
                                                <FiTwitter className="mx-auto group-hover:text-white duration-300" />
                                            </TwitterShareButton>
                                        </li>
                                        <li className="mb-2">
                                            <FacebookShareButton className="h-[42px] w-[42px] !border-[1px] !border-solid !border-[#ddd] rounded duration-300 group hover:!border-[#F08F80] hover:!bg-[#F08F80]">
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
                            <div className="w-10/12">
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
                    </>
                )}
            </div>
        </Layout>
    );
};

export default SinglePost;
