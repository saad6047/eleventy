import React from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "../../public/animations/input-loading-animation.json";

const SmallSpinner = ({ className = "", width = "w-5", height = "h-5", marginRight, marginTop = "mt-[-8px]" }) => {
    return (
        <div className={`${width} ${height} ${marginRight || ""} ${marginTop} overflow-hidden flex items-center justify-center ${className}`}>
            <Lottie
                animationData={animationData}
                style={{
                    width: "300%",
                    height: "300%",
                    transform: "scale(3)",
                    transformOrigin: "center center",
                }}
            />
        </div>
    );
};

export default SmallSpinner;
