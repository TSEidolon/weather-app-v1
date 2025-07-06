import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'

type Props = {
  icon: 'wind'| 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop',
  title: string,
  info: string | React.ReactNode,
  description: string,

}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Tile = ({
  icon,
  title,
  info,
  description
}: Props) => {

  const Icon = icons[icon]
  return (
    <div className="w-[140px] h-[130px] md:w-[194px] md:h-[142px] text-[var(--secondary-color)] bg-[var(--primary-color)]/50 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-evenly text-center">
      <div className="flex items-center justify-center text-sm  text-[#FFC857] gap-2">
        <Icon /> 
        <h4 className="text-[var(--secondary-color)] font-semibold">
          {title}
        </h4>
      </div>
      <h3 className="text-lg text-[#FFC857] font-bold">
        {info}
      </h3>
      <div className="text-xs font-thin">
        {description}
      </div>
    </div>
  )
}

export default Tile