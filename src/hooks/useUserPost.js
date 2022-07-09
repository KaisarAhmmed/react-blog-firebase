import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const useUserPost = (userId) => {
    const [userPosts, setUserPosts] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (userId === undefined) return;

        setIsLoading(true);
        const postsRef = collection(db, "posts");
        const q = query(
            postsRef,
            orderBy("createdAt", "desc"),
            where("authorId", "==", userId)
        );

        onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUserPosts(postsData);
            setIsLoading(false);
        });
    }, [userId]);

    return [isLoading, userPosts];
};

export default useUserPost;
