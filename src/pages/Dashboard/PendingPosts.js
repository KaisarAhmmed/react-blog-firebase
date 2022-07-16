import React, { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import TablePending from "./TablePending";
import Loader from "../../components/Loader/Loader";

const PendingPosts = () => {
    const [pendingPosts, setPendingPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("postStatus", "==", "pending"));
        onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPendingPosts(postsData);
            setIsLoading(false);
        });
    }, []);

    const handlePublishPost = (id) => {
        console.log(id);
    };

    return (
        <div className="bg-white/70 rounded p-6">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Pending</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr>
                                <td colSpan="6">
                                    <Loader />
                                </td>
                            </tr>
                        )}
                        {pendingPosts &&
                            pendingPosts.map((post, index) => (
                                <TablePending
                                    index={index}
                                    post={post}
                                    handlePublishPost={handlePublishPost}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingPosts;
