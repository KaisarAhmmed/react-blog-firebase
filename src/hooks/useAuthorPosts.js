import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const useAuthorPosts = (authorId) => {
    const [authorPosts, setAuthorPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [authorPostCount, setAuthorPostCount] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("authorId", "==", authorId));

        onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setAuthorPosts(data);
            setAuthorPostCount(data.length);
            setIsLoading(false);
        });
    }, [authorId]);

    return [authorPosts, authorPostCount, isLoading];
};

export default useAuthorPosts;
