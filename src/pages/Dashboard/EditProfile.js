import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../firebase.config";

const EditProfile = () => {
    const [user] = useOutletContext();
    const [profileImage, setProfileImage] = useState();
    const [imageUploading, setImageUploading] = useState(false);
    const [userData, setUserData] = useState({
        name: user.name ? user.name : "",
        bio: user.bio ? user.bio : "",
    });

    const hangleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    console.log(userData);

    useEffect(() => {
        if (profileImage == null || user.id == null) return;
        setImageUploading(true);
        const imageRef = ref(storage, `userPhoto/${profileImage.name}`);
        uploadBytes(imageRef, profileImage, "data_url").then(async () => {
            const downloadUrl = await getDownloadURL(imageRef);

            await updateDoc(doc(db, "users", user.id), {
                photo: downloadUrl,
            })
                .then((res) => {
                    toast.success("Profile picture updated...");
                    setImageUploading(false);
                })
                .catch((err) => console.log(err));
        });
    }, [profileImage, user.id]);

    return (
        <div className="grid grid-cols-3 gap-8 bg-white/50 p-6 rounded">
            <div className="">
                <img
                    src={user.photo}
                    alt={user.name}
                    className={`h-36 w-36 rounded-full mx-auto mb-8 ${
                        imageUploading ? "opacity-50" : ""
                    }`}
                />
                <div className="text-center relative">
                    <input
                        type="file"
                        name="profileImg"
                        id="profileImg"
                        className="absolute h-[1px] w-[1px] overflow-hidden"
                        onChange={(event) =>
                            setProfileImage(event.target.files[0])
                        }
                    />
                    <label
                        htmlFor="profileImg"
                        className="px-8 py-3 bg-[#F09080] text-white cursor-pointer duration-200 rounded hover:bg-black mx-3"
                    >
                        Upload Photo
                    </label>
                </div>
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
                            value={userData.name ? userData.name : user.name}
                            onChange={(e) => hangleInputChange(e)}
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
                            value={user.role}
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
                            value={user.email}
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
                            value={userData.bio ? userData.bio : user.bio}
                            onChange={(e) => hangleInputChange(e)}
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
