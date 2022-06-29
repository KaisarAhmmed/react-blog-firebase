import React from "react";
import { Link } from "react-router-dom";
import TitleImg from "../../images/title_bg.svg";
import { AiOutlineHome } from "react-icons/ai";

const Breadcrumb = ({ title, topTitle, bottomLink }) => {
    return (
        <>
            {topTitle && (
                <p className="text-center text-[#505050] font-medium mb-2">
                    {topTitle}
                </p>
            )}
            <h2
                className={`text-[38px] text-center text-[#152035] ${
                    bottomLink ? "mb-4" : "mb-20"
                }`}
            >
                <span
                    style={{ backgroundImage: `url(${TitleImg})` }}
                    className="bg-bottom bg-no-repeat inline-block px-3 bg-contain leading-[50px]"
                >
                    {title}
                </span>
            </h2>
            {bottomLink && (
                <ul className="flex justify-center items-center text-base gap-10 mb-20">
                    <li className="relative before:absolute before:content-[''] before:h-1 before:w-1 before:bg-[#4C4A49] before:rounded-full before:top-2.5 before:-right-[22px]">
                        <Link
                            to="/"
                            className="flex items-center gap-1 font-medium"
                        >
                            <AiOutlineHome /> Home
                        </Link>
                    </li>
                    <li>{title}</li>
                </ul>
            )}
        </>
    );
};

export default Breadcrumb;
