import search_icon from "../assets/search.png"
import humidity_icon from "../assets/humidity.png"
import wind_icon from "../assets/wind.png"
import {useState} from "react";

const Weather = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const search = async () => {
        if (city === ''){
            alert('Enter Your City Name')
            return
        }
      try {
          const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
          const res = await fetch(url)
          const data = await res.json();
          setWeatherData(data)
      }catch (error){
        console.log(error)
      }
    }

    return (
        <div
            className="bg-blue-400 md:w-[400px]  rounded-md px-5 shadow-md flex flex-col items-center gap-6 py-8">
            <h1 className="text-2xl font-bold text-center">Welcome
                My Weather App</h1>
            <div
                className="flex items-center justify-center gap-3">
                <input type="text" value={city}
                       onChange={(e) => setCity(e.target.value)}
                       placeholder="Search"
                       className="rounded-full py-2 px-5 outline-none w-full"/>
                <button onClick={search}
                        className="py-2 px-2 bg-white rounded-full">
                    <img src={search_icon} alt=""/>
                </button>
            </div>
            {weatherData && (
                <div
                    className="flex flex-col items-center justify-center gap-6">
                    <div>

                        <img className="w-40"
                             src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                             alt=""/>
                    </div>
                    <p className="font-bold text-4xl">{weatherData.main.temp}°C</p>
                    <p className="font-medium text-4xl">{weatherData.name}</p>
                    <div
                        className="flex items-center justify-between gap-6">
                        <div
                            className="flex items-start gap-2 ">
                            <img className="w-6 pt-2"
                                 src={humidity_icon}
                                 alt=""/>

                            <p className="flex flex-col">
                        <span
                            className="text-2xl">{weatherData.main.humidity} %</span>
                                <span
                                    className="text-base">Humidity</span>
                            </p>
                        </div>
                        <div
                            className="flex items-start gap-2 ">
                            <img className="w-6 pt-2"
                                 src={wind_icon}
                                 alt=""/>
                            <p className="flex flex-col">
                        <span
                            className="text-2xl">{weatherData.wind.speed} Km/h</span>
                                <span
                                    className="text-base">Wind Speed</span>
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;