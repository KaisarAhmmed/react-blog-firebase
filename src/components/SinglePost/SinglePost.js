import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Calender from "../../images/calender.svg";
import Clock from "../../images/clock.svg";
import Category from "../../images/category.svg";
import useUser from "../../hooks/useUser";

const SinglePost = ({ doc }) => {
    const navigate = useNavigate();

    const [loading, author] = useUser(doc.authorId);

    const navigateToBlogSingle = (id) => {
        navigate(`/blog/${id}`);
    };

    const { userId, name, photo } = author;

    return (
        <article className="lg:px-7 px-5 group">
            <div className="relative lg:mb-[60px] mb-[30px] before:absolute before:content-[''] before:h-full lg:before:w-[calc(100%_+_60px)] before:w-[calc(100%_+_30px)] before:bg-white/50 lg:before:top-[30px] before:top-[15px] lg:before:left-[-30px] before:left-[-15px] before:duration-300 before:rounded group-hover:before:bg-white">
                <div
                    onClick={() => navigateToBlogSingle(doc.id)}
                    className="cursor-pointer"
                >
                    <img
                        src={doc.imageUrl}
                        alt={doc.title}
                        className="lg:h-[350px] h-[280px] w-full object-cover rounded grayscale duration-300 group-hover:grayscale-0 group-hover:-translate-y-[4px]"
                    />
                </div>
            </div>
            <div>
                <ul className="flex text-[#505050] mb-4">
                    <li className="relative flex pr-10 justify-start items-center before:absolute before:content-[''] before:w-[12px] before:h-[2px] before:bg-[#505050] before:right-[13px]">
                        <img
                            src={Calender}
                            alt="date"
                            className="w-[20px] mr-2"
                        />
                        {doc.createdAt.toDate().toDateString()}
                    </li>

                    <li className="flex">
                        <img
                            src={Clock}
                            alt="reading time"
                            className="w-[20px] mr-2"
                        />
                        {doc?.readingTime} min read
                    </li>
                </ul>
                <div
                    onClick={() => navigateToBlogSingle(doc.id)}
                    className="text-[#152035] duration-200 cursor-pointer hover:text-[#F08F80]"
                >
                    <h2 className="lg:text-[30px] text-[26px] lg:mb-4 mb-2 leading-10">
                        {doc.title}
                    </h2>
                </div>
                <p className="text-[#505050] leading-[1.8] mb-4 font-medium text-[15px] lg:text-base">
                    {doc.description.slice(0, 160).replace(/(<([^>]+)>)/gi, "")}
                    ...
                </p>
                <ul className="flex items-center">
                    <li className="relative text-sm lg:text-base font-medium text-[#505050] pr-10 before:absolute before:content-[''] before:h-[5px] before:w-[5px] before:bg-[#505050] before:rounded-full before:right-[18px] before:top-[10px]">
                        <Link
                            to={`author/${userId}`}
                            className="flex items-center"
                        >
                            <img
                                src={photo}
                                alt={name}
                                className="h-7 w-7 rounded object-cover mr-2"
                            />
                            by {name}
                        </Link>
                    </li>
                    <li>
                        <ul className="flex">
                            {doc.tags.map((tag, index) => (
                                <li key={index} className="mr-2">
                                    <Link
                                        to="/"
                                        className="py-1.5 px-2.5 rounded-sm capitalize duration-200 text-[#505050] bg-[#F08F80]/10 text-sm hover:bg-[#F08F80] hover:text-white"
                                    >
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default SinglePost;
