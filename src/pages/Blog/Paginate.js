import React from "react";

const Pagination = ({ postIds, paginateId, currentPage }) => {
    const nextPage = () => {
        let nextBtn = postIds.indexOf(currentPage) + 1;

        paginateId(postIds[nextBtn]);
    };

    const nextPrev = () => {
        let prevBtn = postIds.indexOf(currentPage) - 1;

        paginateId(postIds[prevBtn]);
    };

    //console.log(currentPage);

    return (
        <div className="mt-20 flex justify-center items-center">
            <ul className="flex border border-white py-2 px-1 rounded">
                <li className="mx-1">
                    <button
                        onClick={nextPrev}
                        className="w-16 h-12 rounded text-[#152035] bg-white font-medium duration-300 hover:bg-[#F08F80] hover:text-white"
                    >
                        Prev
                    </button>
                </li>
                {postIds.map((id, index) => (
                    <li key={index} className="mx-1">
                        <button
                            disabled={`${
                                currentPage.id == id.id ? "disabled" : ""
                            }`}
                            key={index}
                            onClick={() => paginateId(id)}
                            className={`w-12 h-12 rounded text-[#152035] bg-white font-medium duration-300 hover:bg-[#F08F80] hover:text-white${
                                currentPage.id == id.id
                                    ? " bg-[#F08F80] text-white"
                                    : ""
                            }`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className="mx-1">
                    <button
                        onClick={nextPage}
                        className="w-16 h-12 rounded text-[#152035] bg-white font-medium duration-300 hover:bg-[#F08F80] hover:text-white"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
