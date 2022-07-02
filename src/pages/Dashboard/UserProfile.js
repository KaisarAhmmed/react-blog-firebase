import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import UserPlaceholderImage from "../../images/user-placeholder.png";

const UserProfile = () => {
    const [user] = useOutletContext();

    return (
        <div className="grid grid-cols-3 gap-8 bg-white/50 p-6 rounded">
            <div className="text-center">
                <img
                    src={user.photo ? user.photo : UserPlaceholderImage}
                    alt={user.name}
                    className="h-36 w-36 rounded-full mx-auto mb-8"
                />
                <Link
                    to="/dashboard/edit-profile"
                    className="px-8 py-3 bg-[#F09080] text-white duration-200 rounded hover:bg-black"
                >
                    Edit Profile
                </Link>
            </div>
            <div className="col-span-2 grid grid-cols-2">
                <div className="mb-6">
                    <p className="text-base font-normal text-[#505050]">Name</p>
                    <p className=" font-medium">{user.name}</p>
                </div>
                <div className="mb-6">
                    <p className="text-base font-normal text-[#505050]">Role</p>
                    <p className="font-medium">{user.role}</p>
                </div>
                <div className="mb-6">
                    <p className="text-base font-normal text-[#505050]">
                        Email
                    </p>
                    <p className="font-medium">{user.email}</p>
                </div>
                <div className="col-span-2">
                    <p className="text-base font-normal text-[#505050]">Bio</p>
                    <p className="font-medium">{user.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
