import { useEffect, useState } from "react";
import Body from "./components/body";
import WeatherContext from "./context/context";




const searchUrl =
  "https://api.weatherapi.com/v1/search.json?key=3f59072224e640e294a213744232301&q=";
const forcastUrl = (city) =>
  `https://api.weatherapi.com/v1/forecast.json?key=3f59072224e640e294a213744232301&q=${city}&days=7&aqi=no&alerts=no`;

 
 


function App() {
  
  const [city, setCity] = useState("");
  const [forcast, setForcast] = useState();
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();
  const [clicked, setClicked] = useState(false);
  const [clickedUnite, setClickedUnite] = useState(false);
  const [suggectionCity, setSuggectionCity] = useState([]);



  const handleChange = (e) => {
    const newcity = e.currentTarget.value;
    setCity(newcity);
  };

  const handleUnite =()=>{
    if (!clickedUnite) {
      setClickedUnite(true)
    }else if(clickedUnite){
      setClickedUnite(false)
    }
   
  }

  const handleclick = async (clickedcity) => {
    setCity(clickedcity);
    setClicked(true);
    const response = await fetch(forcastUrl(city));
    const data = await response.json();
    setCurrent(data.current)
    setForcast(data.forecast)
    // console.log(data)
    setLocation(data.location)
    // console.log(location)
    // const lat = location.lat
    // const long = location.lon
    // let exclude = 'hourly,minutely';
    // const resp = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=34480b98aa332da53123a0ac63a4ea9d`)
    // const data1 = await resp.json();
    // console.log(lat)
    // console.log(long)
    // console.log(data1)
  
   

  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(searchUrl + city);
      const data = await response.json();
      const citySuggData = data.map(
        (c) => `${c.name},${c.region},${c.country}`
      );
      setSuggectionCity(citySuggData);
      // console.log(data);
  
    };

    if (!clicked && city.length > 2) {
      fetchData();
    } else {
      setSuggectionCity([]);
      setClicked(false);
    }
  }, [city]);

  return (
    <>
      <WeatherContext.Provider
        value={{
          city: city,
          onChange: handleChange,
          suggection: suggectionCity,
          onClickCity: handleclick,
          forcast:forcast,
          current:current,
          location:location,
          clicked:clicked,
          unites:clickedUnite,
          onUnite:handleUnite,
        }}
      >
        <Body forecast={forcast}/>
  
      </WeatherContext.Provider>
    </>
  );
}

export default App;
