import React, { useState, useEffect } from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";

import logo from "../../public/images/logo2.png";

import Popup from "@/components/Popup";
import useSession from "@/hooks/user/get-session";
import { Eye, Frown } from "lucide-react";
import axios from "axios";
import configSettings from "../../config";
import Spinner from "./Spinner";
import SmallSpinner from "./SmallSpinner";

const Navbar = ({ cartItems, setCartItems }) => {
    const session = useSession();

    const [isPreviewLoading, setIsPreviewLoading] = useState(false);

    const [cartSidebar, setCartSidebar] = useState(false);

    const router = useRouter();

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();

    const removeCartItem = (item) => {
        let newCartItems = [];

        for (let i = 0; i < cartItems.length; i++) {
            if (JSON.stringify(item) === JSON.stringify(cartItems[i])) {
                continue;
            } else {
                newCartItems.push(cartItems[i]);
            }
        }

        setCartItems(newCartItems);

        if (newCartItems.length === 0) {
            setCartSidebar(false);
        }
    };

    const logoutUser = () => {
        Cookies.remove("access-token");

        setPopupDetail({
            type: "Success",
            text: "Your account has been successfully logged out",
        });

        setIsPopup(true);

        setTimeout(function () {
            setIsPopup(false);
            router.push("/admin");
            session?.refetch();
        }, 3000);
    };

    const handlePreview = async () => {
        try {
            setIsPreviewLoading(true);

            const response = await axios.post(
                configSettings.publicServerUrl + `/previewOrder`,
                {
                    html: document.getElementById("pdf-block").outerHTML,
                },
                {
                    headers: {
                        "access-token": Cookies.get("access-token"),
                        "Content-Type": "application/json",
                    },
                    responseType: "blob", // Important: Tell Axios to expect binary data
                }
            );

            // Create a blob from the response data
            const blob = new Blob([response.data], { type: "application/pdf" });

            // Create a URL for the blob
            const pdfUrl = URL.createObjectURL(blob);

            // Open the PDF in a new tab
            const newWindow = window.open(pdfUrl, "_blank");

            // Focus the new window (helps with popup blockers)
            if (newWindow) {
                newWindow.focus();
            } else {
                // If popup was blocked, show download option
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.target = "_blank";
                link.download = "preview.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            // Revoke the object URL after 1 hour
            setTimeout(() => URL.revokeObjectURL(pdfUrl), 60 * 60 * 1000); // 1 hour

            setIsPreviewLoading(false);
        } catch (error) {
            setIsPreviewLoading(false);
            console.error("Error generating PDF:", error);
            // Handle error (show toast, etc.)
        }
    };

    return (
        <div>
            <div
                id="navbar"
                className={`relative bg-[#EFF2F6] flex items-center justify-between w-full px-5 sm:px-12 py-2 z-10 font-rouben-semi-bold`}
            >
                <div onClick={() => router.push("/")}>
                    <Image alt="logo" src={logo} className="w-[60px] invert contrast-75" />
                </div>

                <div className="items-center flex">
                    <div className="hidden md:block w-[1px] h-[50px] bg-[#babec1] mr-4 md:mr-9"></div>
                    <div
                        className="flex items-center justify-center mr-4 md:mr-9 text-[#616568] cursor-pointer text-sm md:text-base"
                        onClick={() => {
                            setCartSidebar(!cartSidebar);
                        }}
                    >
                        Cart ({cartItems?.length})
                    </div>

                    <div className="flex items-center justify-center mr-2">
                        <button
                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white tracking-wide font-mulish-regular p-2.5 md:p-3 px-4 md:px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                            onClick={() => {
                                logoutUser();
                            }}
                        >
                            <span className="font-rouben-regular uppercase">Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Cart */}
            <Dialog open={cartSidebar} onClose={setCartSidebar} className="relative z-[60] font-rouben-regular">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-[#000000]/40 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <DialogTitle className="text-lg font-rouben-semi-bold text-gray-900">Review Cart Items</DialogTitle>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setCartSidebar(false)}
                                                    className="relative -m-2 p-2 text-gray-500 hover:text-gray-600 cursor-pointer"
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            {cartItems?.length !== 0 ? (
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cartItems.map((item, index) => (
                                                            <li key={index} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                                                                    <Image
                                                                        alt=""
                                                                        src={item.productImage}
                                                                        width={1000}
                                                                        height={1000}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a className="font-rouben-semi-bold">Model no: {item.model}</a>
                                                                            </h3>
                                                                            <button
                                                                                className="font-rouben-semi-bold text-red-500 text-sm hover:text-red-600 ml-4 cursor-pointer"
                                                                                onClick={() => {
                                                                                    removeCartItem(item);
                                                                                }}
                                                                            >
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                        <p className="mt-1 text-gray-900 font-rouben-semi-bold">
                                                                            Fabric code: {item.fabricCode}
                                                                        </p>

                                                                        <p className="mt-1 text-gray-900 font-rouben-semi-bold">
                                                                            Fabric color: {item.fabricColor}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center mt-0 h-[calc(100vh-150px)] text-gray-500 font-rouben-semi-bold">
                                                    <Frown className="w-14 h-14 mb-4 text-gray-400" strokeWidth={1.6} />
                                                    You dont have any items in cart
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {cartItems?.length !== 0 && (
                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <button
                                                className={`w-full bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary p-4 px-6 transition-all duration-300 ${
                                                    isPreviewLoading ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                                }`}
                                                onClick={handlePreview}
                                                disabled={isPreviewLoading}
                                                aria-busy={isPreviewLoading}
                                                aria-label={isPreviewLoading ? "Generating preview" : "Preview"}
                                            >
                                                <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                    {isPreviewLoading ? (
                                                        <>
                                                            <SmallSpinner marginRight="mr-4" />
                                                            Preview
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Eye className="mr-4 w-5 h-5" />
                                                            Preview
                                                        </>
                                                    )}
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>

            <Popup type={popupDetail?.type} text={popupDetail?.text} isPopup={isPopup} />
        </div>
    );
};

export default Navbar;
