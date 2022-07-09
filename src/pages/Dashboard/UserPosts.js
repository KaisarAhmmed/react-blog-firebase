import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const UserPosts = ({ item, serial }) => {
    const { id, title, createdAt, authorId, likes, imageUrl } = item;
    const [laoding, author] = useUser(authorId);
    const { name } = author;

    const navigate = useNavigate();

    const handleBlogUrl = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <tr>
            <td>{serial + 1}</td>
            <td>
                <button onClick={() => handleBlogUrl(id)}>
                    <div className="flex justify-center items-center">
                        <img
                            src={imageUrl ? imageUrl : ""}
                            alt={name}
                            className="w-12 h-12 object-cover rounded-md mr-3 mx-auto"
                        />
                        <div className="text-left">
                            <p className="font-medium">
                                {title.slice(0, 20)
                                    ? `${title.slice(0, 30)}...`
                                    : title}
                            </p>
                            <p className="text-sm opacity-50">
                                <Moment format="MMM DD, YYYY">
                                    {createdAt.toDate()}
                                </Moment>
                            </p>
                        </div>
                    </div>
                </button>
            </td>
            <td>{likes.length ? likes.length : 0}</td>
            <td>0</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    );
};

export default UserPosts;
