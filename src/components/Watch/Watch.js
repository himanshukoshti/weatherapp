import React,{useState} from 'react'
import "./Watch.css";
const Watch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let currTime = new Date();
    const newTime = ()=>{
        let currTime = new Date();
        setTime(currTime.toLocaleTimeString());
    }
    setInterval(newTime,1000);
    const Greeting = ()=>{
        let wish = new Date().getHours();
        console.log(wish);
        if(wish>=0 && wish<11)return "Good Morning";
        else if(wish>=11 && wish <12)return "Good Noon";
        else if(wish>=12 && wish<16)return "Good Afternoon";
        else if(wish>=16 && wish<19)return "Good Evening";
        else{ return "Good Night"; }
        
    }
    return (
        <>
        <div className="background">
            <div className="card">
                <div className="time">{ time }</div>
                <div className="date">{currTime.toDateString()}</div>
                <div className="message">Hello Himanshu! {Greeting()}</div>
            </div>
        </div>  
        </>
    )
}

export default Watch
