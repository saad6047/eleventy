"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import Cookies from "js-cookie";
import axios from "axios";

import logo from "../../../public/images/logo.png";

import Spinner from "@/components/Spinner";
import Popup from "@/components/Popup";
import useSession from "@/hooks/user/get-session";
import configSettings from "../../../config";
import Image from "next/image";

const Signin = () => {
    const session = useSession();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isSpinner, setIsSpinner] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();

    const router = useRouter();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm({ ...form, [name]: value });
    };

    const signinUser = async () => {
        try {
            if (!form?.email || !form?.password) {
                setPopupDetail({
                    type: "Warning",
                    text: "Please provide email address and password first",
                });

                setIsPopup(true);

                setTimeout(function () {
                    setIsPopup(false);
                }, 4000);

                return;
            }

            setIsSpinner(true);

            const result = await axios.post(configSettings.serverUrl + "/signin", {
                email: form?.email,
                password: form?.password,
            });

            const response = result.data;

            Cookies.set("access-token", response.data);

            setIsSpinner(false);

            setPopupDetail({
                type: "Success",
                text: "Your account has been successfully logged in",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
                router.push("/");
            }, 2000);
        } catch (error) {
            setIsSpinner(false);

            if (error.response.status === 400) {
                setPopupDetail({
                    type: "Warning",
                    text: error.response.data.error,
                });

                setIsPopup(true);

                setTimeout(function () {
                    setIsPopup(false);
                }, 4000);
            }
        }
    };

    useEffect(() => {
        if (session?.data && !session?.isLoading) {
            router.push("/");
        }
    }, [session?.data, session?.isLoading]);

    return (
        <>
            {/* section 4 */}
            <div className="bg-[#ffffff] flex items-center justify-center h-screen">
                <div className="flex flex-col max-w-6xl w-full md:mx-auto py-20">
                    <div className="flex items-center justify-center md:mb-12">
                        <Image alt="Logo" src={logo} className="w-[120px] md:w-[150px]" />
                    </div>

                    <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-6 4lg:px-0">
                        <div className="flex-1 flex flex-col space-y-6 mt-12 4lg:mt-0 md:min-w-[36rem] md:max-w-xl md:mx-auto font-rouben-regular">
                            <div className="flex-1">
                                <p className="text-[#313131] mb-2">Email Address</p>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    className="w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                    onChange={handleInput}
                                    value={form?.email}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[#313131] mb-2">Password</p>

                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    autoComplete="off"
                                    className="w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                    onChange={handleInput}
                                    value={form?.password}
                                />
                            </div>

                            <div className="flex items-center justify-end !mt-[-10px]">
                                <p
                                    className="text-sm text-blue-500 cursor-pointer font-rouben-semi-bold"
                                    onClick={() => {
                                        router.push("/forgot-password");
                                    }}
                                >
                                    Forgotten your password ?
                                </p>
                            </div>

                            <button
                                className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => {
                                    signinUser();
                                }}
                            >
                                <span className="font-rouben-semi-bold uppercase">Sign in</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isSpinner && (
                <>
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[70]"></div>
                    <Spinner />
                </>
            )}

            <Popup type={popupDetail?.type} text={popupDetail?.text} isPopup={isPopup} />
        </>
    );
};

export default Signin;
