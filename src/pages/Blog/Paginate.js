import React, { useEffect, useState } from "react";

const Pagination = ({
    postIds,
    paginateId,
    currentPage,
    postCount,
    recentPage,
}) => {
    const [pageNo] = useState(1);

    const nextPage = () => {
        let nextBtn =
            (postIds.indexOf(currentPage) === -1
                ? 0
                : postIds.indexOf(currentPage)) + 1;
        paginateId(postIds[nextBtn]);
    };

    const nextPrev = () => {
        let prevBtn = postIds.indexOf(currentPage) - 1;
        paginateId(postIds[prevBtn]);
    };

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: "100px",
        });
    }, [recentPage]);

    return (
        <div className="mt-20 flex justify-center items-center">
            <ul className="flex border border-white py-2 px-1 rounded">
                <li className="mx-1">
                    <button
                        disabled={`${recentPage === pageNo ? "disabled" : ""}`}
                        onClick={nextPrev}
                        className="w-16 h-12 rounded text-[#152035] bg-white font-medium duration-300 hover:bg-[#F08F80] hover:text-white disabled:hover:bg-white disabled:hover:text-[#152035] disabled:opacity-70"
                    >
                        Prev
                    </button>
                </li>

                {postIds.map((id, index) => (
                    <li key={id.id} className="mx-1">
                        <button
                            disabled={`${
                                currentPage.id === id.id ? "disabled" : ""
                            }`}
                            key={index}
                            onClick={() => paginateId(id)}
                            className={`w-12 h-12 rounded text-[#152035] bg-white font-medium duration-300 hover:bg-[#F08F80] hover:text-white${
                                currentPage.id === id.id
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
                        disabled={`${
                            recentPage === postCount ? "disabled" : ""
                        }`}
                        onClick={nextPage}
                        className="w-16 h-12 rounded text-[#152035] bg-white font-medium duration-300 hover:bg-[#F08F80] hover:text-white  disabled:hover:bg-white disabled:hover:text-[#152035] disabled:opacity-70"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
