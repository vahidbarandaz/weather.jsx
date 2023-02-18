import { UilSearch } from "@iconscout/react-unicons";
import { useContext } from "react";
import WeatherContext from "../context/context";
import Loader from "./loader";

const Search = () => {
  const weatherContext = useContext(WeatherContext);
//  console.log(weatherContext.current)
  const handleClick = (c)=>{
      weatherContext.onClickCity(c)
  }

  const handleChange = (e) => {
    weatherContext.onChange(e);
  };

  return (
    <>
      <div className="loader">
        {weatherContext.clicked && !weatherContext.current ? <Loader/> :  ""}
  
      </div>
      <div className="container ">
        <div className="d-flex justify-content-center w-100">
          <input
            type="text"
            placeholder="Search for city..."
            value={weatherContext.city}
            className="p-2 serachinput positiondar"
            onChange={handleChange}
          />

          <span className="p-2 my-3 fonticon curser-pointer">
            <UilSearch size={25} />
          </span>
        </div>

        <div
          className={
            weatherContext.suggection.length === 0
              ? "d-flex justify-content-center wrapper"
              : "d-flex justify-content-center wrapper show"
          }
        >
          <ul className="displayblock">
            {weatherContext.suggection.map((c, i) => (
              <li key={i} onClick={()=>handleClick(c)} className="suggecton">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
