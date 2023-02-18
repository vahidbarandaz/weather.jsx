
import { BsCloudRain } from "react-icons/bs";
import { BsCloudSnow } from "react-icons/bs";
import dayjs from "dayjs";

const Forcast = ({ forecast: { forecastday } }) => {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const index = (f) => {
    return dayjs(f.date).day();
  };

  return (
    <>
      <section id="3">
        <div className=" bgr-sec1 mt-3">
          <h3 className="p-3">3 day forecast</h3>
          <div className="d-flex">
            {forecastday.map((f, i) => (
              <ul key={i} className="listhours">
                <li className="borderha">{WEEKDAYS[index(f)]}</li>
                <li>
                  <p>
                    <img
                      className="padding-dar"
                      src={f.day.condition.icon}
                      alt="condition-pic"
                    />
                  </p>
                </li>
                <li>
                  {f.day.avgtemp_c < 2 ? <BsCloudSnow /> : <BsCloudRain />}{" "}
                  <span>
                    {f.day.avgtemp_c < 2
                      ? f.day.daily_chance_of_snow
                      : f.day.daily_chance_of_rain}
                    %
                  </span>
                </li>
                <li>
                  <div className="wrappercol">
                    <span className="poistionmaxdeg">{f.day.maxtemp_c}°</span>
                    <div
                      className="column"
                      style={{ height: (f.day.maxtemp_c - f.day.mintemp_c )*10}}
                    ></div>
                    <span className="poistionmindeg">{f.day.mintemp_c}°</span>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Forcast;
