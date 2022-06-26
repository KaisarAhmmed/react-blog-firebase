import React from "react";
import { Link } from "react-router-dom";
import Calender from "../../images/calender.svg";
import Clock from "../../images/clock.svg";
import Category from "../../images/category.svg";

const SinglePost = ({ doc }) => {
    return (
        <article className="px-7 group">
            <div className="relative mb-[60px] before:absolute before:content-[''] before:h-full before:w-[calc(100%_+_60px)] before:bg-white/50 before:top-[30px] before:left-[-30px] before:duration-300 before:rounded group-hover:before:bg-white">
                <Link to={`blog/${doc.id}`}>
                    <img
                        src={doc.imageUrl}
                        alt={doc.title}
                        className="h-[350px] w-full object-cover rounded grayscale duration-300 group-hover:grayscale-0 group-hover:-translate-y-[4px]"
                    />
                </Link>
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
                        {doc.category}
                    </li>
                </ul>
                <Link
                    to={`blog/${doc.id}`}
                    className="text-[#152035] duration-200 hover:text-[#F08F80]"
                >
                    <h2 className="text-[30px] mb-4 leading-10">{doc.title}</h2>
                </Link>
                <p className="text-[#505050] leading-[1.8] mb-4 font-medium">
                    {doc.description.slice(0, 160).replace(/(<([^>]+)>)/gi, "")}
                    ...
                </p>
                <ul className="flex">
                    <li className="relative font-medium text-[#505050] pr-10 before:absolute before:content-[''] before:h-[5px] before:w-[5px] before:bg-[#505050] before:rounded-full before:right-[18px] before:top-[10px]">
                        <Link to={`author/${doc.authorId}`}>
                            by {doc.author}
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
