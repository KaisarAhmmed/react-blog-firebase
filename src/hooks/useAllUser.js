import { useState, useEffect } from "react";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase.config";

const useAllUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userStatus", "==", "active"));
        onSnapshot(q, (snapshot) => {
            const usersData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(usersData);
            setIsLoading(false);
        });
    }, []);

    return [isLoading, users];
};

export default useAllUser;
