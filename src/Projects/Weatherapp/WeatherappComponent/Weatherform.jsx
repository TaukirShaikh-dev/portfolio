import styles from '../Weatherapp.module.css';

export function WeatherForm({error, handlegetWeather, city: [city, setCity]}) {
    return (
               <form onSubmit={handlegetWeather}>
            <div className={styles.wrapper}>
                <label htmlFor="city">Enter City Name: </label>
                <input
                    type="search"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <p className={styles.errorMessage}>{error.city}</p>
            </div>

            <div className={styles.wrapper}>
                <button className={styles.searchBtn}>Search</button>
            </div>
        </form>
    );
}
