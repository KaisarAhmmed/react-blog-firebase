import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const EditProfile = () => {
    const [user] = useOutletContext();

    return (
        <div className="grid grid-cols-3 gap-8 bg-white/50 p-6 rounded">
            <div className="">
                <img
                    src={user.photo}
                    alt={user.name}
                    className="h-36 w-36 rounded-full mx-auto mb-8"
                />
            </div>
            <div className="col-span-2">
                <form action="" className="grid grid-cols-2 gap-5">
                    <div className="">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name..."
                            className="w-full border px-3 py-2.5 rounded outline-none text-[15px] mt-1.5"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="role">Role</label>
                        <input
                            type="text"
                            name="role"
                            id="role"
                            placeholder="User role"
                            className="w-full border px-3 py-2.5 rounded outline-none text-[15px] mt-1.5"
                            readOnly
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Type email..."
                            readOnly
                            className="w-full border px-3 py-2.5 rounded outline-none text-[15px] mt-1.5"
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            name="bio"
                            id="bio"
                            cols="30"
                            rows="5"
                            className="w-full border px-3 py-2.5 rounded outline-none text-[15px] mt-1.5"
                        ></textarea>
                    </div>
                    <div className="col-span-2 text-center">
                        <button className="px-8 py-3 bg-[#F09080] text-white duration-200 rounded hover:bg-black mx-3">
                            Update Profile
                        </button>
                        <Link
                            to="/dashboard/profile"
                            className="px-8 py-3 bg-black text-white duration-200 rounded hover:bg-[#F09080] inline-block mx-3"
                        >
                            Back
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
