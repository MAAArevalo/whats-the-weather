export const getWeatherDesc = (code) => {
    const weatherCodes = {
         0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing Rime Fog",
        51: "Light Drizzle",
        53: "Moderate Drizzle",
        55: "Dense Drizzle",
        61: "Slight Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        80: "Rain Showers",
        81: "Moderate Rain Showers",
        82: "Violent Rain Showers",
        95: "Thunderstorm",
        96: "Thunderstorm with Hail",
        99: "Heavy Thunderstorm with Hail"
    };

    return weatherCodes[code] || "Weather Unknown";
}


export const getWeatherImage = (code) => {
    if (code === 0) return "/images/weather/clear-sky.webp";
    if (code === 1) return "/images/weather/mainly-clear.webp";
    if (code === 2) return "/images/weather/partly-cloudy.webp";
    if (code === 3) return "/images/weather/overcast.webp";

    if (code === 45) return "/images/weather/fog.webp";
    if (code === 48) return "/images/weather/freezing-fog.webp";

    if (code >= 51 && code <= 55) return "/images/weather/drizzle.webp";
    if (code === 56 || code === 57) return "/images/weather/freezing-drizzle.webp";

    if (code >= 61 && code <= 65) return "/images/weather/rain.webp";
    if (code === 66 || code === 67) return "/images/weather/freezing-rain.webp";

    if (code >= 71 && code <= 75) return "/images/weather/snowfall.webp";
    if (code === 77) return "/images/weather/snow-grains.webp";

    if (code >= 80 && code <= 82) return "/images/weather/rain-showers.webp";
    if (code === 85 || code === 86) return "/images/weather/snow-showers.webp";

    if (code === 95) return "/images/weather/thunderstorm.webp";
    if (code === 96 || code === 99) return "/images/weather/thunderstorm-hail.webp";

    return "/images/weather/overcast.webp";
};
