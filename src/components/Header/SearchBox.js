import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
    return (
        <div className="flex justify-center items-center py-2.5 px-5 rounded text-base text-black cursor-pointer duration-200 hover:bg-[#FEEAE3]">
            Search <BiSearch className="ml-1" />
        </div>
    );
};

export default SearchBox;
