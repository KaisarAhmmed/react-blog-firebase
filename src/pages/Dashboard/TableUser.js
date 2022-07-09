import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import UserPlaceholder from "../../images/user-placeholder.png";

const TableUser = ({ user, index }) => {
    const { name, email, role, photo, userId, bookmarks } = user;
    const [userPost, setUserPost] = useState(0);

    useEffect(() => {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("authorId", "==", userId));
        onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUserPost(postsData.length);
        });
    }, [user]);

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={photo ? photo : UserPlaceholder}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm opacity-50">{role}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>
                <label
                    htmlFor={`user-details-${index}`}
                    className="cursor-pointer hover:underline duration-200"
                >
                    Details
                </label>

                <input
                    type="checkbox"
                    id={`user-details-${index}`}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative w-4/12 max-w-3xl">
                        <label
                            htmlFor={`user-details-${index}`}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <div className="flex justify-center items-center">
                            <div className="text-center">
                                <img
                                    src={photo ? photo : UserPlaceholder}
                                    alt={name}
                                    className="w-40 h-40 object-cover rounded-md mb-3 mx-auto"
                                />
                                <p className="font-medium ">Name : {name}</p>
                                <p className="font-medium ">Role : {role}</p>

                                <p>Email: {email}</p>
                                <p>Total Post: {userPost}</p>
                                <p>
                                    Bookmarks:
                                    {bookmarks !== undefined
                                        ? bookmarks.length
                                        : 0}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td>:</td>
        </tr>
    );
};

export default TableUser;
