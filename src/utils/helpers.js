export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export const formatUTCDate = (utcDateString) => {
    const date = new Date(utcDateString);

    if (isNaN(date.getTime())) {
        console.error("Invalid date string:", utcDateString);
        return "Invalid date";
    }

    // Force English formatting with "DD Month YYYY"
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC", // Ensures UTC date (no timezone conversion)
    });
};

export const formatDate = (dateString) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
};

export const formatTime = (timeString) => {
    // Split hours and minutes
    const [hourStr, minute] = timeString.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    return `${hour}:${minute} ${ampm}`;
};

export const fabricCodes = [
    "TESOH011",
    "TESOH012",
    "TESOH013",
    "TESOH014",
    "TESOH015",
    "TESOH016",
    "TESOH017",
    "TESOH018",
    "TESOH019",
    "TESOH020",
    "TESOH021",
    "TESOH022",
    "TESOH023",
    "TESOH024",
    "TESOH025",
    "TESOH026",
    "TESOH027",
    "TESOH028",
    "TESOH029",
    "TESOH030",
    "TESOH031",
];

export const knitwearModels = [
    "Q75MAGQ01 – Full Zip (Tipping)​",
    "Q76MAGQ02 - Full Zip (No Tipping)​",
    "Q75MAGQ03 – Raglan Crew (Tipping)​",
    "Q76MAGQ04 - Ribbed Raglan Crew (No Tipping)​",
    "Q75MAGQ05 – Ribbed Raglan Crew (Tipping)​​",
    "Q76MAGQ06 - Ribbed Crew (No Tipping)​",
    "Q75MAGQ07 – Zip Hoodie(Tipping)​",
    "Q76MAGQ07 - Zip Hoodie (No Tipping)​",
    "Q75MAGQ09 – Raglan Crew (Tipping)​",
    "Q76MAGQ10 - Raglan Crew (No Tipping)​",
    "Q75MAGQ11 – Quarter Zip (Tipping)​",
    "Q76MAGQ12 - Quarter Zip (No Tipping)​",
    "Q75MAGQ13 – 3 Button Polo (Tipping)​",
    "Q76MAGQ14 - 3 Button Polo (No Tipping)​",
    "Q75MAGQ15 – V-Neck (Tipping)​",
    "Q76MAGQ16 - V-Neck (No Tipping)​",
    "Q75MAGQ17 – 5 Button Cardigan (Tipping)​",
    "Q76MAGQ18 - 5 Button Cardigan (No Tipping)​",
    "Q75MAGQ19 – 4 Button Polo (Tipping)​",
    "Q76MAGQ20 - 4 Button Polo (No Tipping)​",
    "Q75MAGQ21 – Turtleneck (Tipping)​",
    "Q76MAGQ22 – Turtleneck (No Tipping)​",
    "Q76MAGQ23 – Crewneck (No Tipping)​",
    "Q76MAGQ24 – Crewneck (No Tipping)​",
    "Q76MAGQ25 – Knit Jogger (No Tipping)​",
    "Q76MAGQ26 – Knit Jogger (No Tipping)​",
];

export const knitwearColors = [
    "22673",
    "22028",
    "21028",
    "20068",
    "20130",
    "22923",
    "20450",
    "20338",
    "24459",
    "20000",
    "21971",
    "22508",
    "22510",
    "22787",
    "21975",
    "21322",
    "21537",
    "44447",
    "21034",
    "20102",
    "22674",
    "21513",
    "23125",
    "21504",
    "22388",
    "21977",
    "22503",
    "23147",
    "21527",
    "21198",
    "22168",
    "21588",
    "20605",
    "21105",
    "23119",
    "20904",
    "23120",
    "21042",
    "22415",
    "21503",
];
