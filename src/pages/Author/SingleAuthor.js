import React from "react";
import UserPlaceholderPhoto from "../../images/user-placeholder.png";

const SingleAuthor = ({ author }) => {
    const { id, photo, name } = author;

    const handleAuthor = (id) => {
        console.log(id);
    };

    return (
        <div
            className="mb-6 cursor-pointer inline-block"
            onClick={() => handleAuthor(id)}
        >
            <img
                src={photo ? photo : UserPlaceholderPhoto}
                alt={name}
                className="mx-auto h-[150px] w-[150px] mb-6 rounded"
            />
            <h4 className="text-[20px] text-black mb-1">{name}</h4>
            <p className="font-medium text-black">03 Publish Posts</p>
        </div>
    );
};

export default SingleAuthor;
