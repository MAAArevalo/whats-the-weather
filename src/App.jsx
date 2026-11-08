import { useState, useEffect } from "react"
import cities from "./data/ph.json"
import { getWeather } from "./services/weatherService"

import CurrentWeather from "./components/CurrentWeather"
import Forecast from "./components/Forecast"
import Header from "./components/Header"
import WeatherDetails from "./components/WeatherDetails"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"


function App() {
  const defaultCity = cities.find(
    (item) => item.city === "Manila"
  );


  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const loadDefaultWeather = async () => {
        if (!defaultCity) return;

        const weatherData = await getWeather(
            defaultCity.lat,
            defaultCity.lng
        );

        setWeather(weatherData);
    };

    loadDefaultWeather();
  }, []);

  const normalizeCity = (value) => {
    return value.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
  }

  const handleSearch = async (search) => {
    const city = cities.find(
      (item) => normalizeCity(item.city).includes(normalizeCity(search))
    );

    if (city){
      setCity(city);
      
      const weatherData = await getWeather(city.lat, city.lng);
      console.log(weatherData);
      setWeather(weatherData);

    }else{
      alert('City not found');
    }
  }
  return (
    <>
      <main>
        <Header onSearch={handleSearch} ></Header>
        <CurrentWeather selectedCity={ city } currentWeather={ weather }></CurrentWeather>
        <WeatherDetails currentWeather={ weather } ></WeatherDetails>
        <Forecast currentWeather={ weather } ></Forecast>
        <Highlights></Highlights>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
