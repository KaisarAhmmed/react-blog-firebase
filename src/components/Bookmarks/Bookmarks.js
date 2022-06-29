import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import { db } from "../../firebase.config";

const Bookmarks = ({ postId }) => {
    const { user } = useUserAuth();
    const navigate = useNavigate();

    const handleBookmark = () => {
        {
            !user && navigate("../login", { replace: true });
        }
        if (!user) return;
        const bookmarksRef = doc(db, "users", user.id);
        if (user.bookmarks?.includes(postId)) {
            updateDoc(bookmarksRef, {
                bookmarks: arrayRemove(postId),
            })
                .then(() => {})
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(bookmarksRef, {
                bookmarks: arrayUnion(postId),
            })
                .then(() => {
                    console.log("added");
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    return (
        <div onClick={handleBookmark} className="cursor-pointer">
            {user?.bookmarks?.includes(postId) ? (
                <BsFillBookmarkCheckFill className="text-[24px] text-[#F09180]" />
            ) : (
                <BsFillBookmarkFill className="text-[24px]" />
            )}
        </div>
    );
};

export default Bookmarks;
