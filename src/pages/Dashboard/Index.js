import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { GoBook } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { db } from "../../firebase.config";

const Index = () => {
    const [user] = useOutletContext();
    const [userPost, setUserPost] = useState(0);
    const [postLikes, setPostLikes] = useState(0);
    //const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        const postCount = async () => {
            if (user.userId === undefined) return;
            const q = query(
                collection(db, "posts"),
                where("authorId", "==", user.userId)
            );

            const querySnapshot = await getDocs(q);
            setUserPost(querySnapshot.size);

            let totalLikes = 0;
            querySnapshot.forEach(
                (doc) => (totalLikes += doc.data().likes.length)
            );
            setPostLikes(totalLikes);
        };

        postCount();
    }, [user]);

    return (
        <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#FFFBF8] p-4 rounded border-white border relative">
                <h3 className="text-xl font-bold">Total Posts</h3>
                <p className="text-6xl mt-3 text-[#F08F80] font-extrabold">
                    {userPost}
                </p>
                <GoBook className="absolute text-[120px] top-0 right-3 text-[#FEEAE3] opacity-60" />
            </div>
            <div className="bg-[#FFFBF8] p-4 rounded border-white border relative">
                <h3 className="text-xl font-bold">Favorite Posts</h3>
                <p className="text-6xl mt-3 text-[#F08F80] font-extrabold">
                    {user.bookmarks?.length}
                </p>
                <MdOutlineFavoriteBorder className="absolute text-[120px] top-0 right-1 text-[#FEEAE3] opacity-60" />
            </div>
            <div className="bg-[#FFFBF8] p-4 rounded border-white border relative">
                <h3 className="text-xl font-bold">Total Get Likes</h3>
                <p className="text-6xl mt-3 text-[#F08F80] font-extrabold">
                    {postLikes}
                </p>
                <AiOutlineLike className="absolute text-[120px] top-0 right-0 text-[#FEEAE3] opacity-60" />
            </div>
        </div>
    );
};

export default Index;
