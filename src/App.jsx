import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import back from "./assets/back.jpg";
import Icons from "./Icons";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const searchCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eaa75b097032671652347ca6603d9f8c`
      )
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
    // setCity("");
  };
  useEffect(() => {
    const today = new Date();
    const jour = today.getDay();
    const mois = today.getMonth();
    const annee = today.getFullYear();
    const phrase = `C'est le : ${jour} / ${mois} / ${annee}`;
    setDate(phrase);
  }, []);

  return (
    <div
      className="flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex justify-center items-center ">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Donnez votre ville"
          className="mt-6 text-lg rounded-lg p-1 border-2 border-sky-600"
        />
        <button
          onClick={searchCity}
          className="mt-7 ml-6 rounded-3xl bg-sky-300 py-2 px-3 font-bold"
        >
          Rechercher
        </button>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
          <div className="font-bold text-2xl">
            {data.name ? data.name.toUpperCase() : "Los Angeles"}
          </div>
          <div className="text-sm text-gray-500">{date}</div>
          <Icons weather={data.weather ? data.weather[0].main : ""} />
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">
              {data.main ? `${(data.main.temp - 273.15).toFixed(0)}°C` : "24°"}
            </div>
            <div className="flex flex-col items-center ml-6">
              <div>{data.weather ? data.weather[0].main : "Cloudy"}</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">
                  {data.main
                    ? `${(data.main.temp_max - 273.15).toFixed(0)}°C`
                    : "28°C"}
                </span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">
                  {data.main
                    ? `${(data.main.temp_min - 273.15).toFixed(0)}°C`
                    : "20°C"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Vent</div>
              <div className="text-sm text-gray-500">
                {data.wind ? `${data.wind.speed} k/h` : "9 k/h"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidité</div>
              <div className="text-sm text-gray-500">
                {data.main ? `${data.main.humidity}%` : "68%"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibilité</div>
              <div className="text-sm text-gray-500">
                {data.visibility ? `${data.visibility / 1000} km` : "10 km"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
