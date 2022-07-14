import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

const useCategoryPosts = (cateId) => {
    const [categoryPosts, setCategoryPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const cateRef = collection(db, "posts");
        const q = query(cateRef, where("category", "==", cateId));
        onSnapshot(q, (snapshot) => {
            const cateData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategoryPosts(cateData);
            setIsLoading(false);
        });
    }, [cateId]);

    return [isLoading, categoryPosts];
};

export default useCategoryPosts;
