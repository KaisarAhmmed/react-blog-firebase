import React from "react";
import Loader from "../../components/Loader/Loader";
import useAllUser from "../../hooks/useAllUser";
import TableUser from "./TableUser";

const Users = () => {
    const [isLoading, users] = useAllUser();

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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr>
                                <td colSpan="5">
                                    <Loader text={"Loading users..."} />{" "}
                                </td>
                            </tr>
                        )}
                        {users &&
                            users.map((user, index) => (
                                <TableUser
                                    user={user}
                                    index={index}
                                    key={user.id}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
