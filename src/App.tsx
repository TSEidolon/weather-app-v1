
import Search from "./components/Search"
import useForecast from "./helpers/useForecast"
import Forecast from "./components/Forecast"

const App = () => {
  const  {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit
  } = useForecast()

  return (

    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      { forecast ? (
        <Forecast forecast={forecast} />
      ) : (
        <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>  
      )}

    </main>

  )
}

export default App
