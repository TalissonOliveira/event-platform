import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import { useGetLessonBySlugQuery } from '../graphql/generated'
import { Button } from './Button'

import '@vime/core/themes/default.css'

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="text-gray-200 leading-relaxed mt-4">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="w-16 h-16 border-2 border-blue-500 rounded-full"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />

                <div className="leading-relaxed">
                  <strong className="text-2xl font-bold block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-200 block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
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
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina
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
