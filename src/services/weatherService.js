const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeather = async (lat, long) => {
    const url = `${BASE_URL}?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max&timezone=Asia/Manila&forecast_days=7`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}