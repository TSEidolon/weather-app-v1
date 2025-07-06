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
    <div className="w-[140px] h-[130px] md:w-[194px] md:h-[142px] text-[var(--secondary-color)] bg-[var(--primary-color)]/50 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold text-[#FFC857]">
        <Icon /> <h4 className="ml-1 text-[var(--secondary-color)]">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg text-[#FFC857]">{info}</h3>
      <div className="text-xs font-bold">{description}</div>
    </div>
  )
}

export default Tile