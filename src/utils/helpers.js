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
    "01N / 22168",
    "02D / 21105",
    "02NN / 22415",
    "04B / 23120",
    "05 / 20904",
    "06 / 20068",
    "06N / 22028",
    "07E / 23119",
    "08D / 22787",
    "102N / 20605",
    "107 / 23020",
    "10NN / 21198",
    "10NNN / 21527",
    "11 / 20102",
    "11NN / 21975",
    "121 / 21588",
    "123 / 22502",
    "13N / 22673",
    "15 / 24459",
    "150 / 22674",
    "159 / 21977",
    "15V / 20923",
    "19V / 44447",
    "22 / 20000",
    "23 / 21322",
    "26 / 22503",
    "26B / 23125",
    "26NNN / 21513",
    "29 / 21504",
    "90 / 23147",
];
