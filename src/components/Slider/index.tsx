import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Game } from '../../@types/game'
import { GameCard } from '../GameCard'

interface Props {
  games: Game[]
}

export function Slider({ games }: Props) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 570px)': {
        slides: { perView: 3, spacing: 5 }
      },
      '(min-width: 700px)': {
        slides: { perView: 4, spacing: 5 }
      },
      '(min-width: 769px)': {
        slides: { perView: 5, spacing: 5 }
      },
      '(min-width: 1000px)': {
        slides: { perView: 6, spacing: 10 }
      }
    },
    slides: { perView: 2, spacing: 5 }
  })
  return (
    <div ref={ref} className="keen-slider">
      {games?.map((item, i) => {
        return (
          <GameCard
            key={item.id}
            adsCount={item._count.ads}
            bannerUrl={item.bannerUrl}
            title={item.title}
          />
        )
      })}
    </div>
  )
}
