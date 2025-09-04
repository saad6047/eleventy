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

export default function OutputForm({ form, cartItems }) {
    const getJacketsFromCart = () => {
        return cartItems.filter((item) => jacketVestModels.includes(item.model));
    };

    const getPantsFromCart = () => {
        return cartItems.filter((item) => pantModels.includes(item.model));
    };

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
                id="pdf-block"
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
                                <span>STYLE</span>
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
                                    <span style={{ borderRight: "1px solid", paddingRight: "12px", paddingLeft: "12px" }}>STYLE</span>
                                    <span style={{ paddingRight: "12px", paddingLeft: "12px" }}>COLOR</span>
                                </div>
                            </div>
                            <div
                                style={{ display: "flex", width: "100px", alignItems: "center", justifyContent: "center", borderRight: "1px solid" }}
                            >
                                <span>
                                    TESTING <br /> SIZE
                                </span>
                            </div>
                            <div
                                style={{ display: "flex", width: "100px", alignItems: "center", justifyContent: "center", borderRight: "1px solid" }}
                            >
                                <span>
                                    STYLE <br /> LINING
                                </span>
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
                                    <span style={{ borderRight: "1px solid", paddingRight: "12px", paddingLeft: "12px" }}>STYLE</span>
                                    <span style={{ paddingRight: "12px", paddingLeft: "12px" }}>COLOR</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", width: "150px", alignItems: "center", justifyContent: "center" }}>
                                <span>
                                    HANDMADE <br /> BUTTONHOLES
                                </span>
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getJacketsFromCart()[0]?.model}
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
                                    {getJacketsFromCart()[0]?.fabricCode}
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
                                    {getJacketsFromCart()[0]?.fabricColor}
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
                                    {getJacketsFromCart()[0]?.testingSize}
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
                                    {getJacketsFromCart()[0]?.liningStyle}
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
                                    {getJacketsFromCart()[0]?.buttonStyle}
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
                                    {getJacketsFromCart()[0]?.buttonColor}
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
                                    {getJacketsFromCart()[0]?.handmadeButtonholes}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getJacketsFromCart()[1]?.model}
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
                                    {getJacketsFromCart()[1]?.fabricCode}
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
                                    {getJacketsFromCart()[1]?.fabricColor}
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
                                    {getJacketsFromCart()[1]?.testingSize}
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
                                    {getJacketsFromCart()[1]?.liningStyle}
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
                                    {getJacketsFromCart()[1]?.buttonStyle}
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
                                    {getJacketsFromCart()[1]?.buttonColor}
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
                                    {getJacketsFromCart()[1]?.handmadeButtonholes}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getJacketsFromCart()[2]?.model}
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
                                    {getJacketsFromCart()[2]?.fabricCode}
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
                                    {getJacketsFromCart()[2]?.fabricColor}
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
                                    {getJacketsFromCart()[2]?.testingSize}
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
                                    {getJacketsFromCart()[2]?.liningStyle}
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
                                    {getJacketsFromCart()[2]?.buttonStyle}
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
                                    {getJacketsFromCart()[2]?.buttonColor}
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
                                    {getJacketsFromCart()[2]?.handmadeButtonholes}
                                </span>
                            </div>
                        </div>

                        {/* Jacket product 4 */}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getJacketsFromCart()[3]?.model}
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
                                    {getJacketsFromCart()[3]?.fabricCode}
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
                                    {getJacketsFromCart()[3]?.fabricColor}
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
                                    {getJacketsFromCart()[3]?.testingSize}
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
                                    {getJacketsFromCart()[3]?.liningStyle}
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
                                    {getJacketsFromCart()[3]?.buttonStyle}
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
                                    {getJacketsFromCart()[3]?.buttonColor}
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
                                    {getJacketsFromCart()[3]?.handmadeButtonholes}
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
                                <span>EMBROIDERY POSITION</span>
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
                                <span>FONT</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span>COLOR</span>
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
                                    {form?.monogram?.side}
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
                                    {form?.monogram?.text}
                                </span>
                            </div>

                            {/* Fourth Column */}
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

                            {/* Fifth Column (no right border) */}
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

                        {/* Attachements */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "40px",
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
                                    lineHeight: "1.25rem",
                                }}
                            >
                                <span>ATTACHMENTS</span>
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
                                        fontSize: "0.75rem",
                                        lineHeight: "1rem",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    ATTACH PICTURE OF: FRONT, BACK, SIDE - IN COMPLIANCE WITH THE PRIVACY POLICY AVOID PICTURING THE CUSTOMER'S FACE
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

                        {/* Promise date  */}
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
                                <span>PROMISE DATE </span>
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

                        {/* PAGE */}
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
                                <span>PAGE</span>
                            </div>
                        </div>

                        {/* VITERBO'S ORDER NUMBER # */}
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
                                <span>VITERBO'S ORDER NUMBER #</span>
                            </div>
                        </div>

                        {/* PRICING LIST */}
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
                                <span>PRICING LIST</span>
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

                        {/* BOUTIQUE DELIVERY ADDRESS */}
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
                                <span>BOUTIQUE DELIVERY ADDRESS</span>
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

                        {/* Final empty row with different height */}
                        <div
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                display: "flex",
                                minHeight: "26px",
                                maxHeight: "26px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                boxSizing: "border-box",
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>*1</p>
                                <p>Jacket Length</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/jacket-length.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.jacketLength && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.jacketLength}</span>
                                        )}
                                    </p>
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>*2</p>
                                <p>Sleeve Length</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/sleeve-length.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.sleeveLength && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.sleeveLength}</span>
                                        )}
                                    </p>
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>*3</p>
                                <p>Half-Waist Circumference</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/half-waist-circumference.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.halfWaistCircumference && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.halfWaistCircumference}</span>
                                        )}
                                    </p>
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>*4</p>
                                <p>Total Shoulder Width</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/total-shoulder-width.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.totalShoulderWidth && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.totalShoulderWidth}</span>
                                        )}
                                    </p>
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>5</p>
                                <p>Shoulder's Difference</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/shoulder-difference.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p
                                        style={{
                                            margin: 0, // remove default margins
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.shouldersDifference?.rightCmLess && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.shouldersDifference?.rightCmLess}</span>
                                        )}
                                    </p>
                                    <p style={{ fontSize: "10px", marginTop: "4px" }}>Less Right</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.shouldersDifference?.leftCmLess && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.shouldersDifference?.leftCmLess}</span>
                                        )}
                                    </p>
                                    <p style={{ fontSize: "10px", marginTop: "4px" }}>Less Left</p>
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>6</p>
                                <p>Remove Crease Under Collar</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/crease-under-collar.png`} style={{ width: "70px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.removeCreaseUnderCollar && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.removeCreaseUnderCollar}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 7 - Half Armhole Width */}
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
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>*7</p>
                                <p>Half Armhole Width</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/half-armhole-width.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.halfArmholeWidth && (
                                            <span style={{ color: "#000000" }}>
                                                CM + / - <span style={{ marginLeft: "0.5rem" }}>{form?.jacketDetails?.halfArmholeWidth}</span>
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 8 - Remove Quills */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>8</p>
                                <p>Remove Quills</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/remove-quills.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.removeQuills && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.removeQuills}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 9 - Curved Reversed */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>9</p>
                                <p>Curved Reversed</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/curved-reversed.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.curvedReversed && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.curvedReversed}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 10 - Take in Collar */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>10</p>
                                <p>Take in Collar</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/take-in-collar.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.takeInCollar && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.takeInCollar}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 11 - Loosen Jacket Front Width */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>*11</p>
                                <p style={{ whiteSpace: "nowrap" }}>Loosen Jacket Front Width</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/loosen-front-jacket-width.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.loosenFrontJacketWidth && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.loosenFrontJacketWidth}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 12 - Loosen Chest Width */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            borderBottom: "1px solid",
                            borderRight: "1px solid",
                            borderColor: "inherit",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                <p>12</p>
                                <p>Loosen Chest Width</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/loosen-chest-width.png`}
                                style={{ width: "70px", aspectRatio: "3/4.5" }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px dashed #6b7280",
                                            textAlign: "center",
                                        }}
                                    >
                                        {form?.jacketDetails?.loosenChestWidth && (
                                            <span style={{ color: "#000000" }}>CM {form?.jacketDetails?.loosenChestWidth}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p style={{ fontSize: "12px" }}>*Fields market with an asterisk must be completed</p>

                <div style={{ breakAfter: "page" }}></div>

                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* page 2 */}
                {/* Top Header */}
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
                                <span>STYLE</span>
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
                                    <span style={{ borderRight: "1px solid", paddingRight: "25px", paddingLeft: "25px" }}>STYLE</span>
                                    <span style={{ paddingRight: "25px", paddingLeft: "25px" }}>COLOR</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", flex: "1", alignItems: "center", justifyContent: "center" }}>
                                <span>TESTING SIZE</span>
                            </div>
                        </div>

                        {/* Values Row */}
                        {/* Pant product 1 */}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getPantsFromCart()[0]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3.5px",
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
                                    {getPantsFromCart()[0]?.fabricCode}
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
                                    {getPantsFromCart()[0]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                    {getPantsFromCart()[0]?.testingSize}
                                </span>
                            </div>
                        </div>

                        {/* Pant product 2 */}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getPantsFromCart()[1]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3.5px",
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
                                    {getPantsFromCart()[1]?.fabricCode}
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
                                    {getPantsFromCart()[1]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                    {getPantsFromCart()[1]?.testingSize}
                                </span>
                            </div>
                        </div>

                        {/* Pant product 3 */}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getPantsFromCart()[2]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3.5px",
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
                                    {getPantsFromCart()[2]?.fabricCode}
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
                                    {getPantsFromCart()[2]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                    {getPantsFromCart()[2]?.testingSize}
                                </span>
                            </div>
                        </div>

                        {/* Pant product 4 */}
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
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {getPantsFromCart()[3]?.model}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: "3.5px",
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
                                    {getPantsFromCart()[3]?.fabricCode}
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
                                    {getPantsFromCart()[3]?.fabricColor}
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                    {getPantsFromCart()[3]?.testingSize}
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
                                <span>EMBROIDERY POSITION</span>
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
                                <span>FONT</span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flex: "1 1 0%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span>COLOR</span>
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
                                    {form?.monogram?.side}
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
                                    {form?.monogram?.text}
                                </span>
                            </div>

                            {/* Fourth Column */}
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

                            {/* Fifth Column (no right border) */}
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

                        {/* Attachements */}
                        <div
                            style={{
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                display: "flex",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                height: "40px",
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
                                    lineHeight: "1.25rem",
                                }}
                            >
                                <span>ATTACHMENTS</span>
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
                                        fontSize: "0.75rem",
                                        lineHeight: "1rem",
                                        overflow: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    ATTACH PICTURE OF: FRONT, BACK, SIDE - IN COMPLIANCE WITH THE PRIVACY POLICY AVOID PICTURING THE CUSTOMER'S FACE
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
                        ></div>

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

                        {/* PAGE */}
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
                                <span>PAGE</span>
                            </div>
                        </div>

                        {/* VITERBO'S ORDER NUMBER # */}
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
                                <span>VITERBO'S ORDER NUMBER #</span>
                            </div>
                        </div>

                        {/* PRICING LIST */}
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
                                <span>PRICING LIST</span>
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

                        {/* BOUTIQUE DELIVERY ADDRESS */}
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
                                <span>BOUTIQUE DELIVERY ADDRESS</span>
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

                        {/* Final empty row with different height */}
                        <div
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                display: "flex",
                                minHeight: "26px",
                                maxHeight: "26px",
                                paddingLeft: "1.5rem",
                                borderBottom: "1px solid",
                                borderColor: "inherit",
                                boxSizing: "border-box",
                            }}
                        ></div>
                    </div>
                </div>

                {/* Jack style images & values */}
                {/* Jack style images & values */}
                {/* Jack style images & values */}
                {/* Jack style images & values */}
                <div style={{ display: "flex", marginTop: "0.5rem" }}>
                    <div style={{ flex: "1" }}>
                        <div
                            style={{
                                display: "grid",
                                width: "100%",
                                height: "fit-content",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                borderTop: "1px solid",
                                borderColor: "inherit",
                            }}
                        >
                            {/* Column 1 - Thigh & Knee Diameter */}
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
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>*1</p>
                                        <p>Thigh & Knee Diameter</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/thigh-&-knee-diameter.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.75rem" }}>
                                            <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                                <p
                                                    style={{
                                                        margin: 0, // remove default margins
                                                        padding: 0,
                                                        borderBottom: "1px dashed #6b7280",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {form?.pantDetails?.thighAndKneeDiameter?.halfThigh && (
                                                        <span style={{ color: "#000000" }}>
                                                            CM {form?.pantDetails?.thighAndKneeDiameter?.halfThigh}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                                <p
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        borderBottom: "1px dashed #6b7280",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {form?.pantDetails?.thighAndKneeDiameter?.halfKnee && (
                                                        <span style={{ color: "#000000" }}>
                                                            CM {form?.pantDetails?.thighAndKneeDiameter?.halfKnee}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                                <p
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        borderBottom: "1px dashed #6b7280",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {form?.pantDetails?.thighAndKneeDiameter?.halfCalf && (
                                                        <span style={{ color: "#000000" }}>
                                                            CM {form?.pantDetails?.thighAndKneeDiameter?.halfCalf}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
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
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>*2</p>
                                        <p>Half Waist Diameter</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/half-waist-diameter.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                            <p
                                                style={{
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.halfWaistDiameter && (
                                                    <span style={{ color: "#000000" }}>
                                                        CM + / - <span style={{ marginLeft: "0.5rem" }}>{form?.pantDetails?.halfWaistDiameter}</span>
                                                    </span>
                                                )}
                                            </p>
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
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>*3</p>
                                        <p>Half Pelvis Diameter</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/half-pelvis-diameter.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "12px", width: "60px" }}>
                                            <p
                                                style={{
                                                    margin: 0, // remove default margins
                                                    padding: 0,
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.halfPelvisDiameter?.measurement && (
                                                    <span style={{ color: "#000000" }}>CM {form?.pantDetails?.halfPelvisDiameter?.measurement}</span>
                                                )}
                                            </p>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", width: "70px", borderBottom: "1px dashed #6b7280" }}>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    textAlign: "center",
                                                    marginBottom: "2px",
                                                }}
                                            >
                                                Wide Crotch
                                            </p>

                                            {form?.pantDetails?.halfPelvisDiameter?.YesNo && (
                                                <p style={{ color: "#000000", fontSize: "10px", textAlign: "center", margin: 0, padding: 0 }}>
                                                    {form?.pantDetails?.halfPelvisDiameter?.YesNo}
                                                </p>
                                            )}
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
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>*4</p>
                                        <p>Loosen Bottom</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/loosen-bottom.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                            <p
                                                style={{
                                                    margin: 0, // remove default margins
                                                    padding: 0,
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.loosenBottom?.length && (
                                                    <span style={{ color: "#000000" }}>CM {form?.pantDetails?.loosenBottom?.length}</span>
                                                )}
                                            </p>
                                            <p style={{ fontSize: "10px", marginTop: "4px" }}>Length</p>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.loosenBottom?.bottom && (
                                                    <span style={{ color: "#000000" }}>CM {form?.pantDetails?.loosenBottom?.bottom}</span>
                                                )}
                                            </p>
                                            <p style={{ fontSize: "10px", marginTop: "4px" }}>Bottom</p>
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
                                    borderLeft: "1px solid",
                                    borderRight: "1px solid",
                                    borderBottom: "1px solid",
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>5</p>
                                        <p>Raise / Lower Waist</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/raise-lower-waist.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                            <p
                                                style={{
                                                    margin: 0, // remove default margins
                                                    padding: 0,
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.raiseLowerWaist?.moreHigh && (
                                                    <span style={{ color: "#000000" }}>
                                                        CM + / -{" "}
                                                        <span style={{ marginLeft: "0.5rem" }}>{form?.pantDetails?.raiseLowerWaist?.moreHigh}</span>
                                                    </span>
                                                )}
                                            </p>
                                            <p style={{ fontSize: "10px", marginTop: "4px" }}>More High</p>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.raiseLowerWaist?.lessLow && (
                                                    <span style={{ color: "#000000" }}>
                                                        CM + / -{" "}
                                                        <span style={{ marginLeft: "0.5rem" }}>{form?.pantDetails?.raiseLowerWaist?.lessLow}</span>
                                                    </span>
                                                )}
                                            </p>
                                            <p style={{ fontSize: "10px", marginTop: "4px" }}>Less Low</p>
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
                                    borderBottom: "1px solid",
                                    borderRight: "1px solid",
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>6</p>
                                        <p>Crotch Length</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/crotch-length.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                            <p
                                                style={{
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.crotchLength && (
                                                    <span style={{ color: "#000000" }}>CM {form?.pantDetails?.crotchLength}</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 7 - Half Armhole Width */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "0.5rem",
                                    paddingLeft: "1rem",
                                    paddingRight: "1rem",
                                    borderBottom: "1px solid",
                                    borderRight: "1px solid",
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "0.5rem", fontSize: "0.75rem" }}>
                                        <p>7</p>
                                        <p>Lower Rise at Front</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/lower-rise-at-front.png`}
                                        style={{ width: "70px", aspectRatio: "3/4.5" }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "0.75rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
                                            <p
                                                style={{
                                                    borderBottom: "1px dashed #6b7280",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {form?.pantDetails?.lowerRiseAtFront && (
                                                    <span style={{ color: "#000000" }}>CM {form?.pantDetails?.lowerRiseAtFront}</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: "12px" }}>*Fields market with an asterisk must be completed</p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "280px",
                            border: "1px solid",
                            marginLeft: "200px",
                            fontSize: "12px",
                            height: "fit-content",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{ borderBottom: "1px solid", boxSizing: "border-box" }}>
                            <p style={{ textAlign: "center", padding: "12px", margin: 0, boxSizing: "border-box" }}>SIZE GUIDE</p>
                        </div>

                        <div style={{ borderBottom: "1px solid", display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p style={{ textAlign: "center", padding: "6px", paddingLeft: "30px", margin: 0, boxSizing: "border-box" }}>ITA SIZE</p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "30px", margin: 0, boxSizing: "border-box" }}>USA SIZE</p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                42
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                28
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                44
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                30
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                46
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                31
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                48
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                32
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                50
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                33
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                52
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                34
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                54
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                36
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                56
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                38
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                58
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                40
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                60
                            </p>
                            <p style={{ textAlign: "center", padding: "6px", paddingRight: "10px", flex: "1", margin: 0, boxSizing: "border-box" }}>
                                42
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingBottom: "15px",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                62
                            </p>
                            <p
                                style={{
                                    textAlign: "center",
                                    padding: "6px",
                                    paddingBottom: "15px",
                                    paddingRight: "10px",
                                    flex: "1",
                                    margin: 0,
                                    boxSizing: "border-box",
                                }}
                            >
                                44
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
