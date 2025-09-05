"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { ArrowLeft, Calendar, CircleCheckBig, FileIcon, PlayCircle, Plus, Upload } from "lucide-react";
import Cookies from "js-cookie";
import axios from "axios";

import jacketLengthImage from "../../public/images/jacket-length.png";
import sleeveLengthImage from "../../public/images/sleeve-length.png";
import halfWaistCircumferenceImage from "../../public/images/half-waist-circumference.png";
import totalShoulderWidthImage from "../../public/images/total-shoulder-width.png";
import shouldersDifferenceImage from "../../public/images/shoulder-difference.png";
import removeCreaseUnderCollarImage from "../../public/images/crease-under-collar.png";
import halfArmholeWidthImage from "../../public/images/half-armhole-width.png";
import removeQuillsImage from "../../public/images/remove-quills.png";
import curvedReversedImage from "../../public/images/curved-reversed.png";
import takeInCollarImage from "../../public/images/take-in-collar.png";
import loosenFrontJacketWidthImage from "../../public/images/loosen-front-jacket-width.png";
import loosenChestWidthImage from "../../public/images/loosen-chest-width.png";
import thighAndKneeDiameterImage from "../../public/images/thigh-&-knee-diameter.png";
import halfWaistDiameterImage from "../../public/images/half-waist-diameter.png";
import halfPelvisDiameterImage from "../../public/images/half-pelvis-diameter.png";
import loosenBottomImage from "../../public/images/loosen-bottom.png";
import raiseLowerWaistImage from "../../public/images/raise-lower-waist.png";
import crotchLengthImage from "../../public/images/crotch-length.png";
import lowerRiseAtFrontImage from "../../public/images/lower-rise-at-front.png";

// models images

// Jackets models
import Q75GIAQ03_Image from "../../public/images/Q75GIAQ03.png";
import Q75GIAQ05_Image from "../../public/images/Q75GIAQ05.png";
import Q75GIAQ01_Image from "../../public/images/Q75GIAQ01.png";
import Q75GIAQ04_Image from "../../public/images/Q75GIAQ04.png";
import Q75GIAQ02_Image from "../../public/images/Q75GIAQ02.png";

// Pant models
import Q75PANQ01_Image from "../../public/images/Q75PANQ01.png";
import Q75PANQ02_Image from "../../public/images/Q75PANQ02.png";
import Q75PANQ05_Image from "../../public/images/Q75PANQ05.png";
import Q75PANQ04_Image from "../../public/images/Q75PANQ04.png";
import Q75PANQ03_Image from "../../public/images/Q75PANQ03.png";

// Vest models
import Q75GILQ01_Image from "../../public/images/Q75GILQ01.png";
import Q75GILQ02_Image from "../../public/images/Q75GILQ02.png";

// Tuxedo models
import Q75ABUQ01_Image from "../../public/images/Q75ABUQ01.png";
import Q75ABUQ02_Image from "../../public/images/Q75ABUQ02.png";
import Q75ABUQ03_Image from "../../public/images/Q75ABUQ03.png";

// Knitwear image
import knitwear_Image from "../../public/images/knitwear-product.png";

import Navbar from "@/components/Navbar";
import Popup from "@/components/Popup";
import { knitwearColors, scrollToTop } from "@/utils/helpers";
import useSession from "@/hooks/user/get-session";
import configSettings from "../../config";
import OutputForm from "@/components/OutputForm";
import SmallSpinner from "@/components/SmallSpinner";
import UploadDataModal from "@/components/UploadDataModal";
import KnitwearOutputForm from "@/components/KnitwearOutputForm";

