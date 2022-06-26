import React from "react";
import { useOutletContext } from "react-router-dom";

const UserProfile = () => {
    const [user] = useOutletContext();
    return (
        <div>
            <h2>sdf</h2>
        </div>
    );
};

export default UserProfile;
