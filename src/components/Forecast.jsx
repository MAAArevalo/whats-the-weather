import { formatWeekday } from "../utils/formatTime";
import { formatOnlyDate } from "../utils/formatTime";

function Forecast({currentWeather}){
    
    return(
        <>
            <section id="forecast">
                <div className="container">
                    <h2>7-Day Forecast</h2>
                    <div className="d-flex justify-content-center">
                        { currentWeather?.daily?.time?.map((date, index) => {
                            let tempMax = currentWeather.daily.temperature_2m_max[index];
                            let tempMin = currentWeather.daily.temperature_2m_min[index];
                            
                            return(
                                <div key={index} className="forecast-card">
                                    <h5 id="forecast-day" className="text-center">{formatWeekday(date)}</h5>
                                    <p id="forecast-date" className="text-center">{formatOnlyDate(date)}</p>
                                    <span id="forecast-icon"></span>
                                    <h4 id="forecast-temp" className="text-center">{tempMax}&deg;c / {tempMin}&deg;c</h4>
                                    <p className="text-center">High / Low</p>
                                </div>
                            );
                            
                        })}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Forecast;