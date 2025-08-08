import Image from "next/image";

import logo from "../../public/images/logo.png";

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

export default function OutputForm() {
    return (
        <div id="pdf-block" className="mx-auto p-8 pt-0 font-rouben-regular">
            {/* Top Header */}
            <div className="flex items-center justify-center mb-4">
                <Image alt="" src={logo} className="w-16" />
            </div>

            {/* Header */}
            <div className="flex">
                <div className="flex items-center text-sm mr-12">
                    <span className="mr-3 mt-[10px]">NAME + LAST NAME:</span>
                    <span className="border-b border-black w-[200px] text-center text-green-600 font-semibold">1</span>
                </div>

                <div className="flex items-center text-sm">
                    <span className="mr-3 mt-[10px]">DATE:</span>
                    <span className="border-b border-black w-[150px] text-center text-green-600 font-semibold">2</span>
                </div>
            </div>

            <div className="flex">
                <div className="flex-1">
                    {/* Headings Row */}
                    <div className="text-xs flex border-y mt-2 divide-x">
                        <div className="flex flex-1 items-center justify-center">
                            <span>STYLE</span>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center">
                            <span>FABRIC</span>
                            <div className="flex items-center justify-center divide-x">
                                <span className="px-3">STYLE</span>
                                <span className="px-3">COLOR</span>
                            </div>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span>
                                TESTING <br /> SIZE
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span>
                                STYLE <br /> LINING
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center">
                            <span>BUTTON</span>
                            <div className="flex items-center justify-center divide-x">
                                <span className="px-3">STYLE</span>
                                <span className="px-3">COLOR</span>
                            </div>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span>
                                HANDMADE <br /> BUTTONHOLES
                            </span>
                        </div>
                    </div>

                    {/* Values Row */}
                    {/* Jacket product 1 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-1</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 1
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 1
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 1</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">001</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-1
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-1
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>
                    </div>

                    {/* Jacket product 2 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-2</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 2
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 2
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 2</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">002</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-2
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-2
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">NO</span>
                        </div>
                    </div>

                    {/* Jacket product 3 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-3</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 3
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 3
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 3</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">003</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-3
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-3
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>
                    </div>

                    {/* Jacket product 4 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-4</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 4
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 4
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 4</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">004</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-4
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-4
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>
                    </div>

                    {/* Headings Row 2 monogram */}
                    <div className="text-xs flex border-y divide-x border-t-0 h-[32px]">
                        <div className="flex w-[150px] items-center justify-center">
                            <span>EMBROIDERY</span>
                        </div>

                        <div className="flex w-[200px] items-center justify-center">
                            <span>EMBROIDERY POSITION</span>
                        </div>
                        <div className="flex w-[200px] items-center justify-center">
                            <span>EMBROIDERY TEXT</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span>FONT</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span>COLOR</span>
                        </div>
                    </div>

                    {/* Monogram values 4 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>

                        <div className="flex w-[200px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">LEFT SIDE</span>
                        </div>

                        <div className="flex w-[200px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">6</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">9</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">8</span>
                        </div>
                    </div>

                    {/* General notes */}
                    <div className="flex border-b divide-x h-[50px] text-xs">
                        <div className="flex w-[150px] items-center justify-center">
                            <span>
                                GENRAL <br /> NOTES
                            </span>
                        </div>

                        <div className="flex flex-1 items-center justify-start pl-4">
                            <span className="text-green-600 break-words overflow-hidden text-xs">GN</span>
                        </div>
                    </div>

                    {/* Attachements */}
                    <div className="text-xs flex border-b divide-x h-[40px]">
                        <div className="flex w-[150px] items-center justify-center text-sm">
                            <span>Attachements</span>
                        </div>

                        <div className="flex flex-1 items-center justify-start pl-4">
                            <span className="text-green-600 text-xs break-words overflow-hidden">
                                ATTACH PICTURE OF: FRONT, BACK, SIDE - IN COMPLIANCE WITH THE PRIVACY POLICY AVOID PICTURING THE CUSTOMER’S FACE
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-[350px] border-l flex flex-col mt-2 border-t divide-y">
                    <div className="text-xs flex min-h-[33px] max-h-[33px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>STORE</span>

                            <span className="text-green-600 ml-8 break-words overflow-hidden">5</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6"></div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>ORDER #</span>

                            <span className="text-green-600 ml-8 break-words overflow-hidden">3</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>PAGE</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>VITERBO’S ORDER NUMBER #</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>PRICING LIST</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>SALES PERSON</span>

                            <span className="text-green-600 ml-8 break-words overflow-hidden">4</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>BOUTIQUE DELIVERY ADDRESS</span>
                        </div>
                    </div>

                    <div className="text-sm flex min-h-[32px] max-h-[32px] pl-6"></div>
                    <div className="text-sm flex min-h-[26px] max-h-[26px] pl-6 border-b"></div>
                </div>
            </div>

            {/* Jack style images & values */}
            <div className="grid grid-cols-6 divide-x divide-y mt-2 border-t">
                <div className="flex flex-col p-2 px-4 border-l">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-2 gap-x-2 text-xs">
                            <p>*1</p>
                            <p>Jacket Length</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={jacketLengthImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 10</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*2</p>
                            <p>Sleeve Length</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={sleeveLengthImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 11</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*3</p>
                            <p>Half-Waist Circumference</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={halfWaistCircumferenceImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 12</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*4</p>
                            <p>Total Shoulder Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={totalShoulderWidthImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 13</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>5</p>
                            <p>Shoulder's Difference</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={shouldersDifferenceImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">Right 15</p>
                                <p className="text-[10px] font-rouben-semi-bold">Less</p>
                            </div>

                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">Left 14</p>
                                <p className="text-[10px] font-rouben-semi-bold">Less</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>6</p>
                            <p>Remove Crease Under Collar</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={removeCreaseUnderCollarImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 16</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4 border-l">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*7</p>
                            <p>Half Armhole Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={halfArmholeWidthImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">
                                    + / - <span className="ml-2">17</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>8</p>
                            <p>Remove Quills</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={removeQuillsImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 18</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>9</p>
                            <p>Curved Reversed</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={curvedReversedImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 19</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>10</p>
                            <p>Take in Collar</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={takeInCollarImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 20</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*11</p>
                            <p className="whitespace-nowrap">Loosen Jackent Front Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={loosenFrontJacketWidthImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 21</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4 border-b border-r">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>12</p>
                            <p>Loosen Chest Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={loosenChestWidthImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-xs">*Fields market with an asterisk must be completed</p>

            <div className="break-after-page"></div>

            {/* page 2 */}
            {/* Top Header */}
            <div className="flex items-center justify-center mb-4">
                <Image alt="" src={logo} className="w-16" />
            </div>

            {/* Header */}
            <div className="flex">
                <div className="flex items-center text-sm mr-12">
                    <span className="mr-3 mt-[10px]">NAME + LAST NAME:</span>
                    <span className="border-b border-black w-[200px] text-center text-green-600 font-semibold">1</span>
                </div>

                <div className="flex items-center text-sm">
                    <span className="mr-3 mt-[10px]">DATE:</span>
                    <span className="border-b border-black w-[150px] text-center text-green-600 font-semibold">2</span>
                </div>
            </div>

            <div className="flex">
                <div className="flex-1">
                    {/* Headings Row */}
                    <div className="text-xs flex border-y mt-2 divide-x">
                        <div className="flex flex-1 items-center justify-center">
                            <span>STYLE</span>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center">
                            <span>FABRIC</span>
                            <div className="flex items-center justify-center divide-x">
                                <span className="px-3">STYLE</span>
                                <span className="px-3">COLOR</span>
                            </div>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span>
                                TESTING <br /> SIZE
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span>
                                STYLE <br /> LINING
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center">
                            <span>BUTTON</span>
                            <div className="flex items-center justify-center divide-x">
                                <span className="px-3">STYLE</span>
                                <span className="px-3">COLOR</span>
                            </div>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span>
                                HANDMADE <br /> BUTTONHOLES
                            </span>
                        </div>
                    </div>

                    {/* Values Row */}
                    {/* Jacket product 1 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-1</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 1
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 1
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 1</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">001</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-1
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-1
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>
                    </div>

                    {/* Jacket product 2 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-2</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 2
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 2
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 2</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">002</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-2
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-2
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">NO</span>
                        </div>
                    </div>

                    {/* Jacket product 3 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-3</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 3
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 3
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 3</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">003</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-3
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-3
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>
                    </div>

                    {/* Jacket product 4 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">JS-4</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[3px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                FC 4
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                C 4
                            </span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">TS 4</span>
                        </div>
                        <div className="flex w-[100px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">004</span>
                        </div>
                        <div className="flex flex-1 items-center justify-center divide-x divide-black h-full gap-[2px]">
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BS-4
                            </span>
                            <span className="text-green-600 flex items-center justify-center h-full text-center w-full break-words overflow-hidden">
                                BC-4
                            </span>
                        </div>
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>
                    </div>

                    {/* Headings Row 2 monogram */}
                    <div className="text-xs flex border-y divide-x border-t-0 h-[32px]">
                        <div className="flex w-[150px] items-center justify-center">
                            <span>EMBROIDERY</span>
                        </div>

                        <div className="flex w-[200px] items-center justify-center">
                            <span>EMBROIDERY POSITION</span>
                        </div>
                        <div className="flex w-[200px] items-center justify-center">
                            <span>EMBROIDERY TEXT</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span>FONT</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span>COLOR</span>
                        </div>
                    </div>

                    {/* Monogram values 4 */}
                    <div className="text-xs flex border-b divide-x h-[32px]">
                        <div className="flex w-[150px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">YES</span>
                        </div>

                        <div className="flex w-[200px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">LEFT SIDE</span>
                        </div>

                        <div className="flex w-[200px] items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">6</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">9</span>
                        </div>

                        <div className="flex flex-1 items-center justify-center">
                            <span className="text-green-600 break-words overflow-hidden">8</span>
                        </div>
                    </div>

                    {/* General notes */}
                    <div className="flex border-b divide-x h-[50px] text-xs">
                        <div className="flex w-[150px] items-center justify-center">
                            <span>
                                GENRAL <br /> NOTES
                            </span>
                        </div>

                        <div className="flex flex-1 items-center justify-start pl-4">
                            <span className="text-green-600 break-words overflow-hidden text-xs">GN</span>
                        </div>
                    </div>

                    {/* Attachements */}
                    <div className="text-xs flex border-b divide-x h-[40px]">
                        <div className="flex w-[150px] items-center justify-center text-sm">
                            <span>Attachements</span>
                        </div>

                        <div className="flex flex-1 items-center justify-start pl-4">
                            <span className="text-green-600 text-xs break-words overflow-hidden">
                                ATTACH PICTURE OF: FRONT, BACK, SIDE - IN COMPLIANCE WITH THE PRIVACY POLICY AVOID PICTURING THE CUSTOMER’S FACE
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-[350px] border-l flex flex-col mt-2 border-t divide-y">
                    <div className="text-xs flex min-h-[33px] max-h-[33px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>STORE</span>

                            <span className="text-green-600 ml-8 break-words overflow-hidden">5</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6"></div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>ORDER #</span>

                            <span className="text-green-600 ml-8 break-words overflow-hidden">3</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>PAGE</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>VITERBO’S ORDER NUMBER #</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>PRICING LIST</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>SALES PERSON</span>

                            <span className="text-green-600 ml-8 break-words overflow-hidden">4</span>
                        </div>
                    </div>

                    <div className="text-xs flex min-h-[32px] max-h-[32px] pl-6">
                        <div className="flex items-center justify-center">
                            <span>BOUTIQUE DELIVERY ADDRESS</span>
                        </div>
                    </div>

                    <div className="text-sm flex min-h-[32px] max-h-[32px] pl-6"></div>
                    <div className="text-sm flex min-h-[26px] max-h-[26px] pl-6 border-b"></div>
                </div>
            </div>

            {/* Jack style images & values */}
            <div className="grid grid-cols-6 divide-x divide-y mt-2 border-t">
                <div className="flex flex-col p-2 px-4 border-l">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-2 gap-x-2 text-xs">
                            <p>*1</p>
                            <p>Jacket Length</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={jacketLengthImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 10</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*2</p>
                            <p>Sleeve Length</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={sleeveLengthImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 11</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*3</p>
                            <p>Half-Waist Circumference</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={halfWaistCircumferenceImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 12</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*4</p>
                            <p>Total Shoulder Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={totalShoulderWidthImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 13</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>5</p>
                            <p>Shoulder's Difference</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={shouldersDifferenceImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">Right 15</p>
                                <p className="text-[10px] font-rouben-semi-bold">Less</p>
                            </div>

                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">Left 14</p>
                                <p className="text-[10px] font-rouben-semi-bold">Less</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>6</p>
                            <p>Remove Crease Under Collar</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={removeCreaseUnderCollarImage} className="w-[70px]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 16</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4 border-l">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*7</p>
                            <p>Half Armhole Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={halfArmholeWidthImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">
                                    + / - <span className="ml-2">17</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>8</p>
                            <p>Remove Quills</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={removeQuillsImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 18</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>9</p>
                            <p>Curved Reversed</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={curvedReversedImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 19</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>10</p>
                            <p>Take in Collar</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={takeInCollarImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 20</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>*11</p>
                            <p className="whitespace-nowrap">Loosen Jackent Front Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={loosenFrontJacketWidthImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 21</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 px-4 border-b border-r">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4 gap-x-2 text-xs">
                            <p>12</p>
                            <p>Loosen Chest Width</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Image alt="" src={loosenChestWidthImage} className="w-[70px] aspect-[3/4.5]" />

                        <div className="flex flex-col gap-y-8 text-xs">
                            <div className="flex flex-col w-[60px]">
                                <p className="border-b border-gray-500 border-dashed text-center">CM 22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-xs">*Fields market with an asterisk must be completed</p>
        </div>
    );
}
