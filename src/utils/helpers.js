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
