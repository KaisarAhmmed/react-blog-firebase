import React from "react";

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
    };
    return (
        <div className="bg-gradient-to-b from-[#fff6ef] via-white to-white">
            <div className="container mx-auto">
                <div className="py-32">
                    <div className="w-1/2 mx-auto text-center">
                        <h3 className="mb-8 text-4xl leading-[50px]">
                            Get latest posts delivered right to your inbox
                        </h3>
                        <div className="">
                            <form
                                className="grid grid-cols-3 gap-5"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    className="border border-[#DDDDDD] py-3 px-4 rounded duration-300 outline-none focus:border-[#F08F80]  col-span-2 group"
                                    placeholder="Your email address"
                                />
                                <button
                                    type="submit"
                                    className="h-[50px] text-[#152035] border border-[#dddddd] items-center px-8 rounded duration-300  hover:bg-[#F08F80] hover:border-[#F08F80] hover:text-white group group-focus:bg-[#F08F80]"
                                >
                                    Join Today
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm w-full pb-12">
                    <p className="text-[#5B6271]">
                        © 2022 Qurno. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
