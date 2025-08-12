const data = [
    // Jacket Model 1
    { model: "Q75GIAQ03", fabric: "TESOH011", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH012", usaPrice: "$2,195.00", caPrice: "$2,395.00" },
    { model: "Q75GIAQ03", fabric: "TESOH013", usaPrice: "$1,495.00", caPrice: "$1,695.00" },
    { model: "Q75GIAQ03", fabric: "TESOH014", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH015", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH016", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH017", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH018", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH019", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH020", usaPrice: "$1,995.00", caPrice: "$2,195.00" },
    { model: "Q75GIAQ03", fabric: "TESOH021", usaPrice: "$1,995.00", caPrice: "$2,195.00" },
    { model: "Q75GIAQ03", fabric: "TESOH022", usaPrice: "$2,595.00", caPrice: "$2,795.00" },
    { model: "Q75GIAQ03", fabric: "TESOH023", usaPrice: "$2,695.00", caPrice: "$2,895.00" },
    { model: "Q75GIAQ03", fabric: "TESOH024", usaPrice: "$3,195.00", caPrice: "$3,395.00" },
    { model: "Q75GIAQ03", fabric: "TESOH025", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH026", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH027", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH028", usaPrice: "$1,995.00", caPrice: "$2,195.00" },
    { model: "Q75GIAQ03", fabric: "TESOH029", usaPrice: "$1,495.00", caPrice: "$1,695.00" },
    { model: "Q75GIAQ03", fabric: "TESOH030", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
    { model: "Q75GIAQ03", fabric: "TESOH031", usaPrice: "$1,895.00", caPrice: "$2,095.00" },
];

export const getPrices = (model, fabric) => {
    const item = data.find((entry) => entry.model === model && entry.fabric === fabric);
    if (!item) {
        return { usaPrice: "", caPrice: "" };
    }
    return {
        usaPrice: item.usaPrice,
        caPrice: item.caPrice,
    };
};
