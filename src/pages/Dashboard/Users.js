import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { db } from "../../firebase.config";
import useAllUser from "../../hooks/useAllUser";
import TableUser from "./TableUser";

const Users = () => {
    const [isLoading, users] = useAllUser();

    const handleBanUser = async (id) => {
        await updateDoc(doc(db, "users", id), {
            userStatus: "banned",
            banAt: serverTimestamp(),
        })
            .then((res) => {
                toast.success("User ban successfully...");
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
                            <th>Details</th>
                            <th>Ban</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr>
                                <td colSpan="5">
                                    <Loader text={"Loading users..."} />
                                </td>
                            </tr>
                        )}
                        {users &&
                            users.map((user, index) => (
                                <TableUser
                                    user={user}
                                    index={index}
                                    key={user.id}
                                    handleBanUser={handleBanUser}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
