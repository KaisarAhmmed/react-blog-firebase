import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {};

    return (
        <>
            <div className="lg:hidden">
                <AiOutlineMenu
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-3xl"
                />
            </div>
            {isMenuOpen && (
                <ul className="w-full absolute bg-slate-100 left-0 top-12">
                    <li>Home</li>
                    <li>page</li>
                    <li>page</li>
                    <li>Blog</li>
                </ul>
            )}
        </>
    );
};

export default MobileMenu;
