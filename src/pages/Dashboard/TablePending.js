import React from "react";
import useUser from "../../hooks/useUser";
import UserPlaceholder from "../../images/user-placeholder.png";

const TablePending = ({ index, post, handlePublishPost }) => {
    const { id, title, imageUrl, authorId, category, createdAt } = post;
    const [loading, author] = useUser(authorId);

    const { name, photo, role } = author;

    return (
        <tr>
            <td>
                <p className="font-medium">{index + 1}</p>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageUrl ? imageUrl : ""} alt={title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-medium">{title.slice(0, 30)}</div>
                        <div className="text-sm opacity-50">
                            {createdAt.toDate().toDateString()}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={photo ? photo : UserPlaceholder}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm opacity-50 capitalize">
                            {role}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <p className="capitalize">{category}</p>
            </td>
            <td>
                <button
                    onClick={() => handlePublishPost(id)}
                    className="py-1 px-3 duration-300 border border-[#1F2937] rounded hover:bg-[#1F2937] hover:text-white"
                >
                    Published
                </button>
            </td>
            <td>
                <button className="py-1 px-3 duration-300 border border-[#1F2937] rounded hover:bg-[#1F2937] hover:text-white">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TablePending;
