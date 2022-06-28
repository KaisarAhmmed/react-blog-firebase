import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import {
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    startAt,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import Pagination from "./Paginate";
import Loader from "../../components/Loader/Loader";
import SinglePost from "../../components/SinglePost/SinglePost";

const Blog = () => {
    const [allPost, setAllPost] = useState([]);
    const [last, setLast] = useState();
    const [postLoading, setPostLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const [postCount, setPostCount] = useState([]);
    const [postIds, setPostIds] = useState([]);
    const [currentPage, setCurrentPage] = useState("");
    const [postsPerPage] = useState(2);

    useEffect(() => {
        setPostLoading(true);
        async function getOP() {
            const first = query(
                collection(db, "posts"),
                orderBy("createdAt", "desc"),
                limit(postsPerPage)
            );
            const postCount = query(
                collection(db, "posts"),
                orderBy("createdAt", "desc")
            );
            const documentSnapshots = await getDocs(first);
            const getPostCount = await getDocs(postCount);
            setPostCount(getPostCount.size);

            const postId = getPostCount.docs.filter(
                (item, index) => index % postsPerPage == 0
            );

            setPostIds(postId);
            const lastVisible =
                documentSnapshots.docs[
                    documentSnapshots.docs.length - postsPerPage
                ];
            setCurrentPage(lastVisible);
            const data = documentSnapshots.docs.map((data) => ({
                id: data.id,
                ...data.data(),
            }));

            setAllPost(data);

            setPostLoading(false);
        }

        getOP();
    }, []);

    //console.log(last);

    const paginateId = async (lastIdPass) => {
        const first = query(
            collection(db, "posts"),
            orderBy("createdAt", "desc"),
            startAt(lastIdPass),
            limit(postsPerPage)
        );

        setCurrentPage(lastIdPass);

        const documentSnapshots = await getDocs(first);
        const data = documentSnapshots.docs.map((data) => ({
            id: data.id,
            ...data.data(),
        }));

        setAllPost(data);
    };

    //console.log(postCount);
    //console.log(allPost);

    // const laodMore = async () => {
    //     const first = query(
    //         collection(db, "posts"),
    //         orderBy("createdAt", "desc"),
    //         startAt(last),
    //         limit(postsPerPage)
    //     );
    //     const documentSnapshots = await getDocs(first);
    //     const qSize = documentSnapshots.size === 0;
    //     if (!qSize) {
    //         const lastVisible =
    //             documentSnapshots.docs[documentSnapshots.docs.length - 1];
    //         setLast(lastVisible);
    //         const data = documentSnapshots.docs.map((data) => data.data());
    //         //console.log(data);

    //         setAllPost((allPost) => [...allPost, ...data]);
    //     } else {
    //         setIsEmpty(true);
    //     }
    // };

    //console.log(currentPage);

    return (
        <Layout>
            <Breadcrumb title={"All Posts"} />
            {postLoading && <Loader />}
            <div className="grid grid-cols-2 gap-10">
                {allPost &&
                    allPost.map((item, index) => (
                        <SinglePost key={index} doc={item} />
                    ))}
            </div>

            <Pagination
                postIds={postIds}
                paginateId={paginateId}
                currentPage={currentPage}
            />
        </Layout>
    );
};

export default Blog;
