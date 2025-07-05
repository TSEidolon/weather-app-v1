
import Search from "./components/Search"
import useForecast from "./helpers/useForecast"
import Forecast from "./components/Forecast"

const App = () => {
  const  {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit
  } = useForecast()

  return (

    <main className="flex justify-center items-center bg-[var(--primary-color)] h-full w-full">
      { forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>  
      )}

    </main>

  )
}

export default App
