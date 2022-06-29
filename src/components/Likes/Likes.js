import React from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart } from "react-icons/fa";
import { useUserAuth } from "../../context/userAuthContext";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

const Likes = ({ id, likes }) => {
    const { user } = useUserAuth();
    const navigate = useNavigate();

    const likesRef = doc(db, "posts", id);

    const handleLikes = () => {
        {
            !user && navigate("../login", { replace: true });
        }
        if (!user) return;
        if (likes?.includes(user?.id)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user?.id),
            })
                .then(() => {})
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(likesRef, {
                likes: arrayUnion(user?.id),
            })
                .then(() => {})
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    return (
        <div>
            <FaHeart
                onClick={handleLikes}
                className={`text-[24px] cursor-pointer ${
                    likes?.includes(user?.id) ? "text-[#F09080]" : ""
                }`}
            />
        </div>
    );
};

export default Likes;
