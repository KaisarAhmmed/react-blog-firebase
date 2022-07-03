import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { db } from "../../firebase.config";
import TablePost from "./TablePost";

const BookmarkPost = () => {
    const [user] = useOutletContext();
    const [bookmarkPosts, setBookmarkPosts] = useState([]);
    const [postLoading, setPostLoading] = useState(false);

    const { bookmarks } = user;

    useEffect(() => {
        setPostLoading(true);
        if (undefined === bookmarks) return;
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));

        onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            const bookmarkData = postsData.filter(({ id }) => {
                return bookmarks.includes(id);
            });
            setBookmarkPosts(bookmarkData);
            setPostLoading(false);
        });
    }, [user.id, bookmarks]);

    return (
        <div className="bg-white/50 rounded p-6">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postLoading && (
                            <tr>
                                <td colSpan="4">
                                    <Loader text={"Loading..."} />
                                </td>
                            </tr>
                        )}
                        {bookmarkPosts &&
                            bookmarkPosts.map((item, index) => (
                                <TablePost
                                    key={item.id}
                                    item={item}
                                    serial={index}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookmarkPost;
