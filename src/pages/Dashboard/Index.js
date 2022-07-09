import {
    collection,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { GoBook } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { db } from "../../firebase.config";
import UserPosts from "./UserPosts";

const Index = () => {
    const [user] = useOutletContext();
    const [userPost, setUserPost] = useState(0);
    const [postLikes, setPostLikes] = useState(0);
    const [userPosts, setUserPosts] = useState([]);

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

    useEffect(() => {
        if (user.userId === undefined) return;

        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("authorId", "==", user.userId));

        onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUserPosts(postsData);
        });
    }, [user]);

    return (
        <>
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-white/70 p-4 rounded border-white border relative">
                    <h3 className="text-xl font-bold">Total Posts</h3>
                    <p className="text-6xl mt-3 text-[#F08F80] font-extrabold">
                        {userPost ? userPost : 0}
                    </p>
                    <GoBook className="absolute text-[120px] top-0 right-3 text-[#FEEAE3] opacity-60" />
                </div>
                <div className="bg-white/70 p-4 rounded border-white border relative">
                    <h3 className="text-xl font-bold">Favorite Posts</h3>
                    <p className="text-6xl mt-3 text-[#F08F80] font-extrabold">
                        {user.bookmarks?.length ? user.bookmarks?.length : 0}
                    </p>
                    <MdOutlineFavoriteBorder className="absolute text-[120px] top-0 right-1 text-[#FEEAE3] opacity-60" />
                </div>
                <div className="bg-white/70 p-4 rounded border-white border relative">
                    <h3 className="text-xl font-bold">Total Get Likes</h3>
                    <p className="text-6xl mt-3 text-[#F08F80] font-extrabold">
                        {postLikes ? postLikes : 0}
                    </p>
                    <AiOutlineLike className="absolute text-[120px] top-0 right-0 text-[#FEEAE3] opacity-60" />
                </div>
            </div>
            <div className="mt-8 bg-white/70 p-4 rounded">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>S.</th>
                                <th>Title</th>
                                <th>Likes</th>
                                <th>Views</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userPosts &&
                                userPosts.map((item, index) => (
                                    <UserPosts
                                        key={item.id}
                                        item={item}
                                        serial={index}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Index;
