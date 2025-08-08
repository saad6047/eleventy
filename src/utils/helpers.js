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
