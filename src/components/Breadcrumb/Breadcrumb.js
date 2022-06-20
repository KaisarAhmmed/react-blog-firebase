import React from "react";
import TitleImg from "../../images/title_bg.svg";

const Breadcrumb = ({ title }) => {
    return (
        <>
            <h2 className="text-[38px] text-center mb-20 text-[#152035]">
                <span
                    style={{ backgroundImage: `url(${TitleImg})` }}
                    className="bg-bottom bg-no-repeat inline-block px-3 bg-contain leading-[50px]"
                >
                    {title}
                </span>
            </h2>
        </>
    );
};

export default Breadcrumb;
