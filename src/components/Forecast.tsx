import { getHumidityValue, getPop, getSunTime, getVisibilityValue, getWindDirection } from "../helpers"
import { forecastType } from "../types"
import Sunrise from "./Icons/Sunrise"
import Sunset from "./Icons/Sunset"
import Tile from "./Tile"

type Props = {
  data: forecastType
}

const Degree = ({temp}: {temp: number}) => (
  <span>
    {temp}<sup>o</sup>
  </span>
)

const Forecast = ({data}: Props) => {
  const today = data.list[0]
  return (
    <div className="forecast-container bg-[var(--primary-color)]/50 backdrop-blur-lg w-full  max-w-[500px] md:max-w-[700px] p-4 my-5 md:px-10  h-screen   rounded drop-shadow-lg">
      <div className="content-area md:h-full mx-auto flex flex-col justify-center w-[300px] md:w-[620px] text-[var(--secondary-color)]">
        <section className="weather-header text-center">
          <h2 className="text-2xl ">{data.name},
            <span className="font-thin">{data.country}
            </span>
          </h2>
          <h1 className="text-4xl font-extrabold text-[#FFC857]">
            <Degree temp={Math.round(today.main.temp)}/>
          </h1>
          <p className="text-sm ">{today.weather[0].main} {today.weather[0].description}</p>
          <p className="flex justify-center items-center gap-2">
            H: <Degree temp={Math.ceil(today.main.temp_max)}/>
            
            L: <Degree temp={Math.floor(today.main.temp_min)}/>
          </p>

        </section>
        <section className="weather-icon-area flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, i) => (
            <div key={i} className="inline-block text-center w-[50px] flex-shrink-0">
              <p className="text-sm font-bold">
                {i === 0 ? 'Now' : new Date(item.dt* 1000).getHours()}
              </p>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`weather-icon-${item.weather[0].description}`} />
              <p className="text-[#FFC857]">
                <Degree  temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
        <section className="tile-area flex justify-between gap-5 flex-wrap  ">
          <div className="sunset-container flex w-full  justify-between ">
            <div className="w-[140px] md:w-[300px] font-bold flex justify-center items-center bg-[var(--primary-color)]/50 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 h-full gap-2 md:gap-5" >
              <Sunrise/> 
              <span className="text-xs md:text-2xl  text-[var(--quarternary-color)]">
                {getSunTime(data.sunrise)}
              </span>
              <p className="text-xs md:text-xl font-thin">Sunrise</p>
            </div>
            <div className="w-[140px] md:w-[300px] font-bold flex justify-center items-center bg-[var(--primary-color)]/50 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 h-full gap-2 md:gap-5" >
              <Sunset /> 
              <span className="text-xs md:text-2xl  text-[var(--quarternary-color)]">
                {getSunTime(data.sunset)}
              </span>
              <p className="text-xs md:text-xl font-thin">Sunset</p>
            </div>
          </div>
          <div className="tile-container flex flex-wrap justify-between">
          {/* {Wind} */}
          <Tile 
          icon="wind" 
          title="Wind" 
          info={`${Math.round(today.wind.speed)} km/hr`}
          description={`${getWindDirection(Math.round(today.wind.deg))}, gusts ${today.wind.gust.toFixed(1)} km/hr`} />

          {/* {Feels Like} */}
          <Tile 
          icon="feels" 
          title="Feels like" 
          info={<Degree temp={Math.round(today.main.feels_like)}/>}
          description={`Feels ${
            Math.round(today.main.feels_like) < Math.round(today.main.temp) ? 'colder' : 'warmer'
          }`}
          />

          {/* {Humidity} */}
          <Tile 
          icon="humidity" 
          title="Humidity" 
          info={`${today.main.humidity} %`}
          description={getHumidityValue(today.main.humidity)}
          />

          {/* {Pop} */}
          <Tile 
          icon="pop" 
          title="Precipitation" 
          info={`${Math.round(today.pop)} %`}
          description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />

          {/* {Pressure} */}
          <Tile 
          icon="pressure" 
          title="Pressure" 
          info={`${today.main.pressure} hPa`}
          description={`${
            Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
          } than standard`}
          />

          {/* {Visibility} */}
          <Tile 
          icon="visibility" 
          title="Visibility" 
          info={`${(today.visibility / 1000).toFixed()} km`}
          description={getVisibilityValue(today.visibility)}
          />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Forecast