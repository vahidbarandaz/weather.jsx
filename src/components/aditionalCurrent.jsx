import WeatherContext from "../context/context";
import { useContext } from "react";

const Aditional = ({ forecast: { forecastday } }) => {
  const weatherContext = useContext(WeatherContext);
  const current = weatherContext.current;
  const forcastC = forecastday[0];
  return (
    <>
      <section id="4">
        <div className=" bgr-sec1 mt-3 mb-5">
          <div className="row">
            <div className="col d-flex justify-content-center align-self-center">
              <p>
                <img
                  width="100"
                  alt="Antu weather-clouds"
                  src={forcastC.day.condition.icon}
                />
              </p>
            </div>
            <div className="col mt-2">
              <ul className="listhours">
                <li>Humidity: {current.humidity}%</li>
                <li>
                  {" "}
                  {forcastC.day.avgtemp_c < 2
                    ? "Chance of snow"
                    : "Chance of rain"}
                  :{" "}
                  {forcastC.day.avgtemp_c < 2
                    ? forcastC.day.daily_chance_of_snow
                    : forcastC.day.daily_chance_of_rain}
                  %
                </li>
                <li>Precipitaion: {forcastC.day.totalprecip_mm} mm</li>
                <li>wind degree: {current.wind_degree}°</li>
                <li>Feels like: {current.feelslike_c}</li>
                <li>Cloud cover : {current.cloud}%</li>
                <li>Pressure: {current.pressure_mb} mbar</li>
                <li>Sunrise: {forcastC.astro.sunrise}</li>
                <li>Sunset : {forcastC.astro.sunset}</li>
                <li>Moon phases: {forcastC.astro.moon_phase}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aditional;
