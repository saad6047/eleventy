"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import axios from "axios";

import logo from "../../../../public/images/logo.png";

import Popup from "@/components/Popup";
import useSession from "@/hooks/user/get-session";
import configSettings from "../../../../config";
import Image from "next/image";
import SmallSpinner from "@/components/SmallSpinner";

const ResetPassword = () => {
    const session = useSession();

    const [credentials, setCredentials] = useState();

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const params = useParams();
    const router = useRouter();

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setCredentials({ ...credentials, [name]: value });
    };

    const resetPassword = async () => {
        if (!credentials?.password || !credentials?.conPassword) {
            setPopupDetail({
                type: "Warning",
                text: "Please fill all the fields first to reset your password",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);

            return;
        } else if (credentials?.password.length < 8) {
            setPopupDetail({
                type: "Warning",
                text: "Password must me 8 characters long",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);

            return;
        } else if (credentials?.password !== credentials?.conPassword) {
            setPopupDetail({
                type: "Warning",
                text: "Password does not match",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);

            return;
        }

        try {
            setIsSpinner(true);
            await axios.post(configSettings.serverUrl + "/resetPassword", {
                token: params.userId,
                password: credentials?.password,
            });

            setCredentials();

            setPopupDetail({
                type: "Success",
                text: "Your password has been successfully recovered. You can now login with your new credentials",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
                router.push("/admin");
            }, 4000);
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
                    <div className="flex items-center justify-center md:mb-6">
                        <Image alt="Logo" src={logo} className="w-[120px] md:w-[150px]" />
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className="font-rouben-regular text-center mb-12 text-gray-600">
                            Please enter you new password to reset your current password
                        </p>
                    </div>

                    <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-6 4lg:px-0">
                        <div className="flex-1 flex flex-col space-y-6 mt-12 4lg:mt-0 md:min-w-[36rem] md:max-w-xl md:mx-auto font-rouben-regular">
                            <div className="flex-1">
                                <p className="text-[#313131] mb-2">New Password</p>
                                <input
                                    type="password"
                                    placeholder="Enter New Password"
                                    autoComplete="off"
                                    name="password"
                                    className="w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="flex-1">
                                <p className="text-[#313131] mb-2">Confirm Password</p>
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
                                    autoComplete="off"
                                    name="conPassword"
                                    className="w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                    onChange={handleInput}
                                />
                            </div>

                            <button
                                className={`bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 h-[54px] ${
                                    isSpinner ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                }`}
                                disabled={isSpinner}
                                aria-busy={isSpinner}
                                onClick={() => {
                                    resetPassword();
                                }}
                            >
                                {isSpinner ? (
                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                        <SmallSpinner />
                                    </span>
                                ) : (
                                    <span className="font-rouben-semi-bold uppercase">Reset Password</span>
                                )}
                            </button>

                            <div className="flex items-center justify-center">
                                <Link href={"/admin"} className="text-sm text-primary cursor-pointer font-rouben-semi-bold">
                                    Back to Signin
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Popup type={popupDetail?.type} text={popupDetail?.text} isPopup={isPopup} />
        </>
    );
};

export default ResetPassword;
