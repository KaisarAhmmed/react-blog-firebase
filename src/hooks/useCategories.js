import { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase.config";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const cateRef = collection(db, "categories");
        const q = query(cateRef);
        onSnapshot(q, (snapshot) => {
            const cateData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(cateData);
            setIsLoading(false);
        });
    }, []);

    return [isLoading, categories];
};

export default useCategories;
