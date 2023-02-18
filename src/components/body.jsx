import "./body.css";
import WeatherContext from "../context/context";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { useRef } from "react";
import { FiHome } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { BsCloudRain } from "react-icons/bs";
import { BsCloudSnow } from "react-icons/bs";
import Search from "./search";
import React from 'react';
import Current from "./current";
import Forcast from "./forcast"
import Aditional from "./aditionalCurrent";


const Body = ({forecast}) => {
  const weatherContext = useContext(WeatherContext)
  const navRef = useRef();
  const backRef = useRef();

  const navbarShow = () => {
    navRef.current.classList.toggle("nav_show");
    backRef.current.classList.toggle("backdrop_open");
  };

  const handleRemove = () => {
    navRef.current.classList.toggle("nav_show");
    backRef.current.classList.toggle("backdrop_open");
  };

  const handleToggle = () => {
    document.body.classList.toggle("backgriundblue");
  };
  const handleUnite = ()=>{
    weatherContext.onUnite()
  }

  return (
    <>
      <button onClick={navbarShow} className="buttonbar">
        <FaBars />
      </button>
    

      <div className="navbarr  " ref={navRef}>
        <nav className="navmenu">
          <ul className="listam">
            <li>
              <FiHome /> Home
            </li>
            <hr />
            <div className="row">
              <div className="col-6">
                <li>
                  <FiSun /> Temprature
                </li>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <label className="switchT">
                  <input type="checkbox" onClick={handleUnite}/>
                  <span className="sliderT" />
                </label>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-6">
                <li>
                  <FaImage /> Hide background image
                </li>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <label className="switch">
                  <input type="checkbox" onClick={handleToggle} />
                  <span className="slider" />
                </label>
              </div>
            </div>

            <hr />

            <li>
              <FaRegEnvelope /> Feadback and Suggestion
            </li>
            <hr />
            <li>
              <FaRegEnvelope /> Reaport problem
            </li>
            <hr />
            <li>
              <FiShare2 /> Share
            </li>
            <hr />
            <li>Version 71</li>
          </ul>
        </nav>
      </div>

      {/* sectionsss */}

      <div className="container ">
        <Search />
        {weatherContext.current ? <Current forecast={forecast}/> : 
         <>
         <section id="1">
          <div className=" bgr-sec1 my-3">
            <div className="row">
              <div className="col-4 padding1">
                <div>
                  <p className="date">--/-- /--/--</p>
                  <p className="hour">--:--</p>
                </div>
              </div>
              <div className="col-4 padding2">
                <p>
                  <span className="bigtemp">#</span>{" "}
                  <span className="bigdegre">°C</span>
                </p>
              </div>
              <div className="col-4 padding1">
                <div>
                  <p
                    title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                    href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                  >
                    <img
                      width="80"
                      alt="Antu weather-clouds"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                    />
                  </p>
                  <p className="stausp">........</p>
                </div>
              </div>
            </div>
            <div className="centeralign">
              <p>
                <span className="maxdegree">Max:-°</span>{" "}
                <span className="maxdegree">Min:-°</span>
              </p>
              <p className="maxdegree pb-5">Wind: -- -- --</p>
            </div>
          </div>
        </section> 
          <section id="2">
          <div className=" bgr-sec1">
            <h3 className="p-3">24 hours next</h3>
            <div className="overflowdiv">
              <div className="d-flex ">
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
                <ul className="listhours">
                  <li></li>
                  <li>
                    {" "}
                    <p
                      title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                    >
                      <img
                        width="30"
                        alt="Antu weather-clouds"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                      />
                    </p>
                  </li>
                  <li></li>
                </ul>
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
      }

          {weatherContext.forcast ? <Forcast forecast={forecast}/>:(
             
        <section id="3">
        <div className=" bgr-sec1 mt-3">
          <h3 className="p-3">3 day forecast!!!!!</h3>
        </div>
      </section>
          )}
     
     {weatherContext.current ? <Aditional forecast={forecast}/> : 

        <section id="4">
          <div className=" bgr-sec1 mt-3 mb-5">
            <div className="row">
              <div className="col d-flex justify-content-center align-self-center">
                <p
                  title="Fabián Alexis, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
                  href="https://commons.wikimedia.org/wiki/File:Antu_weather-clouds.svg"
                >
                  <img
                    width="100"
                    alt="Antu weather-clouds"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/32px-Antu_weather-clouds.svg.png"
                  />
                </p>
              </div>
              <div className="col mt-2">
                <ul className="listhours">
                  <li>Humidity: 49%</li>
                  <li>Chance of rain: 4%</li>
                  <li>Precipitaion: 0.0127 mm</li>
                  <li>wind chill: 3</li>
                  <li>Dew point: -6</li>
                  <li>Cloud cover: 70%</li>
                  <li>Ultaviolet index: 3(moderate)</li>
                  <li>Pressure: 1023 mbar</li>
                  <li>Sunrise: 07:25</li>
                  <li>Sunset : 17:50</li>
                  <li>Moon phases: first quarter</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
}
      </div>

      <div className="backdrop" onClick={handleRemove} ref={backRef}></div>
    </>
  );
};

export default Body;
