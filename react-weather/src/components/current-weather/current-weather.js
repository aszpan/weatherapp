import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Detroit</p>
                    <p className="weather-description">Sunny</p>

                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
            </div>
            
        </div>
    )
}

export default CurrentWeather;