import React, {useState, useEffect} from 'react'
import Weathercard from './weathercard'
import "./weathercard.css";

const Weatherwebsite = () => {
    const [search , setSearch] = useState("");
    const [weatherData , setWeatherData] = useState({});
    const api_key = `${process.env.REACT_APP_API_KEY}`;
    const getWeather = async()=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}`;
            const fetchData = await (await fetch(url)).json();

            const {name} = fetchData;
            const {country, sunset} = fetchData.sys;
            const {main: weathermood} = fetchData.weather[0];
            const {humidity , pressure , temp} = fetchData.main;
            const {speed} = fetchData.wind;

            const allData = {name , country , sunset , weathermood , humidity , pressure , temp , speed};
            setWeatherData(allData);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getWeather();
    }, [])

    return (
        <>
            <div className="container-fluid backdrop">
                <div className="row justify-content-center pt-5">
                    <div className="col-8 col-md-3 p-0">
                        <input type="search"
                        className="searchbox"
                        placeholder="Search for place"
                        value={search}
                        onChange={(event)=>{setSearch(event.target.value)}}/>
                    </div>
                    <div className="col-3 col-md-1 text-center">
                        <button type="button" className="btn btn-primary" onClick={()=>getWeather()}>Search</button>
                    </div>
                    
                </div>
                <Weathercard {...weatherData}/>
            </div>
        </>
    )
}

export default Weatherwebsite
