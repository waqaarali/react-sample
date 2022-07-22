import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './assets/css/Weather.scss';

const Weather = () => {
    const [ weather, setWeather ] = useState<number>(0);

    useEffect(() => {
        api.get("forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m&current_weather=true")
        .then((res) => {
            setWeather(res.data.current_weather.temperature);
        })
        .catch((err) => alert(err))
    }, [])

    return (
        <div className="weather">
            <img src='https://www.freeiconspng.com/thumbs/sun/natural-energy-source-the-sun-transparent-photos-3.png' />
            <span>{weather}°C</span>
        </div>
    );
}

export default Weather;