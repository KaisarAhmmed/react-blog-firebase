import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const useUser = (id) => {
    const [author, setAuthor] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (id === undefined) return;
        const postRef = doc(db, "users", id);

        async function getData() {
            await onSnapshot(postRef, (snapshot) => {
                setAuthor({ ...snapshot.data(), id: snapshot.id });
                setLoading(false);
            });
        }

        getData();
    }, [id]);

    return [loading, author];
};

export default useUser;
