import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import { db } from "../../firebase.config";

const Archive = () => {
    const [searchText, setSearchText] = useState("");
    const [searchPosts, setSearchPosts] = useState([]);

    useEffect(() => {
        const searchRef = collection(db, "posts");
        const q = query(searchRef, where("postStatus", "==", "published"));

        onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            const filterData = postsData.filter((post) =>
                post.title.toLowerCase().includes(searchText.toLowerCase())
            );

            setSearchPosts(filterData);
        });
    }, [searchText]);

    console.log(searchText);
    console.log(searchPosts);

    return (
        <Layout>
            <Breadcrumb
                title={"Archive"}
                topTitle={"Showing posts from"}
                bottomLink={true}
            />
            <div className="py-20">
                <form>
                    <div>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Type to search blog..."
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Archive;
