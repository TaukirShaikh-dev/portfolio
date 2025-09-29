import { useState, useEffect } from 'react';
import styles from './WeatherApp.module.css';
import { WeatherForm } from './WeatherappComponent/Weatherform';
import { WeatherInfo } from './WeatherappComponent/Weatherinfo';
import { WeatherError } from './WeatherappComponent/Weathererror';


export function WeatherApp() {
    const [city, setCity] = useState('');
    const [apiData, setApiData] = useState({});
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState({});

    //handle online and offline status
    useEffect(() => {
        //intitial detect
        if (!navigator.onLine) {
            console.log('You are Offline -- navigator');
            //if user offline then show you are offline alert on ui
            setStatus('offline');
        }

        function handleOnline() {
            console.log('You are Online');
            //if user go online then update alert to search message
            setStatus('online');
        }

        function handleOffline() {
            console.log('You are Offline');
            //if user go offline then update alert to you are offline
            setStatus('offline');
        }

        //future detect
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            //remove online and offline event from window
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    //validation function
    function validation() {
        let isError = false;
        let newError = {};

        //validation for empty search input field
        if (!city) {
             //change isError value to true
            isError = true;
            //show error message to user
            newError['city'] = 'Please enter City Name';
        }

        //change error state value to newError object
        setError(newError);
        return isError;
    }

    //create function that return bg-class according to weather info
    function weatherBackground(weatherinfo) {
        if (weatherinfo === 'Clear') return styles.bgClear;
        else if (weatherinfo === 'Clouds') return styles.bgCloud;
        else if (weatherinfo === 'Rain') return styles.bgRain;
        else if (weatherinfo === 'Snow') return styles.bgSnow;
        else if (weatherinfo === 'Thunderstrom') return styles.bgThunder;
        else if (weatherinfo === 'Mist') return styles.bgMist;
        else if (weatherinfo === 'Fog') return styles.bgNight;

        return styles.bgSnow;
    }

    async function handlegetWeather(e) {
        e.preventDefault();

        if (validation()) return;

        let apikey = import.meta.env.VITE_WEATHER_API_KEY;
        //change status value to loading
        setStatus('loading');

        try {
             //fetch api
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

            //if city name not found then dont show data on ui
            if (!res.ok) {
                console.log(`HTTP status ${res.status}: ${res.statusText}`);
                setStatus('error');
                //clear old apidata
                setApiData({});
                return;
            }

            let data = await res.json();
            let apiInfo = {
                city: data.name,
                temp: data.main.temp,
                desc: data.weather[0].description,
                icon: data.weather[0].icon,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                pressure: data.main.pressure,
                feelLike: data.main.feels_like,
                tempMax: data.main.temp_max,
                tempMin: data.main.temp_min,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                timezone: data.timezone,
                weather: data.weather[0].main
            };

            //change apiData state value to apiinfo object
            setApiData(apiInfo);
            //show loading for at least 500 milisecond
            setTimeout(() => {
                setStatus('success');
            }, 500);
            //change city state value to empty
            setCity('');
        } catch (err) {
            //if user is offline then show offline message
            console.log(`${err.name} : ${err.message}`);
             //if network related error occurs then change status falg value to offline
            setStatus('offline');
        }
    }

    return (
        <article className={styles.weatherContainer}>
            <div className={styles.weatherQuery}>
                <WeatherForm error={error} handlegetWeather={handlegetWeather} city={[city, setCity]} />
            </div>

            <div className={`${styles.weatherInfo} ${weatherBackground(apiData.weather)}`}>
                {status === 'idle' && (<WeatherError className={styles.searchMessage} Text='Please search city name' />)}
                {status === 'loading' && (<WeatherError className={styles.notfoundError} Text='Loading' />)}
                {status === 'online' && (<WeatherError className={styles.searchMessage} Text='Please search city name' />)}
                {status === 'offline' && (<WeatherError className={styles.notfoundError} Text='You Are Offline' />)}
                {status === 'success' && (<WeatherInfo apiData={apiData} />)}
                {status === 'error' && (<WeatherError className={styles.notfoundError} Text='Invalid city name' />)}
            </div>
        </article>
    );
}
