import React from "react";
import useFirestore from "../../hooks/useFirestore";

const AllPosts = () => {
    return (
        <div className="bg-white/50 rounded p-4">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPosts;
