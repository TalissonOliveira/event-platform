import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import { Button } from './Button'

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Abertura do evento Ignite Lab
            </h1>
            <p className="text-gray-200 leading-relaxed mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem sunt neque distinctio itaque eos natus ipsa architecto in, blanditiis iure? Fugiat nemo consectetur odio voluptate iusto at repellat corrupti?
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 border-2 border-blue-500 rounded-full"
                src="https://github.com/talissonoliveira.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="text-2xl font-bold block">
                  Talisson Oliveira
                </strong>
                <span className="text-sm text-gray-200 block">
                  Co-fundador e CTO na Rocketseat
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button>
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>
            <Button variant="outlined">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-20">
          <a href="#" className="flex items-stretch gap-6 bg-gray-700 overflow-hidden rounded hover:bg-gray-600 transition-colors">
            <div className="flex items-center bg-green-700 h-full p-6">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="flex items-center h-full p-6 pl-4">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className="flex items-stretch gap-6 bg-gray-700 overflow-hidden rounded hover:bg-gray-600 transition-colors">
            <div className="flex items-center bg-green-700 h-full p-6">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="flex items-center h-full p-6 pl-4">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
