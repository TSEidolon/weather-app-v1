import { ChangeEvent } from "react"
import { optionType } from "../types"
type Props = {
  term: string,
  options: [],
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void, 
  onOptionSelect: (option: optionType) => void, 
  onSubmit: () => void
}
const Search = ({
  term, 
  options, 
  onInputChange, 
  onOptionSelect, 
  onSubmit
}: Props) => {
 
  return (

    <main className="bg-[url(../images/bandura.jpg)] bg-cover bg-center bg-no-repeat flex justify-center items-center bg-[var(--primary-color)] h-[100vh] w-full">
      
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-14 h-full lg:h-[500px] bg-black/20 backdrop-blur-lg rounded drop-shadow-lg ">
        <h1 className="text-4xl font-thin text-[var(--secondary-color)]">Weather
          <span className="font-black text-[var(--quarternary-color)]"> Forecast</span> 
        </h1>
        <p className="text-sm mt-2 text-[var(--secondary-color)]">Enter Below a place you want to the weather of and select an option from the dropdown</p>
        <div className="flex mt-10 md:mt-4 relative">
          <input type="text" value={term} className="px-2 py-1 rounded-l-md  bg-white focus:outline-none focus:ring-0" 
          onChange={onInputChange}
          />
          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: optionType, index:number) => (
              <li key={option.name + '-' + index}>
                <button className="text-left text-sm w-full hover:bg-[var(--primary-color)] hover:text-[var(--quarternary-color)] px-2 py-1 cursor-pointer text-[var(--primary-color)]" 
                onClick={() => onOptionSelect(option)}>
                  {option.name}, {option.country}
                </button>
              </li>
              
              ))}
          </ul>
          <button
          className="rounded-r-md border-2 border-[var(--secondary-color)] hover:border-[var(--quarternary-color)] hover:text-[var(--quarternary-color)] hover:bg-[var(--primary-color)] text-[var(--secondary-color)] px-2 py-1 cursor-pointer" onClick={onSubmit}>
          search
          </button>
        </div>
        
      </section>
    </main>

  )
}

export default Search
