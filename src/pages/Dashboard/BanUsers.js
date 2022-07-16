import {
    collection,
    doc,
    onSnapshot,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { db } from "../../firebase.config";
import UserPlaceholderImage from "../../images/user-placeholder.png";

const BanUsers = () => {
    const [banUsers, setBanUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const userRef = collection(db, "users");
        const q = query(userRef, where("userStatus", "==", "banned"));
        onSnapshot(q, (snapshot) => {
            const userData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBanUsers(userData);
            setLoading(false);
        });
    }, []);

    const hangleRetriveUser = async (id) => {
        await updateDoc(doc(db, "users", id), {
            userStatus: "active",
        })
            .then((res) => {
                toast.success("User retrive successfully...");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="bg-white/50 rounded p-6">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Ban At</th>
                            <th>Retrive</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr>
                                <td colSpan="6">
                                    <Loader text="Loading Users..." />
                                </td>
                            </tr>
                        )}
                        {banUsers.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No user found
                                </td>
                            </tr>
                        )}
                        {banUsers &&
                            banUsers.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={
                                                            user.photo
                                                                ? user.photo
                                                                : UserPlaceholderImage
                                                        }
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    {user.name}
                                                </div>
                                                <div className="text-sm opacity-50 capitalize">
                                                    {user.role}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Moment format="MMM DD, YYYY">
                                            {user?.banAt.toDate()}
                                        </Moment>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                hangleRetriveUser(user.id)
                                            }
                                            className="py-1 px-3 duration-300 border border-[#1F2937] rounded hover:bg-[#1F2937] hover:text-white"
                                        >
                                            Retrive User
                                        </button>
                                    </td>
                                    <td>
                                        <button className="py-1 px-3 duration-300 border border-[#1F2937] rounded hover:bg-[#1F2937] hover:text-white">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BanUsers;
