import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const TablePost = ({ item, serial }) => {
    const { id, title, createdAt, authorId } = item;
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
                    {title.slice(0, 20) ? `${title.slice(0, 35)}...` : title}
                </button>{" "}
            </td>
            <td>{name}</td>
            <td>
                <Moment format="MMM DD, YYYY">{createdAt.toDate()}</Moment>
            </td>
        </tr>
    );
};

export default TablePost;
