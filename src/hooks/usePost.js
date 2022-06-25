import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const usePost = (id) => {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const postRef = doc(db, "posts", id);

        onSnapshot(postRef, (snapshot) => {
            setPost({ ...snapshot.data(), id: snapshot.id });
            setIsLoading(false);
        });
    }, [id]);

    return [isLoading, post];
};

export default usePost;
