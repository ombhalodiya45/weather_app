import { useState } from 'react';
import SearchBox from './SearchBox.jsx'
import InfoBox from './infoBox.jsx'

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Anand",
        feelsLike: 36.62,
        temp: 30.85,
        tempMin: 30.85,
        tempMax: 30.85,
        humidity: 68,
        weather: "Broken Clouds",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}