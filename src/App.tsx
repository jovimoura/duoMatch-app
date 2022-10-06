import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import logo from './assets/image/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import { CreateAdModal } from './components/CreateAdModal'
import { Game } from './@types/game'
import { api } from './services/api'
import { Slider } from './components/Slider'
import { Loading } from './components/Loading'

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    api('/games').then(res => setGames(res.data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 md:p-0 p-[10px]">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20 mb-5 text-center">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui
      </h1>
      {games.length > 0 ? <Slider games={games} /> : <Loading />}
      {games.length > 0 ? (
        <span className="text-sm text-zinc-200 mt-2">
          Arraste para ver mais opções &rarr;
        </span>
      ) : (
        <span className="text-sm text-zinc-200 mt-2">Carregando...</span>
      )}
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal listGames={games} />
      </Dialog.Root>
    </div>
  )
}

export default App
