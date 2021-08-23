import React,{useEffect , useState} from 'react'
import "./weathercard.css";
const Weathercard = ({name , country , sunset , weathermood , humidity , pressure , temp , speed}) => {
    let sunsetTime = new Date(sunset*1000);
    let sunSetTimePM = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()} PM`;
    
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const newTime = ()=>{
        let currTime = new Date();
        setTime(currTime.toLocaleTimeString());
    }
    setInterval(newTime,1000);

    const [weatherLogo , setWeatherLogo] = useState();
    useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherLogo("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherLogo("wi-fog");
                    break;
                case "Clear":
                    setWeatherLogo("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherLogo("wi-dust");
                    break;
                case "Rain":
                    setWeatherLogo("wi-rain");
                    break;
                default:
                    setWeatherLogo("wi-day-sunny");
                    break;
            }
        }
        
    }, [weathermood])

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6 card">
                    <div className="row mt-3">
                {!name ? (<p className="text-center">No Data Found</p>) : (
                    <>
                        <div className="col-12 col-md-7 place">
                            <div className="temperature">{temp}&deg;C</div>
                            <div className="city_div"><span className="city">{name}</span><span>,{country}</span></div>
                            <h5>{new Date().toLocaleDateString()}</h5>
                            <p>{time}</p>
                        </div>
                        <div className="col-12 col-md-5 text-center align-self-center">
                            <i className={`wi ${weatherLogo}`} id="icon"></i>
                            <div className="weather">{weathermood}</div>
                        </div>
                        <div className="col-12 mt-0 strap">
                            <div className="row justify-content-evenly">
                                <div className="col-md-2 circle_box text-center">
                                    <div className="circle text-center"><i className={"wi wi-sunset"} id="icon_btm"></i></div>
                                    <div className="circle_des">Sunset</div>
                                    <div className="sunsettime api_data">{sunSetTimePM}</div>
                                </div>
                                <div className="col-md-2 circle_box text-center">
                                    <div className="circle text-center"><i className={"wi wi-humidity"} id="icon_btm"></i></div>
                                    <div className="circle_des">Humidity</div>
                                    <div className="api_data">{humidity}</div>
                                </div>
                                <div className="col-md-2 circle_box text-center">
                                    <div className="circle text-center"><i className={"wi wi-day-rain-wind"} id="icon_btm"></i></div>
                                    <div className="circle_des">Pressure</div>
                                    <div className="api_data">{pressure}</div>
                                </div>
                                <div className="col-md-2 circle_box text-center">
                                    <div className="circle text-center"><i className={"wi wi-sandstorm"} id="icon_btm"></i></div>
                                    <div className="circle_des">Wind</div>
                                    <div className="api_data">{speed}</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weathercard;