const Home = () => {
    const session = useSession();

    const [uploadDataModal, setUploadDataModal] = useState(false);

    const [modelsAndFabrics, setModelsAndFabrics] = useState({ clothing: { models: [], fabrics: [] }, knitwear: { models: [], fabrics: [] } });

    const [orderType, setOrderType] = useState("");
    const [currentScreen, setCurrentScreen] = useState("select_order_type");

    const [prices, setPrices] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [form, setForm] = useState({
        orderDetails: { date: "", store: "", associate: "", clientName: "", promiseDate: "", orderNumber: "" },
        monogram: { required: "Yes", text: "", side: "", color: "", font: "" },
        jacketDetails: {
            jacketLength: "",
            sleeveLength: "",
            halfWaistCircumference: "",
            totalShoulderWidth: "",
            shouldersDifference: { leftCmLess: "", rightCmLess: "" },
            removeCreaseUnderCollar: "",
            halfArmholeWidth: "",
            removeQuills: "",
            curvedReversed: "",
            takeInCollar: "",
            loosenFrontJacketWidth: "",
            loosenChestWidth: "",
        },
        pantDetails: {
            thighAndKneeDiameter: { halfThigh: "", halfKnee: "", halfCalf: "" },
            halfWaistDiameter: "",
            halfPelvisDiameter: { measurement: "", YesNo: "" },
            loosenBottom: { length: "", bottom: "" },
            raiseLowerWaist: { moreHigh: "", lessLow: "" },
            crotchLength: "",
            lowerRiseAtFront: "",
        },
        additionalNotes: "",
    });

    const [knitwearForm, setKnitwearForm] = useState({
        orderDetails: { date: "", store: "", associate: "", clientName: "", orderNumber: "" },
        monogram: { required: "Yes", text: "", location: "", side: "", color: "", font: "" },
        measurements: { shoulderWidth: "", bodyLength: "", sleeveLength: "", chestMeasurement: "", halfWaist: "", muscleCircumference: "" },
        additionalNotes: "",
    });

    const [attachedPhotos, setAttachedPhotos] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState({
        productImage: "",
        model: "",
        fabricCode: "",
        fabricColor: "",
        testingSize: "",
        liningStyle: "",
        buttonStyle: "",
        buttonColor: "",
        handmadeButtonholes: "",
    });

    const [knitwearProduct, setKnitwearProduct] = useState({
        productImage: "",
        model: "",
        fabricCode: "",
        fabricColor: "",
        tipping: "",
        testingSize: "",
        buttonStyle: "",
        buttonColor: "",
    });

    const [cartItems, setCartItems] = useState([]);

    const fileInputRef = useRef(null);
    const dateInputRef = useRef(null);
    const promiseDateInputRef = useRef(null);

    const [isUploading, setIsUploading] = useState(false);

    const [isSpinner, setIsSpinner] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();

    const router = useRouter();

    const showPopup = (type, text) => {
        setPopupDetail({ type, text });
        setIsPopup(true);
        setTimeout(() => setIsPopup(false), 4000);
    };

    const handleFileUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        // Configuration
        const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
        const MAX_TOTAL_FILES = 10;

        // Check total files count
        if (attachedPhotos.length + files.length > MAX_TOTAL_FILES) {
            showPopup("Warning", `Maximum ${MAX_TOTAL_FILES} files allowed`);
            return;
        }

        // Filter oversized files
        const validFiles = [];
        const oversizedFiles = [];

        files.forEach((file) => {
            if (file.size > MAX_FILE_SIZE) {
                oversizedFiles.push(file.name);
            } else {
                validFiles.push(file);
            }
        });

        // Show error for oversized files
        if (oversizedFiles.length > 0) {
            showPopup("Warning", `The selected file exceeds our ${MAX_FILE_SIZE / 1024 / 1024}MB upload limit`);
            return;
        }

        if (validFiles.length === 0) return;

        setIsUploading(true);

        try {
            const uploadedFiles = validFiles.map((file) => ({
                name: file.name,
                url: URL.createObjectURL(file),
                file: file,
                size: file.size,
            }));

            setAttachedPhotos([...attachedPhotos, ...uploadedFiles]);
        } catch (error) {
            showPopup("Error", `Failed to process files`);
        } finally {
            setIsUploading(false);
            e.target.value = ""; // Clear input
        }
    };

    const removePhoto = (index) => {
        setAttachedPhotos(attachedPhotos.filter((_, i) => i !== index));
    };

    const isCartFull = (type) => {
        // Define model codes for each type
        const jacketVestModels = [
            "Q75GIAQ03",
            "Q75GIAQ05",
            "Q75GIAQ01",
            "Q75GIAQ04",
            "Q75GIAQ02",
            "Q75GILQ01",
            "Q75GILQ02",
            "Q75ABUQ01",
            "Q75ABUQ02",
            "Q75ABUQ03",
        ];
        const pantModels = ["Q75PANQ01", "Q75PANQ02", "Q75PANQ05", "Q75PANQ04", "Q75PANQ03"];

        if (type === "jacket/vest") {
            // Count how many jacket/vest items are already in the cart
            const jacketVestCount = cartItems.filter((item) => jacketVestModels.includes(item.model)).length;
            return jacketVestCount >= 4; // returns true if cart is full (4 or more)
        } else if (type === "pant") {
            // Count how many pant items are already in the cart
            const pantCount = cartItems.filter((item) => pantModels.includes(item.model)).length;
            return pantCount >= 4; // returns true if cart is full (4 or more)
        }

        // Default return if type doesn't match
        return false;
    };

    const validateOrderDetails = () => {
        if (orderType === "clothing") {
            if (
                !form?.orderDetails?.date ||
                !form?.orderDetails?.store ||
                !form?.orderDetails?.associate ||
                !form?.orderDetails?.clientName ||
                !form?.orderDetails?.promiseDate
            ) {
                showPopup("Warning", "Please fill all the required fileds first before proceeding");
                return;
            }
        } else if (orderType === "knitwear") {
            if (
                !knitwearForm?.orderDetails?.date ||
                !knitwearForm?.orderDetails?.store ||
                !knitwearForm?.orderDetails?.associate ||
                !knitwearForm?.orderDetails?.clientName ||
                !knitwearForm?.orderDetails?.promiseDate
            ) {
                showPopup("Warning", "Please fill all the required fileds first before proceeding");
                return;
            }
        }

        return true;
    };

    const validateMonogramDetails = () => {
        if (orderType === "clothing") {
            if (form?.monogram?.required === "Yes") {
                if (!form?.monogram?.text || !form?.monogram?.side || !form?.monogram?.color || !form?.monogram?.font) {
                    showPopup("Warning", "Please fill all the required fileds first before proceeding");
                    return;
                }
            }
        } else if (orderType === "knitwear") {
            if (knitwearForm?.monogram?.required === "Yes") {
                if (
                    !knitwearForm?.monogram?.text ||
                    !knitwearForm?.monogram?.location ||
                    !knitwearForm?.monogram?.side ||
                    !knitwearForm?.monogram?.color ||
                    !knitwearForm?.monogram?.font
                ) {
                    showPopup("Warning", "Please fill all the required fileds first before proceeding");
                    return;
                }
            }
        }

        return true;
    };

    const confirmOrder = async () => {
        try {
            setIsSpinner(true);

            const uploadedPhotos = [];

            if (attachedPhotos?.length > 0) {
                // upload documents
                const formData = new FormData();

                for (let i = 0; i < attachedPhotos.length; i++) {
                    formData.append(`files[${i}]`, attachedPhotos[i].file);
                }

                const result = await axios.post(configSettings.publicServerUrl + `/uploadFiles`, formData, {
                    headers: {
                        "access-token": Cookies.get("access-token"),
                        "content-type": "multipart/form/data",
                    },
                });

                const response = await result.data;

                // Construct uploaded documents
                for (let i = 0; i < response.filePaths.length; i++) {
                    uploadedPhotos.push(response.filePaths[i]);
                }
            }

            await axios.post(
                configSettings.publicServerUrl + `/confirmOrder`,
                {
                    html:
                        orderType === "clothing"
                            ? document.getElementById("pdf-block").outerHTML
                            : document.getElementById("knitwear-pdf-block").outerHTML, // just raw string
                    orderType: orderType,
                    orderDetails: orderType === "clothing" ? form : knitwearForm,
                    uploadedPhotos: uploadedPhotos,
                },
                {
                    headers: {
                        "access-token": Cookies.get("access-token"),
                        "Content-Type": "application/json", // JSON content type
                    },
                }
            );

            setIsSpinner(false);

            showPopup("Success", "Order has been successfully confirmed");

            setCartItems([]);

            setSelectedProduct({
                productImage: "",
                model: "",
                fabricCode: "",
                fabricColor: "",
                testingSize: "",
                liningStyle: "",
                buttonStyle: "",
                buttonColor: "",
                handmadeButtonholes: "",
            });

            setKnitwearProduct({
                productImage: "",
                model: "",
                fabricCode: "",
                fabricColor: "",
                tipping: "",
                testingSize: "",
                buttonStyle: "",
                buttonColor: "",
            });

            setForm({
                orderDetails: { date: "", store: "", associate: "", clientName: "", promiseDate: "", orderNumber: "" },
                monogram: { required: "Yes", text: "", side: "", color: "", font: "" },
                jacketDetails: {
                    jacketLength: "",
                    sleeveLength: "",
                    halfWaistCircumference: "",
                    totalShoulderWidth: "",
                    shouldersDifference: { leftCmLess: "", rightCmLess: "" },
                    removeCreaseUnderCollar: "",
                    halfArmholeWidth: "",
                    removeQuills: "",
                    curvedReversed: "",
                    takeInCollar: "",
                    loosenFrontJacketWidth: "",
                    loosenChestWidth: "",
                },
                pantDetails: {
                    thighAndKneeDiameter: { halfThigh: "", halfKnee: "", halfCalf: "" },
                    halfWaistDiameter: "",
                    halfPelvisDiameter: { measurement: "", YesNo: "" },
                    loosenBottom: { length: "", bottom: "" },
                    raiseLowerWaist: { moreHigh: "", lessLow: "" },
                    crotchLength: "",
                    lowerRiseAtFront: "",
                },
                additionalNotes: "",
            });

            setKnitwearForm({
                orderDetails: { date: "", store: "", associate: "", clientName: "", orderNumber: "" },
                monogram: { required: "Yes", text: "", location: "Wrist", side: "", color: "", font: "" },
                measurements: { shoulderWidth: "", bodyLength: "", sleeveLength: "", chestMeasurement: "", halfWaist: "", muscleCircumference: "" },
                additionalNotes: "",
            });

            setCurrentScreen("select_order_type");
        } catch (error) {
            setIsSpinner(false);
            console.log(error);
        }
    };

    const getAllModelsFabrics = async () => {
        try {
            const response = await fetch(configSettings?.serverUrl + "/getAllModelsFabrics", {
                method: "GET",
                headers: {
                    "access-token": Cookies.get("access-token"),
                },
            });

            if (!response.ok) throw new Error("Failed to fetch models and fabrics");

            const data = await response.json();
            setModelsAndFabrics(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    // Fetch prices when selectedProduct changes
    useEffect(() => {
        const fetchPrices = async () => {
            if (selectedProduct?.model && selectedProduct?.fabricCode) {
                try {
                    setLoading(true);
                    setError(null);

                    const response = await fetch(configSettings?.serverUrl + "/getPrices", {
                        method: "POST",
                        headers: {
                            "access-token": Cookies.get("access-token"),
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            model: selectedProduct?.model,
                            fabric: selectedProduct?.fabricCode,
                            orderType: orderType,
                        }),
                    });

                    if (!response.ok) throw new Error("Price lookup failed");

                    const data = await response.json();
                    setPrices(data);
                } catch (err) {
                    setError(err.message);
                    setPrices(null);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPrices();
    }, [selectedProduct?.model, selectedProduct?.fabricCode]);

    // Fetch prices when knitwear product changes
    useEffect(() => {
        const fetchPrices = async () => {
            if (knitwearProduct?.model && knitwearProduct?.fabricCode) {
                try {
                    setLoading(true);
                    setError(null);

                    const response = await fetch(configSettings?.serverUrl + "/getPrices", {
                        method: "POST",
                        headers: {
                            "access-token": Cookies.get("access-token"),
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            model: knitwearProduct?.model,
                            fabric: knitwearProduct?.fabricCode,
                            orderType: orderType,
                        }),
                    });

                    if (!response.ok) throw new Error("Price lookup failed");

                    const data = await response.json();
                    setPrices(data);
                } catch (err) {
                    setError(err.message);
                    setPrices(null);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPrices();
    }, [knitwearProduct?.model, knitwearProduct?.fabricCode]);

    useEffect(() => {
        getAllModelsFabrics();
    }, []);

    useEffect(() => {
        if (!session?.data && !session?.isLoading) {
            router.push("/admin");
        }
    }, [session?.data, session?.isLoading]);

    return (
        <>
            {/* top navbar component */}
            <Navbar cartItems={cartItems} setCartItems={setCartItems} orderType={orderType} />

            <OutputForm form={form} cartItems={cartItems} />
            <KnitwearOutputForm form={knitwearForm} cartItems={cartItems} />

            {currentScreen === "select_order_type" && (
                <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4 h-[calc(100vh-105px)] items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 sm:px-6 lg:px-8">
                        <button
                            className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                            onClick={() => {
                                if (orderType === "knitwear") {
                                    setForm({
                                        orderDetails: { date: "", store: "", associate: "", clientName: "", promiseDate: "", orderNumber: "" },
                                        monogram: { required: "Yes", text: "", side: "", color: "", font: "" },
                                        jacketDetails: {
                                            jacketLength: "",
                                            sleeveLength: "",
                                            halfWaistCircumference: "",
                                            totalShoulderWidth: "",
                                            shouldersDifference: { leftCmLess: "", rightCmLess: "" },
                                            removeCreaseUnderCollar: "",
                                            halfArmholeWidth: "",
                                            removeQuills: "",
                                            curvedReversed: "",
                                            takeInCollar: "",
                                            loosenFrontJacketWidth: "",
                                            loosenChestWidth: "",
                                        },
                                        pantDetails: {
                                            thighAndKneeDiameter: { halfThigh: "", halfKnee: "", halfCalf: "" },
                                            halfWaistDiameter: "",
                                            halfPelvisDiameter: { measurement: "", YesNo: "" },
                                            loosenBottom: { length: "", bottom: "" },
                                            raiseLowerWaist: { moreHigh: "", lessLow: "" },
                                            crotchLength: "",
                                            lowerRiseAtFront: "",
                                        },
                                        additionalNotes: "",
                                    });

                                    setCartItems([]);
                                }

                                setOrderType("clothing");
                                setCurrentScreen("order_information");
                                scrollToTop();
                            }}
                        >
                            <span className="font-rouben-semi-bold uppercase flex items-center justify-center">Clothing</span>
                        </button>

                        <button
                            className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                            onClick={() => {
                                if (orderType === "clothing") {
                                    setKnitwearForm({
                                        orderDetails: { date: "", store: "", associate: "", clientName: "", orderNumber: "" },
                                        monogram: { required: "Yes", text: "", location: "Wrist", side: "", color: "", font: "" },
                                        measurements: {
                                            shoulderWidth: "",
                                            bodyLength: "",
                                            sleeveLength: "",
                                            chestMeasurement: "",
                                            halfWaist: "",
                                            muscleCircumference: "",
                                        },
                                        additionalNotes: "",
                                    });

                                    setCartItems([]);
                                }

                                setOrderType("knitwear");
                                setCurrentScreen("order_information");
                                scrollToTop();
                            }}
                        >
                            <span className="font-rouben-semi-bold uppercase flex items-center justify-center">Knitwear</span>
                        </button>
                    </div>
                </div>
            )}

            {orderType === "clothing" ? (
                <>
                    {currentScreen === "order_information" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Order Information</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div
                                            className="flex flex-col flex-1 mb-4 md:mb-0 cursor-pointer"
                                            onClick={() => dateInputRef.current?.showPicker?.()}
                                        >
                                            <p className="text-[#313131] mb-2">Date *</p>

                                            <div className="relative flex-1">
                                                <input
                                                    ref={dateInputRef}
                                                    type="date"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] appearance-none outline-none cursor-pointer"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            orderDetails: {
                                                                ...form?.orderDetails,
                                                                date: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.orderDetails?.date}
                                                />

                                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#858B8E]">
                                                    <Calendar className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Store *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        orderDetails: {
                                                            ...form?.orderDetails,
                                                            store: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={form?.orderDetails?.store}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="Madison Ave">Madison Ave</option>
                                                <option value="Greenwich">Greenwich</option>
                                                <option value="Palm Beach">Palm Beach</option>
                                                <option value="Bal Harbour">Bal Harbour</option>
                                                <option value="Las Vegas">Las Vegas</option>
                                                <option value="South Coast Plz">South Coast Plz</option>
                                                <option value="Beverly Hills">Beverly Hills</option>
                                                <option value="Toronto">Toronto</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Associate *</p>
                                            <input
                                                type="text"
                                                placeholder="Associate"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        orderDetails: {
                                                            ...form?.orderDetails,
                                                            associate: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={form?.orderDetails?.associate}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Client Name *</p>
                                            <input
                                                type="text"
                                                placeholder="Client Name"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        orderDetails: {
                                                            ...form?.orderDetails,
                                                            clientName: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={form?.orderDetails?.clientName}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div
                                            className="flex flex-col flex-1 mb-4 md:mb-0 cursor-pointer"
                                            onClick={() => promiseDateInputRef.current?.showPicker?.()}
                                        >
                                            <p className="text-[#313131] mb-2">Promise Date *</p>

                                            <div className="relative flex-1">
                                                <input
                                                    ref={promiseDateInputRef}
                                                    type="date"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] appearance-none outline-none cursor-pointer"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            orderDetails: {
                                                                ...form?.orderDetails,
                                                                promiseDate: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.orderDetails?.promiseDate}
                                                />

                                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#858B8E]">
                                                    <Calendar className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 justify-end mt-5">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("select_order_type");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                const isValid = validateOrderDetails();

                                                if (isValid) {
                                                    setCurrentScreen("monogram");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full font-rouben-semi-bold mt-12">
                                <p
                                    className="text-primary text-[15px] cursor-pointer hover:underline"
                                    onClick={() => {
                                        setUploadDataModal(true);
                                    }}
                                >
                                    Click here to upload/update pricing data for clothing
                                </p>
                            </div>
                        </div>
                    ) : currentScreen === "monogram" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Monogram</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Monogram? *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        monogram: {
                                                            ...form?.monogram,
                                                            required: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={form?.monogram?.required}
                                            >
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    {form?.monogram?.required === "Yes" && (
                                        <>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                                <div className="flex-1 mb-4 md:mb-0">
                                                    <p className="text-[#313131] mb-2">Monogram Text *</p>
                                                    <input
                                                        type="text"
                                                        placeholder="Monogram Text"
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setForm({
                                                                ...form,
                                                                monogram: {
                                                                    ...form?.monogram,
                                                                    text: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={form?.monogram?.text}
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-[#313131] mb-2">Monogram Side *</p>

                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setForm({
                                                                ...form,
                                                                monogram: {
                                                                    ...form?.monogram,
                                                                    side: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={form?.monogram?.side}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="Left">Left</option>
                                                        <option value="Right">Right</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                                <div className="flex-1 mb-4 md:mb-0">
                                                    <p className="text-[#313131] mb-2">Monogram Color *</p>

                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setForm({
                                                                ...form,
                                                                monogram: {
                                                                    ...form?.monogram,
                                                                    color: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={form?.monogram?.color}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="3650 – WHITE">3650 – WHITE</option>
                                                        <option value="3901 – TEAL">3901 – TEAL</option>
                                                        <option value="4032 – LT BLUE">4032 – LT BLUE</option>
                                                        <option value="1394 – SAGE">1394 – SAGE</option>
                                                        <option value="0108 – GREY">0108 – GREY</option>
                                                        <option value="0124 – LT GREY">0124 – LT GREY</option>
                                                        <option value="0870 – IVORY">0870 – IVORY</option>
                                                        <option value="1701 – RED">1701 – RED</option>
                                                        <option value="1921 – BURGANDY">1921 – BURGANDY</option>
                                                        <option value="0722 – TAUPE">0722 – TAUPE</option>
                                                        <option value="1344 – ORANGE">1344 – ORANGE</option>
                                                        <option value="1172 – BIEGE">1172 – BIEGE</option>
                                                        <option value="0832 – YELLOW">0832 – YELLOW</option>
                                                        <option value="0853 – SAND">0853 – SAND</option>
                                                        <option value="0020 - BLACK">0020 - BLACK</option>
                                                        <option value="3323 – BLUE">3323 – BLUE</option>
                                                        <option value="3344 – NAVY">3344 – NAVY</option>
                                                    </select>
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-[#313131] mb-2">Monogram Font *</p>

                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setForm({
                                                                ...form,
                                                                monogram: {
                                                                    ...form?.monogram,
                                                                    font: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={form?.monogram?.font}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="Palace Script MT">Palace Script MT</option>
                                                        <option value="Aptos lowercase">Aptos lowercase</option>
                                                        <option value="Aptos uppercase">Aptos uppercase</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("order_information");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                const isValid = validateMonogramDetails();

                                                if (isValid) {
                                                    setCurrentScreen("jacket_length");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "jacket_length" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Jacket Length</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                While wearing the garment, measure from the top of the collar through the end of the jacket following the central back
                                seaming.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={jacketLengthImage} className="w-[200px] md:w-[220px]" />
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                jacketLength: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.jacketLength}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("monogram");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.jacketDetails?.jacketLength) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("sleeve_length");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "sleeve_length" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Sleeve Length</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                While wearing the garment, measure the length of the sleeve starting from the seam of the shoulder through its end.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={sleeveLengthImage} className="w-[200px] md:w-[220px]" />
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                sleeveLength: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.sleeveLength}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("jacket_length");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.jacketDetails?.sleeveLength) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("half_waist_circumference");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "half_waist_circumference" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Half-Waist Circumference</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Lay the unfinished jacket fully open on the table and measure distance from the second button through the back side up
                                to its central seam (measurement involves half part of the jacket).
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={halfWaistCircumferenceImage} className="w-[200px] md:w-[250px]" />
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                halfWaistCircumference: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.halfWaistCircumference}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("sleeve_length");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.jacketDetails?.halfWaistCircumference) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("total_shoulder_width");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "total_shoulder_width" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Total Shoulder Width</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                While wearing the garment, measure from shoulder to shoulder.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={totalShoulderWidthImage} className="w-[200px] md:w-[220px]" />
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                totalShoulderWidth: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.totalShoulderWidth}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("half_waist_circumference");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.jacketDetails?.totalShoulderWidth) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("shoulders_difference");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen == "shoulders_difference" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Shoulder’s Difference</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                While wearing the garment, if a difference is noticed between shoulders’ height, specify the wrong shoulder and the
                                necessary fixing cm. Take a pic to highlight defects.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={shouldersDifferenceImage} className="w-[200px] md:w-[220px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1">
                                                <p className="text-[#313131] mb-2">Left CM Less</p>
                                                <input
                                                    type="text"
                                                    placeholder="Left CM Less"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                shouldersDifference: {
                                                                    ...form?.jacketDetails?.shouldersDifference,
                                                                    leftCmLess: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.shouldersDifference?.leftCmLess}
                                                />
                                            </div>

                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">Right CM Less</p>
                                                <input
                                                    type="text"
                                                    placeholder="Right CM Less"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                shouldersDifference: {
                                                                    ...form?.jacketDetails?.shouldersDifference,
                                                                    rightCmLess: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.shouldersDifference?.rightCmLess}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("total_shoulder_width");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("remove_crease_under_collar");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "remove_crease_under_collar" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">
                                Remove Crease Under Collar
                            </h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                If you notice a crease of fabric under the back collar while is worn, remove excessive fabric. Take a pic.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={removeCreaseUnderCollarImage} className="w-[200px] md:w-[220px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                removeCreaseUnderCollar: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.removeCreaseUnderCollar}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("shoulders_difference");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("half_armhole_width");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "half_armhole_width" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Half Armhole Width</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Should the jacket result in a large/small armhole, lay the jacket on the table, measure the half armhole under arm
                                level and specify the requested measurement. Ex. With a narrow jacket showing a 18.5 cm armhole, specify cm 20 to the
                                tailor knows it must be 3 cm larger.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={halfArmholeWidthImage} className="w-[200px] md:w-[200px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                halfArmholeWidth: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.halfArmholeWidth}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("remove_crease_under_collar");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.jacketDetails?.halfArmholeWidth) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("remove_quills");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "remove_quills" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Remove Quills</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                While wearing the garment, if the jackets shows at back creases at underarms level, point pins and specify the amount
                                of fabric to remove. Take pic before and after pointing pins.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={removeQuillsImage} className="w-[200px] md:w-[320px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                removeQuills: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.removeQuills}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("half_armhole_width");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("curved_reversed");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "curved_reversed" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Curved / Reversed</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                When the customer shows a “forward” hunched posture the jacket will look shorter at the back. Vice versa, a reversed
                                posture will show a shorter length at the front (showing a very back oriented shoulders). Specify posture and the
                                necessary cm to lengthen the jacket. Take pic to highlight defect.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={curvedReversedImage} className="w-[200px] md:w-[330px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                curvedReversed: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.curvedReversed}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("remove_quills");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("take_in_collar");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "take_in_collar" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Take in Collar</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                While wearing the jacket, if you notice a too wide a back collar, specify the necessary cm to take it in. Take a pic
                                to highlight defect.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={takeInCollarImage} className="w-[200px] md:w-[330px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                takeInCollar: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.takeInCollar}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("curved_reversed");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("loosen_front_jacket_width");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "loosen_front_jacket_width" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Loosen Front Jacket Width</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                For large abdomen customers, measure the distance and specify the necessary cm for the jacket to be closed properly.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={loosenFrontJacketWidthImage} className="w-[200px] md:w-[330px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                loosenFrontJacketWidth: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.loosenFrontJacketWidth}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("take_in_collar");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.jacketDetails?.loosenFrontJacketWidth) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("loosen_chest_width");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "loosen_chest_width" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Loosen Chest Width</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                For large chest customer measure the total customer’s chest at nipples level to add the missing cm. (Better with a
                                t-shirt only).
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={loosenChestWidthImage} className="w-[180px] md:w-[180px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            jacketDetails: {
                                                                ...form?.jacketDetails,
                                                                loosenChestWidth: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.jacketDetails?.loosenChestWidth}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("loosen_front_jacket_width");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("thigh_and_knee_diameter");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "thigh_and_knee_diameter" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Thigh & Knee Diameter</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                - HALF HIPS CIRCUMFERENCE measure the trousers’ width horizontally at 8 cm. <br /> - HALF KNEES CIRCUMFERENCE measure
                                the trousers’ width horizontally at 30 cm. <br /> - HALF CALVES CIRCUMFERENCE measure the trousers’ width horizontally
                                at 50 cm. Distance from the crotch point and specify the size requested.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={thighAndKneeDiameterImage} className="w-[200px] md:w-[220px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                thighAndKneeDiameter: {
                                                                    ...form?.pantDetails?.thighAndKneeDiameter,
                                                                    halfThigh: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.thighAndKneeDiameter?.halfThigh}
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                thighAndKneeDiameter: {
                                                                    ...form?.pantDetails?.thighAndKneeDiameter,
                                                                    halfKnee: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.thighAndKneeDiameter?.halfKnee}
                                                />
                                            </div>

                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                thighAndKneeDiameter: {
                                                                    ...form?.pantDetails?.thighAndKneeDiameter,
                                                                    halfCalf: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.thighAndKneeDiameter?.halfCalf}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("loosen_chest_width");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (
                                                    !form?.pantDetails?.thighAndKneeDiameter?.halfThigh ||
                                                    !form?.pantDetails?.thighAndKneeDiameter?.halfKnee ||
                                                    !form?.pantDetails?.thighAndKneeDiameter?.halfCalf
                                                ) {
                                                    showPopup("Warning", "Please fill all the fields first before proceeding");
                                                } else {
                                                    setCurrentScreen("half_waist_diameter");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "half_waist_diameter" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Half Waist Diameter</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Keep trousers perfectly closed (double zip button included) and lay it on the table, measure the waist diameter from
                                side to side, as shown in the figure, and specify the size requested.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={halfWaistDiameterImage} className="w-[120px] md:w-[120px]" />
                                        </div>

                                        <div className="flex flex-col sm:items-center gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                halfWaistDiameter: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.halfWaistDiameter}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("thigh_and_knee_diameter");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.pantDetails?.halfWaistDiameter) {
                                                    showPopup("Warning", "Please enter the value first before proceeding");
                                                } else {
                                                    setCurrentScreen("half_pelvis_diameter");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "half_pelvis_diameter" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Half Pelvis Diameter</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Keep trousers perfectly closed (double zip button included) and lay it on the table, measure the width of the hips
                                from the pocket’s lowest point and specify the size requested. Tick the box yes/no of the “wide crotch” should the
                                trousers shows excessive overhang.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={halfPelvisDiameterImage} className="w-[120px] md:w-[120px]" />
                                        </div>

                                        <div className="flex flex-col gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                halfPelvisDiameter: {
                                                                    ...form?.pantDetails?.halfPelvisDiameter,
                                                                    measurement: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.halfPelvisDiameter?.measurement}
                                                />
                                            </div>

                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">Yes / No</p>

                                                <select
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                halfPelvisDiameter: {
                                                                    ...form?.pantDetails?.halfPelvisDiameter,
                                                                    YesNo: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.halfPelvisDiameter?.YesNo}
                                                >
                                                    <option value="" selected disabled>
                                                        Please Select
                                                    </option>

                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("half_waist_diameter");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (
                                                    !form?.pantDetails?.halfPelvisDiameter?.measurement ||
                                                    !form?.pantDetails?.halfPelvisDiameter?.YesNo
                                                ) {
                                                    showPopup("Warning", "Please enter both values first before proceeding");
                                                } else {
                                                    setCurrentScreen("loosen_bottom");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "loosen_bottom" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Loosen Bottom</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Measure the desired total leg length from the crotch to the bottom and specify it. Then take note of the customer’s
                                wished measure of the half bottom so that the tailor can work on the bottom’s right width.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={loosenBottomImage} className="w-[90px] md:w-[90px]" />
                                        </div>

                                        <div className="flex flex-col gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1">
                                                <p className="text-[#313131] mb-2">Length CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="Length CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                loosenBottom: {
                                                                    ...form?.pantDetails?.loosenBottom,
                                                                    length: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.loosenBottom?.length}
                                                />
                                            </div>

                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">Bottom CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="Bottom CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                loosenBottom: {
                                                                    ...form?.pantDetails?.loosenBottom,
                                                                    bottom: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.loosenBottom?.bottom}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("half_pelvis_diameter");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!form?.pantDetails?.loosenBottom?.length || !form?.pantDetails?.loosenBottom?.bottom) {
                                                    showPopup("Warning", "Please enter both values first before proceeding");
                                                } else {
                                                    setCurrentScreen("raise_lower_waist");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "raise_lower_waist" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Raise / Lower Waist</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Specify the cm needed to raise or lower the waist following to the test size breakdown.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={raiseLowerWaistImage} className="w-[90px] md:w-[90px]" />
                                        </div>

                                        <div className="flex flex-col gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1">
                                                <p className="text-[#313131] mb-2">More High CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="More High CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                raiseLowerWaist: {
                                                                    ...form?.pantDetails?.raiseLowerWaist,
                                                                    moreHigh: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.raiseLowerWaist?.moreHigh}
                                                />
                                            </div>

                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">Less Low CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="Less Low CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                raiseLowerWaist: {
                                                                    ...form?.pantDetails?.raiseLowerWaist,
                                                                    lessLow: e.target.value,
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.raiseLowerWaist?.lessLow}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("loosen_bottom");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("crotch_length");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "crotch_length" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Crotch Length</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                If the trousers shows an abundance of fabric that causes creases at the back waist level (see figure for reference),
                                specify the exceeding cm. Take a pic to highlight defect.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={crotchLengthImage} className="w-[200px] md:w-[230px]" />
                                        </div>

                                        <div className="flex flex-col gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                crotchLength: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.crotchLength}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("raise_lower_waist");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("lower_rise_at_front");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "lower_rise_at_front" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto px-4 py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Lower Rise at Front</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                If a customer has a large abdomen it is possible to lower the trousers’ front rise to level it with the back side.
                                Specify the cm that needs to be removed following the test size breakdown. Take a pic to highlight defect.
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                                        <div className="flex items-center justify-center">
                                            <Image alt="" src={lowerRiseAtFrontImage} className="w-[85px] md:w-[85px]" />
                                        </div>

                                        <div className="flex flex-col gap-x-3 gap-y-4 w-full md:w-fit">
                                            <div className="flex-1 mb-4 md:mb-0">
                                                <p className="text-[#313131] mb-2">CM + / -</p>
                                                <input
                                                    type="text"
                                                    placeholder="CM + / -"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            pantDetails: {
                                                                ...form?.pantDetails,
                                                                lowerRiseAtFront: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={form?.pantDetails?.lowerRiseAtFront}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("crotch_length");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("choose_product");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "choose_product" ? (
                        <div className="relative flex flex-col max-w-5xl w-full mx-auto px-4 py-12 pt-4 h-[calc(100vh-105px)] items-center justify-center">
                            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 sm:px-6 lg:px-8">
                                <button
                                    className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("select_jacket");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                        <Plus className="mr-2 w-5 h-5" /> Add Jacket
                                    </span>
                                </button>

                                <button
                                    className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("select_pant");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                        <Plus className="mr-2 w-5 h-5" /> Add Pant
                                    </span>
                                </button>

                                <button
                                    className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("select_vest");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                        <Plus className="mr-2 w-5 h-5" /> Add Vest
                                    </span>
                                </button>

                                <button
                                    className="bg-gradient-to-tr w-full from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("select_tuxedo");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                        <Plus className="mr-2 w-5 h-5" /> Add Tuxedo
                                    </span>
                                </button>
                            </div>

                            <div className="absolute bottom-12">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                        onClick={() => {
                                            setCurrentScreen("lower_rise_at_front");
                                            scrollToTop();
                                        }}
                                    >
                                        <span className="font-rouben-semi-bold uppercase">Go Back</span>
                                    </button>

                                    <button
                                        className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                        onClick={() => {
                                            if (cartItems?.length === 0) {
                                                showPopup("Warning", "Please add at least one item to your cart before proceeding");
                                            } else {
                                                setCurrentScreen("attach_photos");
                                                scrollToTop();
                                            }
                                        }}
                                    >
                                        <span className="font-rouben-semi-bold uppercase">Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "select_jacket" ? (
                        <div className="relative flex flex-col max-w-6xl w-full mx-auto px-4 my-12 pt-4 items-center justify-center">
                            <div className="flex items-center justify-center flex-wrap w-full gap-16 sm:px-6 lg:px-8 font-rouben-regular">
                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GIAQ03_Image, model: "Q75GIAQ03" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GIAQ03_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GIAQ03</p>
                                    <p className="text-center text-lg">Double Breasted, Peak Lapel, Flap pkt with ticket pkt</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GIAQ05_Image, model: "Q75GIAQ05" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GIAQ05_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GIAQ05</p>
                                    <p className="text-center text-lg">Single Breasted, unconstructed, notch lapel with patch pkt</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GIAQ01_Image, model: "Q75GIAQ01" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GIAQ01_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GIAQ01</p>
                                    <p className="text-center text-lg">Single Breasted, unconstructed, peak lapel with patch pkt</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GIAQ04_Image, model: "Q75GIAQ04" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GIAQ04_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GIAQ04</p>
                                    <p className="text-center text-lg">Single Breasted, peak lapel, front pockets with flap with ticket pkt</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[300px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GIAQ02_Image, model: "Q75GIAQ02" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GIAQ02_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GIAQ02</p>
                                    <p className="text-center text-lg">Single Breasted, notch lapel, front pockets with flap with ticket pkt</p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <button
                                    className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("choose_product");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase">Go Back</span>
                                </button>
                            </div>
                        </div>
                    ) : currentScreen === "select_jacket_vest_fabric" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Fabric & Styles</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Fabric Code *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, fabricCode: e.target.value });
                                                }}
                                                value={selectedProduct?.fabricCode}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                {modelsAndFabrics?.clothing?.fabrics?.map((code, index) => {
                                                    return (
                                                        <option key={index} value={code}>
                                                            {code}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Fabric Color *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, fabricColor: e.target.value });
                                                }}
                                                value={selectedProduct?.fabricColor}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="00 – WHITE">00 – WHITE</option>
                                                <option value="01 – IVORY">01 – IVORY</option>
                                                <option value="02 – SAND">02 – SAND</option>
                                                <option value="03 – TAUPE">03 – TAUPE</option>
                                                <option value="04 – CAMEL">04 – CAMEL</option>
                                                <option value="05 - BROWN">05 - BROWN</option>
                                                <option value="06 – GREY">06 – GREY</option>
                                                <option value="07 – GREEN">07 – GREEN</option>
                                                <option value="08 – LT BLUE">08 – LT BLUE</option>
                                                <option value="11 – NAVY">11 – NAVY</option>
                                                <option value="13 – MED GREY">13 – MED GREY</option>
                                                <option value="14 – LT GREY">14 – LT GREY</option>
                                                <option value="15 – DRK GREY">15 – DRK GREY</option>
                                                <option value="18 – RED">18 – RED</option>
                                                <option value="22 - BLACK">22 - BLACK</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Testing Size *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={selectedProduct?.testingSize}
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, testingSize: e.target.value });
                                                }}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="44">44</option>
                                                <option value="46">46</option>
                                                <option value="48">48</option>
                                                <option value="50">50</option>
                                                <option value="52">52</option>
                                                <option value="54">54</option>
                                                <option value="56">56</option>
                                                <option value="58">58</option>
                                                <option value="60">60</option>
                                                <option value="62">62</option>
                                                <option value="64">64</option>
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Lining Style *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={selectedProduct?.liningStyle}
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, liningStyle: e.target.value });
                                                }}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="11">11</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Button Style *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={selectedProduct?.buttonStyle}
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, buttonStyle: e.target.value });
                                                }}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="ART 267755">ART 267755</option>
                                                <option value="ART 241671">ART 241671</option>
                                                <option value="ART 239483">ART 239483</option>
                                                <option value="ART239560">ART239560</option>
                                                <option value="ART240165">ART240165</option>
                                                <option value="ART 240274">ART 240274</option>
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Button Color *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={selectedProduct?.buttonColor}
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, buttonColor: e.target.value });
                                                }}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="VAR – 020">VAR – 020</option>
                                                <option value="VAR - 04B">VAR - 04B</option>
                                                <option value="VAR – VRC30">VAR – VRC30</option>
                                                <option value="VAR – 4DS">VAR – 4DS</option>
                                                <option value="VAR -033">VAR -033</option>
                                                <option value="SELF COVERE">SELF COVERE</option>
                                                <option value="Ottone Antico">Ottone Antico</option>
                                                <option value="Argento Antico">Argento Antico</option>
                                                <option value="Allumninio Alterato">Allumninio Alterato</option>
                                                <option value="Mogano Bizantino">Mogano Bizantino</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Handmade Buttonholes *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={selectedProduct?.handmadeButtonholes}
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, handmadeButtonholes: e.target.value });
                                                }}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">PRICE $ USA</p>

                                            <input
                                                type="text"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none cursor-not-allowed"
                                                value={loading ? "Loading..." : error ? "Item Unavailable" : prices?.usaPrice || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">PRICE $ CA</p>

                                            <input
                                                type="text"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none cursor-not-allowed"
                                                value={loading ? "Loading..." : error ? "Item Unavailable" : prices?.caPrice || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (selectedProduct?.model === "Q75GILQ01" || selectedProduct?.model === "Q75GILQ02") {
                                                    setCurrentScreen("select_vest");
                                                    scrollToTop();

                                                    setSelectedProduct({
                                                        model: "",
                                                        fabricCode: "",
                                                        fabricColor: "",
                                                        testingSize: "",
                                                        liningStyle: "",
                                                        buttonStyle: "",
                                                        buttonColor: "",
                                                        handmadeButtonholes: "",
                                                    });

                                                    setPrices(null);
                                                    setError(null);
                                                } else if (
                                                    selectedProduct?.model === "Q75ABUQ01" ||
                                                    selectedProduct?.model === "Q75ABUQ02" ||
                                                    selectedProduct?.model === "Q75ABUQ03"
                                                ) {
                                                    setCurrentScreen("select_tuxedo");
                                                    scrollToTop();

                                                    setSelectedProduct({
                                                        model: "",
                                                        fabricCode: "",
                                                        fabricColor: "",
                                                        testingSize: "",
                                                        liningStyle: "",
                                                        buttonStyle: "",
                                                        buttonColor: "",
                                                        handmadeButtonholes: "",
                                                    });

                                                    setPrices(null);
                                                    setError(null);
                                                } else {
                                                    setCurrentScreen("select_jacket");
                                                    scrollToTop();

                                                    setSelectedProduct({
                                                        model: "",
                                                        fabricCode: "",
                                                        fabricColor: "",
                                                        testingSize: "",
                                                        liningStyle: "",
                                                        buttonStyle: "",
                                                        buttonColor: "",
                                                        handmadeButtonholes: "",
                                                    });

                                                    setPrices(null);
                                                    setError(null);
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (
                                                    !selectedProduct?.fabricCode ||
                                                    !selectedProduct?.fabricCode ||
                                                    !selectedProduct?.testingSize ||
                                                    !selectedProduct?.liningStyle ||
                                                    !selectedProduct?.buttonStyle ||
                                                    !selectedProduct?.buttonColor ||
                                                    !selectedProduct?.handmadeButtonholes
                                                ) {
                                                    showPopup("Warning", "Please fill all the required fields first before proceeding");
                                                } else {
                                                    if (isCartFull("jacket/vest")) {
                                                        showPopup(
                                                            "Warning",
                                                            "You already have 4 jackets / vests in your cart. Please remove one to add a new item."
                                                        );
                                                        return;
                                                    }

                                                    var newCartItems = cartItems;
                                                    newCartItems.push(selectedProduct);
                                                    setCartItems(newCartItems);

                                                    setSelectedProduct({
                                                        model: "",
                                                        fabricCode: "",
                                                        fabricColor: "",
                                                        testingSize: "",
                                                        liningStyle: "",
                                                        buttonStyle: "",
                                                        buttonColor: "",
                                                        handmadeButtonholes: "",
                                                    });

                                                    setCurrentScreen("choose_product");
                                                    scrollToTop();

                                                    showPopup("Success", "Product has been successfully added to cart");
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "select_pant" ? (
                        <div className="relative flex flex-col max-w-6xl w-full mx-auto px-4 my-12 pt-4 items-center justify-center">
                            <div className="flex items-center justify-center flex-wrap w-full gap-16 sm:px-6 lg:px-8 font-rouben-regular">
                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75PANQ01_Image, model: "Q75PANQ01" });
                                        setCurrentScreen("select_pant_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75PANQ01_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75PANQ01</p>
                                    <p className="text-center text-lg">Double pleat chino, back pockets with flat</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75PANQ02_Image, model: "Q75PANQ02" });
                                        setCurrentScreen("select_pant_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75PANQ02_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75PANQ02</p>
                                    <p className="text-center text-lg">Flat Front Chino, welted back pockets</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75PANQ05_Image, model: "Q75PANQ05" });
                                        setCurrentScreen("select_pant_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75PANQ05_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75PANQ05</p>
                                    <p className="text-center text-lg">Jogger pants with double pleat, back pockets with flap</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75PANQ04_Image, model: "Q75PANQ04" });
                                        setCurrentScreen("select_pant_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75PANQ04_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75PANQ04</p>
                                    <p className="text-center text-lg">Double pleat chino, back pockets with flap and elastic waist</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[300px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75PANQ03_Image, model: "Q75PANQ03" });
                                        setCurrentScreen("select_pant_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75PANQ03_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75PANQ03</p>
                                    <p className="text-center text-lg">Cargo pant, back pockets with CONTINUE flap</p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <button
                                    className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("choose_product");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase">Go Back</span>
                                </button>
                            </div>
                        </div>
                    ) : currentScreen === "select_pant_fabric" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Fabric & Styles</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Fabric Code *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, fabricCode: e.target.value });
                                                }}
                                                value={selectedProduct?.fabricCode}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                {modelsAndFabrics?.clothing?.fabrics?.map((code, index) => {
                                                    return (
                                                        <option key={index} value={code}>
                                                            {code}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Fabric Color *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, fabricColor: e.target.value });
                                                }}
                                                value={selectedProduct?.fabricColor}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="00 – WHITE">00 – WHITE</option>
                                                <option value="01 – IVORY">01 – IVORY</option>
                                                <option value="02 – SAND">02 – SAND</option>
                                                <option value="03 – TAUPE">03 – TAUPE</option>
                                                <option value="04 – CAMEL">04 – CAMEL</option>
                                                <option value="05 - BROWN">05 - BROWN</option>
                                                <option value="06 – GREY">06 – GREY</option>
                                                <option value="07 – GREEN">07 – GREEN</option>
                                                <option value="08 – LT BLUE">08 – LT BLUE</option>
                                                <option value="11 – NAVY">11 – NAVY</option>
                                                <option value="13 – MED GREY">13 – MED GREY</option>
                                                <option value="14 – LT GREY">14 – LT GREY</option>
                                                <option value="15 – DRK GREY">15 – DRK GREY</option>
                                                <option value="18 – RED">18 – RED</option>
                                                <option value="22 - BLACK">22 - BLACK</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Testing Size *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={selectedProduct?.testingSize}
                                                onChange={(e) => {
                                                    setSelectedProduct({ ...selectedProduct, testingSize: e.target.value });
                                                }}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                                <option value="32">32</option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="36">36</option>
                                                <option value="38">38</option>
                                                <option value="40">40</option>
                                                <option value="42">42</option>
                                                <option value="44">44</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">PRICE $ USA</p>

                                            <input
                                                type="text"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none cursor-not-allowed"
                                                value={loading ? "Loading..." : error ? "Item Unavailable" : prices?.usaPrice || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">PRICE $ CA</p>

                                            <input
                                                type="text"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none cursor-not-allowed"
                                                value={loading ? "Loading..." : error ? "Item Unavailable" : prices?.caPrice || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("select_pant");
                                                scrollToTop();

                                                setSelectedProduct({
                                                    model: "",
                                                    fabricCode: "",
                                                    fabricColor: "",
                                                    testingSize: "",
                                                    liningStyle: "",
                                                    buttonStyle: "",
                                                    buttonColor: "",
                                                    handmadeButtonholes: "",
                                                });

                                                setPrices(null);
                                                setError(null);
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (!selectedProduct?.fabricCode || !selectedProduct?.fabricCode || !selectedProduct?.testingSize) {
                                                    showPopup("Warning", "Please fill all the required fields first before proceeding");
                                                } else {
                                                    if (isCartFull("pant")) {
                                                        showPopup(
                                                            "Warning",
                                                            "You already have 4 pants in your cart. Please remove one to add a new item."
                                                        );
                                                        return;
                                                    }

                                                    var newCartItems = cartItems;
                                                    newCartItems.push(selectedProduct);
                                                    setCartItems(newCartItems);

                                                    setSelectedProduct({
                                                        model: "",
                                                        fabricCode: "",
                                                        fabricColor: "",
                                                        testingSize: "",
                                                        liningStyle: "",
                                                        buttonStyle: "",
                                                        buttonColor: "",
                                                        handmadeButtonholes: "",
                                                    });

                                                    setCurrentScreen("choose_product");
                                                    scrollToTop();

                                                    showPopup("Success", "Product has been successfully added to cart");
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "select_vest" ? (
                        <div className="relative flex flex-col max-w-6xl w-full mx-auto px-4 my-12 pt-4 items-center justify-center">
                            <div className="flex items-center justify-center flex-wrap w-full gap-16 sm:px-6 lg:px-8 font-rouben-regular">
                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GILQ01_Image, model: "Q75GILQ01" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GILQ01_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GILQ01</p>
                                    <p className="text-center text-lg">Single breasted, 5 button closing, welted pockets</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75GILQ02_Image, model: "Q75GILQ02" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75GILQ02_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75GILQ02</p>
                                    <p className="text-center text-lg min-h-[56px]">Double breasted, shawl lapel</p>
                                </div>
                            </div>

                            <div className="mt-16 md:mt-32">
                                <button
                                    className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("choose_product");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase">Go Back</span>
                                </button>
                            </div>
                        </div>
                    ) : currentScreen === "select_tuxedo" ? (
                        <div className="relative flex flex-col max-w-6xl w-full mx-auto px-4 my-12 pt-4 items-center justify-center">
                            <div className="flex items-center justify-center flex-wrap w-full gap-16 sm:px-6 lg:px-8 font-rouben-regular">
                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75ABUQ01_Image, model: "Q75ABUQ01" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75ABUQ01_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75ABUQ01</p>
                                    <p className="text-center text-lg">Single Breasted, 1 button closure, shawl collar, flat front, no piping</p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75ABUQ02_Image, model: "Q75ABUQ02" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75ABUQ02_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75ABUQ02</p>
                                    <p className="text-center text-lg min-h-[56px]">
                                        Single Breasted, 2 button closure, peak lapel, flat front, no piping
                                    </p>
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center max-w-[280px] cursor-pointer"
                                    onClick={() => {
                                        setSelectedProduct({ ...selectedProduct, productImage: Q75ABUQ03_Image, model: "Q75ABUQ03" });
                                        setCurrentScreen("select_jacket_vest_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <Image alt="" src={Q75ABUQ03_Image} className="w-[150px] md:w-[220px]" />
                                    <p className="my-2 text-xl font-rouben-semi-bold">Q75ABUQ03</p>
                                    <p className="text-center text-lg min-h-[56px]">
                                        Double Breasted, 6 button closure, peak lapel, flat front, no piping
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 md:mt-32">
                                <button
                                    className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("choose_product");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase">Go Back</span>
                                </button>
                            </div>
                        </div>
                    ) : currentScreen === "attach_photos" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Attach Pictures</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Attach pictures of front, back, side - in compliance with the privacy policy avoid picturing the customer’s face
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div
                                        className={`flex flex-col items-center justify-center border-2 border-[#6c6c6e] border-dashed rounded-lg p-8 cursor-pointer transition-all`}
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <Upload className="w-12 h-12 text-[#6c6c6e] mb-4" />
                                        <p className="text-[#959595] text-center">
                                            Click to upload photographs
                                            <br />
                                            <span className="text-sm text-[#959595]/80">(Max 10 photos, Max size 10MB)</span>
                                        </p>
                                        <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleFileUpload} />
                                    </div>

                                    {isUploading && (
                                        <div className="flex items-center justify-center py-4">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6c6c6e]"></div>
                                        </div>
                                    )}

                                    {attachedPhotos?.length > 0 && (
                                        <div className="mt-6">
                                            <h3 className="text-[#313131] mb-4 font-buenos-semi-bold">Attached Photos ({attachedPhotos?.length})</h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                {attachedPhotos?.map((photo, index) => {
                                                    const fileType = photo.file?.type || "";
                                                    const isImage = fileType.startsWith("image/");
                                                    const isVideo = fileType.startsWith("video/");

                                                    return (
                                                        <div key={index} className="relative group">
                                                            {isImage ? (
                                                                <img
                                                                    src={photo.url}
                                                                    alt={`Item ${index + 1}`}
                                                                    className="w-full h-32 object-cover rounded-md border border-[#6c6c6e]"
                                                                />
                                                            ) : isVideo ? (
                                                                <div className="w-full h-32 rounded-md border border-[#6c6c6e] overflow-hidden relative">
                                                                    <video
                                                                        src={photo.url}
                                                                        className="w-full h-full object-cover"
                                                                        controls={false}
                                                                        muted
                                                                        autoPlay
                                                                        loop
                                                                        playsInline
                                                                    />
                                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                                        <PlayCircle className="w-12 h-12 text-white opacity-70" />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="w-full h-32 flex flex-col items-center justify-center bg-gray-100 rounded-md border border-[#6c6c6e]">
                                                                    <FileIcon className="w-12 h-12 text-gray-500" />
                                                                    <span className="mt-2 text-xs text-center text-gray-700 truncate w-full px-2">
                                                                        {photo.name}
                                                                    </span>
                                                                </div>
                                                            )}
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    removePhoto(index);
                                                                }}
                                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("choose_product");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("additional_notes");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "additional_notes" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Confirm Order</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex-1">
                                        <p className="text-[#313131] mb-2">Order No. *</p>
                                        <input
                                            type="text"
                                            placeholder="Order #"
                                            className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                            onChange={(e) => {
                                                setForm({
                                                    ...form,
                                                    orderDetails: {
                                                        ...form?.orderDetails,
                                                        orderNumber: e.target.value,
                                                    },
                                                });
                                            }}
                                            value={form?.orderDetails?.orderNumber}
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Additional Notes</p>

                                            <textarea
                                                rows={6}
                                                placeholder="Write Notes Here..."
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={form?.additionalNotes}
                                                onChange={(e) => {
                                                    setForm({ ...form, additionalNotes: e.target.value });
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className={`bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 ${
                                                isSpinner ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                            }`}
                                            disabled={isSpinner}
                                            onClick={() => {
                                                setCurrentScreen("attach_photos");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                <>
                                                    <ArrowLeft className="mr-4 w-5 h-5" />
                                                    Back
                                                </>
                                            </span>
                                        </button>

                                        <button
                                            className={`bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary p-4 px-6 transition-all duration-300 ${
                                                isSpinner ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                            }`}
                                            onClick={() => {
                                                if (!form?.orderDetails?.orderNumber) {
                                                    showPopup("Warning", "Please enter order number first before proceeding");
                                                    return;
                                                }

                                                confirmOrder();
                                            }}
                                            disabled={isSpinner}
                                            aria-busy={isSpinner}
                                            aria-label={isSpinner ? "Generating preview" : "Preview"}
                                        >
                                            <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                {isSpinner ? (
                                                    <>
                                                        <SmallSpinner marginRight="mr-4" />
                                                        Confirm
                                                    </>
                                                ) : (
                                                    <>
                                                        <CircleCheckBig className="mr-4 w-5 h-5" />
                                                        Confirm
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : orderType === "knitwear" ? (
                <>
                    {currentScreen === "order_information" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Order Information</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div
                                            className="flex flex-col flex-1 mb-4 md:mb-0 cursor-pointer"
                                            onClick={() => dateInputRef.current?.showPicker?.()}
                                        >
                                            <p className="text-[#313131] mb-2">Date *</p>

                                            <div className="relative flex-1">
                                                <input
                                                    ref={dateInputRef}
                                                    type="date"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] appearance-none outline-none cursor-pointer"
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            orderDetails: {
                                                                ...knitwearForm?.orderDetails,
                                                                date: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={knitwearForm?.orderDetails?.date}
                                                />

                                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#858B8E]">
                                                    <Calendar className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Store *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearForm({
                                                        ...knitwearForm,
                                                        orderDetails: {
                                                            ...knitwearForm?.orderDetails,
                                                            store: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={knitwearForm?.orderDetails?.store}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="Madison Ave">Madison Ave</option>
                                                <option value="Greenwich">Greenwich</option>
                                                <option value="Palm Beach">Palm Beach</option>
                                                <option value="Bal Harbour">Bal Harbour</option>
                                                <option value="Las Vegas">Las Vegas</option>
                                                <option value="South Coast Plz">South Coast Plz</option>
                                                <option value="Beverly Hills">Beverly Hills</option>
                                                <option value="Toronto">Toronto</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Associate *</p>
                                            <input
                                                type="text"
                                                placeholder="Associate"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearForm({
                                                        ...knitwearForm,
                                                        orderDetails: {
                                                            ...knitwearForm?.orderDetails,
                                                            associate: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={knitwearForm?.orderDetails?.associate}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Client Name *</p>
                                            <input
                                                type="text"
                                                placeholder="Client Name"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearForm({
                                                        ...knitwearForm,
                                                        orderDetails: {
                                                            ...knitwearForm?.orderDetails,
                                                            clientName: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={knitwearForm?.orderDetails?.clientName}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div
                                            className="flex flex-col flex-1 mb-4 md:mb-0 cursor-pointer"
                                            onClick={() => promiseDateInputRef.current?.showPicker?.()}
                                        >
                                            <p className="text-[#313131] mb-2">Promise Date *</p>

                                            <div className="relative flex-1">
                                                <input
                                                    ref={promiseDateInputRef}
                                                    type="date"
                                                    className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] appearance-none outline-none cursor-pointer"
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            orderDetails: {
                                                                ...knitwearForm?.orderDetails,
                                                                promiseDate: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                    value={knitwearForm?.orderDetails?.promiseDate}
                                                />

                                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#858B8E]">
                                                    <Calendar className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 justify-end mt-5">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("select_order_type");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                const isValid = validateOrderDetails();

                                                if (isValid) {
                                                    setCurrentScreen("monogram");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full font-rouben-semi-bold mt-12">
                                <p
                                    className="text-primary text-[15px] cursor-pointer hover:underline"
                                    onClick={() => {
                                        setUploadDataModal(true);
                                    }}
                                >
                                    Click here to upload/update pricing data for knitwear
                                </p>
                            </div>
                        </div>
                    ) : currentScreen === "monogram" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Monogram</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Monogram? *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearForm({
                                                        ...knitwearForm,
                                                        monogram: {
                                                            ...knitwearForm?.monogram,
                                                            required: e.target.value,
                                                        },
                                                    });
                                                }}
                                                value={knitwearForm?.monogram?.required}
                                            >
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    {knitwearForm?.monogram?.required === "Yes" && (
                                        <>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                                <div className="flex-1 mb-4 md:mb-0">
                                                    <p className="text-[#313131] mb-2">Monogram Text *</p>
                                                    <input
                                                        type="text"
                                                        placeholder="Monogram Text"
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setKnitwearForm({
                                                                ...knitwearForm,
                                                                monogram: {
                                                                    ...knitwearForm?.monogram,
                                                                    text: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={knitwearForm?.monogram?.text}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                                <div className="flex-1 mb-4 md:mb-0">
                                                    <p className="text-[#313131] mb-2">Monogram Location *</p>
                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setKnitwearForm({
                                                                ...knitwearForm,
                                                                monogram: {
                                                                    ...knitwearForm?.monogram,
                                                                    location: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={knitwearForm?.monogram?.location}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="Bottom">Bottom</option>
                                                        <option value="Wrist">Wrist</option>
                                                    </select>
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-[#313131] mb-2">Monogram Side *</p>

                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setKnitwearForm({
                                                                ...knitwearForm,
                                                                monogram: {
                                                                    ...knitwearForm?.monogram,
                                                                    side: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={knitwearForm?.monogram?.side}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="Left">Left</option>
                                                        <option value="Right">Right</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                                <div className="flex-1 mb-4 md:mb-0">
                                                    <p className="text-[#313131] mb-2">Monogram Color *</p>

                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setKnitwearForm({
                                                                ...knitwearForm,
                                                                monogram: {
                                                                    ...knitwearForm?.monogram,
                                                                    color: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={knitwearForm?.monogram?.color}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="PANNA">PANNA</option>
                                                        <option value="SABBIA">SABBIA</option>
                                                        <option value="GRIGIO CHIARCO">GRIGIO CHIARCO</option>
                                                        <option value="GRIGIO SCURO">GRIGIO SCURO</option>
                                                    </select>
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-[#313131] mb-2">Monogram Font *</p>

                                                    <select
                                                        className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                        onChange={(e) => {
                                                            setKnitwearForm({
                                                                ...knitwearForm,
                                                                monogram: {
                                                                    ...knitwearForm?.monogram,
                                                                    font: e.target.value,
                                                                },
                                                            });
                                                        }}
                                                        value={knitwearForm?.monogram?.font}
                                                    >
                                                        <option value="" selected disabled>
                                                            Please Select
                                                        </option>

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("order_information");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                const isValid = validateMonogramDetails();

                                                if (isValid) {
                                                    setCurrentScreen("knitwear_measurements");
                                                    scrollToTop();
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "knitwear_measurements" ? (
                        <div className="relative flex flex-col max-w-4xl w-full mx-auto py-12 px-4 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Measurements</h1>

                            <div className="grid md:grid-cols-3 divide-x divide-y divide-black mt-2 max-w-[1100px] mx-auto">
                                <div className="flex flex-col p-2 px-4 justify-between border-l border-t border-b-0 md:border-b">
                                    <div className="flex flex-col">
                                        <div className="flex items-start mb-4 gap-2 text-xs">
                                            <p>A</p>
                                            <p>
                                                Sholder width <br /> <span className="text-[10px]">(lying on table)</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-1.png`} className="w-[120px]" />
                                        <div className="flex flex-col text-xs">
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mb-5">Cm</p>
                                                <p className="m-0 p-0 border-b border-dashed border-gray-500 text-center"></p>
                                            </div>
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mt-5 mb-2">+ / -</p>
                                                <input
                                                    className="text-[10px] m-0 p-0 border-b border-dashed border-gray-500 text-center outline-none"
                                                    value={knitwearForm?.measurements?.shoulderWidth}
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            measurements: { ...knitwearForm?.measurements, shoulderWidth: e.target.value },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 px-4 justify-between border-t border-l md:border-l-0 border-b-0 md:border-b">
                                    <div className="flex flex-col">
                                        <div className="flex items-start mb-4 gap-2 text-xs">
                                            <p>B</p>
                                            <p>Body length</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-2.png`} className="w-[120px]" />
                                        <div className="flex flex-col text-xs">
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mb-5">Cm</p>
                                                <p className="m-0 p-0 border-b border-dashed border-gray-500 text-center"></p>
                                            </div>
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mt-5 mb-2">+ / -</p>
                                                <input
                                                    className="text-[10px] m-0 p-0 border-b border-dashed border-gray-500 text-center outline-none"
                                                    value={knitwearForm?.measurements?.bodyLength}
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            measurements: { ...knitwearForm?.measurements, bodyLength: e.target.value },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 px-4 justify-between border-t border-l md:border-l-0">
                                    <div className="flex flex-col">
                                        <div className="flex items-start mb-4 gap-2 text-xs">
                                            <p>C</p>
                                            <p>Sleeve length</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-3.png`} className="w-[120px]" />
                                        <div className="flex flex-col text-xs">
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mb-5">Cm</p>
                                                <p className="m-0 p-0 border-b border-dashed border-gray-500 text-center"></p>
                                            </div>
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mt-5 mb-2">+ / -</p>
                                                <input
                                                    className="text-[10px] m-0 p-0 border-b border-dashed border-gray-500 text-center outline-none"
                                                    value={knitwearForm?.measurements?.sleeveLength}
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            measurements: { ...knitwearForm?.measurements, sleeveLength: e.target.value },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 px-4 justify-between border-l">
                                    <div className="flex flex-col">
                                        <div className="flex items-start mb-4 gap-2 text-xs">
                                            <p>D</p>
                                            <p>
                                                Chest measurement lying flat on the table <span className="text-[10px]">(armhole intersection)</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-4.png`} className="w-[120px]" />
                                        <div className="flex flex-col text-xs">
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mb-5">Cm</p>
                                                <p className="m-0 p-0 border-b border-dashed border-gray-500 text-center"></p>
                                            </div>
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mt-5 mb-2">+ / -</p>
                                                <input
                                                    className="text-[10px] m-0 p-0 border-b border-dashed border-gray-500 text-center outline-none"
                                                    value={knitwearForm?.measurements?.chestMeasurement}
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            measurements: { ...knitwearForm?.measurements, chestMeasurement: e.target.value },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 px-4 justify-between border-l md:border-l-0">
                                    <div className="flex flex-col">
                                        <div className="flex items-start mb-4 gap-2 text-xs">
                                            <p>E</p>
                                            <p>
                                                Half waist <br /> <span className="text-[10px]">(20 cm under the arm)</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-5.png`} className="w-[120px]" />
                                        <div className="flex flex-col text-xs">
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mb-5">Cm</p>
                                                <p className="m-0 p-0 border-b border-dashed border-gray-500 text-center"></p>
                                            </div>
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mt-5 mb-2">+ / -</p>
                                                <input
                                                    className="text-[10px] m-0 p-0 border-b border-dashed border-gray-500 text-center outline-none"
                                                    value={knitwearForm?.measurements?.halfWaist}
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            measurements: { ...knitwearForm?.measurements, halfWaist: e.target.value },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 px-4 justify-between border-b border-r border-l md:border-l-0">
                                    <div className="flex flex-col">
                                        <div className="flex items-start mb-4 gap-2 text-xs">
                                            <p>6</p>
                                            <p>
                                                Muscle circumference (total) <br /> <span className="text-[10px]">(from 2 cm below the arm)</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-6.png`} className="w-[120px]" />
                                        <div className="flex flex-col text-xs">
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mb-5">Cm</p>
                                                <p className="m-0 p-0 border-b border-dashed border-gray-500 text-center"></p>
                                            </div>
                                            <div className="flex flex-col w-[70px]">
                                                <p className="text-[10px] mt-5 mb-2">+ / -</p>
                                                <input
                                                    className="text-[10px] m-0 p-0 border-b border-dashed border-gray-500 text-center outline-none"
                                                    value={knitwearForm?.measurements?.muscleCircumference}
                                                    onChange={(e) => {
                                                        setKnitwearForm({
                                                            ...knitwearForm,
                                                            measurements: { ...knitwearForm?.measurements, muscleCircumference: e.target.value },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-5 gap-2">
                                <button
                                    className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setCurrentScreen("monogram");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase">Back</span>
                                </button>

                                <button
                                    className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        const isValid = validateMonogramDetails();

                                        if (isValid) {
                                            setCurrentScreen("add_knitwear_product");
                                            scrollToTop();
                                        }
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase">Continue</span>
                                </button>
                            </div>
                        </div>
                    ) : currentScreen === "add_knitwear_product" ? (
                        <div className="relative flex flex-col max-w-5xl w-full mx-auto px-4 py-12 pt-4 h-[calc(100vh-105px)] items-center justify-center">
                            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 sm:px-6 lg:px-8">
                                <button
                                    className="bg-gradient-to-tr w-[350px] from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                    onClick={() => {
                                        setKnitwearProduct({ ...knitwearProduct, productImage: knitwear_Image });
                                        setCurrentScreen("select_knitwear_fabric");
                                        scrollToTop();
                                    }}
                                >
                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                        <Plus className="mr-2 w-5 h-5" /> Add Knitwear Item
                                    </span>
                                </button>
                            </div>

                            <div className="absolute bottom-12">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                        onClick={() => {
                                            setCurrentScreen("knitwear_measurements");
                                            scrollToTop();
                                        }}
                                    >
                                        <span className="font-rouben-semi-bold uppercase">Go Back</span>
                                    </button>

                                    <button
                                        className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                        onClick={() => {
                                            if (cartItems?.length === 0) {
                                                showPopup("Warning", "Please add at least one item to your cart before proceeding");
                                            } else {
                                                setCurrentScreen("attach_photos");
                                                scrollToTop();
                                            }
                                        }}
                                    >
                                        <span className="font-rouben-semi-bold uppercase">Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "select_knitwear_fabric" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Model & Fabric Details</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Model *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, model: e.target.value });
                                                }}
                                                value={knitwearProduct?.model}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                {modelsAndFabrics?.knitwear?.models?.map((model, index) => {
                                                    return (
                                                        <option key={index} value={model}>
                                                            {model}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Fabric Code *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, fabricCode: e.target.value });
                                                }}
                                                value={knitwearProduct?.fabricCode}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                {modelsAndFabrics?.knitwear?.fabrics?.map((code, index) => {
                                                    return (
                                                        <option key={index} value={code}>
                                                            {code}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Fabric Color *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, fabricColor: e.target.value });
                                                }}
                                                value={knitwearProduct?.fabricColor}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                {knitwearColors?.map((color, index) => {
                                                    return (
                                                        <option key={index} value={color}>
                                                            {color}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Tipping *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, tipping: e.target.value });
                                                }}
                                                value={knitwearProduct?.tipping}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="N/A​">N/A​</option>
                                                <option value="22168">22168</option>
                                                <option value="22415">22415</option>
                                                <option value="21527">21527</option>
                                                <option value="22673">22673</option>
                                                <option value="22787">22787</option>
                                                <option value="44447">44447</option>
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Testing Size *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, testingSize: e.target.value });
                                                }}
                                                value={knitwearProduct?.testingSize}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="2XL">2XL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Button *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, buttonStyle: e.target.value });
                                                }}
                                                value={knitwearProduct?.buttonStyle}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="ART 277450">ART 277450</option>
                                                <option value="ART TRC6882LU​">ART TRC6882LU​</option>
                                                <option value="ART TRC6882LU​">ART 267755</option>
                                                <option value="ART TRC6882LU​">ART 270198</option>
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-[#313131] mb-2">Button Color *</p>

                                            <select
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                onChange={(e) => {
                                                    setKnitwearProduct({ ...knitwearProduct, buttonColor: e.target.value });
                                                }}
                                                value={knitwearProduct?.buttonColor}
                                            >
                                                <option value="" selected disabled>
                                                    Please Select
                                                </option>

                                                <option value="010">010</option>
                                                <option value="VRC30">VRC30</option>
                                                <option value="CDP4DS">CDP4DS</option>
                                                <option value="10TC">10TC</option>
                                                <option value="NAT">NAT</option>
                                                <option value="BCO">BCO</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">PRICE $ USA</p>

                                            <input
                                                type="text"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none cursor-not-allowed"
                                                value={loading ? "Loading..." : error ? "Item Unavailable" : prices?.usaPrice || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">PRICE $ CA</p>

                                            <input
                                                type="text"
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none cursor-not-allowed"
                                                value={loading ? "Loading..." : error ? "Item Unavailable" : prices?.caPrice || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("add_knitwear_product");
                                                scrollToTop();

                                                setKnitwearProduct({
                                                    productImage: "",
                                                    model: "",
                                                    fabricCode: "",
                                                    fabricColor: "",
                                                    tipping: "",
                                                    testingSize: "",
                                                    buttonStyle: "",
                                                    buttonColor: "",
                                                });

                                                setPrices(null);
                                                setError(null);
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                if (
                                                    !knitwearProduct?.model ||
                                                    !knitwearProduct?.fabricCode ||
                                                    !knitwearProduct?.fabricCode ||
                                                    !knitwearProduct?.tipping ||
                                                    !knitwearProduct?.testingSize ||
                                                    !knitwearProduct?.buttonStyle ||
                                                    !knitwearProduct?.buttonColor
                                                ) {
                                                    showPopup("Warning", "Please fill all the required fields first before proceeding");
                                                } else {
                                                    if (cartItems?.length === 3) {
                                                        showPopup(
                                                            "Warning",
                                                            "You already have 3 items in your cart. Please remove one to add a new item."
                                                        );
                                                        return;
                                                    }

                                                    var newCartItems = cartItems;
                                                    newCartItems.push(knitwearProduct);
                                                    setCartItems(newCartItems);

                                                    setKnitwearProduct({
                                                        model: "",
                                                        fabricCode: "",
                                                        fabricColor: "",
                                                        testingSize: "",
                                                        tipping: "",
                                                        buttonStyle: "",
                                                        buttonColor: "",
                                                    });

                                                    setCurrentScreen("add_knitwear_product");
                                                    scrollToTop();

                                                    showPopup("Success", "Product has been successfully added to cart");
                                                }
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "attach_photos" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Attach Pictures</h1>

                            <p className="text-base md:text-lg font-rouben-regular text-[#262626] w-[800px] text-center max-w-full md:mb-8">
                                Attach pictures of front, back, side - in compliance with the privacy policy avoid picturing the customer’s face
                            </p>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 sm:px-6 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div
                                        className={`flex flex-col items-center justify-center border-2 border-[#6c6c6e] border-dashed rounded-lg p-8 cursor-pointer transition-all`}
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <Upload className="w-12 h-12 text-[#6c6c6e] mb-4" />
                                        <p className="text-[#959595] text-center">
                                            Click to upload photographs
                                            <br />
                                            <span className="text-sm text-[#959595]/80">(Max 10 photos, Max size 10MB)</span>
                                        </p>
                                        <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleFileUpload} />
                                    </div>

                                    {isUploading && (
                                        <div className="flex items-center justify-center py-4">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6c6c6e]"></div>
                                        </div>
                                    )}

                                    {attachedPhotos?.length > 0 && (
                                        <div className="mt-6">
                                            <h3 className="text-[#313131] mb-4 font-buenos-semi-bold">Attached Photos ({attachedPhotos?.length})</h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                {attachedPhotos?.map((photo, index) => {
                                                    const fileType = photo.file?.type || "";
                                                    const isImage = fileType.startsWith("image/");
                                                    const isVideo = fileType.startsWith("video/");

                                                    return (
                                                        <div key={index} className="relative group">
                                                            {isImage ? (
                                                                <img
                                                                    src={photo.url}
                                                                    alt={`Item ${index + 1}`}
                                                                    className="w-full h-32 object-cover rounded-md border border-[#6c6c6e]"
                                                                />
                                                            ) : isVideo ? (
                                                                <div className="w-full h-32 rounded-md border border-[#6c6c6e] overflow-hidden relative">
                                                                    <video
                                                                        src={photo.url}
                                                                        className="w-full h-full object-cover"
                                                                        controls={false}
                                                                        muted
                                                                        autoPlay
                                                                        loop
                                                                        playsInline
                                                                    />
                                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                                        <PlayCircle className="w-12 h-12 text-white opacity-70" />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="w-full h-32 flex flex-col items-center justify-center bg-gray-100 rounded-md border border-[#6c6c6e]">
                                                                    <FileIcon className="w-12 h-12 text-gray-500" />
                                                                    <span className="mt-2 text-xs text-center text-gray-700 truncate w-full px-2">
                                                                        {photo.name}
                                                                    </span>
                                                                </div>
                                                            )}
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    removePhoto(index);
                                                                }}
                                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className="bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("add_knitwear_product");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Back</span>
                                        </button>

                                        <button
                                            className="bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 hover:opacity-95 cursor-pointer"
                                            onClick={() => {
                                                setCurrentScreen("additional_notes");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase">Continue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : currentScreen === "additional_notes" ? (
                        <div className="relative flex flex-col max-w-3xl w-full mx-auto py-12 pt-4">
                            <h1 className="text-3xl md:text-4xl font-rouben-bold text-[#313131] text-center mt-12 mb-8">Confirm Order</h1>

                            <div className="flex flex-col 4lg:flex-row 4lg:space-x-12 px-4 lg:px-8">
                                <div className="flex-1 flex flex-col space-y-4 mt-12 4lg:mt-0 font-rouben-regular">
                                    <div className="flex-1">
                                        <p className="text-[#313131] mb-2">Order No. *</p>
                                        <input
                                            type="text"
                                            placeholder="Order #"
                                            className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                            onChange={(e) => {
                                                setKnitwearForm({
                                                    ...knitwearForm,
                                                    orderDetails: {
                                                        ...knitwearForm?.orderDetails,
                                                        orderNumber: e.target.value,
                                                    },
                                                });
                                            }}
                                            value={knitwearForm?.orderDetails?.orderNumber}
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3">
                                        <div className="flex-1 mb-4 md:mb-0">
                                            <p className="text-[#313131] mb-2">Additional Notes</p>

                                            <textarea
                                                rows={6}
                                                placeholder="Write Notes Here..."
                                                className="flex-1 w-full bg-white border border-gray-200 custom-shadow p-5 rounded-[4px] text-[#5C6469] outline-none"
                                                value={knitwearForm?.additionalNotes}
                                                onChange={(e) => {
                                                    setKnitwearForm({ ...knitwearForm, additionalNotes: e.target.value });
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end mt-5 gap-2">
                                        <button
                                            className={`bg-[#98A1AE] text-white text-sm border border-[#98A1AE] tracking-wide font-mulish-regular p-4 px-6 transition-all duration-300 ${
                                                isSpinner ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                            }`}
                                            disabled={isSpinner}
                                            onClick={() => {
                                                setCurrentScreen("attach_photos");
                                                scrollToTop();
                                            }}
                                        >
                                            <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                <>
                                                    <ArrowLeft className="mr-4 w-5 h-5" />
                                                    Back
                                                </>
                                            </span>
                                        </button>

                                        <button
                                            className={`bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary p-4 px-6 transition-all duration-300 ${
                                                isSpinner ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                            }`}
                                            onClick={() => {
                                                if (!knitwearForm?.orderDetails?.orderNumber) {
                                                    showPopup("Warning", "Please enter order number first before proceeding");
                                                    return;
                                                }

                                                confirmOrder();
                                            }}
                                            disabled={isSpinner}
                                            aria-busy={isSpinner}
                                            aria-label={isSpinner ? "Generating preview" : "Preview"}
                                        >
                                            <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                {isSpinner ? (
                                                    <>
                                                        <SmallSpinner marginRight="mr-4" />
                                                        Confirm
                                                    </>
                                                ) : (
                                                    <>
                                                        <CircleCheckBig className="mr-4 w-5 h-5" />
                                                        Confirm
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : null}

            {/* Upload pricing data modal */}
            <UploadDataModal uploadDataModal={uploadDataModal} setUploadDataModal={setUploadDataModal} orderType={orderType} />

            <Popup type={popupDetail?.type} text={popupDetail?.text} isPopup={isPopup} />
        </>
    );
};

export default Home;
