import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { Upload } from "lucide-react";
import SmallSpinner from "./SmallSpinner";
import Cookies from "js-cookie";
import axios from "axios";
import configSettings from "../../config";

import Popup from "./Popup";

const UploadDataModal = ({ uploadDataModal, setUploadDataModal }) => {
    const fileInputRef = useRef(null);
    const [attachedFile, setAttachedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.name.endsWith(".csv")) {
            setPopupDetail({
                type: "Warning",
                text: "Please upload a CSV file",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);

            return;
        }

        // Validate file size (10MB max)
        const MAX_FILE_SIZE = 10 * 1024 * 1024;

        if (file.size > MAX_FILE_SIZE) {
            setPopupDetail({
                type: "Warning",
                text: `File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit`,
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);

            return;
        }

        setIsUploading(true);
        setAttachedFile({
            name: file.name,
            file: file,
        });
        setIsUploading(false);
        e.target.value = ""; // Reset input
    };

    const uploadPricingData = async () => {
        if (!attachedFile) {
            setPopupDetail({
                type: "Warning",
                text: "Please select a CSV file first",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);

            return;
        }

        setIsSpinner(true);

        try {
            const formData = new FormData();
            formData.append("file", attachedFile.file);

            await axios.post(configSettings?.serverUrl + "/uploadPricingData", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setUploadDataModal(false);
            setAttachedFile(null);

            setPopupDetail({
                type: "Success",
                text: "Pricing data has been successfully updated",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);
        } catch (error) {
            setPopupDetail({
                type: "Warning",
                text: error.response.data.error || "Failed to upload pricing data",
            });

            setIsPopup(true);

            setTimeout(function () {
                setIsPopup(false);
            }, 4000);
        } finally {
            setIsSpinner(false);
        }
    };

    const downloadCurrentPricing = () => {
        const csvUrl = `${configSettings?.serverUrl}/public/uploads/pricing_data.csv`;
        const link = document.createElement("a");

        // Set the correct filename you want to appear
        link.download = "current_pricing.csv"; // This will be the downloaded filename

        // For same-origin requests, this will work:
        link.href = csvUrl;

        // For cross-origin or to ensure it works everywhere:
        link.href = `${csvUrl}?download=true&filename=current_pricing.csv`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Transition appear show={uploadDataModal} as={Fragment}>
                <Dialog as="div" className="relative z-[70] font-rouben-regular" onClose={() => setUploadDataModal(false)}>
                    {/* Backdrop with fade transition */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full justify-center text-center items-center p-4">
                            {/* Dialog panel with fade and slight scale transition */}
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg">
                                    {/* Modal header */}
                                    <div className="flex items-center justify-between p-4 px-5 border-b border-gray-200 rounded-t">
                                        <Dialog.Title as="h3" className="text-lg font-rouben-semi-bold text-gray-900">
                                            Update Pricing Data
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            onClick={() => setUploadDataModal(false)}
                                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                        >
                                            <XMarkIcon className="w-5 h-5" />
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    {/* Modal content */}
                                    <div className="p-4 md:p-5 max-h-[80vh] overflow-y-auto">
                                        <div className="space-y-4">
                                            <div
                                                className={`flex flex-col items-center justify-center border-2 border-[#6c6c6e] border-dashed rounded-lg p-8 cursor-pointer transition-all`}
                                                onClick={() => fileInputRef.current.click()}
                                            >
                                                <Upload className="w-12 h-12 text-[#6c6c6e] mb-4" />
                                                <p className="text-[#959595] text-center">
                                                    Click to upload a CSV file
                                                    <br />
                                                    <span className="text-sm text-[#959595]/80">(Max size 10MB)</span>
                                                </p>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    accept=".csv"
                                                    className="hidden"
                                                    onChange={handleFileUpload}
                                                    multiple
                                                />
                                            </div>

                                            {isUploading && (
                                                <div className="flex items-center justify-center py-4">
                                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6c6c6e]"></div>
                                                </div>
                                            )}

                                            {attachedFile && (
                                                <div className="mt-6">
                                                    <h3 className="text-[#313131] mb-4 font-buenos-semi-bold">Attached File</h3>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="relative group">
                                                            <div className="w-full h-32 flex flex-col items-center justify-center bg-gray-100 rounded-md border border-[#6c6c6e]">
                                                                <DocumentIcon className="w-12 h-12 text-gray-500" />
                                                                <span className="mt-2 text-xs text-center text-gray-700 truncate w-full px-2">
                                                                    {attachedFile.name}
                                                                </span>
                                                            </div>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setAttachedFile(null);
                                                                }}
                                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center justify-end">
                                                <button
                                                    className={`bg-gradient-to-tr from-primary to-[#095eb9] text-white text-sm border border-primary p-4 px-6 transition-all duration-300 ${
                                                        isSpinner ? "cursor-not-allowed opacity-90" : "cursor-pointer hover:opacity-95"
                                                    }`}
                                                    onClick={uploadPricingData}
                                                    disabled={isSpinner}
                                                    aria-busy={isSpinner}
                                                    aria-label={isSpinner ? "Generating preview" : "Preview"}
                                                >
                                                    <span className="font-rouben-semi-bold uppercase flex items-center justify-center">
                                                        {isSpinner ? (
                                                            <>
                                                                <SmallSpinner />
                                                            </>
                                                        ) : (
                                                            <>Upload</>
                                                        )}
                                                    </span>
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-center w-full font-rouben-semi-bold mt-6">
                                                <p
                                                    className="text-primary text-[15px] cursor-pointer hover:underline"
                                                    onClick={downloadCurrentPricing}
                                                >
                                                    View Current Pricing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Popup type={popupDetail?.type} text={popupDetail?.text} isPopup={isPopup} />
        </>
    );
};

export default UploadDataModal;
