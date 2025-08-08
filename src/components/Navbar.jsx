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

const Navbar = ({ cartItems, setCartItems }) => {
    const session = useSession();

    const [cartSidebar, setCartSidebar] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    const [isMobile, setIsMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [navbarDropdown, setNavbarDropdown] = useState(false);

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

    const toggleHamBurger = () => {
        setSidebarOpen(!sidebarOpen);

        if (navbarDropdown) {
            setNavbarDropdown(!navbarDropdown);
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
            router.push("/signin");
        }, 2000);

        session?.refetch();
    };

    useEffect(() => {
        setIsMobile(window.innerWidth < 1150);

        function handleResize() {
            setIsMobile(window.innerWidth < 1150);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div
                id="navbar"
                className={`relative bg-[#EFF2F6] flex items-center justify-between w-full px-5 sm:px-12 py-2 z-10 font-rouben-semi-bold`}
            >
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image alt="logo" src={logo} className="w-[60px] invert contrast-75" />
                </div>

                <div className="items-center hidden 3lg:flex">
                    <div className="w-[1px] h-[50px] bg-[#babec1] mr-9"></div>
                    <div
                        className="flex items-center justify-center mr-9 text-[#616568] cursor-pointer"
                        onClick={() => {
                            setCartSidebar(!cartSidebar);
                        }}
                    >
                        Cart ({cartItems?.length})
                    </div>

                    <div className="flex items-center justify-center mr-2">
                        <button
                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white tracking-wide font-mulish-regular p-3 px-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => router.push("/signin")}
                        >
                            <span className="font-rouben-regular uppercase">Sign Out</span>
                        </button>
                    </div>
                </div>

                <div
                    className="flex items-center justify-center bg-transparent rounded-full w-10 h-10 cursor-pointer 3lg:hidden"
                    onClick={toggleHamBurger}
                >
                    {sidebarOpen ? (
                        <div className="flex flex-col">
                            <span className="bg-black w-4 h-[1px] rotate-45"></span>
                            <span className="bg-black w-4 h-[1px] mt-[-1px] -rotate-45"></span>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <span className="bg-black w-4 h-[1px] mb-1"></span>
                            <span className="bg-black w-4 h-[1px] mb-1"></span>
                            <span className="bg-black w-3 h-[1px]"></span>
                        </div>
                    )}
                </div>
            </div>

            {/* sidebar */}

            {isMobile && (
                <>
                    <div
                        className={`fixed top-0 left-[-250px] bottom-0 flex flex-col z-20 text-black bg-white shadow-2xl w-60 p-4 pt-6 transition-all duration-500 font-rouben-regular uppercase text-sm ${
                            sidebarOpen && "!left-0"
                        }`}
                    >
                        <Link
                            className={`nav-link mb-4 text-sm tracking-wider text-[#80868A] hover:text-primary transition-all !uppercase w-fit ${
                                pathName === "/" ? "active !text-primary" : ""
                            }`}
                            href="/"
                            scroll={false}
                        >
                            HOME
                        </Link>

                        <Link
                            className={`nav-link mb-4 text-sm tracking-wider text-[#80868A] hover:text-primary transition-all !uppercase w-fit ${
                                pathName === "/free-books" ? "active !text-primary" : ""
                            }`}
                            href="/free-books"
                        >
                            FREE BOOKS
                        </Link>

                        <Link
                            className={`nav-link mb-4 text-sm tracking-wider text-[#80868A] hover:text-primary transition-all !uppercase w-fit ${
                                pathName === "/premium-books" ? "active !text-primary" : ""
                            }`}
                            scroll={true}
                            href="/premium-books"
                        >
                            PREMIUM BOOKS
                        </Link>

                        {session?.data?.isSubscriber ? (
                            <Link
                                className={`nav-link mb-4 text-sm tracking-wider text-[#80868A] hover:text-primary transition-all !uppercase w-fit ${
                                    pathName === "/my-subscription" ? "active !text-primary" : ""
                                }`}
                                href="/my-subscription"
                            >
                                MY SUBSCRIPTION
                            </Link>
                        ) : (
                            <Link
                                className={`nav-link mb-4 text-sm tracking-wider text-[#80868A] hover:text-primary transition-all !uppercase w-fit ${
                                    pathName === "/subscriptions" ? "active !text-primary" : ""
                                }`}
                                href="/subscriptions"
                            >
                                SUBSCRIPTIONS
                            </Link>
                        )}

                        {session?.data && (
                            <Link
                                className={`nav-link mb-4 text-sm tracking-wider text-[#80868A] hover:text-primary transition-all !uppercase w-fit ${
                                    pathName === "/my-library" ? "active !text-primary" : ""
                                }`}
                                href="/my-library"
                            >
                                MY LIBRARY
                            </Link>
                        )}

                        {session?.data ? (
                            <>
                                {session?.data?.role === "admin" ? (
                                    <div className="flex items-center justify-center mb-2 w-full">
                                        <button
                                            className="bg-transparent text-[#777777] border border-[#80868A] tracking-wide font-mulish-regular p-3 px-6 transition-all duration-300 hover:scale-105 cursor-pointer w-full"
                                            onClick={() => router.push("/admin-dashboard")}
                                        >
                                            <span className="font-rouben-regular uppercase">Admin Dashboard</span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center mb-2 w-full">
                                        <button
                                            className="bg-transparent text-[#777777] border border-[#80868A] tracking-wide font-mulish-regular p-3 px-6 transition-all duration-300 hover:scale-105 cursor-pointer w-full"
                                            onClick={() => router.push("/authors-dashboard")}
                                        >
                                            <span className="font-rouben-regular uppercase">Writers Hub</span>
                                        </button>
                                    </div>
                                )}

                                <div className="flex items-center justify-center mb-2 w-full">
                                    <button
                                        className="bg-primary text-white tracking-wide font-mulish-regular p-3 px-6 border border-primary transition-all duration-300 hover:scale-105 cursor-pointer w-full"
                                        onClick={logoutUser}
                                    >
                                        <span className="font-rouben-regular uppercase">Logout</span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-center mb-2 w-full">
                                    <button
                                        className="bg-transparent text-[#777777] border border-[#80868A] tracking-wide font-mulish-regular p-3 px-6 transition-all duration-300 hover:scale-105 cursor-pointer w-full"
                                        onClick={() => router.push("/signup")}
                                    >
                                        <span className="font-rouben-regular uppercase">Register</span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-center mb-2 w-full">
                                    <button
                                        className="bg-primary text-white border border-primary tracking-wide font-mulish-regular p-3 px-6 transition-all duration-300 hover:scale-105 cursor-pointer w-full"
                                        onClick={() => router.push("/signin")}
                                    >
                                        <span className="font-rouben-regular uppercase">Sign In</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}

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
                                                className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                                                onClick={() => {
                                                    setCurrentScreen("select_jacket");
                                                    scrollToTop();
                                                }}
                                            >
                                                <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                    <Eye className="mr-2 w-5 h-5" /> Preview
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
