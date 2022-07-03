import React from "react";
import UserPlaceholder from "../../images/user-placeholder.png";

const TableUser = ({ user, index }) => {
    const { name, email, role, photo } = user;

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
                <label htmlFor={`user-details-${index}`} className="">
                    Details
                </label>

                <input
                    type="checkbox"
                    id={`user-details-${index}`}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative w-8/12 max-w-3xl">
                        <label
                            htmlFor={`user-details-${index}`}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src={photo ? photo : UserPlaceholder}
                                alt={name}
                                className="w-40 h-40 object-cover rounded-md mb-3"
                            />
                            <p className="font-bold text-[18px]">{name}</p>
                        </div>
                        <p className="py-4 w-full whitespace-normal">
                            You've been selected htmlFor a chance to get one
                            year of subscription to use Wikipedia htmlFor
                            free!You've been selected htmlFor a chance to get
                            one year of subscription to use Wikipedia htmlFor
                            free!You've been selected htmlFor a chance to get
                            one year of subscription to use Wikipedia htmlFor
                            free!You've been selected htmlFor a chance to get
                            one year of subscription to use Wikipedia htmlFor
                            free!
                        </p>
                    </div>
                </div>
            </td>
            <td>:</td>
        </tr>
    );
};

export default TableUser;
