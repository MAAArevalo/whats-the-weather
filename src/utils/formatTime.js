export const formatTime = (dateTime) => {
    if (!dateTime) return "--:--";

    const date = new Date(dateTime);

    return date.toLocaleTimeString("en-PH", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila"
    });
};

export const formatDate = (dateTime) => {
    if (!dateTime) return "--:--";

    const date = new Date(dateTime);

    return date.toLocaleDateString("en-PH", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatOnlyDate = (dateTime) => {
    if (!dateTime) return "--:--";

    const date = new Date(dateTime);

    return date.toLocaleDateString("en-PH", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const formatWeekday = (dateTime) => {
    if (!dateTime) return "--:--";

    const date = new Date(dateTime);

    return date.toLocaleDateString("en-PH", {
        weekday: 'short',
    });
};