import { getWeatherDesc } from "../utils/weatherCodes";
import { formatDate } from "../utils/formatTime";
import { formatTime } from "../utils/formatTime";
import { getWeatherImage } from "../utils/weatherCodes";

function CurrentWeather({ selectedCity, currentWeather }){
    let cityName = "City Name";
    let country = "Philippines"

    let currentTemp = 0;
    let feelsTemp = 0;
    let weatherDesc = "loading...";
    let weatherImg;


    if(selectedCity){
        cityName = selectedCity.city;
    }
    if(currentWeather){
        currentTemp = currentWeather.current.temperature_2m;
        feelsTemp = currentWeather.current.apparent_temperature;
        weatherDesc = getWeatherDesc(currentWeather.current.weather_code);
        weatherImg = getWeatherImage(currentWeather.current.weather_code);
    }
    const dateNow = new Date();
    const date = formatDate(dateNow);

    const time = formatTime(dateNow);
    return(
        <>
            <section id="current-weather">
                <div className="container">
                    <div className="current-content">
                        <div id="country-image">
                            <img src={ weatherImg } alt="weather image" />
                        </div>
                        <div id="current-weather-details">
                            <div className="d-flex align-items-center">
                                <h1 id="city-name">{ cityName }</h1>
                            </div>
                            <h3 id="country-name">{ country }</h3>
                            <div id="date-time" className="d-flex align-items-center">
                                <span id="date">{ date }</span>
                                <span id="time">{ time }</span>
                            </div>
                            <h3 className="temp">{ currentTemp }&deg; <span>c</span></h3>
                            <h4 className="weather-desc">{ weatherDesc }</h4>
                            <p className="feels">Feels like <span>{ feelsTemp }&deg;c</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CurrentWeather;