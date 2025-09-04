export default function KnitwearOutputForm({ form, cartItems }) {
    return (
        <>
            <style>{`
                @font-face {
                    font-family: 'Rouben-regular';
                    src: url('${process.env.NEXT_PUBLIC_BASE_URL}/fonts/rouben-regular.otf') format('opentype');
                    font-weight: normal;
                    font-style: normal;
                }
                #pdf-block {
                    font-family: 'Rouben-regular', sans-serif;
                }
            `}</style>

            <div
                id="knitwear-pdf-block"
                style={{
                    display: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "2rem",
                    paddingTop: 0,
                }}
            >
                {/* Top Header */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                    }}
                >
                    <img
                        alt=""
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}
                        style={{
                            width: "4rem",
                        }}
                    />
                </div>

                {/* Header */}
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.875rem",
                            marginRight: "3rem",
                        }}
                    >
                        <span style={{ marginRight: "12px", marginTop: "10px" }}>NAME + LAST NAME:</span>
                        <span
                            style={{
                                borderBottom: "1px solid black",
                                width: "200px",
                                textAlign: "center",
                                color: "#000000",
                            }}
                        >
                            {form?.orderDetails?.clientName}
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                        <span style={{ marginRight: "12px", marginTop: "10px" }}>DATE:</span>
                        <span
                            style={{
                                borderBottom: "1px solid black",
                                width: "150px",
                                textAlign: "center",
                                color: "#000000",
                            }}
                        >
                            {form?.orderDetails?.date}
                        </span>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1" }}>
                        {/* Headings Row */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderTop: "1px solid",
                                borderBottom: "1px solid",
                                marginTop: "0.5rem",
                                borderColor: "inherit",
                            }}
                        >
                            <div style={{ display: "flex", flex: "1", alignItems: "center", justifyContent: "center", borderRight: "1px solid" }}>
                                <span>MODEL</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                }}
                            >
                                <span>FABRIC</span>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ borderRight: "1px solid", paddingRight: "14px", paddingLeft: "12px" }}>STYLE</span>
                                    <span style={{ paddingRight: "12px", paddingLeft: "12px" }}>COLOR</span>
                                </div>
                            </div>
                            <div
                                style={{ display: "flex", width: "100px", alignItems: "center", justifyContent: "center", borderRight: "1px solid" }}
                            >
                                <span>TEST SIZE</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                }}
                            >
                                <span>BUTTON</span>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ borderRight: "1px solid", paddingRight: "14px", paddingLeft: "12px" }}>STYLE</span>
                                    <span style={{ paddingRight: "12px", paddingLeft: "12px" }}>COLOR</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", width: "150px", alignItems: "center", justifyContent: "center" }}>
                                <span>TIPPING</span>
                            </div>
                        </div>

                        {/* Values Row */}
                        {/* Jacket product 1 */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "32px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        textAlign: "center",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[0]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3px",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        borderRight: "1px solid #000",
                                    }}
                                >
                                    {cartItems[0]?.fabricCode}
                                </span>
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[0]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "100px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[0]?.testingSize}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3px",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        borderRight: "1px solid #000",
                                    }}
                                >
                                    {cartItems[0]?.buttonStyle}
                                </span>
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[0]?.buttonColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "150px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[0]?.tipping}
                                </span>
                            </div>
                        </div>

                        {/* Jacket product 2 */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "32px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        textAlign: "center",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[1]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3px",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        borderRight: "1px solid #000",
                                    }}
                                >
                                    {cartItems[1]?.fabricCode}
                                </span>
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[1]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "100px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[1]?.testingSize}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3px",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        borderRight: "1px solid #000",
                                    }}
                                >
                                    {cartItems[1]?.buttonStyle}
                                </span>
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[1]?.buttonColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "150px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[1]?.tipping}
                                </span>
                            </div>
                        </div>

                        {/* Jacket product 3 */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "32px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        textAlign: "center",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[2]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3px",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        borderRight: "1px solid #000",
                                    }}
                                >
                                    {cartItems[2]?.fabricCode}
                                </span>
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[2]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "100px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[2]?.testingSize}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3px",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        borderRight: "1px solid #000",
                                    }}
                                >
                                    {cartItems[2]?.buttonStyle}
                                </span>
                                <span
                                    style={{
                                        color: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[2]?.buttonColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "150px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {cartItems[2]?.tipping}
                                </span>
                            </div>
                        </div>

                        {/* Headings Row 2 monogram */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "32px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "150px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span>EMBROIDERY</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "200px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span>EMBROIDERY LOCATION</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "200px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span>EMBROIDERY SIDE</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "200px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span>EMBROIDERY TEXT</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span>EMBROIDERY FONT</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span>EMBROIDERY COLOR</span>
                            </div>
                        </div>

                        {/* Monogram values 4 */}
                        <div
                            style={{
                                fontSize: "0.75rem", // text-xs (12px)
                                lineHeight: "1rem", // text-xs line-height
                                display: "flex", // flex
                                borderBottom: "1px solid", // border-b
                                borderColor: "inherit", // default border color
                                height: "32px", // h-[32px]
                            }}
                        >
                            {/* First Column */}
                            <div
                                style={{
                                    display: "flex",
                                    width: "150px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000", // text-green-600
                                        overflow: "hidden", // overflow-hidden
                                        wordBreak: "break-word", // break-words
                                    }}
                                >
                                    {form?.monogram?.required}
                                </span>
                            </div>

                            {/* Second Column */}
                            <div
                                style={{
                                    display: "flex",
                                    width: "200px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.monogram?.location}
                                </span>
                            </div>

                            {/* Third Column */}
                            <div
                                style={{
                                    display: "flex",
                                    width: "200px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.monogram?.side}
                                </span>
                            </div>

                            {/* Fourth Column */}
                            <div
                                style={{
                                    display: "flex",
                                    width: "200px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.monogram?.text}
                                </span>
                            </div>

                            {/* Fifth Column */}
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%", // flex-1
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.monogram?.font}
                                </span>
                            </div>

                            {/* Sixth Column (no right border) */}
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.monogram?.color}
                                </span>
                            </div>
                        </div>

                        {/* General notes */}
                        <div
                            style={{
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "50px",
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                            }}
                        >
                            {/* First Column */}
                            <div
                                style={{
                                    display: "flex",
                                    width: "150px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRight: "1px solid",
                                    borderColor: "inherit",
                                }}
                            >
                                <span>
                                    GENERAL
                                    <br />
                                    NOTES
                                </span>
                            </div>

                            {/* Second Column */}
                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    paddingLeft: "1rem",
                                    borderColor: "inherit",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#000000",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                        fontSize: "0.75rem",
                                        lineHeight: "1rem",
                                    }}
                                >
                                    {form?.additionalNotes}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            width: "350px",
                            borderLeft: "1px solid",
                            borderTop: "1px solid",
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "8px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                minHeight: "33px",
                                maxHeight: "33px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span>STORE</span>
                                <span
                                    style={{
                                        color: "#000000",
                                        marginLeft: "2rem",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.orderDetails?.store}
                                </span>
                            </div>
                        </div>

                        {/* ORDER # */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                minHeight: "32px",
                                maxHeight: "32px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span>ORDER #</span>
                                <span
                                    style={{
                                        color: "#000000",
                                        marginLeft: "2rem",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.orderDetails?.orderNumber}
                                </span>
                            </div>
                        </div>

                        {/* Promise date */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                minHeight: "32px",
                                maxHeight: "32px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span>PROMISE DATE</span>
                                <span
                                    style={{
                                        color: "#000000",
                                        marginLeft: "2rem",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.orderDetails?.promiseDate}
                                </span>
                            </div>
                        </div>

                        {/* SALES PERSON */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                minHeight: "32px",
                                maxHeight: "32px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span>SALES PERSON</span>
                                <span
                                    style={{
                                        color: "#000000",
                                        marginLeft: "2rem",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {form?.orderDetails?.associate}
                                </span>
                            </div>
                        </div>

                        {/* SHIPPING ADDRESS */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                minHeight: "32px",
                                maxHeight: "32px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span>FINAL SHIPPING ADDRESS</span>
                            </div>
                        </div>

                        {/* Empty row with text-sm */}
                        <div
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                display: "flex",
                                minHeight: "32px",
                                maxHeight: "32px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                            }}
                        ></div>

                        {/* Empty row with text-sm */}
                        <div
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                display: "flex",
                                minHeight: "50px",
                                maxHeight: "50px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                            }}
                        ></div>
                    </div>
                </div>

                {/* Jack style images & values */}
                {/* Jack style images & values */}
                {/* Jack style images & values */}
                {/* Jack style images & values */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        borderTop: "1px solid",
                        borderColor: "inherit",
                        marginTop: "0.5rem",
                    }}
                >
                    {/* Column 1 - Jacket Length */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderLeft: "1px solid",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            borderColor: "inherit",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "start", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>A</p>
                                <p>
                                    Sholder width <br /> <span style={{ fontSize: "10px" }}>(lying on table)</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-1.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginBottom: "20px" }}>Cm</p>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginTop: "20px", marginBottom: "20px" }}>+ / -</p>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Sleeve Length */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "start", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>B</p>
                                <p>Body length</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-2.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginBottom: "20px" }}>Cm</p>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginTop: "20px", marginBottom: "20px" }}>+ / -</p>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 - Half-Waist Circumference */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "start", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>C</p>
                                <p>Sleeve length</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-3.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginBottom: "20px" }}>Cm</p>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginTop: "20px", marginBottom: "20px" }}>+ / -</p>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4 - Total Shoulder Width */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "start", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>D</p>
                                <p>
                                    Chest measurement lying flat on the table <span style={{ fontSize: "10px" }}>(armhole intersection)</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-4.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginBottom: "20px" }}>Cm</p>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginTop: "20px", marginBottom: "20px" }}>+ / -</p>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 5 - Shoulder's Difference */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "start", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>E</p>
                                <p>
                                    Half waist <br /> <span style={{ fontSize: "10px" }}>(20 cm under the arm)</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-5.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginBottom: "20px" }}>Cm</p>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginTop: "20px", marginBottom: "20px" }}>+ / -</p>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 6 - Remove Crease Under Collar */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "start", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>6</p>
                                <p>
                                    Muscle circumference (total) <br /> <span style={{ fontSize: "10px" }}>(from 2 cm below the arm)</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/knitwear-6.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginBottom: "20px" }}>Cm</p>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p style={{ fontSize: "10px", marginTop: "20px", marginBottom: "20px" }}>+ / -</p>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
