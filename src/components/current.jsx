import WeatherContext from "../context/context";
import { BsCloudRain } from "react-icons/bs";
import { UilLocationPoint } from '@iconscout/react-unicons'
import { BsCloudSnow } from "react-icons/bs";
import { useContext } from "react";
const Current = ({ forecast: { forecastday } }) => {
  const weatherContext = useContext(WeatherContext);
  const current = weatherContext.current;
  const location = weatherContext.location;
  const forcastC = forecastday[0];
  const hour24 = forcastC.hour;
  console.log(location);
  // console.log(current);
  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  return (
    <>
      <section id="0">
        <div className=" bgr-sec1 my-3">
          <>
            <p className="alinmentT">{location.name} < UilLocationPoint/></p>
            <div className="row">
              <div className="col-4 padding1">
                <div>
                  <p className="date">{location.localtime}</p>
                  <p className="hour">Local Time</p>
                </div>
              </div>
              <div className="col-4 padding2">
                <p>
                  <span className="bigtemp">{weatherContext.unites ? current.temp_f : current.temp_c}</span>{" "}
                  <span className="bigdegre">{weatherContext.unites ? "°F" : "°C"}</span>
                </p>
              </div>
              <div className="col-4 padding1">
                <div>
                  <p>
                    <img
                      className="sizeicon"
                      src={current.condition.icon}
                      alt="conditon-icon"
                    />
                  </p>

                  <p className="stausp">{current.condition.text}</p>
                </div>
              </div>
            </div>
            <div className="centeralign">
              <p>
                <span className="maxdegree">
                  Max: {weatherContext.unites ?forcastC.day.maxtemp_f:forcastC.day.maxtemp_c}°
                </span>
                <span className="maxdegree">
                  Min: {forcastC.day.mintemp_c}°
                </span>
              </p>
              <p className="maxdegree pb-5">
                Wind: {current.wind_dir} / {weatherContext.unites ?current.wind_mph:current.wind_kph} <span>{weatherContext.unites?"ml/h":"km/h"}</span> 
              </p>
            </div>
          </>
        </div>
      </section>
      <section id="2">
        <div className=" bgr-sec1">
          <h3 className="p-3">24 hours forecast</h3>
          <div className="overflowdiv">
            <div className="d-flex ">
              {hour24.map((h, i) => (
                <ul key={i} className="listhours">
                  <li>{hours[i]}</li>
                  <li>
                    <p>
                      <img
                        className="padding-dar"
                        src={h.condition.icon}
                        alt="condition.icon"
                      />
                    </p>
                  </li>
                  <li>
                    {h.temp_c < 2 ? <BsCloudSnow /> : <BsCloudRain />}{" "}
                    <span>
                      {h.temp_c < 2 ? h.chance_of_snow : h.chance_of_rain}%
                    </span>
                  </li>
                </ul>
              ))}
            </div>
            <p className="mx-4 mb-4">
              <span className="chancerain p-1">
                <BsCloudRain />
              </span>
              <span>chance of rain</span>
              <span className="chancerain p-1 marginl-2">
                <BsCloudSnow />
              </span>
              <span>chance of snow</span>
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Current;
