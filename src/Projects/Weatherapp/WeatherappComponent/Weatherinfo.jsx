import styles from '../Weatherapp.module.css';

export function WeatherInfo({ apiData }) {
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let newdate = new Date();
    const day = dayArray[newdate.getDay()];
    const date = newdate.getDate();
    const month = monthArray[newdate.getMonth()];
    const year = newdate.getFullYear();

    function localTimeConverter(utctimeStamp, utcTimeZoneoffset) {
        let total = (utctimeStamp + utcTimeZoneoffset) * 1000;
        let localTime = new Date(total);
        let hour = localTime.getUTCHours();
        let minute = localTime.getUTCMinutes();
        return `${hour}:${minute}`;
    }

    return (
              <>
            <div className={styles.iconContainer}>
                <img src={`https://openweathermap.org/img/wn/${apiData.icon}@2x.png`} alt="weather icon" className={styles.logo} />
                <p className={styles.weatherDescription}>{apiData.desc}</p>
            </div>

            <div className={styles.tempContainer}>
                <h1 className={styles.cityName}>City: {apiData.city}</h1>
                <p className={styles.temp}>Temperature: {apiData.temp}  &#x2103;</p>
                <div className={styles.tempExtra}>
                    <p className={styles.feelLike}>Feel like: {apiData.feelLike} &#x2103;</p>
                    <p className={styles.minmaxTemp}>Min: {apiData.tempMin}  &#x2103; &nbsp;|&nbsp; Max: {apiData.tempMax}  &#x2103;</p>
                </div>
            </div>

            <div className={styles.dateContainer}>
                <p className={styles.date}>{`${day}, ${date} ${month} ${year}`}</p>
            </div>

            <div className={styles.otherInfoContainer}>
                <div className={styles.infoRow}>
                    <p className={styles.humidity}>&#128167; &nbsp; Humidity: {apiData.humidity} %</p>
                    <p className={styles.wind}>&#127811; &nbsp; Wind: {(apiData.wind * 3.6).toFixed(1)} km/h</p>
                    <p className={styles.pressure}>📊 &nbsp; Pressure: {apiData.pressure} hPa</p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.sunrise}>🌅 &nbsp; Sunrise: {localTimeConverter(apiData.sunrise, apiData.timezone)} AM</p>
                    <p className={styles.sunset}>🌇 &nbsp; Sunset: {localTimeConverter(apiData.sunset, apiData.timezone)} PM</p>
                </div>
            </div>
        </>
    );
}
