import { forecastType } from "../types"

type Props = {
  data: forecastType
}
const Forecast = ({data}: Props) => {
  const today = data.list[0]
  return (
    <div className="w-full md:max-w-[500px] p-4  md:px-10 lg:p-14 h-full lg:h-[500px] bg-white/20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">{data.name},
            <span className="font-thin">{data.country}
            </span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            {Math.round(today.main.temp)}
          </h1>

        </section>
      </div>
    </div>
  )
}

export default Forecast