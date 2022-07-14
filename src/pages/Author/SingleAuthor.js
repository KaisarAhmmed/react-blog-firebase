import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.config";
import UserPlaceholderPhoto from "../../images/user-placeholder.png";

const SingleAuthor = ({ author }) => {
    const { id, photo, name } = author;
    const [publishPost, setPublishPost] = useState(0);

    const navigate = useNavigate();

    const handleAuthor = (id) => {
        navigate(`/author/${id}`);
    };

    useEffect(() => {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("authorId", "==", id));
        onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPublishPost(data.length);
        });
    }, [id]);

    return (
        <div className="mb-6">
            <div
                className="cursor-pointer duration-300 hover:opacity-70 inline-block"
                onClick={() => handleAuthor(id)}
            >
                <img
                    src={photo ? photo : UserPlaceholderPhoto}
                    alt={name}
                    className="mx-auto h-[150px] w-[150px] mb-6 rounded"
                />
                <h4 className="text-[20px] text-black mb-1">{name}</h4>
                <p className="font-medium text-black">
                    {publishPost} Publish {publishPost < 1 ? "Post" : "Posts"}
                </p>
            </div>
        </div>
    );
};

export default SingleAuthor;
