import { useEffect, useState, type ChangeEvent } from "react"
import { optionType, forecastType } from "../types";

const useForecast = () => {
  const [options,SetOptions] = useState<[]>([]);
  const [term,SetTerm] = useState<string>("");
  const [city,SetCity] = useState<optionType | null>(null)
  const [forecast, SetForecast] = useState< forecastType | null> (null)
  const apiKey = import.meta.env.VITE_API_KEY;

  const getSearchOptions = (value:string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => SetOptions(data))
    .catch((e) => console.log({e}))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    SetTerm(value)
    if(value === "") return
    getSearchOptions(value)
  }

  const getForcast = (city: optionType) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 16),
      }
    SetForecast(forecastData)
  })
    .catch((e) => console.log({e}));
    
  }
    
  

  const onSubmit = () => {
    if(!city) return
    getForcast(city)
  }

  const onOptionSelect = (option: optionType ) => {
    SetCity(option)
  }
  
  useEffect (() => {
    if(city) {
      SetTerm(city.name)
      SetOptions([])
    }
  }, [city])
  return {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit
  }
}

export default useForecast
