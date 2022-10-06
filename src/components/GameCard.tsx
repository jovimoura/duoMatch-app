interface GameCardProps {
  bannerUrl: string
  title: string
  adsCount: number
}

export function GameCard({ adsCount, bannerUrl, title }: GameCardProps) {
  return (
    <>
      <a
        href=""
        className="relative rounded-lg overflow-hidden keen-slider__slide flex flex-col h-60 w-[180px]"
      >
        <img src={bannerUrl} alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
          <strong className="font-bold text-white block">{title}</strong>
          <span className="text-zinc-300 text-sm block">
            {adsCount} anúncio(s)
          </span>
        </div>
      </a>
    </>
  )
}
