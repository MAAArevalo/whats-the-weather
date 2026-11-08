import { formatDate } from "../utils/formatTime";
import { formatTime } from "../utils/formatTime";
import { Droplet } from "lucide-react";
import { Wind } from "lucide-react";
import { WindArrowDownIcon } from "lucide-react";
import { Sunrise } from "lucide-react";
import { Sunset } from "lucide-react";

function WeatherDetails({ currentWeather }){
    let humidity = 0;
    let windSpeed = "--";
    let windDir = 0;

    let sunrise;
    let sunset;

    if(currentWeather){
        humidity = currentWeather.current.relative_humidity_2m;
        windSpeed = currentWeather.current.wind_speed_10m;
        windDir = currentWeather.current.wind_direction_10m;    
        sunrise = formatTime(currentWeather.daily.sunrise[0]);
        sunset = formatTime(currentWeather.daily.sunset[0]);            
    }
    return(
        <>
            <section id="weather-details">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex" id="humidity">
                            <span className="icon"><Droplet size={50} /></span>
                            <div className="detail-content">
                                <p>Humidity</p>
                                <span>{ humidity }%</span>
                            </div>
                        </div>
                        <div className="d-flex" id="wind-speed">
                            <span className="icon"><Wind size={50} /></span>
                            <div className="detail-content">
                                <p>Wind Speed</p>
                                <span>{ windSpeed } km/h</span>
                            </div>
                        </div>
                        <div className="d-flex" id="wind-direction">
                            <span className="icon"><WindArrowDownIcon size={50} /></span>
                            <div className="detail-content">
                                <p>Wind Direction</p>
                                <span>{ windDir }&deg;</span>
                            </div>
                        </div>
                        <div className="d-flex" id="sunrise">
                            <span className="icon"><Sunrise size={50} /></span>
                            <div className="detail-content">
                                <p>Sunrise</p>
                                <span>{ sunrise }</span>
                            </div>
                        </div>
                        <div className="d-flex" id="sunset">
                            <span className="icon"><Sunset size={50} /></span>
                            <div className="detail-content">
                                <p>Sunset</p>
                                <span>{ sunset }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WeatherDetails;